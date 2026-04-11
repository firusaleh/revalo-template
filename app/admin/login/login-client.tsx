"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
import { BusinessLogo } from "@/components/BusinessLogo";

type LoginClientProps = {
  logoUrl: string | null;
};

export function LoginClient({ logoUrl }: LoginClientProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "sent" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/admin/auth/send-magic-link", {
        method: "POST",
        body: JSON.stringify({ email: formData.get("email") }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("sent");
        setMessage(data.message ?? "Magic Link wurde versendet.");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Fehler beim Versand.");
      }
    } catch {
      setStatus("error");
      setMessage("Netzwerkfehler. Bitte erneut versuchen.");
    }
  }

  if (status === "sent") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white rounded-xl shadow p-8 text-center">
          <div className="text-4xl mb-4">📧</div>
          <h1 className="text-xl font-bold mb-2">E-Mail gesendet!</h1>
          <p className="text-gray-600">{message}</p>
          <p className="text-sm text-gray-500 mt-4">
            Prüfen Sie Ihren Posteingang und klicken Sie auf den Link.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm underline text-gray-500"
          >
            Erneut versuchen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-8">
        <div className="flex flex-col items-center gap-3 mb-4">
          <BusinessLogo
            logoUrl={logoUrl}
            businessName={siteConfig.businessName}
            size={64}
            className="rounded-lg"
          />
          <h1
            className="text-2xl font-bold"
            style={{ color: siteConfig.primaryColor }}
          >
            {siteConfig.businessName}
          </h1>
        </div>
        <p className="text-gray-600 mb-6">Admin-Login per Magic Link</p>

        {status === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 mb-4 text-sm">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="email" className="font-medium text-sm">
            E-Mail-Adresse
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="admin@ihrebusiness.de"
            className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-offset-1"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-lg px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            style={{ backgroundColor: siteConfig.primaryColor }}
          >
            {status === "loading" ? "Wird gesendet..." : "Magic Link senden"}
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-6">
          Sie erhalten einen Link per E-Mail, über den Sie sich ohne Passwort
          anmelden können.
        </p>
      </div>
    </div>
  );
}
