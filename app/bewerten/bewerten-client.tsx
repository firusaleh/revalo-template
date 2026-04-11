"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { StarRating } from "@/components/StarRating";
import { FeedbackForm } from "@/components/FeedbackForm";
import { submitRating, submitFeedback } from "@/app/actions/review";
import { siteConfig } from "@/site.config";
import { BusinessLogo } from "@/components/BusinessLogo";

type Stage = "rate" | "feedback";

type BewertenClientProps = {
  logoUrl: string | null;
};

export function BewertenClient({ logoUrl }: BewertenClientProps) {
  const router = useRouter();
  const [stage, setStage] = useState<Stage>("rate");
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleRatingSelect = (rating: number) => {
    setError(null);
    setSelectedRating(rating);
    startTransition(async () => {
      try {
        const result = await submitRating(null, rating);
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
    await submitFeedback(null, comment, selectedRating);
    router.push("/danke");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-10 p-6 bg-gray-50">
      <header className="text-center flex flex-col items-center gap-3">
        <BusinessLogo
          logoUrl={logoUrl}
          businessName={siteConfig.businessName}
          size={80}
          className="rounded-lg"
        />
        <h1
          className="text-3xl font-bold"
          style={{ color: siteConfig.primaryColor }}
        >
          {siteConfig.businessName}
        </h1>
        <p className="text-gray-600 mt-2">Wie war Ihre Erfahrung?</p>
      </header>

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
    </main>
  );
}
