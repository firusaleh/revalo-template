import { AdminShell } from "@/components/admin/AdminShell";
import { listGoogleReviews } from "@/lib/admin-data";
import { SyncButton } from "./sync-button";

export const dynamic = "force-dynamic";

export default async function GoogleReviewsPage() {
  const reviews = await listGoogleReviews();
  return (
    <AdminShell
      title="Google-Reviews"
      subtitle="Synchronisierte Bewertungen von Google"
    >
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-500">
          {reviews.length} Review{reviews.length !== 1 ? "s" : ""} gespeichert
        </p>
        <SyncButton />
      </div>

      {reviews.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-500">
          <p className="text-lg mb-2">Noch keine Google-Reviews</p>
          <p className="text-sm">
            Tragen Sie Ihre Google Place ID in den Einstellungen ein und klicken
            Sie &quot;Jetzt synchronisieren&quot;.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((r) => (
            <article
              key={r.id}
              className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="font-semibold">{r.reviewerName}</div>
                <div className="text-amber-500 text-lg">
                  {"★".repeat(r.rating)}
                  <span className="text-gray-300">
                    {"★".repeat(5 - r.rating)}
                  </span>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Veröffentlicht am {r.publishedAt}
              </div>
              <p className="text-sm text-gray-700 mt-3">{r.text ?? "—"}</p>
            </article>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
