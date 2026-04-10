export type GoogleReviewData = {
  authorName: string;
  rating: number;
  text: string;
  time: number;
  profilePhotoUrl?: string;
  relativeTime?: string;
};

type GooglePlacesApiReview = {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
  relative_time_description?: string;
};

type GooglePlacesApiResponse = {
  result?: {
    reviews?: GooglePlacesApiReview[];
    rating?: number;
  };
  status?: string;
  error_message?: string;
};

/**
 * Fetches reviews from the Google Places Details API.
 * Returns an empty array if GOOGLE_PLACES_API_KEY is not configured.
 * Throws on non-200 responses.
 */
export async function fetchGoogleReviews(
  placeId: string,
): Promise<GoogleReviewData[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    console.warn(
      "[google/places] GOOGLE_PLACES_API_KEY is not set — returning empty review list",
    );
    return [];
  }

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${encodeURIComponent(placeId)}` +
    `&fields=reviews,rating` +
    `&key=${encodeURIComponent(apiKey)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Google Places API request failed: ${response.status} ${response.statusText}`,
    );
  }

  const body = (await response.json()) as GooglePlacesApiResponse;
  const reviews = body.result?.reviews ?? [];

  return reviews.map((review) => ({
    authorName: review.author_name,
    rating: review.rating,
    text: review.text,
    time: review.time,
    profilePhotoUrl: review.profile_photo_url,
    relativeTime: review.relative_time_description,
  }));
}
