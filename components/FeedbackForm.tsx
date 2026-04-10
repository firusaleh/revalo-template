"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { siteConfig } from "@/site.config";

const feedbackSchema = z.object({
  comment: z
    .string()
    .min(10, "Bitte geben Sie mindestens 10 Zeichen ein."),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

type FeedbackFormProps = {
  onSubmit: (comment: string) => Promise<void> | void;
};

export function FeedbackForm({ onSubmit }: FeedbackFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: { comment: "" },
  });

  return (
    <form
      onSubmit={handleSubmit(async (values) => onSubmit(values.comment))}
      className="flex flex-col gap-4 w-full max-w-md"
    >
      <label htmlFor="comment" className="font-medium text-gray-900">
        Was können wir besser machen?
      </label>
      <textarea
        id="comment"
        rows={5}
        placeholder="Ihr Feedback hilft uns, besser zu werden..."
        className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-offset-1"
        {...register("comment")}
      />
      {errors.comment && (
        <p className="text-sm text-red-600" role="alert">
          {errors.comment.message}
        </p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: siteConfig.primaryColor }}
      >
        {isSubmitting ? "Wird gesendet..." : "Feedback senden"}
      </button>
    </form>
  );
}
