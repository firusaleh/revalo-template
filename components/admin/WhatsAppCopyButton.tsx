"use client";

import { useState, useTransition } from "react";
import { buildWaMeLink } from "@/lib/whatsapp/template-renderer";
import { markWhatsAppSentManually } from "@/app/admin/actions";

type Props = {
  reviewRequestId: string;
  phone: string;
  message: string;
};

export function WhatsAppCopyButton({
  reviewRequestId,
  phone,
  message,
}: Props) {
  const [copied, setCopied] = useState(false);
  const [opened, setOpened] = useState(false);
  const [, startTransition] = useTransition();

  const markSent = () => {
    startTransition(async () => {
      try {
        await markWhatsAppSentManually(reviewRequestId);
      } catch {
        // swallow — UI already reflects the action
      }
    });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      markSent();
    } catch {
      setCopied(false);
    }
  };

  const handleOpen = () => {
    let url: string;
    try {
      url = buildWaMeLink(phone, message);
    } catch {
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
    setOpened(true);
    setTimeout(() => setOpened(false), 2000);
    markSent();
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
        data-testid="wa-copy-text"
      >
        {copied ? "✓ Kopiert" : "📋 Text kopieren"}
      </button>
      <button
        type="button"
        onClick={handleOpen}
        className="inline-flex items-center gap-1 rounded-md bg-green-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-green-700"
        data-testid="wa-open"
      >
        {opened ? "✓ Geöffnet" : "💬 In WhatsApp öffnen"}
      </button>
    </div>
  );
}
