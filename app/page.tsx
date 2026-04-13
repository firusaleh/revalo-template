import dynamic from "next/dynamic";
import Image from "next/image";
import { getAdminSettings } from "@/lib/admin-data";
import { LandingNav } from "./landing-nav";

const LandingDemo = dynamic(() => import("./landing-demo").then((m) => m.LandingDemo), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02]">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-sky-500 border-t-transparent" />
    </div>
  ),
});

export default async function Home() {
  const settings = await getAdminSettings();

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes stagger1 { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes stagger2 { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-down { animation: fadeInDown 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float 3s ease-in-out 1s infinite; }
        .animate-float-delayed-2 { animation: float 3s ease-in-out 2s infinite; }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-stagger-1 { animation: stagger1 0.6s ease-out 0.1s forwards; opacity: 0; min-height: 160px; contain: layout; }
        .animate-stagger-2 { animation: stagger1 0.6s ease-out 0.2s forwards; opacity: 0; min-height: 160px; contain: layout; }
        .animate-stagger-3 { animation: stagger1 0.6s ease-out 0.3s forwards; opacity: 0; min-height: 160px; contain: layout; }
        .animate-stagger-4 { animation: stagger1 0.6s ease-out 0.4s forwards; opacity: 0; min-height: 160px; contain: layout; }
        .animate-stagger-5 { animation: stagger1 0.6s ease-out 0.5s forwards; opacity: 0; min-height: 160px; contain: layout; }
        .animate-stagger-6 { animation: stagger1 0.6s ease-out 0.6s forwards; opacity: 0; min-height: 160px; contain: layout; }
      `}</style>

      <div className="min-h-screen bg-slate-950 text-white antialiased">
        {/* Navigation */}
        <LandingNav logoUrl={settings.logoUrl} businessName={settings.businessName} />

        {/* Hero Section */}
        <section className="relative overflow-hidden pb-20 pt-32 sm:pb-32 sm:pt-40">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-sky-950" />
          {/* Radial glow */}
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left - Copy */}
              <div className="text-center lg:text-left">
                <h1 className="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Mehr Google-Bewertungen.{" "}
                  <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                    Automatisch.
                  </span>
                </h1>
                <p className="animate-fade-in-up mt-4 text-base font-medium text-slate-300 sm:text-lg [animation-delay:0.15s]">
                  Die Bewertungsmanagement-Software für lokale Unternehmen. Zufriedene Kunden landen auf Google – kritisches Feedback bleibt bei Ihnen.
                </p>
                <p className="animate-fade-in-up mt-4 text-lg leading-relaxed text-slate-400 sm:text-xl [animation-delay:0.2s]">
                  Revalo leitet zufriedene Kunden direkt zu Google — unzufriedene
                  Kunden geben internes Feedback. So steigt Ihr Rating, ohne
                  negative Reviews.
                </p>
                <div className="animate-fade-in-up mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start [animation-delay:0.4s]">
                  <a
                    href="/kontakt"
                    className="inline-flex items-center rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 hover:shadow-xl hover:shadow-sky-500/30"
                  >
                    Jetzt starten
                    <svg className="ml-2 h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M6.22 4.22a.75.75 0 011.06 0l3.25 3.25a.75.75 0 010 1.06l-3.25 3.25a.75.75 0 01-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 010-1.06z" />
                    </svg>
                  </a>
                  <a
                    href="/demo"
                    className="inline-flex items-center rounded-full border border-slate-700 px-8 py-3.5 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-white/5 hover:text-white"
                  >
                    Demo ansehen
                  </a>
                </div>

                {/* Floating badges */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <span className="animate-float inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
                    ⭐ 4.8 Rating
                  </span>
                  <span className="animate-float-delayed inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                    📈 +47% mehr Reviews
                  </span>
                  <span className="animate-float-delayed-2 inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
                    🛡️ Negative Reviews intern
                  </span>
                </div>
              </div>

              {/* Right - Visual */}
              <div className="relative flex justify-center lg:justify-end">
                {/* Animated routing visual */}
                <div className="relative h-[360px] w-[320px] sm:h-[400px] sm:w-[360px]">
                  {/* Central card */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
                    <div className="mb-4 flex justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} width="28" height="28" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-center text-sm font-medium text-white">Smart-Routing</p>
                    <p className="mt-1 text-center text-xs text-slate-400">Automatische Weiterleitung</p>
                  </div>

                  {/* Google destination (top right) */}
                  <div className="animate-float absolute right-0 top-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      <span className="text-xs font-medium text-emerald-300">Google</span>
                    </div>
                  </div>

                  {/* Feedback destination (bottom right) */}
                  <div className="animate-float-delayed absolute bottom-4 right-0 rounded-xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
                        <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      <span className="text-xs font-medium text-amber-300">Feedback</span>
                    </div>
                  </div>

                  {/* Connecting lines (decorative) */}
                  <div className="absolute left-1/2 top-1/4 h-px w-16 rotate-[-30deg] bg-gradient-to-r from-white/20 to-emerald-500/40" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
                  <div className="absolute bottom-1/4 left-1/2 h-px w-16 rotate-[30deg] bg-gradient-to-r from-white/20 to-amber-500/40" style={{ animation: "pulse-glow 2s ease-in-out 1s infinite" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Logos Bar */}
        <section className="border-y border-white/5 bg-slate-900/50 py-12">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
              Vertraut von lokalen Unternehmen in ganz Deutschland
            </p>
            <div className="relative overflow-hidden">
              <div className="animate-marquee flex w-[200%] items-center gap-12">
                {[
                  "Restaurants", "Arztpraxen", "Handwerker", "Hotels", "Fitnessstudios", "Einzelhandel",
                  "Restaurants", "Arztpraxen", "Handwerker", "Hotels", "Fitnessstudios", "Einzelhandel",
                ].map((item, i) => (
                  <span key={i} className="whitespace-nowrap text-lg font-medium text-slate-600">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Bewertungsmanagement-Features: Alles, was Sie brauchen
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                Revalo vereint alle Tools zur Bewertungsgewinnung in einer Plattform.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "🎯",
                  title: "Smart-Routing",
                  desc: "Zufriedene Kunden werden automatisch zu Google weitergeleitet. Konfigurieren Sie den Schwellwert (z.B. ab 4 Sternen).",
                  delay: "animate-stagger-1",
                },
                {
                  icon: "🔒",
                  title: "Internes Feedback",
                  desc: "Kritische Rückmeldungen landen bei Ihnen — nicht auf Google. Reagieren Sie, bevor es öffentlich wird.",
                  delay: "animate-stagger-2",
                },
                {
                  icon: "💬",
                  title: "WhatsApp & E-Mail",
                  desc: "Versenden Sie Bewertungsanfragen per WhatsApp (Copy-Paste oder automatisiert) und E-Mail.",
                  delay: "animate-stagger-3",
                },
                {
                  icon: "📱",
                  title: "QR-Code",
                  desc: "Generieren Sie QR-Codes für Tischaufsteller, Visitenkarten oder Rechnungen.",
                  delay: "animate-stagger-4",
                },
                {
                  icon: "🔄",
                  title: "Google Reviews Sync",
                  desc: "Synchronisieren Sie Ihre Google-Bewertungen und sehen Sie alles in einem Dashboard.",
                  delay: "animate-stagger-5",
                },
                {
                  icon: "🎨",
                  title: "Eigenes Branding",
                  desc: "Ihr Logo, Ihre Farben — Kunden sehen Ihre Marke, nicht unsere.",
                  delay: "animate-stagger-6",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className={`${feature.delay} group rounded-2xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-sky-500/20 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-sky-500/5`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-2xl transition-transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="border-t border-white/5 bg-slate-900/30 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                So funktioniert automatisches Bewertungsmanagement
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                In drei einfachen Schritten zu mehr Google-Bewertungen.
              </p>
            </div>

            <div className="relative mt-16">
              {/* Connecting line (desktop) */}
              <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent lg:block" />

              <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
                {[
                  {
                    step: "1",
                    title: "Anfrage versenden",
                    desc: "Per E-Mail, WhatsApp oder QR-Code an Ihre Kunden.",
                  },
                  {
                    step: "2",
                    title: "Kunde bewertet",
                    desc: "Ein Klick auf den Link — Sternebewertung in Sekunden.",
                  },
                  {
                    step: "3",
                    title: "Smart-Routing",
                    desc: "⭐⭐⭐⭐⭐ → Google Review | ⭐⭐ → Internes Feedback",
                  },
                ].map((item) => (
                  <div key={item.step} className="relative text-center">
                    <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-sky-500/30 bg-sky-500/10 shadow-lg shadow-sky-500/10">
                      <span className="text-3xl font-bold text-sky-400">{item.step}</span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Smart-Routing Live-Demo: So werden Bewertungen automatisch geroutet
                </h2>
                <p className="mt-4 text-lg text-slate-400">
                  Testen Sie selbst: Klicken Sie auf die Sterne und sehen Sie,
                  wie Revalo Bewertungen intelligent weiterleitet.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 6l2 2 4-4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-300">4-5 Sterne: Automatische Weiterleitung zu Google Reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 6l2 2 4-4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-300">1-3 Sterne: Privates Feedback-Formular</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 6l2 2 4-4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-300">Schwellwert frei konfigurierbar</span>
                  </li>
                </ul>
              </div>
              <div>
                <LandingDemo />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Häufig gestellte Fragen zu Revalo &amp; Bewertungsmanagement
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                Alles, was Sie über Revalo wissen müssen.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {[
                {
                  q: "Wie funktioniert Smart-Routing?",
                  a: "Smart-Routing analysiert die Sternebewertung Ihres Kunden in Echtzeit. Liegt die Bewertung über Ihrem konfigurierbaren Schwellwert (Standard: 4 Sterne), wird der Kunde direkt zu Google weitergeleitet. Bei niedrigeren Bewertungen öffnet sich ein internes Feedback-Formular — so bleiben kritische Rückmeldungen privat.",
                },
                {
                  q: "Brauche ich einen Google Business Account?",
                  a: "Ja, um Google-Bewertungen zu erhalten, benötigen Sie ein verifiziertes Google Business Profil. Revalo leitet Ihre zufriedenen Kunden direkt zu Ihrem Google-Bewertungslink weiter. Die Einrichtung dauert nur wenige Minuten.",
                },
                {
                  q: "Ist Revalo DSGVO-konform?",
                  a: "Ja, Revalo wurde von Grund auf für den deutschen und europäischen Markt entwickelt. Alle Daten werden auf Servern in der EU gespeichert. Wir verarbeiten nur die minimal notwendigen Daten und bieten vollständige Transparenz über die Datenverarbeitung.",
                },
                {
                  q: "Kann ich Revalo mit meinem bestehenden System verbinden?",
                  a: "Im Enterprise-Tarif bieten wir eine vollständige API sowie Custom Integrations an. Beliebte Integrationen umfassen CRM-Systeme, Buchungssoftware und Kassensysteme. Kontaktieren Sie uns für individuelle Anforderungen.",
                },
                {
                  q: "Was passiert mit negativem Feedback?",
                  a: "Negatives Feedback (unter Ihrem Schwellwert) wird niemals auf Google veröffentlicht. Stattdessen erhalten Sie es direkt in Ihrem Revalo-Dashboard, wo Sie darauf reagieren und Verbesserungen einleiten können — bevor es öffentlich wird.",
                },
                {
                  q: "Wie schnell kann ich starten?",
                  a: "In weniger als 5 Minuten. Erstellen Sie ein Konto, hinterlegen Sie Ihren Google-Bewertungslink und versenden Sie Ihre erste Bewertungsanfrage — per E-Mail, WhatsApp oder QR-Code.",
                },
              ].map((faq) => (
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

        {/* CTA Section */}
        <section className="relative overflow-hidden border-t border-white/5 py-20 sm:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950/30 to-sky-950/50" />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Bereit für mehr Google-Bewertungen?
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Starten Sie jetzt — keine Kreditkarte erforderlich.
            </p>
            <a
              href="/kontakt"
              className="mt-10 inline-flex items-center rounded-full bg-sky-500 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 hover:shadow-xl hover:shadow-sky-500/30"
            >
              Jetzt starten
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 bg-slate-950 py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex items-center gap-3">
                {settings.logoUrl ? (
                  <Image
                    src={settings.logoUrl}
                    alt={settings.businessName}
                    width={120}
                    height={32}
                    className="h-8 w-auto object-contain drop-shadow-[0_0_12px_rgba(14,165,233,0.3)]"
                  />
                ) : null}
                <span className="text-lg font-bold text-white">Revalo</span>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <a href="/datenschutz" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Datenschutz
                </a>
                <a href="https://three-connect.de/impressum" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Impressum
                </a>
                <a href="/admin/login" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Admin Login
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-8 sm:flex-row">
              <p className="text-sm text-slate-500">
                &copy; 2026 Revalo. Alle Rechte vorbehalten.
              </p>
              <p className="text-sm text-slate-500">
                Powered by{" "}
                <a href="https://three-connect.de" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-white">
                  Three Connect Agency
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
