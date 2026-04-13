"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function DemoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [format, setFormat] = useState<"horizontal" | "vertical">("horizontal");
  const [muted, setMuted] = useState(true);

  const switchFormat = (f: "horizontal" | "vertical") => {
    setFormat(f);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = muted;
        videoRef.current.play().catch(() => {});
      }
    }, 50);
  };

  const enableSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.volume = 1;
    if (videoRef.current.paused) videoRef.current.play();
    setMuted(false);
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    const next = !videoRef.current.muted;
    videoRef.current.muted = next;
    if (!next) videoRef.current.volume = 1;
    setMuted(next);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0a0a0f] text-white">
      {/* Background gradient */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(14,165,233,0.15), transparent 60%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(251,191,36,0.08), transparent 60%)",
        }}
      />

      {/* Header */}
      <header className="flex items-center justify-between border-b border-white/5 px-6 py-5 md:px-12">
        <Link
          href="/"
          aria-label="Revalo Startseite"
          className="inline-flex items-center transition drop-shadow-[0_0_20px_rgba(14,165,233,0.25)] hover:drop-shadow-[0_0_30px_rgba(14,165,233,0.5)]"
        >
          <Image
            src="/revalo-logo.png"
            alt="Revalo"
            width={160}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>
        <nav className="flex gap-4 text-sm text-neutral-400 md:gap-6">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/#features" className="transition hover:text-white">
            Features
          </Link>
          <Link href="/#pricing" className="transition hover:text-white">
            Pakete
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-10 pt-16 text-center md:px-12 md:pt-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-xs font-medium text-sky-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          Live Demo — 30 Sekunden
        </div>
        <h1 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
          So holt Revalo{" "}
          <span className="bg-gradient-to-br from-sky-500 to-amber-400 bg-clip-text text-transparent">
            mehr 5-Sterne-Bewertungen
          </span>{" "}
          für dein Unternehmen.
        </h1>
        <p className="mx-auto max-w-2xl text-base text-neutral-400 md:text-xl">
          Sieh in 30 Sekunden, wie aus zufriedenen Kunden echte
          Google-Bewertungen werden — automatisch, DSGVO-konform und ohne
          Google-Richtlinien zu verletzen.
        </p>
      </section>

      {/* Video */}
      <section className="px-4 pb-12 md:px-8">
        <div
          className={`relative mx-auto overflow-hidden rounded-2xl border border-white/5 bg-[#1a1a24] transition-all duration-300 ${
            format === "vertical" ? "max-w-sm" : "max-w-5xl"
          }`}
          style={{
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(14,165,233,0.1)",
          }}
        >
          <video
            ref={videoRef}
            key={format}
            controls
            autoPlay
            muted={muted}
            playsInline
            onClick={() => muted && enableSound()}
            className="block h-auto w-full cursor-pointer"
          >
            <source
              src={
                format === "vertical"
                  ? "/videos/revalo-demo-vertical.mp4"
                  : "/videos/revalo-demo.mp4"
              }
              type="video/mp4"
            />
            Dein Browser unterstützt kein Video.
          </video>

          {/* Unmute prompt overlay */}
          {muted && (
            <button
              onClick={enableSound}
              aria-label="Ton einschalten"
              className="absolute bottom-16 right-5 z-10 inline-flex animate-pulse-ring items-center gap-2 rounded-full bg-sky-500/95 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition hover:scale-105 hover:bg-sky-500"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
              <span>Ton einschalten</span>
            </button>
          )}
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => switchFormat("horizontal")}
            className={`rounded-full border px-5 py-2.5 text-xs font-medium transition ${
              format === "horizontal"
                ? "border-sky-500 bg-sky-500/10 text-white"
                : "border-white/5 bg-[#1a1a24] text-neutral-400 hover:text-white"
            }`}
          >
            Horizontal (16:9)
          </button>
          <button
            onClick={() => switchFormat("vertical")}
            className={`rounded-full border px-5 py-2.5 text-xs font-medium transition ${
              format === "vertical"
                ? "border-sky-500 bg-sky-500/10 text-white"
                : "border-white/5 bg-[#1a1a24] text-neutral-400 hover:text-white"
            }`}
          >
            Vertikal (9:16)
          </button>
          <button
            onClick={toggleSound}
            className="rounded-full border border-white/5 bg-[#1a1a24] px-5 py-2.5 text-xs font-medium text-neutral-400 transition hover:text-white"
          >
            {muted ? "Ton an" : "Ton aus"}
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 py-16 md:grid-cols-2 md:px-12 lg:grid-cols-4">
        {[
          {
            icon: (
              <svg className="h-8 w-8 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            ),
            title: "Vollautomatisch",
            text: "Nach jedem Kundenkontakt schickt Revalo automatisch eine personalisierte WhatsApp- oder SMS-Anfrage.",
          },
          {
            icon: (
              <svg className="h-8 w-8 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            ),
            title: "Smart Routing",
            text: "Zufriedene Kunden (4-5 Sterne) werden zu Google geleitet. Unzufriedene zu internem Feedback-Formular.",
          },
          {
            icon: (
              <svg className="h-8 w-8 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            ),
            title: "Google-konform",
            text: "Kein Review-Gating. Alle Kunden können auf Google bewerten — nur die Reihenfolge ist smart.",
          },
          {
            icon: (
              <svg className="h-8 w-8 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
            ),
            title: "100% DSGVO",
            text: "Server in Deutschland, volle Kontrolle über Daten, AV-Vertrag inklusive. Made in Germany.",
          },
        ].map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-white/5 bg-[#1a1a24] p-7 transition hover:-translate-y-1 hover:border-sky-500/30"
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              {f.text}
            </p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-24 md:px-12">
        <div
          className="rounded-3xl border border-sky-500/20 p-10 text-center md:p-16"
          style={{
            background:
              "linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(251,191,36,0.05) 100%)",
          }}
        >
          <h2 className="mb-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Bereit für mehr 5-Sterne-Bewertungen?
          </h2>
          <p className="mb-8 text-lg text-neutral-400">
            Lass uns in einem 15-Minuten-Gespräch schauen, ob Revalo zu deinem
            Unternehmen passt.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-[0_10px_30px_rgba(14,165,233,0.4)]"
            >
              Demo anfragen →
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white"
            >
              Zur Webseite
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
