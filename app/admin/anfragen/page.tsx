import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { listReviewRequests } from "@/lib/admin-data";
import { siteConfig } from "@/site.config";

export const dynamic = "force-dynamic";

const STATUS_LABELS: Record<string, string> = {
  pending: "Ausstehend",
  sent: "Gesendet",
  clicked: "Geklickt",
  rated: "Bewertet",
  routed_google: "→ Google",
  feedback_submitted: "Feedback",
};

const CHANNEL_LABELS: Record<string, string> = {
  email: "E-Mail",
  whatsapp: "WhatsApp",
  qr: "QR-Code",
};

type SearchParams = {
  status?: string;
  channel?: string;
  from?: string;
  to?: string;
};

export default async function AnfragenPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const all = await listReviewRequests();
  const filtered = all.filter((r) => {
    if (searchParams.status && r.status !== searchParams.status) return false;
    if (searchParams.channel && r.channel !== searchParams.channel) return false;
    if (searchParams.from && r.createdAt < searchParams.from) return false;
    if (searchParams.to && r.createdAt > searchParams.to) return false;
    return true;
  });

  return (
    <AdminShell
      title="Bewertungsanfragen"
      subtitle={`${filtered.length} von ${all.length} Anfragen`}
    >
      <div className="flex justify-between items-start mb-6">
        <form className="flex flex-wrap items-end gap-3" method="get">
          <div className="flex flex-col">
            <label className="text-xs text-gray-600 mb-1">Status</label>
            <select
              name="status"
              defaultValue={searchParams.status ?? ""}
              className="rounded-md border border-gray-300 p-2 text-sm bg-white"
            >
              <option value="">Alle</option>
              {Object.entries(STATUS_LABELS).map(([k, v]) => (
                <option key={k} value={k}>
                  {v}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-600 mb-1">Kanal</label>
            <select
              name="channel"
              defaultValue={searchParams.channel ?? ""}
              className="rounded-md border border-gray-300 p-2 text-sm bg-white"
            >
              <option value="">Alle</option>
              <option value="email">E-Mail</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="qr">QR-Code</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-600 mb-1">Von</label>
            <input
              type="date"
              name="from"
              defaultValue={searchParams.from ?? ""}
              className="rounded-md border border-gray-300 p-2 text-sm bg-white"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-600 mb-1">Bis</label>
            <input
              type="date"
              name="to"
              defaultValue={searchParams.to ?? ""}
              className="rounded-md border border-gray-300 p-2 text-sm bg-white"
            />
          </div>
          <button
            type="submit"
            className="rounded-md px-4 py-2 text-sm font-medium text-white"
            style={{ backgroundColor: siteConfig.primaryColor }}
          >
            Filtern
          </button>
        </form>
        <Link
          href="/admin/anfragen/neu"
          className="rounded-md px-4 py-2 text-sm font-semibold text-white"
          style={{ backgroundColor: siteConfig.primaryColor }}
        >
          + Neue Anfrage
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 text-left">
            <tr>
              <th className="px-4 py-3 font-medium">Kunde</th>
              <th className="px-4 py-3 font-medium">E-Mail</th>
              <th className="px-4 py-3 font-medium">Kanal</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Erstellt</th>
              <th className="px-4 py-3 font-medium">Gesendet</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-8 text-center text-gray-500"
                >
                  Keine Anfragen gefunden.
                </td>
              </tr>
            )}
            {filtered.map((r) => (
              <tr key={r.id} className="border-t border-gray-100">
                <td className="px-4 py-3 font-medium">{r.customerName}</td>
                <td className="px-4 py-3 text-gray-600">{r.customerEmail}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs">
                    {CHANNEL_LABELS[r.channel]}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                      r.status === "routed_google"
                        ? "bg-green-100 text-green-800"
                        : r.status === "feedback_submitted"
                          ? "bg-amber-100 text-amber-800"
                          : r.status === "pending"
                            ? "bg-gray-100 text-gray-700"
                            : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {STATUS_LABELS[r.status]}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{r.createdAt}</td>
                <td className="px-4 py-3 text-gray-600">{r.sentAt ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
