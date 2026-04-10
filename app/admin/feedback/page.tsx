import { AdminShell } from "@/components/admin/AdminShell";
import { listFeedbacks } from "@/lib/admin-data";

export const dynamic = "force-dynamic";

function RatingBadge({ rating }: { rating: number }) {
  const color =
    rating <= 2
      ? "bg-red-100 text-red-800"
      : rating === 3
        ? "bg-amber-100 text-amber-800"
        : "bg-green-100 text-green-800";
  return (
    <span
      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${color}`}
    >
      {rating} ★
    </span>
  );
}

export default async function FeedbackPage() {
  const feedbacks = await listFeedbacks();
  return (
    <AdminShell
      title="Internes Feedback"
      subtitle="Negative Bewertungen unterhalb des Routing-Schwellwerts"
    >
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 text-left">
            <tr>
              <th className="px-4 py-3 font-medium">Datum</th>
              <th className="px-4 py-3 font-medium">Rating</th>
              <th className="px-4 py-3 font-medium">Kommentar</th>
              <th className="px-4 py-3 font-medium">Quelle</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((f) => (
              <tr key={f.id} className="border-t border-gray-100 align-top">
                <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                  {f.createdAt}
                </td>
                <td className="px-4 py-3">
                  <RatingBadge rating={f.rating} />
                </td>
                <td className="px-4 py-3 text-gray-800 max-w-xl">
                  {f.comment ?? "—"}
                </td>
                <td className="px-4 py-3">
                  {f.isAnonymous ? (
                    <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs">
                      Anonym (QR)
                    </span>
                  ) : (
                    <span className="inline-flex rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                      Identifiziert
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
