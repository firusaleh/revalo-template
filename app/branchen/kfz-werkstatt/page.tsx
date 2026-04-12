import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bewertungsmanagement für Autohäuser & KFZ-Werkstätten | Revalo",
  description:
    "Autokäufer und Werkstattkunden orientieren sich an Google-Bewertungen. Revalo automatisiert Ihr Bewertungsmanagement nach Kauf, Service und HU/AU.",
  keywords:
    "bewertungsmanagement autohaus, google bewertungen kfz werkstatt, autohaus rezensionen, werkstatt online reputation",
  alternates: { canonical: "/branchen/kfz-werkstatt" },
  openGraph: {
    title:
      "Bewertungsmanagement für Autohäuser & KFZ-Werkstätten | Revalo",
    description:
      "Nach Fahrzeugübergabe, Inspektion oder HU/AU automatisch Google-Bewertungen sammeln — mit Smart-Routing für Autohäuser und Werkstätten.",
    url: "https://getrevalo.de/branchen/kfz-werkstatt",
    type: "website",
    locale: "de_DE",
    siteName: "Revalo",
  },
};

/* ── Icons (inline SVG) ───────────────────────────────────── */

function IconCar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17h14M5 17a2 2 0 01-2-2V9a2 2 0 012-2h1l2-3h8l2 3h1a2 2 0 012 2v6a2 2 0 01-2 2M5 17a2 2 0 100 4 2 2 0 000-4zm14 0a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  );
}

function IconWrench({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconMessage({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

function IconClipboard({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

function IconSmartphone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12" y2="18.01" />
    </svg>
  );
}

function IconStore({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1-4h16l1 4" />
      <path d="M3 9v10a1 1 0 001 1h16a1 1 0 001-1V9" />
      <path d="M9 21V13h6v8" />
      <path d="M3 9h18" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconZap({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconBarChart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
}

/* ── Page ──────────────────────────────────────────────────── */

const faqs = [
  {
    q: "Kann ich nach verschiedenen Services unterschiedliche Anfragen senden?",
    a: "Ja. Sie können im Revalo-Dashboard verschiedene Vorlagen anlegen — eine für Neuwagenkauf, eine für Inspektion, eine für HU/AU. Je nach Service-Typ wird automatisch die passende Bewertungsanfrage versendet, mit branchenspezifischem Wording.",
  },
  {
    q: "Funktioniert das auch für Gebrauchtwagenhändler?",
    a: "Absolut. Ob Neuwagen, Gebrauchtwagen oder Jahreswagen — das Prinzip ist identisch. Nach der Fahrzeugübergabe erhält der Kunde automatisch eine Bewertungsanfrage. Gerade bei Gebrauchtwagen ist Vertrauen durch Bewertungen entscheidend.",
  },
  {
    q: "Was wenn ein Kunde über die Rechnungshöhe klagt?",
    a: "Genau dafür ist Smart-Routing da. Wenn ein Kunde 1-3 Sterne gibt, wird er auf ein internes Feedback-Formular geleitet — nicht zu Google. So erfahren Sie direkt von der Unzufriedenheit, können die Rechnung erklären und das Problem lösen, bevor eine negative öffentliche Bewertung entsteht.",
  },
  {
    q: "Können verschiedene Standorte verwaltet werden?",
    a: "Ja. Im Revalo-Dashboard können Sie mehrere Filialen anlegen, jeweils mit eigenem Google-Bewertungslink. So sehen Sie pro Standort: Anzahl Bewertungen, Durchschnittsbewertung und Trends — alles in einem Dashboard.",
  },
  {
    q: "Ist das Review Gating?",
    a: "Nein. Beim Review Gating werden nur zufriedene Kunden nach einer Bewertung gefragt — das ist verboten. Revalo fragt ALLE Kunden nach ihrem Feedback. Der einzige Unterschied: Zufriedene Kunden werden zu Google weitergeleitet, unzufriedene erhalten ein internes Feedback-Formular. Jeder Kunde kann jederzeit auch direkt auf Google bewerten.",
  },
  {
    q: "Was kostet Revalo für Autohäuser?",
    a: "Wir bieten individuelle Pakete je nach Betriebsgröße und Kundenvolumen — von der kleinen Werkstatt bis zum Autohaus mit mehreren Standorten. Fordern Sie ein unverbindliches Angebot an, wir beraten Sie persönlich.",
  },
];

export default function KfzWerkstattPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Revalo für Autohäuser & KFZ-Werkstätten",
    applicationCategory: "BusinessApplication",
    description:
      "Bewertungsmanagement-Software für Autohäuser und KFZ-Werkstätten. Automatisiert den Prozess, nach Fahrzeugkauf, Inspektion oder HU/AU Google-Bewertungen zu sammeln.",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Kostenlose Demo verfügbar",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-sky-950" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative mx-auto max-w-4xl px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition-colors hover:text-white">
              Startseite
            </Link>
            <span>/</span>
            <Link
              href="/branchen"
              className="transition-colors hover:text-white"
            >
              Branchen
            </Link>
            <span>/</span>
            <span className="text-slate-400">KFZ-Werkstatt</span>
          </nav>

          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-300">
              <IconCar className="h-4 w-4" />
              Branchenlösung für Autohäuser & Werkstätten
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Mehr Google-Bewertungen{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                für Ihr Autohaus & Ihre Werkstatt
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              Ob Neuwagenkauf, Inspektion oder HU/AU — Kunden lesen vorher
              Google-Bewertungen. Revalo sorgt dafür, dass zufriedene Kunden
              auch bewerten.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 hover:shadow-xl hover:shadow-sky-500/30"
              >
                Jetzt Demo anfragen
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M6.22 4.22a.75.75 0 011.06 0l3.25 3.25a.75.75 0 010 1.06l-3.25 3.25a.75.75 0 01-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 010-1.06z" />
                </svg>
              </Link>
              <Link
                href="/blog/review-gating-vs-smart-routing"
                className="inline-flex items-center rounded-full border border-slate-700 px-8 py-3.5 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-white/5 hover:text-white"
              >
                Ist das erlaubt?
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                <IconShield className="h-4 w-4" /> DSGVO-konform
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
                <IconSmartphone className="h-4 w-4" /> WhatsApp-Versand
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
                <IconZap className="h-4 w-4" /> Nach jedem Service automatisch
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="border-t border-white/5 bg-slate-900/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Das Bewertungsproblem für Autohäuser & Werkstätten
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Hunderte Kunden pro Monat — aber nur eine Handvoll
              Google-Bewertungen. Und wenn doch eine kommt, ist sie oft negativ.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <IconStar className="h-6 w-6 text-amber-400" />,
                title: "Große Investition = intensive Recherche",
                desc: "Ein Autokauf ist eine der größten Anschaffungen. Kunden recherchieren intensiv und lesen Bewertungen — wer keine hat, fällt durchs Raster.",
              },
              {
                icon: <IconWrench className="h-6 w-6 text-red-400" />,
                title: "Viele Kunden, wenig Bewertungen",
                desc: "Werkstätten betreuen hunderte Kunden pro Monat. Aber ohne systematischen Prozess entstehen daraus nur vereinzelte Bewertungen — meist die negativen.",
              },
              {
                icon: <IconMessage className="h-6 w-6 text-sky-400" />,
                title: "Negative Erlebnisse landen sofort online",
                desc: "Eine unerwartet hohe Rechnung oder lange Wartezeit — und der Frust wird direkt auf Google abgeladen. Zufriedene Kunden hingegen sagen nichts.",
              },
              {
                icon: <IconClock className="h-6 w-6 text-purple-400" />,
                title: "Saisonale Spitzen verpasst",
                desc: "Reifenwechsel-Saison, HU/AU-Termine — in Stoßzeiten hat niemand Zeit für Bewertungsmanagement. Die besten Chancen gehen verloren.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-sky-500/20 bg-sky-500/5 p-6 text-center">
            <p className="text-lg font-semibold text-white">
              Autohäuser mit 4,5+ Sternen erhalten bis zu{" "}
              <span className="text-sky-400">38% mehr Anfragen</span>{" "}
              über Google
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Quelle: BrightLocal Local Consumer Review Survey 2025
            </p>
          </div>
        </div>
      </section>

      {/* ── Lösung: Smart-Routing für KFZ ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Wie Revalo für Autohäuser & Werkstätten funktioniert
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Drei Schritte — vollautomatisch nach Fahrzeugübergabe,
              Inspektion oder HU/AU.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent lg:block" />

            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  step: "1",
                  title: "Bewertungsanfrage versenden",
                  desc: "Nach der Fahrzeugübergabe oder dem Service-Termin erhält der Kunde automatisch eine WhatsApp-Nachricht oder E-Mail. Zeitpunkt und Kanal sind frei wählbar.",
                },
                {
                  step: "2",
                  title: "Kunde bewertet",
                  desc: "Der Kunde gibt auf einer einfachen Skala von 1-5 Sternen an, wie zufrieden er mit dem Service war. Dauert nur wenige Sekunden — direkt vom Smartphone.",
                },
                {
                  step: "3",
                  title: "Smart-Routing entscheidet",
                  desc: "4-5 Sterne: Weiterleitung zu Google Reviews. 1-3 Sterne: Internes Feedback-Formular. Beschwerden über Rechnungshöhe oder Wartezeit bleiben bei Ihnen.",
                },
              ].map((item) => (
                <div key={item.step} className="relative text-center">
                  <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-sky-500/30 bg-sky-500/10 shadow-lg shadow-sky-500/10">
                    <span className="text-3xl font-bold text-sky-400">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Routing Visual */}
          <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-white/5 bg-white/[0.02] p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5 text-center">
                <p className="text-2xl">⭐⭐⭐⭐⭐</p>
                <p className="mt-2 text-sm font-semibold text-emerald-300">
                  4-5 Sterne
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  → Weiterleitung zu Google Reviews
                </p>
              </div>
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 text-center">
                <p className="text-2xl">⭐⭐</p>
                <p className="mt-2 text-sm font-semibold text-amber-300">
                  1-3 Sterne
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  → Internes Feedback an Sie
                </p>
              </div>
            </div>

            {/* KFZ-Besonderheit */}
            <div className="mt-6 rounded-xl border border-sky-500/15 bg-sky-500/5 p-4 text-center">
              <p className="text-sm font-medium text-sky-300">
                <IconSmartphone className="mr-1.5 inline h-4 w-4" />
                KFZ-Vorteil: WhatsApp-Versand nach jedem Service
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Werkstattkunden bevorzugen WhatsApp. Die Öffnungsrate liegt bei
                über 90% — deutlich höher als bei E-Mail. So erreichen Sie auch
                Kunden, die selten ihre E-Mails checken.
              </p>
            </div>

            <p className="mt-5 text-center text-xs text-slate-500">
              Wichtig: Dies ist <strong className="text-slate-400">kein Review Gating</strong>. Alle
              Kunden werden gefragt. Jeder Kunde kann jederzeit auch direkt
              auf Google bewerten.{" "}
              <Link
                href="/blog/review-gating-vs-smart-routing"
                className="text-sky-400 hover:text-sky-300"
              >
                Mehr erfahren →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Vorteile ── */}
      <section className="border-t border-white/5 bg-slate-900/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Warum Autohäuser & Werkstätten Revalo nutzen
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <IconClipboard className="h-5 w-5" />,
                title: "Nach jedem Service automatisch",
                desc: "Inspektion, Reifenwechsel, HU/AU, Reparatur — nach jedem Termin wird automatisch eine Bewertungsanfrage versendet. Kein manueller Aufwand für Ihr Team.",
              },
              {
                icon: <IconSmartphone className="h-5 w-5" />,
                title: "WhatsApp-Versand",
                desc: "Werkstattkunden erreichen Sie am besten per WhatsApp. Über 90% Öffnungsrate — deutlich höher als E-Mail. Direkter, schneller, persönlicher.",
              },
              {
                icon: <IconMessage className="h-5 w-5" />,
                title: "Rechnungs-Reklamationen intern",
                desc: "Wenn ein Kunde die Rechnung als zu hoch empfindet, erfahren Sie es direkt über das interne Formular — nicht über eine öffentliche 1-Stern-Bewertung.",
              },
              {
                icon: <IconCar className="h-5 w-5" />,
                title: "Verkauf + Service in einem",
                desc: "Für Autohäuser: Bewertungen nach Neuwagenkauf, Gebrauchtwagenkauf UND Service-Terminen. Verschiedene Vorlagen für verschiedene Anlässe.",
              },
              {
                icon: <IconStore className="h-5 w-5" />,
                title: "Multi-Standort-Dashboard",
                desc: "Alle Filialen auf einen Blick. Pro Standort sehen Sie: Bewertungsanzahl, Durchschnitt, Trends und welche Services die besten Bewertungen generieren.",
              },
              {
                icon: <IconBarChart className="h-5 w-5" />,
                title: "Saisonale Auswertung",
                desc: "Wie performen Sie in der Reifenwechsel-Saison vs. im Sommer? Revalo zeigt Ihnen saisonale Trends und hilft, Engpässe zu erkennen.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all hover:border-sky-500/20 hover:bg-white/[0.06]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 transition-transform group-hover:scale-110">
                  {v.icon}
                </div>
                <h3 className="text-base font-semibold text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Statistiken ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                value: "4,2x",
                label: "mehr Bewertungen",
                sub: "durchschnittlich nach 60 Tagen",
              },
              {
                value: "93%",
                label: "positive Bewertungen",
                sub: "durch intelligentes Smart-Routing",
              },
              {
                value: "<5 Min",
                label: "Setup-Zeit",
                sub: "kein IT-Wissen erforderlich",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center"
              >
                <p className="text-4xl font-extrabold text-sky-400">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {s.label}
                </p>
                <p className="mt-1 text-xs text-slate-500">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-white/5 bg-slate-900/30 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Häufige Fragen von Autohäusern & Werkstätten
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] transition-all open:border-sky-500/20 open:bg-white/[0.04] hover:border-white/10"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left text-sm font-medium text-white [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <svg
                    className="ml-4 h-5 w-5 flex-shrink-0 text-slate-500 transition-transform group-open:rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed text-slate-400">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Starten Sie jetzt mit Revalo für Ihr Autohaus
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Mehr Vertrauen, mehr Kunden — automatisiert nach jedem Service,
            unverbindlich und DSGVO-konform.
          </p>
          <Link
            href="/kontakt"
            className="mt-10 inline-flex items-center rounded-full bg-sky-500 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 hover:shadow-xl hover:shadow-sky-500/30"
          >
            Jetzt Demo anfragen
            <svg
              className="ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
