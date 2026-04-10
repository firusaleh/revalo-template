import { AdminShell } from "@/components/admin/AdminShell";
import { getDashboardKpis } from "@/lib/admin-data";

export const dynamic = "force-dynamic";

function KpiCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-gray-500">
        {label}
      </div>
      <div className="text-3xl font-bold mt-2">{value}</div>
      {hint && <div className="text-xs text-gray-500 mt-1">{hint}</div>}
    </div>
  );
}

export default async function AdminDashboardPage() {
  const kpis = await getDashboardKpis();
  const smartRoutingPct = (kpis.smartRoutingRate * 100).toFixed(0);

  return (
    <AdminShell
      title="Dashboard"
      subtitle="Übersicht über Bewertungsanfragen und Ergebnisse"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <KpiCard
          label="Anfragen diesen Monat"
          value={String(kpis.requestsThisMonth)}
          hint="inkl. alle Kanäle"
        />
        <KpiCard
          label="Ø Bewertung"
          value={kpis.avgRating.toFixed(1)}
          hint="Feedback + Google"
        />
        <KpiCard
          label="Smart-Routing-Rate"
          value={`${smartRoutingPct} %`}
          hint="Requests → Google weitergeleitet"
        />
        <KpiCard
          label="Google-Reviews gesamt"
          value={String(kpis.totalGoogleReviews)}
          hint="synchronisiert"
        />
      </div>

      <section className="mt-10 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="font-semibold mb-2">Willkommen im Admin-Bereich</h2>
        <p className="text-sm text-gray-600">
          Über das linke Menü verwalten Sie Kunden, Anfragen, Templates und
          Einstellungen. Der Smart-Routing-Schwellwert entscheidet, ab welcher
          Sterneanzahl Kunden direkt zu Google weitergeleitet werden.
        </p>
      </section>
    </AdminShell>
  );
}
