import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "revalo",
  name: "Revalo",
});

// Event type map for type-safe dispatch / handling.
export type Events = {
  "review-request/send": {
    data: { reviewRequestId: string };
  };
};
