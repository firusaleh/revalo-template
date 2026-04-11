"use server";

import { routeFeedback, type RoutingResult } from "@/lib/routing";
import { getEffectiveSettings } from "@/lib/settings";

export async function submitRating(
  token: string | null,
  rating: number,
): Promise<RoutingResult> {
  const settings = await getEffectiveSettings();
  const result = routeFeedback(
    rating,
    settings.smartRoutingThreshold,
    settings.googleReviewUrl,
  );

  // Persist rating + update review request status
  if (token) {
    try {
      const { db } = await import("@/db");
      const { reviewRequests } = await import("@/db/schema");
      const { eq } = await import("drizzle-orm");

      const status =
        result.destination === "google" ? "routed_google" : "rated";

      await db
        .update(reviewRequests)
        .set({ ratedAt: new Date(), status })
        .where(eq(reviewRequests.token, token));
    } catch (e) {
      console.warn(
        "[submitRating] DB update failed:",
        e instanceof Error ? e.message : String(e),
      );
    }
  }

  return result;
}

export async function submitFeedback(
  reviewRequestId: string | null,
  comment: string,
  rating: number = 0,
): Promise<{ ok: true }> {
  const trimmed = comment?.trim() ?? "";
  if (trimmed.length < 10) {
    throw new Error("Feedback muss mindestens 10 Zeichen enthalten.");
  }

  try {
    const { db } = await import("@/db");
    const { feedbacks, reviewRequests } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");

    // Insert feedback row
    await db.insert(feedbacks).values({
      reviewRequestId: reviewRequestId || null,
      rating,
      comment: trimmed,
      isAnonymous: !reviewRequestId,
    });

    // Update review request status if linked
    if (reviewRequestId) {
      await db
        .update(reviewRequests)
        .set({ status: "feedback_submitted" })
        .where(eq(reviewRequests.id, reviewRequestId));
    }
  } catch (e) {
    console.warn(
      "[submitFeedback] DB write failed:",
      e instanceof Error ? e.message : String(e),
    );
  }

  return { ok: true };
}
