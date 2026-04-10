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
  // TODO (Phase 4): if token is present, load the reviewRequest,
  // persist the rating, and update status to 'rated' / 'routed_google'.
  void token;
  return result;
}

export async function submitFeedback(
  reviewRequestId: string | null,
  comment: string,
): Promise<{ ok: true }> {
  const trimmed = comment?.trim() ?? "";
  if (trimmed.length < 10) {
    throw new Error("Feedback muss mindestens 10 Zeichen enthalten.");
  }
  // TODO (Phase 4): persist feedback row, mark reviewRequest
  // status = 'feedback_submitted'.
  void reviewRequestId;
  return { ok: true };
}
