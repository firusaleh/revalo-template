import { AdminShell } from "@/components/admin/AdminShell";
import { listWhatsAppCopyPasteTemplates } from "@/lib/admin-data";
import { WhatsAppTemplateForm } from "./whatsapp-template-form";

export const dynamic = "force-dynamic";

export default async function WhatsAppTemplatesPage() {
  const templates = await listWhatsAppCopyPasteTemplates();
  return (
    <AdminShell
      title="WhatsApp-Templates (Copy-Paste)"
      subtitle="Vorlagen für den manuellen WhatsApp-Versand"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-gray-700">
            Bestehende Templates
          </h2>
          {templates.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center text-sm text-gray-500">
              Noch keine Templates vorhanden.
            </div>
          ) : (
            templates.map((t) => (
              <article
                key={t.id}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold">{t.name}</h3>
                  <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                    Copy-Paste
                  </span>
                </div>
                <pre className="whitespace-pre-wrap rounded border border-gray-100 bg-gray-50 p-3 text-sm text-gray-700">
                  {t.body}
                </pre>
              </article>
            ))
          )}
          <aside className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-xs text-blue-900">
            <div className="mb-1 font-semibold">Verfügbare Platzhalter:</div>
            <ul className="list-disc pl-5 space-y-0.5">
              <li>
                <code>{"{{vorname}}"}</code> — Vorname des Kunden
              </li>
              <li>
                <code>{"{{nachname}}"}</code> — Nachname des Kunden
              </li>
              <li>
                <code>{"{{businessName}}"}</code> — Ihr Unternehmensname
              </li>
              <li>
                <code>{"{{reviewLink}}"}</code> — Personalisierter
                Bewertungslink
              </li>
            </ul>
          </aside>
        </section>
        <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 font-semibold">Neues Template</h2>
          <WhatsAppTemplateForm />
        </aside>
      </div>
    </AdminShell>
  );
}
