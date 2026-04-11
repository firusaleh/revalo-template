"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { syncGoogleReviewsNow } from "@/app/admin/actions";
import { siteConfig } from "@/site.config";

export function SyncButton() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSync() {
    setStatus("loading");
    try {
      const result = await syncGoogleReviewsNow();
      setMessage(result.message);
      setStatus(result.ok ? "done" : "error");
      if (result.ok) {
        router.refresh();
      }
    } catch {
      setStatus("error");
      setMessage("Sync fehlgeschlagen.");
    }
  }

  return (
    <div className="flex items-center gap-3">
      {message && (
        <span
          className={`text-sm ${status === "error" ? "text-red-600" : "text-green-600"}`}
        >
          {message}
        </span>
      )}
      <button
        onClick={handleSync}
        disabled={status === "loading"}
        className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: siteConfig.primaryColor }}
      >
        {status === "loading" ? "Synchronisiert..." : "Jetzt synchronisieren"}
      </button>
    </div>
  );
}
