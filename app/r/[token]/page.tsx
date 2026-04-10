import { notFound } from "next/navigation";
import { ReviewTokenClient } from "./review-client";
import { isValidToken } from "@/lib/tokens";
import { siteConfig } from "@/site.config";

export const dynamic = "force-dynamic";

type LoadedReviewRequest = {
  id: string;
  token: string;
} | null;

async function loadReviewRequest(token: string): Promise<LoadedReviewRequest> {
  try {
    const [{ db }, { reviewRequests }, { eq }] = await Promise.all([
      import("@/db"),
      import("@/db/schema"),
      import("drizzle-orm"),
    ]);
    const rows = await db
      .select()
      .from(reviewRequests)
      .where(eq(reviewRequests.token, token))
      .limit(1);
    return rows[0] ?? null;
  } catch {
    return null;
  }
}

type PageProps = {
  params: { token: string };
};

export default async function ReviewTokenPage({ params }: PageProps) {
  if (!isValidToken(params.token)) {
    notFound();
  }
  const request = await loadReviewRequest(params.token);
  if (!request) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-10 p-6 bg-gray-50">
      <header className="text-center">
        <h1
          className="text-3xl font-bold"
          style={{ color: siteConfig.primaryColor }}
        >
          {siteConfig.businessName}
        </h1>
        <p className="text-gray-600 mt-2">Wie war Ihre Erfahrung?</p>
      </header>

      <ReviewTokenClient
        token={params.token}
        reviewRequestId={request.id}
      />
    </main>
  );
}
