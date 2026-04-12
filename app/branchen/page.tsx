import type { Metadata } from "next";
import Link from "next/link";
import { branchen } from "@/lib/branchen";

export const metadata: Metadata = {
  title: "Bewertungsmanagement für alle Branchen | Revalo",
  description:
    "Von Arztpraxen bis Hotels: Revalo automatisiert Ihr Bewertungsmanagement mit Smart-Routing. Entdecken Sie die Lösung für Ihre Branche.",
  alternates: { canonical: "/branchen" },
  openGraph: {
    title: "Bewertungsmanagement für alle Branchen | Revalo",
    description:
      "13+ Branchenlösungen für automatisiertes Bewertungsmanagement. Smart-Routing, QR-Codes, WhatsApp & E-Mail.",
  },
};

export default function BranchenOverviewPage() {
  return (
    <div className="relative pb-20 pt-32 sm:pt-40">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-sky-950" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition-colors hover:text-white">
            Startseite
          </Link>
          <span>/</span>
          <span className="text-slate-400">Branchen</span>
        </nav>

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Bewertungsmanagement{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              für jede Branche
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Revalo hilft Unternehmen in über 13 Branchen, ihre
            Google-Bewertungen automatisch zu steigern. Finden Sie die
            passende Lösung für Ihr Unternehmen.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branchen.map((b) => (
            <Link
              key={b.slug}
              href={`/branchen/${b.slug}`}
              className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-sky-500/20 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-sky-500/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-2xl transition-transform group-hover:scale-110">
                {b.icon}
              </div>
              <h2 className="text-lg font-semibold text-white transition-colors group-hover:text-sky-400">
                {b.shortName}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {b.description}
              </p>
              <span className="mt-4 inline-flex items-center text-xs font-medium text-sky-400 opacity-0 transition-opacity group-hover:opacity-100">
                Mehr erfahren
                <svg
                  className="ml-1 h-3 w-3"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path d="M4.5 2l4 4-4 4" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 grid max-w-3xl gap-8 sm:grid-cols-3">
          {[
            { value: "13+", label: "Branchen" },
            { value: "47%", label: "Mehr Bewertungen im Schnitt" },
            { value: "<5 Min", label: "Einrichtungszeit" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-sky-400">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
