import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { WhatsAppCopyButton } from "@/components/admin/WhatsAppCopyButton";
import {
  getPendingWhatsAppRequests,
  DEFAULT_COPY_PASTE_BODY,
  type WhatsAppInboxFilter,
} from "@/lib/admin-data";
import { renderTemplate } from "@/lib/whatsapp/template-renderer";
import { siteConfig } from "@/site.config";

export const dynamic = "force-dynamic";

type SearchParams = { filter?: string };

function getBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000"
  );
}

function splitFirstName(full: string): string {
  return full.trim().split(/\s+/)[0] ?? full;
}

export default async function VersandPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const filter: WhatsAppInboxFilter =
    searchParams?.filter === "today" ? "today" : "all";
  const requests = await getPendingWhatsAppRequests(filter);

  const rows = requests.map((req) => {
    const vorname = splitFirstName(req.customerName);
    const reviewLink = `${getBaseUrl()}/r/${req.token ?? req.id}`;
    const message = renderTemplate(DEFAULT_COPY_PASTE_BODY, {
      vorname,
      nachname: req.customerName.split(/\s+/).slice(1).join(" "),
      businessName: siteConfig.businessName,
      reviewLink,
    });
    return {
      ...req,
      phone: req.customerPhone ?? "",
      message,
    };
  });

  return (
    <AdminShell
      title="WhatsApp Versand Inbox"
      subtitle="Nachrichten zum manuellen Versand per Copy-Paste"
    >
      <div
        className="mb-6 inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm"
        data-testid="wa-counter"
      >
        <span
          className="text-3xl font-bold"
          style={{ color: siteConfig.primaryColor }}
        >
          {requests.length}
        </span>
        <span className="text-sm text-gray-700">
          {requests.length === 1
            ? "Nachricht wartet auf Versand"
            : "Nachrichten warten auf Versand"}
        </span>
      </div>

      <div className="mb-4 flex items-center gap-2 text-sm">
        <Link
          href="/admin/versand?filter=all"
          className={`rounded-md border px-3 py-1.5 ${
            filter === "all"
              ? "border-gray-900 bg-gray-900 text-white"
              : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          Alle offenen
        </Link>
        <Link
          href="/admin/versand?filter=today"
          className={`rounded-md border px-3 py-1.5 ${
            filter === "today"
              ? "border-gray-900 bg-gray-900 text-white"
              : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          Nur heute
        </Link>
      </div>

      {rows.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center text-sm text-gray-500">
          Keine ausstehenden WhatsApp-Nachrichten. 🎉
        </div>
      ) : (
        <div className="space-y-4">
          {rows.map((row) => (
            <article
              key={row.id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              data-testid="wa-row"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">
                      {row.customerName}
                    </h3>
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                      Offen
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    📞 {row.phone || "(keine Nummer)"}
                  </div>
                  <pre className="mt-3 whitespace-pre-wrap rounded-md border border-gray-100 bg-gray-50 p-3 text-sm text-gray-700">
                    {row.message}
                  </pre>
                </div>
                <div className="shrink-0">
                  <WhatsAppCopyButton
                    reviewRequestId={row.id}
                    phone={row.phone}
                    message={row.message}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
