"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { updateSettings, uploadLogoAction } from "@/app/admin/actions";
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

function LogoUploadSection({ currentLogoUrl }: { currentLogoUrl: string | null }) {
  const [logoUrl, setLogoUrl] = useState(currentLogoUrl);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const [uploadOk, setUploadOk] = useState(false);

  async function handleLogoUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUploading(true);
    setUploadMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await uploadLogoAction(formData);

    setUploadOk(result.ok);
    setUploadMessage(result.message);
    if (result.ok && result.url) {
      setLogoUrl(result.url);
    }
    setUploading(false);
  }

  return (
    <div className="mb-6 pb-6 border-b border-gray-200">
      <label className="text-sm font-medium">Logo</label>
      <div className="mt-2 flex items-start gap-4">
        {logoUrl && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={logoUrl}
            alt="Aktuelles Logo"
            width={80}
            height={80}
            className="rounded-lg border border-gray-200 object-contain"
          />
        )}
        <form onSubmit={handleLogoUpload} className="flex flex-col gap-2">
          <input
            name="file"
            type="file"
            accept=".png,.jpg,.jpeg,.svg,.webp"
            className="text-sm text-gray-600 file:mr-3 file:rounded-lg file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-medium hover:file:bg-gray-200"
          />
          <button
            type="submit"
            disabled={uploading}
            className="w-fit rounded-lg px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
            style={{ backgroundColor: siteConfig.primaryColor }}
          >
            {uploading ? "Wird hochgeladen..." : "Logo hochladen"}
          </button>
          {uploadMessage && (
            <span
              className={`text-sm ${uploadOk ? "text-green-700" : "text-red-700"}`}
              role="status"
            >
              {uploadMessage}
            </span>
          )}
          <p className="text-xs text-gray-500">
            PNG, JPG, SVG oder WebP. Maximal 2 MB.
          </p>
        </form>
      </div>
    </div>
  );
}

export function SettingsForm({ settings }: { settings: AdminSettings }) {
  const [state, formAction] = useFormState(updateSettings, initial);
  return (
    <div className="flex flex-col gap-0">
      <LogoUploadSection currentLogoUrl={settings.logoUrl} />
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
    </div>
  );
}
