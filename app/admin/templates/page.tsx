import { AdminShell } from "@/components/admin/AdminShell";
import { listTemplates } from "@/lib/admin-data";
import { TemplateForm } from "./template-form";

export const dynamic = "force-dynamic";

export default async function TemplatesPage() {
  const templates = await listTemplates();
  return (
    <AdminShell
      title="Message Templates"
      subtitle="Vorlagen für E-Mail- und WhatsApp-Versand"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="space-y-4">
          {templates.map((t) => (
            <article
              key={t.id}
              className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{t.name}</h3>
                <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs">
                  {t.channel === "email" ? "E-Mail" : "WhatsApp"}
                </span>
              </div>
              {t.subject && (
                <div className="text-xs text-gray-500 mb-2">
                  Betreff: {t.subject}
                </div>
              )}
              <pre className="whitespace-pre-wrap text-sm text-gray-700 bg-gray-50 p-3 rounded border border-gray-100">
                {t.body}
              </pre>
              <div className="text-xs mt-3">
                Status:{" "}
                <span
                  className={
                    t.isActive ? "text-green-700" : "text-gray-500"
                  }
                >
                  {t.isActive ? "Aktiv" : "Inaktiv"}
                </span>
              </div>
            </article>
          ))}
        </section>
        <aside className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm h-fit">
          <h2 className="font-semibold mb-3">Neues Template</h2>
          <TemplateForm />
        </aside>
      </div>
    </AdminShell>
  );
}
