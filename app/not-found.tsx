import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | Revalo",
  robots: "noindex, nofollow",
};

const links = [
  {
    href: "/",
    label: "Startseite",
    description: "Zurück zur Revalo-Startseite",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    href: "/blog/google-bewertungen-bekommen",
    label: "Google Bewertungen Guide",
    description: "Der ultimative Guide für lokale Unternehmen",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <path d="M8 7h8M8 11h6" />
      </svg>
    ),
  },
  {
    href: "/kontakt",
    label: "Kontakt & Demo",
    description: "Demo anfordern oder Fragen stellen",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white antialiased">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-sky-950" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative w-full max-w-lg text-center">
        <p className="text-7xl font-extrabold text-sky-500">404</p>

        <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Seite nicht gefunden
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex flex-col items-center rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-sky-500/20 hover:bg-white/[0.05]"
            >
              <span className="text-slate-400 transition-colors group-hover:text-sky-400">
                {l.icon}
              </span>
              <span className="mt-3 text-sm font-semibold text-white transition-colors group-hover:text-sky-400">
                {l.label}
              </span>
              <span className="mt-1 text-xs text-slate-500">
                {l.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
