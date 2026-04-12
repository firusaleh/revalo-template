import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bewertungsmanagement für Zahnärzte | Mehr Google-Bewertungen | Revalo",
  description:
    "Patienten mit Zahnarztangst vertrauen besonders auf Bewertungen. Revalo leitet zufriedene Patienten automatisch zu Google und fängt Kritik intern ab.",
  keywords:
    "bewertungsmanagement zahnarzt, google bewertungen zahnarztpraxis, zahnarzt rezensionen, zahnarzt online reputation",
  alternates: { canonical: "/branchen/zahnaerzte" },
  openGraph: {
    title:
      "Bewertungsmanagement für Zahnärzte | Mehr Google-Bewertungen | Revalo",
    description:
      "Über 60% der Deutschen haben Zahnarztangst. Positive Bewertungen sind der #1 Vertrauensfaktor bei der Zahnarztwahl.",
    url: "https://getrevalo.de/branchen/zahnaerzte",
    type: "website",
    locale: "de_DE",
    siteName: "Revalo",
  },
};

/* ── Icons (inline SVG to avoid lucide-react dependency) ──── */

function IconTooth({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8 2 6 5 6 8c0 3 1 5 1 8 0 2 1 6 3 6s2-3 2-3 0 3 2 3 3-4 3-6c0-3 1-5 1-8 0-3-2-6-6-6z" />
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

function IconTrending({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
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

function IconRefresh({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
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
    q: "Funktioniert Revalo mit meiner Zahnarzt-Software (Dampsoft, CGM Z1)?",
    a: "Ja. Revalo arbeitet komplett unabhängig von Ihrer Praxisverwaltungssoftware — egal ob Dampsoft, CGM Z1, Charly oder andere. Sie versenden Bewertungsanfragen über das Revalo-Dashboard oder legen QR-Codes in der Praxis aus. Für größere Praxen bieten wir optional API-Integrationen an.",
  },
  {
    q: "Kann ich nach bestimmten Behandlungen gezielt um Bewertungen bitten?",
    a: "Ja. Sie können im Dashboard verschiedene Bewertungslinks für unterschiedliche Behandlungsarten anlegen — zum Beispiel einen Link nach Prophylaxe, einen nach Zahnersatz und einen nach Implantation. So sehen Sie, welche Behandlungen die besten Bewertungen erzeugen.",
  },
  {
    q: "Was passiert, wenn ein Patient über Schmerzen klagt?",
    a: "Genau dafür ist Smart-Routing da. Wenn ein Patient 1-3 Sterne gibt, wird er auf ein internes Feedback-Formular geleitet — nicht zu Google. So erfahren Sie direkt von der Unzufriedenheit, können den Patienten persönlich kontaktieren und das Problem lösen, bevor es öffentlich wird.",
  },
  {
    q: "Ist das Review Gating?",
    a: "Nein. Beim Review Gating werden nur zufriedene Kunden nach einer Bewertung gefragt — das ist verboten. Revalo fragt ALLE Patienten nach ihrem Feedback. Der einzige Unterschied: Zufriedene Patienten werden zu Google weitergeleitet, unzufriedene erhalten ein internes Feedback-Formular. Jeder Patient kann jederzeit auch direkt auf Google bewerten.",
  },
  {
    q: "Wie schnell sehe ich Ergebnisse?",
    a: "Die meisten Zahnarztpraxen sehen bereits nach 1-2 Wochen die ersten neuen Google-Bewertungen. Der größte Effekt zeigt sich erfahrungsgemäß nach 4-6 Wochen, wenn sich ein regelmäßiger Bewertungsfluss etabliert hat und Ihr Google-Profil deutlich stärker wirkt.",
  },
  {
    q: "Was kostet Revalo für Zahnarztpraxen?",
    a: "Wir bieten individuelle Pakete je nach Praxisgröße und Patientenvolumen. Von der Einzelpraxis bis zum MVZ mit mehreren Standorten — fordern Sie ein unverbindliches Angebot an, wir beraten Sie persönlich.",
  },
];

export default function ZahnaerztePage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Revalo für Zahnarztpraxen",
    applicationCategory: "BusinessApplication",
    description:
      "Bewertungsmanagement-Software für Zahnarztpraxen. Automatisiert den Prozess, zufriedene Patienten zu Google-Bewertungen zu leiten und negatives Feedback — besonders über Schmerzen — intern aufzufangen.",
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
            <span className="text-slate-400">Zahnärzte</span>
          </nav>

          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-300">
              <IconTooth className="h-4 w-4" />
              Branchenlösung für Zahnärzte
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Mehr 5-Sterne-Bewertungen{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                für Ihre Zahnarztpraxis
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              Über 60% der Deutschen haben Zahnarztangst. Positive Bewertungen
              sind der #1 Vertrauensfaktor bei der Zahnarztwahl. Revalo hilft
              Ihnen, zufriedene Patienten automatisch zu 5-Sterne-Bewertungen zu
              leiten — und Kritik über Schmerzen intern abzufangen.
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
                <IconStar className="h-4 w-4" /> Kein Review Gating
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
              Das Bewertungsproblem in Zahnarztpraxen
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Gerade bei Zahnärzten entscheiden Online-Bewertungen über Vertrauen
              oder Ablehnung — weil die Angst vor der Behandlung so tief sitzt.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: <IconHeart className="h-6 w-6 text-red-400" />,
                title: "Zahnarztangst dominiert",
                desc: "Über 60% der Deutschen haben Angst vorm Zahnarzt. Diese Patienten lesen besonders viele Bewertungen, bevor sie einen Termin buchen — und springen bei negativen Erfahrungsberichten sofort ab.",
              },
              {
                icon: <IconMessage className="h-6 w-6 text-amber-400" />,
                title: "Schmerz-Bewertungen schrecken ab",
                desc: "Eine einzige negative Bewertung über Schmerzen bei der Behandlung kann Dutzende potenzielle Angstpatienten abschrecken — selbst wenn 50 andere Patienten zufrieden waren.",
              },
              {
                icon: <IconStar className="h-6 w-6 text-sky-400" />,
                title: "Routine-Patienten schweigen",
                desc: "Patienten, die zur Prophylaxe oder Kontrolluntersuchung kommen, sind zufrieden — aber denken nicht daran, eine Bewertung zu hinterlassen. Ohne System passiert nichts.",
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
              Zahnarztpraxen mit 4,5+ Sternen erhalten bis zu{" "}
              <span className="text-sky-400">35% mehr Terminbuchungen</span>{" "}
              von Neupatienten
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Quelle: BrightLocal Local Consumer Review Survey 2025
            </p>
          </div>
        </div>
      </section>

      {/* ── Lösung: Smart-Routing ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Wie Revalo für Zahnarztpraxen funktioniert
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Drei Schritte — vollautomatisch nach jeder Behandlung.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent lg:block" />

            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  step: "1",
                  title: "Bewertungsanfrage versenden",
                  desc: "Nach der Behandlung — ob Prophylaxe, Füllung oder Implantation — erhält der Patient automatisch eine freundliche Anfrage per WhatsApp, E-Mail oder QR-Code.",
                },
                {
                  step: "2",
                  title: "Patient bewertet",
                  desc: "Der Patient gibt auf einer einfachen Skala von 1-5 Sternen an, wie zufrieden er mit der Behandlung war. Dauert nur wenige Sekunden.",
                },
                {
                  step: "3",
                  title: "Smart-Routing entscheidet",
                  desc: "4-5 Sterne → Direkte Weiterleitung zu Google Reviews. 1-3 Sterne → Internes Feedback-Formular. Kritik über Schmerzen bleibt bei Ihnen.",
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
            <p className="mt-6 text-center text-xs text-slate-500">
              Wichtig: Dies ist <strong className="text-slate-400">kein Review Gating</strong>. Alle
              Patienten werden gefragt. Jeder Patient kann jederzeit auch
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
              Warum Zahnarztpraxen Revalo nutzen
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <IconTrending className="h-5 w-5" />,
                title: "Automatisch nach jeder Behandlung",
                desc: "Ob Prophylaxe, Füllung oder Implantation — nach jeder Behandlung wird automatisch eine Bewertungsanfrage versendet. Sie müssen an nichts denken.",
              },
              {
                icon: <IconHeart className="h-5 w-5" />,
                title: "Zeigt Einfühlungsvermögen",
                desc: "Angstpatienten, die positiv überrascht wurden, hinterlassen die stärksten Bewertungen. Revalo sorgt dafür, dass diese Stimmen auf Google landen.",
              },
              {
                icon: <IconMessage className="h-5 w-5" />,
                title: "Schmerz-Feedback intern lösen",
                desc: "Wenn ein Patient über Schmerzen klagt, erfahren Sie es direkt — nicht über eine öffentliche 1-Stern-Bewertung. So können Sie reagieren und den Patienten zurückgewinnen.",
              },
              {
                icon: <IconTooth className="h-5 w-5" />,
                title: "Trends pro Behandlungsart",
                desc: "Sehen Sie auf einen Blick, welche Behandlungen die besten Bewertungen erzeugen und wo es Verbesserungspotenzial gibt.",
              },
              {
                icon: <IconRefresh className="h-5 w-5" />,
                title: "Recall-System kompatibel",
                desc: "Integrieren Sie Bewertungsanfragen in Ihren bestehenden Recall-Prozess. Patienten erhalten die Anfrage als natürlichen Teil der Nachsorge.",
              },
              {
                icon: <IconShield className="h-5 w-5" />,
                title: "DSGVO-konform, deutsche Server",
                desc: "Alle Daten auf EU-Servern gehostet. Keine Gesundheitsdaten. Datenschutzkonformer Versand via WhatsApp oder E-Mail.",
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
                value: "3,5x",
                label: "mehr Bewertungen",
                sub: "durchschnittlich nach 30 Tagen",
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
              Häufige Fragen von Zahnarztpraxen
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
            Starten Sie jetzt mit Revalo für Ihre Zahnarztpraxis
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Weniger Angst-Absprünge, mehr 5-Sterne-Bewertungen — unverbindlich
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
