import { LandingNav } from "../landing-nav";
import Link from "next/link";

export default function BranchenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <LandingNav logoUrl={null} businessName="Revalo" />

      {children}

      {/* Shared CTA Footer */}
      <section className="relative overflow-hidden border-t border-white/5 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950/30 to-sky-950/50" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Bereit für mehr Google-Bewertungen?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Starten Sie jetzt — keine Kreditkarte erforderlich.
          </p>
          <Link
            href="/kontakt"
            className="mt-10 inline-flex items-center rounded-full bg-sky-500 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 hover:shadow-xl hover:shadow-sky-500/30"
          >
            Jetzt kostenlos testen
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

      <footer className="border-t border-white/5 bg-slate-950 py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm text-slate-500">
            &copy; 2026 Revalo. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}
