export type RoutingDestination = "google" | "internal";

export type RoutingResult = {
  destination: RoutingDestination;
  redirectUrl?: string;
};

function assertValidRating(rating: number): void {
  if (
    typeof rating !== "number" ||
    Number.isNaN(rating) ||
    !Number.isInteger(rating) ||
    rating < 1 ||
    rating > 5
  ) {
    throw new Error(`Invalid rating: ${rating}. Must be an integer 1-5.`);
  }
}

export function routeFeedback(
  rating: number,
  threshold: number,
  googleReviewUrl?: string,
): RoutingResult {
  assertValidRating(rating);

  if (rating >= threshold) {
    return {
      destination: "google",
      redirectUrl: googleReviewUrl,
    };
  }

  return { destination: "internal" };
}
