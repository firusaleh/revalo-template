import { AdminShell } from "@/components/admin/AdminShell";
import { listCustomers } from "@/lib/admin-data";
import { CustomerForm } from "./customer-form";

export const dynamic = "force-dynamic";

export default async function KundenPage() {
  const customers = await listCustomers();
  return (
    <AdminShell
      title="Kunden"
      subtitle="Kundenstamm verwalten"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 text-left">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">E-Mail</th>
                <th className="px-4 py-3 font-medium">Telefon</th>
                <th className="px-4 py-3 font-medium">Angelegt</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium">{c.name}</td>
                  <td className="px-4 py-3 text-gray-600">{c.email}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {c.phone ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{c.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <aside className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <h2 className="font-semibold mb-3">Neuer Kunde</h2>
          <CustomerForm />
        </aside>
      </div>
    </AdminShell>
  );
}
