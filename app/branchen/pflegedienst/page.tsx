import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bewertungsmanagement für Pflegedienste & Seniorenheime | Revalo",
  description:
    "Angehörige suchen Pflegedienste online. Bewertungen sind bei dieser sensiblen Entscheidung der wichtigste Vertrauensfaktor. Revalo hilft, systematisch Bewertungen zu sammeln.",
  keywords:
    "bewertungsmanagement pflegedienst, google bewertungen pflege, seniorenheim bewertungen, ambulante pflege online reputation",
  alternates: { canonical: "/branchen/pflegedienst" },
  openGraph: {
    title:
      "Bewertungsmanagement für Pflegedienste & Seniorenheime | Revalo",
    description:
      "Vertrauen schaffen durch authentische Bewertungen von Angehörigen — einfühlsam, automatisiert und DSGVO-konform.",
    url: "https://getrevalo.de/branchen/pflegedienst",
    type: "website",
    locale: "de_DE",
    siteName: "Revalo",
  },
};

/* ── Icons (inline SVG) ───────────────────────────────────── */

function IconHeartHandshake({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z" />
      <path d="M12 5L9.04 7.96a2.17 2.17 0 000 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 013.79 0l2.96 2.66" />
      <path d="M18 15l-2-2" />
      <path d="M15 18l-2-2" />
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

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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

function IconTrending({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
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


/* ── Page ──────────────────────────────────────────────────── */

const faqs = [
  {
    q: "Werden Bewohner oder Angehörige um Bewertungen gebeten?",
    a: "In der Regel die Angehörigen — denn sie sind die Entscheidungsträger, die den Pflegedienst recherchiert und ausgewählt haben. Sie können im Revalo-Dashboard konfigurieren, wer die Bewertungsanfrage erhält. Bei ambulanten Diensten können auch die Pflegebedürftigen selbst angeschrieben werden, sofern sie dazu in der Lage sind.",
  },
  {
    q: "Wie einfühlsam ist die Bewertungsanfrage formuliert?",
    a: "Sehr einfühlsam. Die Vorlagen sind speziell für den Pflegebereich geschrieben — kein aufdringlicher Marketing-Ton, sondern eine wertschätzende Bitte um ehrliches Feedback. Sie können die Texte jederzeit anpassen und an den Ton Ihres Hauses angleichen.",
  },
  {
    q: "Was wenn Angehörige über Personalwechsel klagen?",
    a: "Genau dafür ist Smart-Routing da. Wenn ein Angehöriger 1-3 Sterne gibt, wird er auf ein internes Feedback-Formular geleitet — nicht zu Google. So erfahren Sie direkt von der Unzufriedenheit und können das Gespräch suchen: Pflegerwechsel erklären, Verbesserungen zusagen oder Missverständnisse klären.",
  },
  {
    q: "Funktioniert das auch für stationäre Einrichtungen?",
    a: "Ja. Revalo funktioniert für ambulante Pflegedienste, Tagespflege, betreutes Wohnen und stationäre Seniorenheime gleichermaßen. Für stationäre Einrichtungen empfehlen wir quartalsweise Anfragen an Angehörige — so bleibt der Prozess unaufdringlich.",
  },
  {
    q: "Ist das Review Gating?",
    a: "Nein. Beim Review Gating werden nur zufriedene Kunden nach einer Bewertung gefragt — das ist verboten. Revalo fragt ALLE Angehörigen nach ihrem Feedback. Der einzige Unterschied: Zufriedene Angehörige werden zu Google weitergeleitet, unzufriedene erhalten ein internes Feedback-Formular. Jeder Angehörige kann jederzeit auch direkt auf Google bewerten.",
  },
  {
    q: "Was kostet Revalo für Pflegedienste?",
    a: "Wir bieten individuelle Pakete je nach Einrichtungsgröße und Bewohnerzahl — vom kleinen ambulanten Dienst bis zum Seniorenheim mit mehreren Standorten. Fordern Sie ein unverbindliches Angebot an, wir beraten Sie persönlich.",
  },
];

export default function PflegedienstPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Revalo für Pflegedienste & Seniorenheime",
    applicationCategory: "BusinessApplication",
    description:
      "Bewertungsmanagement-Software für Pflegedienste und Seniorenheime. Automatisiert den Prozess, einfühlsam und DSGVO-konform Google-Bewertungen von Angehörigen zu sammeln.",
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
            <span className="text-slate-400">Pflegedienst</span>
          </nav>

          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-300">
              <IconHeartHandshake className="h-4 w-4" />
              Branchenlösung für Pflegedienste & Seniorenheime
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Mehr Google-Bewertungen{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                für Ihren Pflegedienst
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              Die Wahl des richtigen Pflegedienstes ist eine der sensibelsten
              Entscheidungen für Angehörige. Positive Bewertungen schaffen das
              nötige Vertrauen.
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
                <IconHeart className="h-4 w-4" /> Einfühlsame Kommunikation
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
                <IconUsers className="h-4 w-4" /> Für Angehörige optimiert
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
              Das Bewertungsproblem für Pflegedienste
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Angehörige vertrauen Google-Bewertungen bei der wichtigsten
              Entscheidung für ihre Liebsten — und Ihr Profil hat zu wenige.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <IconStar className="h-6 w-6 text-amber-400" />,
                title: "Angehörige recherchieren online",
                desc: "Die Suche nach einem Pflegedienst beginnt fast immer bei Google. Angehörige lesen Bewertungen besonders aufmerksam — bei dieser sensiblen Entscheidung zählt jede Stimme.",
              },
              {
                icon: <IconUsers className="h-6 w-6 text-red-400" />,
                title: "Wenige Bewertungen = kein Vertrauen",
                desc: "Ein Pflegedienst mit 3 Bewertungen wirkt nicht vertrauenswürdig — egal wie gut die Pflege ist. Angehörige wählen den Dienst mit 4,8 Sternen und 50+ Bewertungen.",
              },
              {
                icon: <IconMessage className="h-6 w-6 text-sky-400" />,
                title: "Emotionale Negativ-Bewertungen",
                desc: "Eine fehlende Pflegekraft, ein Kommunikationsproblem — bei der Pflege eines Angehörigen ist jedes Problem emotional aufgeladen. Ohne Puffer landet der Frust auf Google.",
              },
              {
                icon: <IconTrending className="h-6 w-6 text-purple-400" />,
                title: "Recruiting leidet mit",
                desc: "Pflegekräftemangel ist real. Gute Pflegekräfte googeln ihren potenziellen Arbeitgeber. Negative Bewertungen schrecken nicht nur Angehörige, sondern auch Bewerber ab.",
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
              Pflegedienste mit 4,5+ Sternen erhalten bis zu{" "}
              <span className="text-sky-400">55% mehr Anfragen</span>{" "}
              von Angehörigen
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Quelle: BrightLocal Local Consumer Review Survey 2025
            </p>
          </div>
        </div>
      </section>

      {/* ── Lösung: Smart-Routing für Pflegedienste ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Wie Revalo für Pflegedienste funktioniert
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Drei Schritte — einfühlsam, automatisiert und quartalsweise
              an Angehörige gerichtet.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent lg:block" />

            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  step: "1",
                  title: "Einfühlsame Anfrage versenden",
                  desc: "Quartalsweise erhalten Angehörige eine professionelle, wertschätzende E-Mail mit der Bitte um ehrliches Feedback. Kein Marketing-Ton, sondern echtes Interesse an ihrer Meinung.",
                },
                {
                  step: "2",
                  title: "Angehöriger bewertet",
                  desc: "Der Angehörige gibt auf einer einfachen Skala von 1-5 Sternen an, wie zufrieden er mit der Pflege ist. Dauert nur wenige Sekunden — respektvoll und unkompliziert.",
                },
                {
                  step: "3",
                  title: "Smart-Routing entscheidet",
                  desc: "4-5 Sterne: Weiterleitung zu Google Reviews. 1-3 Sterne: Internes Feedback-Formular. Sorgen über Personalwechsel oder Kommunikation erreichen Sie direkt.",
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

            {/* Pflege-Besonderheit */}
            <div className="mt-6 rounded-xl border border-sky-500/15 bg-sky-500/5 p-4 text-center">
              <p className="text-sm font-medium text-sky-300">
                <IconHeart className="mr-1.5 inline h-4 w-4" />
                Pflege-Vorteil: Einfühlsame Kommunikation für Angehörige
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Unsere Vorlagen sind speziell für die Pflegebranche geschrieben —
                wertschätzend, respektvoll und nie aufdringlich. Denn bei der
                Pflege eines geliebten Menschen zählt der richtige Ton.
              </p>
            </div>

            <p className="mt-5 text-center text-xs text-slate-500">
              Wichtig: Dies ist <strong className="text-slate-400">kein Review Gating</strong>. Alle
              Angehörigen werden gefragt. Jeder Angehörige kann jederzeit auch
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
              Warum Pflegedienste Revalo nutzen
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <IconClock className="h-5 w-5" />,
                title: "Quartalsweise Anfrage",
                desc: "Regelmäßig, aber nicht aufdringlich. Alle 3 Monate erhalten Angehörige eine einfühlsame Bitte um Feedback — so bleibt Ihr Bewertungsprofil aktuell, ohne zu nerven.",
              },
              {
                icon: <IconUsers className="h-5 w-5" />,
                title: "An Angehörige gerichtet",
                desc: "Die Anfrage geht an die tatsächlichen Entscheidungsträger — die Angehörigen, die den Pflegedienst ausgewählt haben und seine Qualität am besten einschätzen können.",
              },
              {
                icon: <IconHeart className="h-5 w-5" />,
                title: "Einfühlsame Kommunikation",
                desc: "Kein Marketing-Ton, kein Druck. Unsere Vorlagen sind speziell für die Pflegebranche geschrieben — wertschätzend und respektvoll, passend zur Sensibilität des Themas.",
              },
              {
                icon: <IconMessage className="h-5 w-5" />,
                title: "Beschwerden intern lösen",
                desc: "Wenn ein Angehöriger über Personalwechsel, Kommunikation oder Zuverlässigkeit klagt, erfahren Sie es direkt — nicht über eine öffentliche 1-Stern-Bewertung.",
              },
              {
                icon: <IconTrending className="h-5 w-5" />,
                title: "Recruiting-Vorteil",
                desc: "Gute Bewertungen ziehen nicht nur neue Angehörige an, sondern auch Pflegekräfte. In Zeiten des Fachkräftemangels ist ein starkes Google-Profil ein echter Wettbewerbsvorteil.",
              },
              {
                icon: <IconShield className="h-5 w-5" />,
                title: "DSGVO im Gesundheitssektor",
                desc: "Besonders im Pflege- und Gesundheitsbereich ist Datenschutz kritisch. Revalo ist vollständig DSGVO-konform — keine Patientendaten werden verarbeitet.",
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
                value: "3,2x",
                label: "mehr Bewertungen",
                sub: "durchschnittlich nach 90 Tagen",
              },
              {
                value: "97%",
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
              Häufige Fragen von Pflegediensten
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
            Starten Sie jetzt mit Revalo für Ihren Pflegedienst
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Mehr Vertrauen bei Angehörigen, stärkeres Recruiting — einfühlsam
            automatisiert, unverbindlich und DSGVO-konform.
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
