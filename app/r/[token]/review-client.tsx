"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { StarRating } from "@/components/StarRating";
import { FeedbackForm } from "@/components/FeedbackForm";
import { submitRating, submitFeedback } from "@/app/actions/review";

type ReviewTokenClientProps = {
  token: string;
  reviewRequestId: string;
};

export function ReviewTokenClient({
  token,
  reviewRequestId,
}: ReviewTokenClientProps) {
  const router = useRouter();
  const [stage, setStage] = useState<"rate" | "feedback">("rate");
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleRatingSelect = (rating: number) => {
    setError(null);
    startTransition(async () => {
      try {
        const result = await submitRating(token, rating);
        if (result.destination === "google" && result.redirectUrl) {
          window.location.href = result.redirectUrl;
          return;
        }
        setStage("feedback");
      } catch (e) {
        setError(e instanceof Error ? e.message : "Ein Fehler ist aufgetreten.");
      }
    });
  };

  const handleFeedbackSubmit = async (comment: string) => {
    await submitFeedback(reviewRequestId, comment);
    router.push("/danke");
  };

  return (
    <>
      {stage === "rate" && (
        <section className="flex flex-col items-center gap-4">
          <StarRating onSelect={handleRatingSelect} disabled={pending} />
          {pending && (
            <p className="text-sm text-gray-500">Wird verarbeitet...</p>
          )}
          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
        </section>
      )}

      {stage === "feedback" && (
        <section className="flex flex-col items-center gap-6 w-full">
          <p className="text-center text-gray-700 max-w-md">
            Schade, dass wir Ihre Erwartungen nicht erfüllt haben. Bitte
            teilen Sie uns mit, was wir verbessern können.
          </p>
          <FeedbackForm onSubmit={handleFeedbackSubmit} />
        </section>
      )}
    </>
  );
}
