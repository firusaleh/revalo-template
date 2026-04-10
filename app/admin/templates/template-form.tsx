"use client";

import { useFormState, useFormStatus } from "react-dom";
import { upsertTemplate } from "@/app/admin/actions";
import { siteConfig } from "@/site.config";

const initial = { ok: false, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
      style={{ backgroundColor: siteConfig.primaryColor }}
    >
      {pending ? "Speichern..." : "Template speichern"}
    </button>
  );
}

export function TemplateForm() {
  const [state, formAction] = useFormState(upsertTemplate, initial);
  return (
    <form action={formAction} className="flex flex-col gap-3">
      <div>
        <label className="text-xs font-medium text-gray-700">Name</label>
        <input
          name="name"
          required
          className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm"
        />
      </div>
      <div>
        <label className="text-xs font-medium text-gray-700">Kanal</label>
        <select
          name="channel"
          defaultValue="email"
          className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm bg-white"
        >
          <option value="email">E-Mail</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-medium text-gray-700">
          Betreff (nur E-Mail)
        </label>
        <input
          name="subject"
          className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm"
        />
      </div>
      <div>
        <label className="text-xs font-medium text-gray-700">
          Nachricht (Platzhalter: {"{{name}}"}, {"{{link}}"})
        </label>
        <textarea
          name="body"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm"
        />
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
