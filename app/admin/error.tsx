"use client";

import { useEffect } from "react";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[admin] Route error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          Ein Fehler ist aufgetreten
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Beim Laden dieses Bereichs ist ein unerwarteter Fehler aufgetreten.
          Bitte versuchen Sie es erneut. Wenn das Problem weiterhin besteht,
          kontaktieren Sie den Support.
        </p>
        {error.digest && (
          <p className="text-xs text-gray-400 mb-4 font-mono">
            Fehler-ID: {error.digest}
          </p>
        )}
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          Erneut versuchen
        </button>
      </div>
    </div>
  );
}
