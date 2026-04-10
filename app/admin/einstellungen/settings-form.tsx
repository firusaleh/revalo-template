"use client";

import { useFormState, useFormStatus } from "react-dom";
import { updateSettings } from "@/app/admin/actions";
import type { AdminSettings } from "@/lib/admin-data";
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
      {pending ? "Speichern..." : "Einstellungen speichern"}
    </button>
  );
}

export function SettingsForm({ settings }: { settings: AdminSettings }) {
  const [state, formAction] = useFormState(updateSettings, initial);
  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div>
        <label className="text-sm font-medium">Business-Name</label>
        <input
          name="businessName"
          defaultValue={settings.businessName}
          required
          className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm"
        />
      </div>
      <div>
        <label className="text-sm font-medium">Google Place ID</label>
        <input
          name="googlePlaceId"
          defaultValue={settings.googlePlaceId}
          className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm"
        />
      </div>
      <div>
        <label className="text-sm font-medium">Google Review URL</label>
        <input
          name="googleReviewUrl"
          type="url"
          defaultValue={settings.googleReviewUrl}
          className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm"
        />
      </div>
      <div>
        <label className="text-sm font-medium">
          Smart-Routing-Schwellwert (1–5)
        </label>
        <input
          name="smartRoutingThreshold"
          type="number"
          min={1}
          max={5}
          defaultValue={settings.smartRoutingThreshold}
          required
          className="mt-1 w-32 rounded-md border border-gray-300 p-2.5 text-sm"
        />
        <p className="text-xs text-gray-500 mt-1">
          Ab dieser Sterneanzahl werden Kunden direkt zu Google weitergeleitet.
        </p>
      </div>
      <div className="flex items-center gap-4 pt-2">
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
