"use client";

import { useState } from "react";

type LandingNavProps = {
  logoUrl: string | null;
  businessName: string;
};

export function LandingNav({ logoUrl, businessName }: LandingNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          {logoUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={logoUrl}
              alt={businessName}
              width={44}
              height={44}
              className="rounded-lg bg-white/90 object-contain p-1"
            />
          ) : null}
          <span className="text-xl font-bold text-white">Revalo</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-slate-300 transition-colors hover:text-white"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-slate-300 transition-colors hover:text-white"
          >
            So funktioniert&apos;s
          </a>
          <a
            href="#faq"
            className="text-sm text-slate-300 transition-colors hover:text-white"
          >
            FAQ
          </a>
          <a
            href="/kontakt"
            className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/25"
          >
            Jetzt starten
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            <a
              href="#features"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              So funktioniert&apos;s
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              Preise
            </a>
            <a
              href="#faq"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              FAQ
            </a>
            <a
              href="/kontakt"
              className="mt-2 rounded-full bg-sky-500 px-5 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-sky-400"
            >
              Jetzt starten
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
