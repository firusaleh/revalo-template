import { describe, it, expect, vi } from "vitest";
import {
  createAndSendReviewRequest,
  type ReviewRequestStore,
  type EventDispatcher,
} from "@/lib/review-requests";

function makeFixtureStore(): {
  store: ReviewRequestStore;
  state: {
    customers: Map<string, { id: string }>;
    rows: Array<{ id: string; customerId: string; token: string; channel: string }>;
  };
} {
  const customers = new Map([
    ["cus_1", { id: "cus_1" }],
    ["cus_2", { id: "cus_2" }],
  ]);
  const rows: Array<{
    id: string;
    customerId: string;
    token: string;
    channel: string;
  }> = [];
  let counter = 0;

  const store: ReviewRequestStore = {
    async findCustomerById(id) {
      return customers.get(id) ?? null;
    },
    async insertReviewRequest(row) {
      counter += 1;
      const inserted = { id: `req_${counter}`, ...row };
      rows.push(inserted);
      return { id: inserted.id };
    },
  };
  return { store, state: { customers, rows } };
}

describe("createAndSendReviewRequest (DB fixture)", () => {
  it("creates a review request row and dispatches an inngest event", async () => {
    const { store, state } = makeFixtureStore();
    const send = vi.fn().mockResolvedValue(undefined);
    const events: EventDispatcher = { send };

    const result = await createAndSendReviewRequest("cus_1", "email", {
      store,
      events,
      tokenFactory: () => "a".repeat(32),
    });

    expect(result.reviewRequestId).toBe("req_1");
    expect(result.token).toBe("a".repeat(32));
    expect(state.rows).toHaveLength(1);
    expect(state.rows[0]).toMatchObject({
      customerId: "cus_1",
      channel: "email",
      token: "a".repeat(32),
    });
    expect(send).toHaveBeenCalledWith({
      name: "review-request/send",
      data: { reviewRequestId: "req_1" },
    });
  });

  it("throws when the customer does not exist", async () => {
    const { store } = makeFixtureStore();
    const events: EventDispatcher = { send: vi.fn() };
    await expect(
      createAndSendReviewRequest("missing", "email", { store, events }),
    ).rejects.toThrow(/not found/);
    expect(events.send).not.toHaveBeenCalled();
  });

  it("uses the real token factory by default (32 hex chars)", async () => {
    const { store } = makeFixtureStore();
    const events: EventDispatcher = { send: vi.fn().mockResolvedValue(undefined) };
    const result = await createAndSendReviewRequest("cus_2", "whatsapp", {
      store,
      events,
    });
    expect(result.token).toMatch(/^[0-9a-f]{32}$/);
  });

  it("passes the correct channel through to the store and event", async () => {
    const { store, state } = makeFixtureStore();
    const send = vi.fn().mockResolvedValue(undefined);
    await createAndSendReviewRequest("cus_1", "qr", {
      store,
      events: { send },
      tokenFactory: () => "b".repeat(32),
    });
    expect(state.rows[0].channel).toBe("qr");
  });

  it("whatsapp copy_paste mode: inserts row but does NOT dispatch event", async () => {
    const { store, state } = makeFixtureStore();
    const send = vi.fn().mockResolvedValue(undefined);
    const result = await createAndSendReviewRequest("cus_1", "whatsapp", {
      store,
      events: { send },
      tokenFactory: () => "c".repeat(32),
      whatsappMode: "copy_paste",
    });
    expect(state.rows).toHaveLength(1);
    expect(state.rows[0].channel).toBe("whatsapp");
    expect(send).not.toHaveBeenCalled();
    expect(result.mode).toBe("copy_paste");
  });

  it("whatsapp automated mode: inserts row AND dispatches event", async () => {
    const { store, state } = makeFixtureStore();
    const send = vi.fn().mockResolvedValue(undefined);
    const result = await createAndSendReviewRequest("cus_1", "whatsapp", {
      store,
      events: { send },
      tokenFactory: () => "d".repeat(32),
      whatsappMode: "automated",
    });
    expect(state.rows).toHaveLength(1);
    expect(send).toHaveBeenCalledWith({
      name: "review-request/send",
      data: { reviewRequestId: "req_1" },
    });
    expect(result.mode).toBe("automated");
  });
});
