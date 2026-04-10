import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { sendReviewRequest } from "@/inngest/functions/sendReviewRequest";
import { syncGoogleReviews } from "@/inngest/functions/syncGoogleReviews";
import { dailyWhatsAppDigest } from "@/inngest/functions/dailyWhatsAppDigest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [sendReviewRequest, syncGoogleReviews, dailyWhatsAppDigest],
});
