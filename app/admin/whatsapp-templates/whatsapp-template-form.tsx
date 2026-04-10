"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";
import { upsertWhatsAppTemplate } from "@/app/admin/actions";
import { renderTemplate } from "@/lib/whatsapp/template-renderer";
import { siteConfig } from "@/site.config";

const initial = { ok: false, message: "" };

const DEFAULT_BODY =
  "Hallo {{vorname}}, vielen Dank für Ihren Besuch bei {{businessName}}. Würden Sie uns kurz bewerten? {{reviewLink}}";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
      style={{ backgroundColor: siteConfig.primaryColor }}
    >
      {pending ? "Speichern..." : "Speichern"}
    </button>
  );
}

export function WhatsAppTemplateForm() {
  const [state, formAction] = useFormState(upsertWhatsAppTemplate, initial);
  const [body, setBody] = useState(DEFAULT_BODY);
  const [name, setName] = useState("");

  const preview = renderTemplate(body, {
    vorname: "Max",
    nachname: "Mustermann",
    businessName: siteConfig.businessName,
    reviewLink: "https://revalo.de/r/demo123",
  });

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <div>
        <label className="text-xs font-medium text-gray-700">Name</label>
        <input
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm"
        />
      </div>
      <div>
        <label className="text-xs font-medium text-gray-700">
          Nachricht (Platzhalter: {"{{vorname}}"}, {"{{businessName}}"},{" "}
          {"{{reviewLink}}"})
        </label>
        <textarea
          name="body"
          rows={6}
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm font-mono"
        />
      </div>
      <div>
        <label className="text-xs font-medium text-gray-700">
          Live-Vorschau
        </label>
        <pre className="mt-1 whitespace-pre-wrap rounded-md border border-green-200 bg-green-50 p-3 text-sm text-gray-800">
          {preview}
        </pre>
      </div>
      <SubmitButton />
      {state.message && (
        <p
          className={`text-xs ${state.ok ? "text-green-700" : "text-red-700"}`}
          role="status"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
