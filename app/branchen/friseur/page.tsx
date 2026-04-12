import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bewertungsmanagement für Friseursalons & Beauty | Revalo",
  description:
    "Friseure und Beauty-Salons leben von Empfehlungen und Google-Bewertungen. Revalo automatisiert den Prozess — nach jedem Termin, per WhatsApp.",
  keywords:
    "bewertungsmanagement friseur, google bewertungen friseursalon, beauty salon bewertungen, kosmetikstudio rezensionen",
  alternates: { canonical: "/branchen/friseur" },
  openGraph: {
    title:
      "Bewertungsmanagement für Friseursalons & Beauty | Revalo",
    description:
      "Nach jedem Termin automatisch Google-Bewertungen sammeln — per WhatsApp, 1-2 Stunden nach dem Salonbesuch.",
    url: "https://getrevalo.de/branchen/friseur",
    type: "website",
    locale: "de_DE",
    siteName: "Revalo",
  },
};

/* ── Icons (inline SVG) ───────────────────────────────────── */

function IconScissors({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function IconSparkles({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
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

function IconMessage({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
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

function IconSmartphone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12" y2="18.01" />
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

function IconBarChart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
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
    q: "Wann genau wird die Bewertungsanfrage gesendet?",
    a: "Standardmäßig 1-2 Stunden nach dem Termin — wenn die Kundin ihre neue Frisur Freunden und Kollegen zeigt und die Begeisterung am höchsten ist. Den Zeitpunkt können Sie im Dashboard frei konfigurieren: sofort nach dem Termin, nach 1 Stunde, nach 2 Stunden oder am nächsten Morgen.",
  },
  {
    q: "Kann ich für verschiedene Stylisten bewerten lassen?",
    a: "Ja. Im Revalo-Dashboard sehen Sie, welcher Stylist welche Bewertungen generiert hat. So erkennen Sie Top-Performer, können gezielt Feedback geben und intern fair auswerten — ohne dass die Daten öffentlich werden.",
  },
  {
    q: "Was wenn eine Kundin mit der Farbe unzufrieden ist?",
    a: "Genau dafür ist Smart-Routing da. Wenn eine Kundin 1-3 Sterne gibt, wird sie auf ein internes Feedback-Formular geleitet — nicht zu Google. So erfahren Sie direkt von der Unzufriedenheit, können einen kostenlosen Nachbesserungstermin anbieten und die Kundin zurückgewinnen.",
  },
  {
    q: "Funktioniert das auch für Kosmetik und Nagelstudios?",
    a: "Ja. Revalo funktioniert für alle Beauty-Dienstleister: Friseursalons, Kosmetikstudios, Nagelstudios, Barbershops, Waxing-Studios und mehr. Die Vorlagen lassen sich individuell an Ihren Salon-Typ anpassen.",
  },
  {
    q: "Ist das Review Gating?",
    a: "Nein. Beim Review Gating werden nur zufriedene Kunden nach einer Bewertung gefragt — das ist verboten. Revalo fragt ALLE Kunden nach ihrem Feedback. Der einzige Unterschied: Zufriedene Kunden werden zu Google weitergeleitet, unzufriedene erhalten ein internes Feedback-Formular. Jeder Kunde kann jederzeit auch direkt auf Google bewerten.",
  },
  {
    q: "Was kostet Revalo für Salons?",
    a: "Wir bieten individuelle Pakete je nach Salongröße und Terminvolumen — vom Ein-Stuhl-Salon bis zur Kette mit mehreren Standorten. Fordern Sie ein unverbindliches Angebot an, wir beraten Sie persönlich.",
  },
];

export default function FriseurPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Revalo für Friseursalons & Beauty",
    applicationCategory: "BusinessApplication",
    description:
      "Bewertungsmanagement-Software für Friseursalons, Kosmetikstudios und Beauty-Salons. Automatisiert den Prozess, nach jedem Termin Google-Bewertungen per WhatsApp zu sammeln.",
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
            <span className="text-slate-400">Friseur</span>
          </nav>

          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-300">
              <IconScissors className="h-4 w-4" />
              Branchenlösung für Friseursalons & Beauty
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Mehr Google-Bewertungen{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                für Ihren Salon
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              Friseure und Beauty-Salons leben von Vertrauen und Empfehlungen.
              Revalo macht aus zufriedenen Kunden automatisch begeisterte
              Google-Bewerter.
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
                <IconSmartphone className="h-4 w-4" /> WhatsApp-First
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
                <IconClock className="h-4 w-4" /> 1-2h nach dem Termin
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
              Das Bewertungsproblem für Friseursalons
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Begeisterte Kunden erzählen es Freunden — aber nicht Google.
              Und unzufriedene Kunden tun genau das Gegenteil.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <IconSparkles className="h-6 w-6 text-amber-400" />,
                title: "Begeistert — aber bewertet nicht",
                desc: "Die Kundin verlässt den Salon glücklich, zeigt ihre neue Frisur herum — aber eine Google-Bewertung? Daran denkt niemand. Ohne aktive Anfrage geht das Potenzial verloren.",
              },
              {
                icon: <IconUsers className="h-6 w-6 text-red-400" />,
                title: "Mund-zu-Mund reicht nicht mehr",
                desc: "Eine persönliche Empfehlung erreicht 5-10 Personen. Eine Google-Bewertung erreicht hunderte. Wer nur auf Mundpropaganda setzt, verschenkt Reichweite.",
              },
              {
                icon: <IconMessage className="h-6 w-6 text-sky-400" />,
                title: "Emotionale Negativ-Bewertungen",
                desc: "Ein misslungener Haarschnitt oder eine Farbe, die nicht gefällt — der Frust ist hoch und landet sofort auf Google. Ohne Smart-Routing gibt es keinen Puffer.",
              },
              {
                icon: <IconTrending className="h-6 w-6 text-purple-400" />,
                title: "3 Friseure in jeder Straße",
                desc: "Die lokale Konkurrenz ist enorm. Wer bei 'Friseur in der Nähe' die besten Bewertungen hat, bekommt die Walk-in-Kunden und Neutermine.",
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
              Friseursalons mit 4,5+ Sternen erhalten bis zu{" "}
              <span className="text-sky-400">50% mehr Neutermine</span>{" "}
              über Google
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Quelle: BrightLocal Local Consumer Review Survey 2025
            </p>
          </div>
        </div>
      </section>

      {/* ── Lösung: Smart-Routing für Salons ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Wie Revalo für Friseursalons funktioniert
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Drei Schritte — vollautomatisch 1-2 Stunden nach jedem
              Salonbesuch.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent lg:block" />

            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  step: "1",
                  title: "WhatsApp-Anfrage versenden",
                  desc: "1-2 Stunden nach dem Termin erhält die Kundin automatisch eine WhatsApp-Nachricht. Genau dann, wenn sie ihre neue Frisur Freunden und Kollegen zeigt.",
                },
                {
                  step: "2",
                  title: "Kundin bewertet",
                  desc: "Die Kundin gibt auf einer einfachen Skala von 1-5 Sternen an, wie zufrieden sie mit dem Ergebnis war. Dauert nur wenige Sekunden — direkt vom Smartphone.",
                },
                {
                  step: "3",
                  title: "Smart-Routing entscheidet",
                  desc: "4-5 Sterne: Weiterleitung zu Google Reviews. 1-3 Sterne: Internes Feedback-Formular. So können Sie bei Unzufriedenheit einen Nachbesserungstermin anbieten.",
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

            {/* Salon-Besonderheit */}
            <div className="mt-6 rounded-xl border border-sky-500/15 bg-sky-500/5 p-4 text-center">
              <p className="text-sm font-medium text-sky-300">
                <IconClock className="mr-1.5 inline h-4 w-4" />
                Salon-Vorteil: 1-2 Stunden nach dem Termin
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Die Kundin zeigt gerade ihre neue Frisur herum, bekommt
                Komplimente — genau in diesem Moment kommt die
                Bewertungsanfrage. Höchste Begeisterung = beste Bewertung.
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
              Warum Friseursalons Revalo nutzen
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <IconClock className="h-5 w-5" />,
                title: "1-2h nach dem Termin",
                desc: "Die Kundin zeigt ihre neue Frisur herum, bekommt Komplimente — und genau dann kommt die Bewertungsanfrage per WhatsApp. Höchste Begeisterung, beste Bewertung.",
              },
              {
                icon: <IconSmartphone className="h-5 w-5" />,
                title: "WhatsApp-First",
                desc: "Die Beauty-Branche lebt von WhatsApp. Terminbestätigungen, Erinnerungen — und jetzt auch Bewertungsanfragen. Über 90% Öffnungsrate, direkt auf dem Smartphone.",
              },
              {
                icon: <IconMessage className="h-5 w-5" />,
                title: "Farbunfall? Feedback intern",
                desc: "Wenn eine Kundin mit der Farbe oder dem Schnitt unzufrieden ist, erfahren Sie es direkt. Sie können einen kostenlosen Nachbesserungstermin anbieten — bevor es auf Google landet.",
              },
              {
                icon: <IconBarChart className="h-5 w-5" />,
                title: "Stylisten-Auswertung",
                desc: "Im Dashboard sehen Sie, welcher Stylist die besten Bewertungen generiert. Wertvolle Daten für Personalentwicklung, Teamführung und faire Auswertung.",
              },
              {
                icon: <IconSparkles className="h-5 w-5" />,
                title: "Friseur, Kosmetik, Nails & mehr",
                desc: "Revalo funktioniert für alle Beauty-Dienstleister: Friseursalons, Kosmetikstudios, Nagelstudios, Barbershops und Waxing-Studios.",
              },
              {
                icon: <IconTrending className="h-5 w-5" />,
                title: "Social Proof für Instagram",
                desc: "Die besten Google-Bewertungen als Instagram-Story oder -Post teilen. Authentische Kundenstimmen wirken stärker als jede Werbung.",
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
                value: "4,5x",
                label: "mehr Bewertungen",
                sub: "durchschnittlich nach 60 Tagen",
              },
              {
                value: "96%",
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
              Häufige Fragen von Friseursalons
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
            Starten Sie jetzt mit Revalo für Ihren Salon
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Mehr Neutermine, stärkerer Social Proof — automatisiert nach jedem
            Salonbesuch, unverbindlich und DSGVO-konform.
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
