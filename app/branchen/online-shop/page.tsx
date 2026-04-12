import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bewertungsmanagement für Online-Shops & E-Commerce | Revalo",
  description:
    "Google-Bewertungen stärken das Vertrauen in Ihren Online-Shop — zusätzlich zu Trustpilot und Trusted Shops. Revalo automatisiert den Prozess nach jeder Bestellung.",
  keywords:
    "bewertungsmanagement e-commerce, google bewertungen online shop, e-commerce reputation, online shop rezensionen",
  alternates: { canonical: "/branchen/online-shop" },
  openGraph: {
    title:
      "Bewertungsmanagement für Online-Shops & E-Commerce | Revalo",
    description:
      "Google-Bewertungen als Ergänzung zu Trustpilot — automatisiert nach jeder Bestellung mit Smart-Routing.",
    url: "https://getrevalo.de/branchen/online-shop",
    type: "website",
    locale: "de_DE",
    siteName: "Revalo",
  },
};

/* ── Icons (inline SVG) ───────────────────────────────────── */

function IconShoppingCart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

function IconPackage({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
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

function IconCode({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

/* ── Page ──────────────────────────────────────────────────── */

const faqs = [
  {
    q: "Wie ergänzt Revalo Trustpilot und Trusted Shops?",
    a: "Trustpilot und Trusted Shops sammeln Produktbewertungen und Shop-Bewertungen auf ihren eigenen Plattformen. Google-Bewertungen hingegen erscheinen direkt in der Google-Suche und in Google Shopping Ads — dort, wo potenzielle Kunden nach Ihren Produkten suchen. Revalo konzentriert sich auf Google-Bewertungen als Ergänzung zu Ihren bestehenden Bewertungsportalen.",
  },
  {
    q: "Kann die Anfrage automatisch nach Lieferbestätigung gesendet werden?",
    a: "Ja. Über unsere API oder Webhook-Integration kann die Bewertungsanfrage automatisch nach der Lieferbestätigung ausgelöst werden. Sie können den Zeitpunkt frei konfigurieren: sofort nach Lieferung, nach 3 Tagen, nach Ablauf der Rückgabefrist — je nachdem, was für Ihr Geschäft am besten funktioniert.",
  },
  {
    q: "Was wenn ein Kunde eine Retoure plant?",
    a: "Wenn Sie die Anfrage nach Ablauf der Rückgabefrist senden, erreichen Sie nur Kunden, die das Produkt behalten haben — also die zufriedenen. Sollte dennoch ein unzufriedener Kunde antworten, greift das Smart-Routing: 1-3 Sterne werden auf Ihr internes Feedback-Formular geleitet, nicht zu Google.",
  },
  {
    q: "Funktioniert das mit Shopify/WooCommerce?",
    a: "Ja. Revalo bietet API-Integrationen und Webhooks, die sich nahtlos in Shopify, WooCommerce, Magento und andere E-Commerce-Plattformen einbinden lassen. Der automatische Trigger nach Bestellstatus-Änderung (z.B. 'geliefert') ist in wenigen Minuten eingerichtet.",
  },
  {
    q: "Ist das Review Gating?",
    a: "Nein. Beim Review Gating werden nur zufriedene Kunden nach einer Bewertung gefragt — das ist verboten. Revalo fragt ALLE Kunden nach ihrem Feedback. Der einzige Unterschied: Zufriedene Kunden werden zu Google weitergeleitet, unzufriedene erhalten ein internes Feedback-Formular. Jeder Kunde kann jederzeit auch direkt auf Google bewerten.",
  },
  {
    q: "Was kostet Revalo für Online-Shops?",
    a: "Wir bieten individuelle Pakete je nach Bestellvolumen und Shop-Größe — vom kleinen Nischenshop bis zum großen E-Commerce-Unternehmen mit tausenden Bestellungen pro Monat. Fordern Sie ein unverbindliches Angebot an, wir beraten Sie persönlich.",
  },
];

export default function OnlineShopPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Revalo für Online-Shops & E-Commerce",
    applicationCategory: "BusinessApplication",
    description:
      "Bewertungsmanagement-Software für Online-Shops und E-Commerce. Automatisiert den Prozess, nach jeder Bestellung Google-Bewertungen zu sammeln — als Ergänzung zu Trustpilot und Trusted Shops.",
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
            <span className="text-slate-400">Online-Shop</span>
          </nav>

          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-300">
              <IconShoppingCart className="h-4 w-4" />
              Branchenlösung für Online-Shops & E-Commerce
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Mehr Google-Bewertungen{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                für Ihren Online-Shop
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              Trustpilot und Trusted Shops sind nicht alles. Google-Bewertungen
              verbessern Ihre Sichtbarkeit UND das Kundenvertrauen. Revalo
              automatisiert beides.
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
                <IconPackage className="h-4 w-4" /> Nach Lieferung automatisch
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
                <IconCode className="h-4 w-4" /> API-Integration verfügbar
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
              Das Bewertungsproblem für Online-Shops
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Hunderte Bestellungen pro Tag — aber kaum Google-Bewertungen.
              Und wenn, dann meist von frustrierten Retourensendern.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <IconStar className="h-6 w-6 text-amber-400" />,
                title: "Google wird vergessen",
                desc: "Online-Shops investieren in Trustpilot und Trusted Shops — aber vergessen Google. Dabei erscheinen Google-Bewertungen direkt in der Suche, wo Kunden kaufen.",
              },
              {
                icon: <IconTrending className="h-6 w-6 text-red-400" />,
                title: "Ranking-Faktor ignoriert",
                desc: "Google-Bewertungen beeinflussen das Ranking bei lokalen Suchen und in Google Shopping Ads. Ohne Bewertungen verschenken Sie Sichtbarkeit und Klicks.",
              },
              {
                icon: <IconMessage className="h-6 w-6 text-sky-400" />,
                title: "Retourenfrustration auf Google",
                desc: "Lieferverzögerungen, falsche Größe, beschädigtes Paket — der Frust landet direkt auf Google. Zufriedene Kunden hingegen bewerten nur auf Aufforderung.",
              },
              {
                icon: <IconMail className="h-6 w-6 text-purple-400" />,
                title: "Kein persönlicher Kontakt",
                desc: "Im E-Commerce gibt es keinen Moment an der Theke, um nach einer Bewertung zu fragen. Ohne automatisierten Prozess passiert nichts.",
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
              Online-Shops mit Google-Sternen erhalten bis zu{" "}
              <span className="text-sky-400">35% höhere Klickraten</span>{" "}
              in Google Shopping Ads
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Quelle: Google Merchant Center Benchmark 2025
            </p>
          </div>
        </div>
      </section>

      {/* ── Lösung: Smart-Routing für E-Commerce ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Wie Revalo für Online-Shops funktioniert
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Drei Schritte — vollautomatisch nach Lieferung oder Ablauf
              der Rückgabefrist.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent lg:block" />

            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  step: "1",
                  title: "Bewertungsanfrage versenden",
                  desc: "X Tage nach der Lieferbestätigung erhält der Kunde automatisch eine E-Mail. Der Zeitpunkt ist frei konfigurierbar — z.B. nach Ablauf der Rückgabefrist.",
                },
                {
                  step: "2",
                  title: "Kunde bewertet",
                  desc: "Der Kunde gibt auf einer einfachen Skala von 1-5 Sternen an, wie zufrieden er mit Bestellung, Lieferung und Produkt war. Dauert nur wenige Sekunden.",
                },
                {
                  step: "3",
                  title: "Smart-Routing entscheidet",
                  desc: "4-5 Sterne: Weiterleitung zu Google Reviews. 1-3 Sterne: Internes Feedback-Formular. Beschwerden über Retoure, Lieferung oder Qualität bleiben bei Ihnen.",
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

            {/* E-Commerce-Besonderheit */}
            <div className="mt-6 rounded-xl border border-sky-500/15 bg-sky-500/5 p-4 text-center">
              <p className="text-sm font-medium text-sky-300">
                <IconClock className="mr-1.5 inline h-4 w-4" />
                E-Commerce-Vorteil: Timing nach Rückgabefrist
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Senden Sie die Anfrage nach Ablauf der Rückgabefrist — so
                erreichen Sie nur Kunden, die das Produkt behalten haben.
                Zufriedene Behalter = beste Bewertungen.
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
              Warum Online-Shops Revalo nutzen
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <IconZap className="h-5 w-5" />,
                title: "Nach Lieferung automatisiert",
                desc: "Kein manueller Aufwand. Die Bewertungsanfrage wird automatisch nach Lieferbestätigung oder Bestellstatus-Änderung versendet — vollständig im Hintergrund.",
              },
              {
                icon: <IconShield className="h-5 w-5" />,
                title: "Ergänzung zu Trustpilot & Co.",
                desc: "Google-Bewertungen erscheinen direkt in der Suche und in Shopping Ads. Als Ergänzung zu Trustpilot und Trusted Shops maximieren Sie Ihre Online-Reputation.",
              },
              {
                icon: <IconMessage className="h-5 w-5" />,
                title: "Retourenfrustration intern",
                desc: "Wenn ein Kunde unzufrieden ist — falsche Größe, beschädigtes Paket, Lieferverzögerung — landet das Feedback intern bei Ihnen, nicht auf Google.",
              },
              {
                icon: <IconClock className="h-5 w-5" />,
                title: "Timing konfigurierbar",
                desc: "Sofort nach Lieferung, nach 3 Tagen, nach Ablauf der Rückgabefrist — Sie bestimmen den optimalen Zeitpunkt. Nach der Rückgabefrist erreichen Sie nur zufriedene Behalter.",
              },
              {
                icon: <IconCode className="h-5 w-5" />,
                title: "API-Integration",
                desc: "Nahtlose Integration mit Shopify, WooCommerce, Magento und anderen Plattformen. Automatischer Trigger über Webhooks — Setup in wenigen Minuten.",
              },
              {
                icon: <IconTrending className="h-5 w-5" />,
                title: "Google-Sterne in Shopping Ads",
                desc: "Google-Bewertungen erscheinen als Sterne in Ihren Shopping Ads. Mehr Sterne = höhere Klickrate = mehr Umsatz bei gleichem Werbebudget.",
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
                value: "3,7x",
                label: "mehr Bewertungen",
                sub: "durchschnittlich nach 60 Tagen",
              },
              {
                value: "94%",
                label: "positive Bewertungen",
                sub: "durch intelligentes Smart-Routing",
              },
              {
                value: "<5 Min",
                label: "Setup-Zeit",
                sub: "API-Integration verfügbar",
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
              Häufige Fragen von Online-Shops
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
            Starten Sie jetzt mit Revalo für Ihren Online-Shop
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Mehr Google-Sterne, höhere Klickraten — automatisiert nach jeder
            Bestellung, unverbindlich und DSGVO-konform.
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
