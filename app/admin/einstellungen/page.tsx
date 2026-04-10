import { AdminShell } from "@/components/admin/AdminShell";
import { getAdminSettings } from "@/lib/admin-data";
import { SettingsForm } from "./settings-form";

export const dynamic = "force-dynamic";

export default async function EinstellungenPage() {
  const settings = await getAdminSettings();
  return (
    <AdminShell
      title="Einstellungen"
      subtitle="Business-Daten und Smart-Routing konfigurieren"
    >
      <div className="max-w-2xl bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <SettingsForm settings={settings} />
      </div>
    </AdminShell>
  );
}
