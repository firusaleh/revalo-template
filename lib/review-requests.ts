import { createReviewRequestToken } from "@/lib/tokens";
import { siteConfig } from "@/site.config";
import type { WhatsAppMode } from "@/site.config";

export type Channel = "email" | "whatsapp" | "qr";

export type CreateAndSendResult = {
  reviewRequestId: string;
  token: string;
  mode?: "copy_paste" | "automated";
};

/**
 * Minimal DB surface used by createAndSendReviewRequest.
 * Tests pass a fake implementation; production passes the real
 * drizzle client via lazy import.
 */
export interface ReviewRequestStore {
  findCustomerById(id: string): Promise<{ id: string } | null>;
  insertReviewRequest(row: {
    customerId: string;
    token: string;
    channel: Channel;
  }): Promise<{ id: string }>;
}

export interface EventDispatcher {
  send(event: {
    name: "review-request/send";
    data: { reviewRequestId: string };
  }): Promise<void>;
}

export async function createAndSendReviewRequest(
  customerId: string,
  channel: Channel,
  deps: {
    store: ReviewRequestStore;
    events: EventDispatcher;
    tokenFactory?: () => string;
    whatsappMode?: WhatsAppMode;
  },
): Promise<CreateAndSendResult> {
  const { store, events } = deps;
  const tokenFactory = deps.tokenFactory ?? createReviewRequestToken;
  const whatsappMode: WhatsAppMode = deps.whatsappMode ?? "automated";

  const customer = await store.findCustomerById(customerId);
  if (!customer) {
    throw new Error(`Customer ${customerId} not found`);
  }

  const token = tokenFactory();
  const row = await store.insertReviewRequest({
    customerId,
    token,
    channel,
  });

  // WhatsApp copy-paste mode: persist a pending row, but DO NOT dispatch
  // the automated-send event. The admin will send it manually.
  if (channel === "whatsapp" && whatsappMode === "copy_paste") {
    return { reviewRequestId: row.id, token, mode: "copy_paste" };
  }

  await events.send({
    name: "review-request/send",
    data: { reviewRequestId: row.id },
  });

  return {
    reviewRequestId: row.id,
    token,
    mode: channel === "whatsapp" ? "automated" : undefined,
  };
}

/**
 * Production wiring: build real store + dispatcher from drizzle + inngest.
 */
export async function createAndSendReviewRequestLive(
  customerId: string,
  channel: Channel,
): Promise<CreateAndSendResult> {
  const [{ db }, schemaMod, drizzle, { inngest }] = await Promise.all([
    import("@/db"),
    import("@/db/schema"),
    import("drizzle-orm"),
    import("@/inngest/client"),
  ]);
  const { customers, reviewRequests } = schemaMod;
  const { eq } = drizzle;

  const store: ReviewRequestStore = {
    async findCustomerById(id) {
      const rows = await db
        .select({ id: customers.id })
        .from(customers)
        .where(eq(customers.id, id))
        .limit(1);
      return rows[0] ?? null;
    },
    async insertReviewRequest(row) {
      const inserted = await db
        .insert(reviewRequests)
        .values(row)
        .returning({ id: reviewRequests.id });
      return inserted[0];
    },
  };

  const events: EventDispatcher = {
    async send(event) {
      await inngest.send(event);
    },
  };

  return createAndSendReviewRequest(customerId, channel, {
    store,
    events,
    whatsappMode: siteConfig.whatsappMode,
  });
}
