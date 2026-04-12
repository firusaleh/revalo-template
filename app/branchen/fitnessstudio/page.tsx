import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bewertungsmanagement für Fitnessstudios & Physiotherapie | Revalo",
  description:
    "Mitglieder und Patienten wählen ihr Fitnessstudio oder ihre Physiotherapie nach Google-Bewertungen. Revalo automatisiert den Bewertungsprozess.",
  keywords:
    "bewertungsmanagement fitnessstudio, google bewertungen fitness, physiotherapie bewertungen, fitness online reputation",
  alternates: { canonical: "/branchen/fitnessstudio" },
  openGraph: {
    title:
      "Bewertungsmanagement für Fitnessstudios & Physiotherapie | Revalo",
    description:
      "Zufriedene Mitglieder und Patienten zu Google-Bewertungen leiten — automatisiert nach Probetraining, Mitgliedschaft oder Behandlung.",
    url: "https://getrevalo.de/branchen/fitnessstudio",
    type: "website",
    locale: "de_DE",
    siteName: "Revalo",
  },
};

/* ── Icons (inline SVG) ───────────────────────────────────── */

function IconDumbbell({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 6.5h11M6.5 17.5h11" />
      <rect x="2" y="8" width="4" height="8" rx="1" />
      <rect x="18" y="8" width="4" height="8" rx="1" />
      <rect x="6" y="5" width="2" height="14" rx="1" />
      <rect x="16" y="5" width="2" height="14" rx="1" />
    </svg>
  );
}

function IconHeart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
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

function IconTrending({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
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

function IconRefresh({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
    </svg>
  );
}

/* ── Page ──────────────────────────────────────────────────── */

const faqs = [
  {
    q: "Wann ist der beste Zeitpunkt, Mitglieder um Bewertungen zu bitten?",
    a: "Es gibt drei ideale Zeitpunkte: Erstens direkt nach dem Probetraining — die Begeisterung ist am höchsten. Zweitens nach 3-6 Monaten Mitgliedschaft — das Mitglied hat echte Ergebnisse erzielt und ist langfristig zufrieden. Drittens nach einer erfolgreichen Physiotherapie-Serie. Sie können alle drei Zeitpunkte im Revalo-Dashboard konfigurieren.",
  },
  {
    q: "Was wenn ein Mitglied kündigt und dann negativ bewertet?",
    a: "Revalo kann nach einer Kündigung automatisch eine interne Feedback-Anfrage senden — bevor der Ex-Mitglied auf Google geht. So erfahren Sie den Kündigungsgrund direkt und können reagieren: vielleicht ein Rückgewinnungs-Angebot machen oder zumindest die Kritik intern aufnehmen, statt sie öffentlich zu lesen.",
  },
  {
    q: "Funktioniert das auch für Physiotherapie und Reha?",
    a: "Ja. Physiotherapie-Praxen können Revalo genauso nutzen wie Fitnessstudios. Die Bewertungsanfrage geht nach Abschluss einer Behandlungsserie raus — wenn der Patient seine Fortschritte spürt und die Zufriedenheit am höchsten ist.",
  },
  {
    q: "Können verschiedene Standorte verwaltet werden?",
    a: "Ja. Im Revalo-Dashboard können Sie mehrere Studio-Standorte anlegen, jeweils mit eigenem Google-Bewertungslink. So sehen Sie pro Standort: Anzahl Bewertungen, Durchschnittsbewertung und Trends — alles in einem Dashboard.",
  },
  {
    q: "Ist das Review Gating?",
    a: "Nein. Beim Review Gating werden nur zufriedene Kunden nach einer Bewertung gefragt — das ist verboten. Revalo fragt ALLE Mitglieder nach ihrem Feedback. Der einzige Unterschied: Zufriedene Mitglieder werden zu Google weitergeleitet, unzufriedene erhalten ein internes Feedback-Formular. Jedes Mitglied kann jederzeit auch direkt auf Google bewerten.",
  },
  {
    q: "Was kostet Revalo für Fitnessstudios?",
    a: "Wir bieten individuelle Pakete je nach Studiogröße und Mitgliederzahl — vom Boutique-Studio bis zur Kette mit mehreren Standorten. Fordern Sie ein unverbindliches Angebot an, wir beraten Sie persönlich.",
  },
];

export default function FitnessstudioPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Revalo für Fitnessstudios & Physiotherapie",
    applicationCategory: "BusinessApplication",
    description:
      "Bewertungsmanagement-Software für Fitnessstudios und Physiotherapie-Praxen. Automatisiert den Prozess, nach Probetraining, Mitgliedschaft oder Behandlung Google-Bewertungen zu sammeln.",
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
            <span className="text-slate-400">Fitnessstudio</span>
          </nav>

          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-300">
              <IconDumbbell className="h-4 w-4" />
              Branchenlösung für Fitnessstudios & Physiotherapie
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Mehr Google-Bewertungen{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                für Ihr Fitnessstudio
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              Neujahrs-Vorsätze, Probetraining, Physiotherapie-Empfehlung — der
              erste Schritt ist immer die Google-Suche. Mit Revalo werden
              zufriedene Mitglieder zu Ihren besten Werbeträgern.
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
                <IconDumbbell className="h-4 w-4" /> Nach dem Probetraining
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
                <IconHeart className="h-4 w-4" /> Studio + Physiotherapie
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
              Das Bewertungsproblem für Fitnessstudios
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Tausende Mitglieder, aber nur eine Handvoll Bewertungen — und
              die meisten stammen von frustrierten Kündigern.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <IconUsers className="h-6 w-6 text-amber-400" />,
                title: "Hohe Fluktuation, keine Bewertungen",
                desc: "Fitnessstudios haben ständig neue Mitglieder — und verlieren welche. Aber niemand fragt die zufriedenen systematisch nach einer Bewertung.",
              },
              {
                icon: <IconStar className="h-6 w-6 text-red-400" />,
                title: "Kündiger bewerten negativ",
                desc: "Wer kündigt, ist oft frustriert — über Vertragslaufzeiten, Sauberkeit oder Service. Diese Mitglieder gehen direkt zu Google und hinterlassen 1-Stern-Bewertungen.",
              },
              {
                icon: <IconHeart className="h-6 w-6 text-sky-400" />,
                title: "Physio-Patienten bewerten selten",
                desc: "Physiotherapie-Patienten sind oft hochzufrieden, aber bewerten fast nie. Ohne aktive Anfrage geht dieses Potenzial komplett verloren.",
              },
              {
                icon: <IconTrending className="h-6 w-6 text-purple-400" />,
                title: "Lokaler Wettbewerb ist hoch",
                desc: "In jeder Stadt gibt es mehrere Studios. Wer die besten Google-Bewertungen hat, gewinnt die Neujahrs-Vorsatz-Kunden und Probetrainings.",
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
              Fitnessstudios mit 4,5+ Sternen gewinnen bis zu{" "}
              <span className="text-sky-400">45% mehr Probetrainings</span>{" "}
              über Google
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Quelle: BrightLocal Local Consumer Review Survey 2025
            </p>
          </div>
        </div>
      </section>

      {/* ── Lösung: Smart-Routing für Fitness ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Wie Revalo für Fitnessstudios funktioniert
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Drei Schritte — vollautomatisch nach Probetraining,
              Mitgliedschaft oder Physiotherapie-Behandlung.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent lg:block" />

            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  step: "1",
                  title: "Bewertungsanfrage versenden",
                  desc: "Nach dem Probetraining, nach X Monaten Mitgliedschaft oder nach einer Behandlungsserie erhält das Mitglied automatisch eine Anfrage per E-Mail oder WhatsApp.",
                },
                {
                  step: "2",
                  title: "Mitglied bewertet",
                  desc: "Das Mitglied gibt auf einer einfachen Skala von 1-5 Sternen an, wie zufrieden es mit dem Studio oder der Behandlung ist. Dauert nur wenige Sekunden.",
                },
                {
                  step: "3",
                  title: "Smart-Routing entscheidet",
                  desc: "4-5 Sterne: Weiterleitung zu Google Reviews. 1-3 Sterne: Internes Feedback-Formular. Frust über Sauberkeit, Wartezeiten oder Verträge bleibt bei Ihnen.",
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

            {/* Fitness-Besonderheit */}
            <div className="mt-6 rounded-xl border border-sky-500/15 bg-sky-500/5 p-4 text-center">
              <p className="text-sm font-medium text-sky-300">
                <IconDumbbell className="mr-1.5 inline h-4 w-4" />
                Fitness-Vorteil: Probetraining = höchste Begeisterung
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Direkt nach dem Probetraining ist die Motivation am höchsten.
                Genau in diesem Moment fragt Revalo nach einer Bewertung — bevor
                der Alltag einkehrt und die Begeisterung nachlässt.
              </p>
            </div>

            <p className="mt-5 text-center text-xs text-slate-500">
              Wichtig: Dies ist <strong className="text-slate-400">kein Review Gating</strong>. Alle
              Mitglieder werden gefragt. Jedes Mitglied kann jederzeit auch
              direkt auf Google bewerten.{" "}
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
              Warum Fitnessstudios Revalo nutzen
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <IconZap className="h-5 w-5" />,
                title: "Nach dem Probetraining",
                desc: "Die Begeisterung nach dem ersten Training ist am höchsten. Revalo nutzt diesen Moment automatisch — bevor der Alltag einkehrt und das Mitglied vergisst, zu bewerten.",
              },
              {
                icon: <IconRefresh className="h-5 w-5" />,
                title: "Langzeitmitglieder reaktivieren",
                desc: "Mitglieder, die seit Monaten zufrieden trainieren, werden regelmäßig erinnert, ihre Bewertung zu aktualisieren. So bleibt Ihr Profil immer aktuell.",
              },
              {
                icon: <IconMessage className="h-5 w-5" />,
                title: "Kündiger-Feedback intern auffangen",
                desc: "Wenn ein Mitglied kündigt, erhält es eine interne Feedback-Anfrage. So erfahren Sie den Grund — und verhindern, dass der Frust auf Google landet.",
              },
              {
                icon: <IconHeart className="h-5 w-5" />,
                title: "Studio + Physiotherapie",
                desc: "Revalo funktioniert für Fitnessstudios und Physiotherapie-Praxen gleichermaßen. Unterschiedliche Vorlagen für Mitglieder und Patienten.",
              },
              {
                icon: <IconBarChart className="h-5 w-5" />,
                title: "Kursleiter & Therapeuten bewerten",
                desc: "Im Dashboard sehen Sie, welcher Kursleiter oder Therapeut die besten Bewertungen generiert. Wertvolle Daten für Qualitätsmanagement und Personalplanung.",
              },
              {
                icon: <IconTrending className="h-5 w-5" />,
                title: "Mitgliedergewinnung durch Social Proof",
                desc: "Jede neue 5-Sterne-Bewertung ist ein Vertrauenssignal für potenzielle Mitglieder. Besonders wirksam in der Neujahrs-Saison, wenn die Nachfrage am höchsten ist.",
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
                value: "3,9x",
                label: "mehr Bewertungen",
                sub: "durchschnittlich nach 60 Tagen",
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
              Häufige Fragen von Fitnessstudios
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
            Starten Sie jetzt mit Revalo für Ihr Studio
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Mehr Mitglieder, stärkerer Social Proof — automatisiert nach jedem
            Probetraining, unverbindlich und DSGVO-konform.
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
