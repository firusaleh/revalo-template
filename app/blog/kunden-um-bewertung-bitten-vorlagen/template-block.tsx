"use client";

import { useState } from "react";
import Link from "next/link";

type Props = {
  label: string;
  preview: string;
  locked: string;
  unlocked?: boolean;
  channel?: "email" | "whatsapp" | "sms" | "qr";
};

const CHANNEL_COLORS = {
  email: { border: "border-sky-500/30", bg: "bg-sky-500/5", icon: "📧" },
  whatsapp: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    icon: "💬",
  },
  sms: { border: "border-amber-500/30", bg: "bg-amber-500/5", icon: "📱" },
  qr: { border: "border-violet-500/30", bg: "bg-violet-500/5", icon: "📷" },
};

export function TemplateBlock({
  label,
  preview,
  locked,
  unlocked = false,
  channel = "email",
}: Props) {
  const [copied, setCopied] = useState(false);
  const style = CHANNEL_COLORS[channel];
  const fullText = `${preview}\n\n${locked}`;

  function handleCopy() {
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className={`rounded-xl border ${style.border} ${style.bg} p-5`}>
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-white">
          {style.icon} {label}
        </span>
        {unlocked && (
          <button
            onClick={handleCopy}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400 transition-all hover:border-white/20 hover:text-white"
          >
            {copied ? "✓ Kopiert!" : "Kopieren"}
          </button>
        )}
      </div>

      {/* Preview (always visible) */}
      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-300">
        {preview}
      </pre>

      {/* Locked portion */}
      {unlocked ? (
        <pre className="mt-3 whitespace-pre-wrap border-t border-white/5 pt-3 font-sans text-sm leading-relaxed text-slate-300">
          {locked}
        </pre>
      ) : (
        <div className="relative mt-3">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-500 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.4)_0%,transparent_70%)]">
            {locked}
          </pre>
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href="/kontakt"
              className="rounded-full border border-sky-500/30 bg-sky-500/10 px-5 py-2.5 text-xs font-semibold text-sky-300 shadow-lg shadow-sky-500/10 backdrop-blur-sm transition-all hover:bg-sky-500/20 hover:text-white"
            >
              🔒 Vollständige Vorlage mit Revalo nutzen
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
