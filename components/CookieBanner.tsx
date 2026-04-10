"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "revalo-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === null) {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable — keep banner hidden
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Hinweis"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
    >
      <div className="mx-auto max-w-5xl px-4 py-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <p className="text-sm text-gray-700 flex-1">
          Diese Website verwendet nur technisch notwendige Cookies. Weitere
          Informationen finden Sie in unserer{" "}
          <Link
            href="/datenschutz"
            className="underline text-sky-600 hover:text-sky-700"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}
