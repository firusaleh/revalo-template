import { NonRetriableError } from "inngest";
import { inngest } from "../client";
import { sendReviewRequestEmail } from "@/lib/email";
import { sendTemplateMessageWithEncryptedToken } from "@/lib/whatsapp/client";

type LoadedContext = {
  request: { id: string; token: string; channel: "email" | "whatsapp" | "qr" };
  customer: { id: string; name: string; email: string; phone: string | null };
  whatsapp: {
    phoneNumberId: string;
    accessTokenEncrypted: string;
    templateInitialName: string;
  } | null;
};

async function loadContext(reviewRequestId: string): Promise<LoadedContext> {
  const [{ db }, schemaMod, drizzle] = await Promise.all([
    import("@/db"),
    import("@/db/schema"),
    import("drizzle-orm"),
  ]);
  const { reviewRequests, customers, whatsappConnection } = schemaMod;
  const { eq } = drizzle;

  const reqRows = await db
    .select()
    .from(reviewRequests)
    .where(eq(reviewRequests.id, reviewRequestId))
    .limit(1);
  const request = reqRows[0];
  if (!request) {
    throw new NonRetriableError(
      `ReviewRequest ${reviewRequestId} not found`,
    );
  }

  const custRows = await db
    .select()
    .from(customers)
    .where(eq(customers.id, request.customerId))
    .limit(1);
  const customer = custRows[0];
  if (!customer) {
    throw new NonRetriableError(
      `Customer ${request.customerId} not found`,
    );
  }

  let whatsapp: LoadedContext["whatsapp"] = null;
  if (request.channel === "whatsapp") {
    const waRows = await db.select().from(whatsappConnection).limit(1);
    const wa = waRows[0];
    if (!wa) {
      throw new NonRetriableError("No WhatsApp connection configured");
    }
    whatsapp = {
      phoneNumberId: wa.phoneNumberId,
      accessTokenEncrypted: wa.accessTokenEncrypted,
      templateInitialName: wa.templateInitialName,
    };
  }

  return {
    request: {
      id: request.id,
      token: request.token,
      channel: request.channel,
    },
    customer: {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
    },
    whatsapp,
  };
}

async function markSent(reviewRequestId: string) {
  const [{ db }, { reviewRequests }, { eq }] = await Promise.all([
    import("@/db"),
    import("@/db/schema"),
    import("drizzle-orm"),
  ]);
  await db
    .update(reviewRequests)
    .set({ status: "sent", sentAt: new Date() })
    .where(eq(reviewRequests.id, reviewRequestId));
}

export const sendReviewRequest = inngest.createFunction(
  {
    id: "send-review-request",
    name: "Send Review Request",
    retries: 3,
  },
  { event: "review-request/send" },
  async ({ event, step }) => {
    const { reviewRequestId } = event.data as { reviewRequestId: string };

    const ctx = await step.run("load-context", () =>
      loadContext(reviewRequestId),
    );

    const dispatch = await step.run("dispatch-message", async () => {
      if (ctx.request.channel === "email") {
        const result = await sendReviewRequestEmail(
          { name: ctx.customer.name, email: ctx.customer.email },
          ctx.request.token,
        );
        if (!result.ok) {
          throw new Error(`Email failed: ${result.error}`);
        }
        return { channel: "email", id: result.id, mode: result.mode };
      }

      if (ctx.request.channel === "whatsapp") {
        if (!ctx.whatsapp || !ctx.customer.phone) {
          throw new NonRetriableError(
            "WhatsApp channel requires customer phone + connection",
          );
        }
        const result = await sendTemplateMessageWithEncryptedToken({
          phoneNumberId: ctx.whatsapp.phoneNumberId,
          accessTokenEncrypted: ctx.whatsapp.accessTokenEncrypted,
          to: ctx.customer.phone,
          templateName: ctx.whatsapp.templateInitialName,
          params: [{ type: "text", text: ctx.customer.name }],
        });
        if (!result.ok) {
          throw new Error(`WhatsApp failed: ${result.error}`);
        }
        return { channel: "whatsapp", id: result.messageId };
      }

      // QR channel: nothing to send — just mark as sent.
      return { channel: "qr", id: "qr-noop" };
    });

    await step.run("mark-sent", () => markSent(reviewRequestId));

    return { reviewRequestId, dispatch };
  },
);
