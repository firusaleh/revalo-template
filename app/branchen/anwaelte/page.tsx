import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bewertungsmanagement für Rechtsanwälte & Kanzleien | Revalo",
  description:
    "Mandanten suchen Anwälte zunehmend online. Revalo hilft Kanzleien, systematisch mehr Google-Bewertungen zu gewinnen — diskret, DSGVO-konform und automatisiert.",
  keywords:
    "bewertungsmanagement kanzlei, google bewertungen anwalt, rechtsanwalt online reputation, kanzlei bewertungen",
  alternates: { canonical: "/branchen/anwaelte" },
  openGraph: {
    title:
      "Bewertungsmanagement für Rechtsanwälte & Kanzleien | Revalo",
    description:
      "Mandanten vertrauen auf Online-Bewertungen bei der Anwaltswahl. Smart-Routing leitet zufriedene Mandanten zu Google — diskret und professionell.",
    url: "https://getrevalo.de/branchen/anwaelte",
    type: "website",
    locale: "de_DE",
    siteName: "Revalo",
  },
};

/* ── Icons (inline SVG) ───────────────────────────────────── */

function IconScale({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M4.5 7.5L12 3l7.5 4.5" />
      <path d="M4.5 7.5l-2 8h9l-2-8" />
      <path d="M19.5 7.5l-2 8h9l-2-8" />
      <circle cx="4.5" cy="15.5" r="2.5" />
      <circle cx="19.5" cy="15.5" r="2.5" />
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

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}

function IconFileText({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
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

function IconZap({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

/* ── Page ──────────────────────────────────────────────────── */

const faqs = [
  {
    q: "Ist es standesrechtlich erlaubt, um Bewertungen zu bitten?",
    a: "Ja. Das Bitten um ehrliche Bewertungen ist standesrechtlich unbedenklich, solange keine Gegenleistung versprochen wird und die Bewertung freiwillig erfolgt. Revalo versendet eine neutrale, professionelle Anfrage nach Mandatsabschluss — ohne Anreize oder Druck. Die BRAO verbietet lediglich irreführende Werbung, nicht das Einholen authentischer Mandantenbewertungen.",
  },
  {
    q: "Was wenn die Gegenseite eine Negativ-Bewertung schreibt?",
    a: "Das ist leider ein häufiges Problem bei Anwaltskanzleien. Revalo kann Gegenseiten-Bewertungen nicht verhindern, aber: Je mehr authentische Bewertungen von echten Mandanten Sie haben, desto weniger fällt eine einzelne negative Bewertung ins Gewicht. Zusätzlich können Sie unangemessene Bewertungen bei Google melden lassen.",
  },
  {
    q: "Können verschiedene Anwälte der Kanzlei separate Bewertungen sammeln?",
    a: "Ja. Im Revalo-Dashboard können Sie Bewertungsanfragen pro Anwalt oder pro Rechtsgebiet versenden und auswerten. So sehen Sie, welcher Kollege oder welches Rechtsgebiet die besten Bewertungen generiert — wertvolle Daten für Ihre Kanzleientwicklung.",
  },
  {
    q: "Wie diskret ist die Bewertungsanfrage?",
    a: "Sehr diskret. Die E-Mail wird im professionellen Ton versendet, passend zur seriösen Kanzlei-Kommunikation. Kein aufdringliches Marketing, keine bunten Sterne. Der Mandant erhält eine schlichte, höfliche Bitte um Feedback — im gleichen Ton wie Ihre sonstige Korrespondenz.",
  },
  {
    q: "Ist das Review Gating?",
    a: "Nein. Beim Review Gating werden nur zufriedene Kunden nach einer Bewertung gefragt — das ist verboten. Revalo fragt ALLE Mandanten nach ihrem Feedback. Der einzige Unterschied: Zufriedene Mandanten werden zu Google weitergeleitet, unzufriedene erhalten ein internes Feedback-Formular. Jeder Mandant kann jederzeit auch direkt auf Google bewerten.",
  },
  {
    q: "Was kostet Revalo für Kanzleien?",
    a: "Wir bieten individuelle Pakete je nach Kanzleigröße — von der Einzelkanzlei bis zur Großkanzlei mit mehreren Standorten. Fordern Sie ein unverbindliches Angebot an, wir beraten Sie persönlich und zeigen Ihnen eine Live-Demo.",
  },
];

export default function AnwaeltePage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Revalo für Rechtsanwälte & Kanzleien",
    applicationCategory: "BusinessApplication",
    description:
      "Bewertungsmanagement-Software für Rechtsanwaltskanzleien. Automatisiert den Prozess, zufriedene Mandanten diskret und professionell zu Google-Bewertungen zu leiten und sensibles Feedback intern aufzufangen.",
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
            <span className="text-slate-400">Anwälte</span>
          </nav>

          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-300">
              <IconScale className="h-4 w-4" />
              Branchenlösung für Kanzleien
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Mehr Google-Bewertungen{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                für Ihre Kanzlei
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              Mandanten vertrauen auf Online-Bewertungen bei der Anwaltswahl.
              Revalo hilft Ihnen, diskret und professionell mehr
              5-Sterne-Bewertungen zu sammeln — nach jedem erfolgreichen Mandat.
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
                <IconMail className="h-4 w-4" /> Diskret per E-Mail
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
                <IconScale className="h-4 w-4" /> Standesrechtlich konform
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
              Das Bewertungsproblem für Kanzleien
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Mandanten wechseln selten den Anwalt — aber bei der Erstwahl
              entscheiden Google-Bewertungen über Vertrauen oder Ablehnung.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: <IconStar className="h-6 w-6 text-amber-400" />,
                title: "Erstwahl entscheidet alles",
                desc: "Bei der ersten Anwaltswahl vertrauen Mandanten auf Google-Bewertungen. Wer hier nicht überzeugt, verliert den Mandanten an die Konkurrenz — bevor er je angerufen hat.",
              },
              {
                icon: <IconScale className="h-6 w-6 text-red-400" />,
                title: "Bitten fühlt sich unprofessionell an",
                desc: "Viele Juristen empfinden es als unangemessen, aktiv um Bewertungen zu bitten. Ohne System bleiben aber selbst die zufriedensten Mandanten stumm.",
              },
              {
                icon: <IconMessage className="h-6 w-6 text-sky-400" />,
                title: "Emotionale Negativ-Bewertungen",
                desc: "Unzufriedene Gegenseiten, emotionale Mandanten im Familienrecht oder Enttäuschung trotz korrekter Arbeit — negative Bewertungen kommen schnell und wiegen schwer.",
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
              Kanzleien mit 4,5+ Sternen erhalten bis zu{" "}
              <span className="text-sky-400">38% mehr Erstanfragen</span>{" "}
              über Google
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Quelle: BrightLocal Local Consumer Review Survey 2025
            </p>
          </div>
        </div>
      </section>

      {/* ── Lösung: Smart-Routing für Kanzleien ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Wie Revalo für Kanzleien funktioniert
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Drei Schritte — diskret, professionell und vollautomatisch nach
              jedem Mandatsabschluss.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent lg:block" />

            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  step: "1",
                  title: "Diskrete Bewertungsanfrage",
                  desc: "Nach Mandatsabschluss erhält der Mandant eine professionelle E-Mail mit der Bitte um Feedback. Der Ton passt zur seriösen Kanzlei-Kommunikation.",
                },
                {
                  step: "2",
                  title: "Mandant bewertet",
                  desc: "Der Mandant gibt auf einer einfachen Skala von 1-5 Sternen an, wie zufrieden er mit der Beratung war. Dauert nur wenige Sekunden.",
                },
                {
                  step: "3",
                  title: "Smart-Routing entscheidet",
                  desc: "4-5 Sterne: Weiterleitung zu Google Reviews. 1-3 Sterne: Internes Feedback-Formular. Sensibles Feedback bleibt vertraulich bei Ihnen.",
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
                  → Vertrauliches Feedback an Sie
                </p>
              </div>
            </div>

            {/* Kanzlei-Besonderheit */}
            <div className="mt-6 rounded-xl border border-sky-500/15 bg-sky-500/5 p-4 text-center">
              <p className="text-sm font-medium text-sky-300">
                <IconShield className="mr-1.5 inline h-4 w-4" />
                Kanzlei-Vorteil: Besonders wichtig bei sensiblen Rechtsgebieten
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Familienrecht, Arbeitsrecht, Mietrecht — emotionale Mandate erzeugen
                emotionales Feedback. Smart-Routing fängt es intern ab.
              </p>
            </div>

            <p className="mt-5 text-center text-xs text-slate-500">
              Wichtig: Dies ist <strong className="text-slate-400">kein Review Gating</strong>. Alle
              Mandanten werden gefragt. Jeder Mandant kann jederzeit auch direkt
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
              Warum Kanzleien Revalo nutzen
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <IconMail className="h-5 w-5" />,
                title: "Diskret und professionell",
                desc: "Die Bewertungsanfrage passt zum seriösen Kanzlei-Auftritt. Kein aufdringliches Marketing — eine schlichte, höfliche E-Mail im professionellen Ton.",
              },
              {
                icon: <IconClock className="h-5 w-5" />,
                title: "Nach Mandatsabschluss",
                desc: "Der optimale Zeitpunkt: Das Ergebnis steht fest, der Mandant ist zufrieden. Keine Bewertungsanfrage während laufender Verfahren.",
              },
              {
                icon: <IconMessage className="h-5 w-5" />,
                title: "Emotionale Bewertungen auffangen",
                desc: "Enttäuschte Mandanten im Familienrecht oder Arbeitsrecht geben Feedback direkt an Sie — nicht als 1-Stern-Bewertung auf Google.",
              },
              {
                icon: <IconFileText className="h-5 w-5" />,
                title: "Relevant für emotionale Rechtsgebiete",
                desc: "Familienrecht, Arbeitsrecht, Mietrecht — überall dort, wo Emotionen mitspielen, ist Smart-Routing besonders wertvoll.",
              },
              {
                icon: <IconShield className="h-5 w-5" />,
                title: "DSGVO-konform",
                desc: "Sensible Mandantendaten werden geschützt. Alle Daten auf EU-Servern. Keine Weitergabe an Dritte. Vollständige Transparenz.",
              },
              {
                icon: <IconTrending className="h-5 w-5" />,
                title: "Auswertung pro Rechtsgebiet",
                desc: "Sehen Sie, welches Rechtsgebiet oder welcher Anwalt die besten Bewertungen generiert. Wertvolle Daten für Ihre Kanzleientwicklung.",
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
                value: "3,4x",
                label: "mehr Bewertungen",
                sub: "durchschnittlich nach 60 Tagen",
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
              Häufige Fragen von Kanzleien
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
            Starten Sie jetzt mit Revalo für Ihre Kanzlei
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Mehr Mandantenvertrauen, mehr Erstanfragen — diskret, professionell
            und unverbindlich.
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
