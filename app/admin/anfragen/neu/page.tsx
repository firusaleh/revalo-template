import { AdminShell } from "@/components/admin/AdminShell";
import { listCustomers } from "@/lib/admin-data";
import { NewRequestForm } from "./new-request-form";

export const dynamic = "force-dynamic";

export default async function NewAnfragePage() {
  const customers = await listCustomers();
  return (
    <AdminShell
      title="Neue Bewertungsanfrage"
      subtitle="Kunde auswählen und Versand-Kanal festlegen"
    >
      <div className="max-w-xl bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <NewRequestForm customers={customers} />
      </div>
    </AdminShell>
  );
}
