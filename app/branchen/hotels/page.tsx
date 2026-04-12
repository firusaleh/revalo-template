import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bewertungsmanagement für Hotels & Ferienwohnungen | Revalo",
  description:
    "95% der Reisenden lesen Bewertungen vor der Buchung. Revalo hilft Hotels und Ferienwohnungen, systematisch mehr Google-Bewertungen zu sammeln.",
  keywords:
    "bewertungsmanagement hotel, google bewertungen hotel, hotel rezensionen, ferienwohnung bewertungen, hotel reputation management",
  alternates: { canonical: "/branchen/hotels" },
  openGraph: {
    title:
      "Bewertungsmanagement für Hotels & Ferienwohnungen | Revalo",
    description:
      "95% der Reisenden lesen Bewertungen vor der Buchung. Smart-Routing leitet zufriedene Gäste zu Google — Beschwerden bleiben intern.",
    url: "https://getrevalo.de/branchen/hotels",
    type: "website",
    locale: "de_DE",
    siteName: "Revalo",
  },
};

/* ── Icons (inline SVG) ───────────────────────────────────── */

function IconHotel({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2z" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
    </svg>
  );
}

function IconBed({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 012 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v2a2 2 0 002 2h0a2 2 0 002-2V8" />
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

function IconQrCode({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="8" height="8" rx="1" />
      <rect x="14" y="2" width="8" height="8" rx="1" />
      <rect x="2" y="14" width="8" height="8" rx="1" />
      <path d="M14 14h2v2h-2zM20 14h2v2h-2zM14 20h2v2h-2zM20 20h2v2h-2zM17 17h2v2h-2z" />
    </svg>
  );
}

function IconGlobe({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
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

function IconMessage({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

function IconStore({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1-4h16l1 4" />
      <path d="M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9" />
      <path d="M9 21V9" />
      <path d="M3 9a2.5 2.5 0 005 0 2.5 2.5 0 005 0 2.5 2.5 0 005 0 2.5 2.5 0 005 0" />
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
    q: "Wie integriere ich Revalo in meinen Checkout-Prozess?",
    a: "Ganz einfach: Am Checkout-Tag wird automatisch eine Bewertungsanfrage per E-Mail oder WhatsApp an den Gast versendet. Sie können den Zeitpunkt selbst bestimmen — direkt beim Checkout oder einige Stunden danach. Alternativ platzieren Sie QR-Codes an der Rezeption oder im Zimmer. Keine PMS-Integration nötig.",
  },
  {
    q: "Funktioniert das auch für Ferienwohnungen auf Airbnb?",
    a: "Ja. Revalo funktioniert unabhängig von der Buchungsplattform. Ob Hotel, Ferienwohnung, Pension oder Apartmenthaus — Sie können nach jedem Aufenthalt eine Bewertungsanfrage versenden, um gezielt Google-Bewertungen zu sammeln, die Ihre lokale Sichtbarkeit stärken.",
  },
  {
    q: "Können verschiedene Häuser/Standorte getrennt verwaltet werden?",
    a: "Ja. Im Revalo-Dashboard können Sie mehrere Standorte oder Häuser anlegen, jeweils mit eigenem Google-Bewertungslink und eigenem QR-Code. So sehen Sie pro Standort: Anzahl Bewertungen, Durchschnittsbewertung und Trends — alles in einem Dashboard.",
  },
  {
    q: "Was passiert bei Beschwerden über Zimmersauberkeit?",
    a: "Wenn ein Gast 1-3 Sterne gibt, wird er auf ein internes Feedback-Formular geleitet — nicht zu Google. Sie erfahren direkt von der Beschwerde und können das Feedback ans Housekeeping weiterleiten. So lösen Sie das Problem intern und verhindern eine negative öffentliche Bewertung.",
  },
  {
    q: "Ist das Review Gating?",
    a: "Nein. Beim Review Gating werden nur zufriedene Kunden nach einer Bewertung gefragt — das ist verboten. Revalo fragt ALLE Gäste nach ihrem Feedback. Der einzige Unterschied: Zufriedene Gäste werden zu Google weitergeleitet, unzufriedene erhalten ein internes Feedback-Formular. Jeder Gast kann jederzeit auch direkt auf Google bewerten.",
  },
  {
    q: "Was kostet Revalo für Hotels?",
    a: "Wir bieten individuelle Pakete je nach Hotelgröße und Zimmeranzahl — vom Boutique-Hotel bis zur Hotelkette. Fordern Sie ein unverbindliches Angebot an, wir beraten Sie persönlich und zeigen Ihnen eine Live-Demo.",
  },
];

export default function HotelsPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Revalo für Hotels & Ferienwohnungen",
    applicationCategory: "BusinessApplication",
    description:
      "Bewertungsmanagement-Software für Hotels und Ferienwohnungen. Automatisiert den Prozess, zufriedene Gäste per E-Mail, WhatsApp oder QR-Code zu Google-Bewertungen zu leiten und Beschwerden intern aufzufangen.",
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
            <span className="text-slate-400">Hotels</span>
          </nav>

          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-300">
              <IconHotel className="h-4 w-4" />
              Branchenlösung für Hotels &amp; Ferienwohnungen
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Mehr Google-Bewertungen{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                für Ihr Hotel
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              95% der Reisenden lesen Bewertungen vor der Buchung. Revalo sorgt
              dafür, dass Ihre zufriedenen Gäste dort landen, wo es zählt — auf
              Google. Mehr Sichtbarkeit, mehr Direktbuchungen.
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
                <IconQrCode className="h-4 w-4" /> QR-Code im Zimmer
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
                <IconZap className="h-4 w-4" /> In 5 Min eingerichtet
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
              Das Bewertungsproblem in der Hotellerie
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Gäste bewerten auf Booking.com und TripAdvisor — aber vergessen
              Google. Dabei entscheidet Google über Ihre lokale Sichtbarkeit.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: <IconGlobe className="h-6 w-6 text-amber-400" />,
                title: "Google wird vergessen",
                desc: "Gäste bewerten auf Booking.com oder TripAdvisor — aber nicht auf Google. Dabei beeinflussen Google-Bewertungen die lokale Sichtbarkeit mehr als alle Buchungsportale zusammen.",
              },
              {
                icon: <IconStar className="h-6 w-6 text-red-400" />,
                title: "Negative Erlebnisse landen sofort online",
                desc: "Ein lautes Zimmer, schlechtes WLAN oder ein unfreundlicher Empfang — verärgerte Gäste schreiben sofort auf Google. Zufriedene Gäste reisen einfach ab.",
              },
              {
                icon: <IconClock className="h-6 w-6 text-sky-400" />,
                title: "Unter 4 Sternen verlieren Sie Buchungen",
                desc: "Hotels mit weniger als 4 Google-Sternen verlieren massiv Direktbuchungen. Potenzielle Gäste wählen die Konkurrenz — bevor Sie überhaupt eine Chance hatten.",
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
              Hotels mit 4,5+ Sternen auf Google erhalten bis zu{" "}
              <span className="text-sky-400">42% mehr Direktbuchungen</span>
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Quelle: BrightLocal Local Consumer Review Survey 2025
            </p>
          </div>
        </div>
      </section>

      {/* ── Lösung: Smart-Routing für Hotellerie ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Wie Revalo für Hotels funktioniert
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Drei Schritte — vollautomatisch am Checkout-Tag. Mehr
              Google-Bewertungen, weniger Booking-Abhängigkeit.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent lg:block" />

            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  step: "1",
                  title: "Bewertungsanfrage am Checkout",
                  desc: "Am Checkout-Tag erhält der Gast automatisch eine freundliche Bewertungsanfrage per E-Mail oder WhatsApp. Alternativ: QR-Code an der Rezeption oder im Zimmer.",
                },
                {
                  step: "2",
                  title: "Gast bewertet",
                  desc: "Der Gast gibt auf einer einfachen Skala von 1-5 Sternen an, wie zufrieden er mit dem Aufenthalt war. Dauert nur wenige Sekunden.",
                },
                {
                  step: "3",
                  title: "Smart-Routing entscheidet",
                  desc: "4-5 Sterne: Weiterleitung zu Google Reviews. 1-3 Sterne: Internes Feedback an Ihr Team. Beschwerden über Zimmer oder Service bleiben bei Ihnen.",
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
                  → Internes Feedback an Ihr Team
                </p>
              </div>
            </div>

            {/* Hotel-Besonderheit */}
            <div className="mt-6 rounded-xl border border-sky-500/15 bg-sky-500/5 p-4 text-center">
              <p className="text-sm font-medium text-sky-300">
                <IconBed className="mr-1.5 inline h-4 w-4" />
                Hotel-Vorteil: Feedback geht direkt ans zuständige Team
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Beschwerden über Zimmersauberkeit ans Housekeeping, Service-Feedback
                an die Rezeption — automatisch zugeordnet.
              </p>
            </div>

            <p className="mt-5 text-center text-xs text-slate-500">
              Wichtig: Dies ist <strong className="text-slate-400">kein Review Gating</strong>. Alle
              Gäste werden gefragt. Jeder Gast kann jederzeit auch direkt auf
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
              Warum Hotels Revalo nutzen
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <IconClock className="h-5 w-5" />,
                title: "Am Checkout — wenn die Erinnerung frisch ist",
                desc: "Die Bewertungsanfrage kommt am Checkout-Tag, wenn der Aufenthalt noch frisch im Gedächtnis ist. Das sorgt für detailliertere, authentischere Bewertungen.",
              },
              {
                icon: <IconQrCode className="h-5 w-5" />,
                title: "QR-Code im Zimmer",
                desc: "Kontaktlose Bewertungseinladung per QR-Code auf dem Zimmer-Aufsteller, an der Rezeption oder auf dem Frühstückstisch. Gäste bewerten bequem vom Smartphone.",
              },
              {
                icon: <IconGlobe className="h-5 w-5" />,
                title: "Mehr Direktbuchungen",
                desc: "Starke Google-Bewertungen reduzieren Ihre Abhängigkeit von Booking.com und HRS. Gäste, die über Google finden, buchen häufiger direkt — ohne Provisionen.",
              },
              {
                icon: <IconMessage className="h-5 w-5" />,
                title: "Beschwerden intern lösen",
                desc: "Klagen über Zimmer, WLAN oder Lautstärke landen direkt bei Ihnen — nicht öffentlich auf Google. So können Sie reagieren und den Gast für den nächsten Besuch gewinnen.",
              },
              {
                icon: <IconStore className="h-5 w-5" />,
                title: "Multi-Property Dashboard",
                desc: "Ein Dashboard für alle Standorte und Häuser. Eigener QR-Code und Bewertungslink pro Property, zentrale Auswertung und Vergleich.",
              },
              {
                icon: <IconTrending className="h-5 w-5" />,
                title: "Saisonale Trends erkennen",
                desc: "Sehen Sie, wann die besten Bewertungen kommen und welche Saisons Verbesserungspotenzial haben. Nutzen Sie Daten für operative Entscheidungen.",
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
                value: "3,6x",
                label: "mehr Google-Bewertungen",
                sub: "durchschnittlich nach 30 Tagen",
              },
              {
                value: "92%",
                label: "positive Bewertungen",
                sub: "durch intelligentes Smart-Routing",
              },
              {
                value: "<5 Min",
                label: "Setup-Zeit",
                sub: "keine PMS-Integration nötig",
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
              Häufige Fragen von Hoteliers
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
            Starten Sie jetzt mit Revalo für Ihr Hotel
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Mehr Google-Bewertungen, mehr Direktbuchungen, weniger
            Portal-Abhängigkeit — unverbindlich testen.
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
