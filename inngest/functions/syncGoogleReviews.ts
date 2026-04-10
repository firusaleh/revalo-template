import { inngest } from "../client";
import { fetchGoogleReviews, type GoogleReviewData } from "@/lib/google/places";

async function upsertReviews(
  placeId: string,
  reviews: GoogleReviewData[],
): Promise<{ upserted: number; skipped: boolean; reason?: string }> {
  try {
    const [{ db }, schemaMod] = await Promise.all([
      import("@/db"),
      import("@/db/schema"),
    ]);
    const { googleReviews } = schemaMod;

    let upserted = 0;
    for (const review of reviews) {
      const externalId = `${placeId}-${review.time}`;
      await db
        .insert(googleReviews)
        .values({
          googlePlaceId: placeId,
          reviewerName: review.authorName,
          rating: review.rating,
          text: review.text,
          publishedAt: new Date(review.time * 1000),
          externalId,
        })
        .onConflictDoUpdate({
          target: googleReviews.externalId,
          set: {
            reviewerName: review.authorName,
            rating: review.rating,
            text: review.text,
            publishedAt: new Date(review.time * 1000),
            syncedAt: new Date(),
          },
        });
      upserted += 1;
    }
    return { upserted, skipped: false };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(
      `[syncGoogleReviews] Upsert skipped (DB not available): ${message}`,
    );
    return { upserted: 0, skipped: true, reason: message };
  }
}

export const syncGoogleReviews = inngest.createFunction(
  {
    id: "sync-google-reviews",
    name: "Sync Google Reviews",
  },
  { cron: "0 3 * * *" },
  async ({ step }) => {
    const placeId = process.env.GOOGLE_PLACE_ID ?? "";

    if (!placeId) {
      return {
        skipped: true,
        reason: "GOOGLE_PLACE_ID not configured",
        fetched: 0,
        upserted: 0,
      };
    }

    const reviews = await step.run("fetch-reviews", async () => {
      return fetchGoogleReviews(placeId);
    });

    const result = await step.run("upsert-reviews", async () => {
      return upsertReviews(placeId, reviews);
    });

    return {
      placeId,
      fetched: reviews.length,
      upserted: result.upserted,
      skipped: result.skipped,
      reason: result.reason,
    };
  },
);
