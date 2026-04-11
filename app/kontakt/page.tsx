"use client";

import { useState } from "react";
import { LandingNav } from "../landing-nav";

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>

      <div className="min-h-screen bg-slate-950 text-white antialiased">
        <LandingNav logoUrl={null} businessName="Revalo" />

        <section className="relative overflow-hidden pb-20 pt-32 sm:pb-32 sm:pt-40">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-sky-950" />
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative mx-auto max-w-2xl px-6">
            {submitted ? (
              <div className="animate-fade-in-up rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-10 text-center backdrop-blur-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Nachricht gesendet!</h2>
                <p className="mt-3 text-slate-300">
                  Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <a
                  href="/"
                  className="mt-8 inline-flex items-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-white/5 hover:text-white"
                >
                  Zurück zur Startseite
                </a>
              </div>
            ) : (
              <>
                <div className="animate-fade-in-up text-center">
                  <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                    Lassen Sie uns{" "}
                    <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                      sprechen
                    </span>
                  </h1>
                  <p className="mt-4 text-lg text-slate-400">
                    Erzählen Sie uns von Ihrem Unternehmen — wir zeigen Ihnen, wie
                    Revalo Ihre Google-Bewertungen steigert.
                  </p>
                </div>

                <form
                  action="https://formsubmit.co/info@three-connect.de"
                  method="POST"
                  onSubmit={() => {
                    setTimeout(() => setSubmitted(true), 100);
                  }}
                  className="animate-fade-in-up mt-12 space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm [animation-delay:0.2s]"
                >
                  {/* FormSubmit config */}
                  <input type="hidden" name="_subject" value="Neue Revalo-Anfrage" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://revalo-template.vercel.app/kontakt?success=true" />
                  {/* Honeypot */}
                  <input type="text" name="_honey" className="hidden" />

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Max Mustermann"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/25"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="max@beispiel.de"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/25"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-300">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="Unternehmen"
                      placeholder="Firma GmbH"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/25"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-300">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="Telefon"
                      placeholder="+49 123 456 789"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/25"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="Nachricht"
                      required
                      rows={4}
                      placeholder="Erzählen Sie uns von Ihrem Unternehmen und wie wir Ihnen helfen können..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/25"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 hover:shadow-xl hover:shadow-sky-500/30"
                  >
                    Nachricht senden
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </form>
              </>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 bg-slate-950 py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
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
