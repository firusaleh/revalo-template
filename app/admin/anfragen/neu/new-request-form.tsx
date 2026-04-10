"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createReviewRequest } from "@/app/admin/actions";
import type { AdminCustomer } from "@/lib/admin-data";
import { siteConfig } from "@/site.config";

const initial = { ok: false, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
      style={{ backgroundColor: siteConfig.primaryColor }}
    >
      {pending ? "Wird gesendet..." : "Anfrage senden"}
    </button>
  );
}

export function NewRequestForm({ customers }: { customers: AdminCustomer[] }) {
  const [state, formAction] = useFormState(createReviewRequest, initial);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div>
        <label className="text-sm font-medium">Kunde</label>
        <select
          name="customerId"
          required
          defaultValue=""
          className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm bg-white"
        >
          <option value="" disabled>
            Kunde auswählen...
          </option>
          {customers.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} ({c.email})
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-sm font-medium">Kanal</label>
        <select
          name="channel"
          required
          defaultValue="email"
          className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm bg-white"
        >
          <option value="email">E-Mail</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="qr">QR-Code</option>
        </select>
      </div>
      <div className="flex items-center justify-between pt-2">
        <SubmitButton />
        {state.message && (
          <span
            className={`text-sm ${state.ok ? "text-green-700" : "text-red-700"}`}
            role="status"
          >
            {state.message}
          </span>
        )}
      </div>
    </form>
  );
}
