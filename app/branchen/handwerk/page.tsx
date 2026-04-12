import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bewertungsmanagement für Handwerksbetriebe | Mehr Google-Bewertungen | Revalo",
  description:
    "Handwerker leben von Vertrauen und Empfehlungen. Revalo automatisiert Ihre Google-Bewertungen — nach jedem Auftrag, per WhatsApp oder E-Mail.",
  keywords:
    "bewertungsmanagement handwerk, google bewertungen handwerker, handwerksbetrieb bewertungen, handwerker online reputation",
  alternates: { canonical: "/branchen/handwerk" },
  openGraph: {
    title:
      "Bewertungsmanagement für Handwerksbetriebe | Mehr Google-Bewertungen | Revalo",
    description:
      "Empfehlungen sind das Lebenselixier im Handwerk. Revalo verwandelt zufriedene Kunden automatisch in 5-Sterne-Bewertungen.",
    url: "https://getrevalo.de/branchen/handwerk",
    type: "website",
    locale: "de_DE",
    siteName: "Revalo",
  },
};

/* ── Icons (inline SVG to avoid lucide-react dependency) ──── */

function IconWrench({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function IconHammer({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 010-3L12 9" />
      <path d="M17.64 15L22 10.64" />
      <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V6.5L14.5 2.25 12 4.75l2.25 2.25H16c.85 0 1.65.33 2.25.93l1.25 1.25" />
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

function IconSmartphone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
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

function IconTrending({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
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

/* ── Page ──────────────────────────────────────────────────── */

const faqs = [
  {
    q: "Ich bin den ganzen Tag auf der Baustelle — muss ich mich darum kümmern?",
    a: "Nein. Genau das ist der Punkt: Revalo arbeitet vollautomatisch. Sie geben einmal die Handynummer oder E-Mail des Kunden ein (dauert 10 Sekunden vom Smartphone) und Revalo erledigt den Rest. Die Bewertungsanfrage wird automatisch versendet, die Antwort automatisch geroutet. Null Aufwand auf der Baustelle.",
  },
  {
    q: "Funktioniert das auch, wenn ich keine Kundenliste habe?",
    a: "Ja. Sie brauchen keine bestehende Kundenliste. Nach jedem Auftrag tragen Sie einfach die Kontaktdaten des Kunden im Dashboard ein — oder direkt vom Smartphone per App. Es reicht, den Kunden nach dem Auftrag kurz hinzuzufügen. Alternativ nutzen Sie QR-Codes auf Rechnungen oder Visitenkarten.",
  },
  {
    q: "Was wenn ein Kunde wegen der Rechnung schimpft?",
    a: "Genau dafür ist Smart-Routing da. Wenn ein Kunde 1-3 Sterne gibt, wird er auf ein internes Feedback-Formular geleitet — nicht zu Google. So erfahren Sie direkt von der Unzufriedenheit, können das Gespräch suchen und das Problem lösen, bevor eine negative öffentliche Bewertung entsteht.",
  },
  {
    q: "Hilft das auch bei der Mitarbeitersuche?",
    a: "Absolut. Ein Google-Profil mit 4,5+ Sternen und vielen positiven Bewertungen wirkt nicht nur auf Kunden, sondern auch auf potenzielle Mitarbeiter. Gerade im Handwerk informieren sich Fachkräfte vor einer Bewerbung über den Betrieb — und Bewertungen sind das Erste, was sie finden.",
  },
  {
    q: "Ist das Review Gating?",
    a: "Nein. Beim Review Gating werden nur zufriedene Kunden nach einer Bewertung gefragt — das ist verboten. Revalo fragt ALLE Kunden nach ihrem Feedback. Der einzige Unterschied: Zufriedene Kunden werden zu Google weitergeleitet, unzufriedene erhalten ein internes Feedback-Formular. Jeder Kunde kann jederzeit auch direkt auf Google bewerten.",
  },
  {
    q: "Was kostet Revalo für Handwerksbetriebe?",
    a: "Wir bieten individuelle Pakete — vom Ein-Mann-Betrieb bis zum Meisterbetrieb mit mehreren Teams. Fordern Sie ein unverbindliches Angebot an, wir beraten Sie persönlich und zeigen Ihnen eine Live-Demo.",
  },
];

export default function HandwerkPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Revalo für Handwerksbetriebe",
    applicationCategory: "BusinessApplication",
    description:
      "Bewertungsmanagement-Software für Handwerksbetriebe. Automatisiert den Prozess, zufriedene Kunden nach jedem Auftrag per WhatsApp zu Google-Bewertungen zu leiten und Reklamationen intern aufzufangen.",
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
            <span className="text-slate-400">Handwerk</span>
          </nav>

          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-300">
              <IconWrench className="h-4 w-4" />
              Branchenlösung für Handwerksbetriebe
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Mehr Google-Bewertungen{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                für Ihren Handwerksbetrieb
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              Empfehlungen sind das Lebenselixier im Handwerk. Revalo verwandelt
              zufriedene Kunden automatisch in 5-Sterne-Bewertungen — nach jedem
              Auftrag, per WhatsApp oder E-Mail.
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
                <IconMessage className="h-4 w-4" /> Per WhatsApp
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
                <IconStar className="h-4 w-4" /> Nach jedem Auftrag
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
                <IconSmartphone className="h-4 w-4" /> Kein IT-Wissen nötig
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
              Das Bewertungsproblem im Handwerk
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Handwerker leben von Empfehlungen — aber Mund-zu-Mund skaliert
              nicht. Online-Bewertungen sind die moderne Empfehlung.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: <IconUsers className="h-6 w-6 text-amber-400" />,
                title: "Mund-zu-Mund skaliert nicht",
                desc: "Ein zufriedener Kunde empfiehlt Sie an 1-2 Personen. Eine Google-Bewertung erreicht Hunderte potenzielle Auftraggeber in Ihrer Region — rund um die Uhr.",
              },
              {
                icon: <IconStar className="h-6 w-6 text-red-400" />,
                title: "Wenige Bewertungen trotz vieler Aufträge",
                desc: "Viele Handwerksbetriebe haben nur 5-10 Google-Bewertungen — obwohl sie Hunderte zufriedener Kunden haben. Ohne System denkt niemand daran, eine Bewertung zu schreiben.",
              },
              {
                icon: <IconClock className="h-6 w-6 text-sky-400" />,
                title: "Keine Zeit auf der Baustelle",
                desc: "Wer den ganzen Tag auf der Baustelle steht, hat weder Zeit noch Nerv, jeden Kunden persönlich um eine Google-Bewertung zu bitten. Es muss automatisch laufen.",
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
              Handwerksbetriebe mit 4,5+ Sternen erhalten bis zu{" "}
              <span className="text-sky-400">40% mehr Anfragen</span>{" "}
              über Google
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Quelle: BrightLocal Local Consumer Review Survey 2025
            </p>
          </div>
        </div>
      </section>

      {/* ── Lösung: Smart-Routing für Handwerker ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Wie Revalo für Handwerksbetriebe funktioniert
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Drei Schritte — vollautomatisch nach jedem Auftrag. Sie arbeiten,
              Revalo sammelt Bewertungen.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent lg:block" />

            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  step: "1",
                  title: "Bewertungsanfrage versenden",
                  desc: "Nach Auftragsabschluss erhält der Kunde automatisch eine freundliche Anfrage per WhatsApp oder E-Mail. Zeitpunkt wählbar: sofort oder 1-2 Tage später.",
                },
                {
                  step: "2",
                  title: "Kunde bewertet",
                  desc: "Der Kunde gibt auf einer einfachen Skala von 1-5 Sternen an, wie zufrieden er mit der Arbeit war. Dauert nur wenige Sekunden.",
                },
                {
                  step: "3",
                  title: "Smart-Routing entscheidet",
                  desc: "4-5 Sterne: Weiterleitung zu Google Reviews. 1-3 Sterne: Internes Feedback-Formular. Reklamationen bleiben bei Ihnen, nicht auf Google.",
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

            {/* Handwerk-Besonderheit */}
            <div className="mt-6 rounded-xl border border-sky-500/15 bg-sky-500/5 p-4 text-center">
              <p className="text-sm font-medium text-sky-300">
                <IconSmartphone className="mr-1.5 inline h-4 w-4" />
                Handwerker-Vorteil: Läuft komplett vom Smartphone
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Kein PC nötig. Kunde hinzufügen, Anfrage senden — fertig.
                Der Chef muss nicht selbst fragen.
              </p>
            </div>

            <p className="mt-5 text-center text-xs text-slate-500">
              Wichtig: Dies ist <strong className="text-slate-400">kein Review Gating</strong>. Alle
              Kunden werden gefragt. Jeder Kunde kann jederzeit auch direkt auf
              Google bewerten.{" "}
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
              Warum Handwerksbetriebe Revalo nutzen
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <IconZap className="h-5 w-5" />,
                title: "Automatisch nach Auftragsabschluss",
                desc: "Kein manueller Aufwand. Nach jedem abgeschlossenen Auftrag wird automatisch eine Bewertungsanfrage versendet. Sie müssen an nichts denken.",
              },
              {
                icon: <IconMessage className="h-5 w-5" />,
                title: "WhatsApp-First",
                desc: "Handwerker-Kunden nutzen WhatsApp, nicht E-Mail. Revalo sendet Bewertungsanfragen per WhatsApp — mit über 90% Öffnungsrate.",
              },
              {
                icon: <IconShield className="h-5 w-5" />,
                title: "Reklamationen intern auffangen",
                desc: "Ärger über die Rechnung oder Nachbesserungsbedarf? Das Feedback kommt direkt zu Ihnen — nicht als 1-Stern-Bewertung auf Google.",
              },
              {
                icon: <IconSmartphone className="h-5 w-5" />,
                title: "Bedienung vom Smartphone",
                desc: "Kein IT-Wissen nötig. Das Dashboard funktioniert komplett vom Smartphone — perfekt für den Einsatz auf der Baustelle.",
              },
              {
                icon: <IconHammer className="h-5 w-5" />,
                title: "Für alle Gewerke",
                desc: "Elektriker, Maler, Sanitär, Dachdecker, Schreiner, Fliesenleger — Revalo funktioniert für jedes Handwerk, jede Betriebsgröße.",
              },
              {
                icon: <IconUsers className="h-5 w-5" />,
                title: "Hilft auch beim Recruiting",
                desc: "Gute Google-Bewertungen wirken nicht nur auf Kunden. Fachkräfte informieren sich online über Betriebe — ein starkes Profil macht den Unterschied.",
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
                value: "3,8x",
                label: "mehr Bewertungen",
                sub: "durchschnittlich nach 30 Tagen",
              },
              {
                value: "95%",
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
              Häufige Fragen von Handwerksbetrieben
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
            Starten Sie jetzt mit Revalo für Ihren Handwerksbetrieb
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Mehr Bewertungen, mehr Aufträge, bessere Mitarbeiter — unverbindlich
            und persönlich.
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
