"use client";

import { useFormState, useFormStatus } from "react-dom";
import { upsertCustomer } from "@/app/admin/actions";
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
      {pending ? "Speichern..." : "Kunde anlegen"}
    </button>
  );
}

export function CustomerForm() {
  const [state, formAction] = useFormState(upsertCustomer, initial);
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
        <label className="text-xs font-medium text-gray-700">E-Mail</label>
        <input
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm"
        />
      </div>
      <div>
        <label className="text-xs font-medium text-gray-700">
          Telefon (optional)
        </label>
        <input
          name="phone"
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
