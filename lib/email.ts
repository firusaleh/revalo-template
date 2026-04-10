import { Resend } from "resend";
import { render } from "@react-email/components";
import {
  ReviewRequestEmail,
  type ReviewRequestEmailProps,
} from "@/emails/ReviewRequestEmail";
import { siteConfig } from "@/site.config";

export type EmailCustomer = {
  name: string;
  email: string;
};

export type SendReviewRequestEmailResult =
  | { ok: true; id: string; mode: "resend" | "dry-run"; html: string }
  | { ok: false; error: string };

function getBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000"
  );
}

export async function renderReviewRequestEmail(
  props: ReviewRequestEmailProps,
): Promise<string> {
  return render(ReviewRequestEmail(props));
}

export async function sendReviewRequestEmail(
  customer: EmailCustomer,
  token: string,
): Promise<SendReviewRequestEmailResult> {
  const reviewUrl = `${getBaseUrl()}/r/${token}`;
  const props: ReviewRequestEmailProps = {
    customerName: customer.name,
    reviewUrl,
    businessName: siteConfig.businessName,
    primaryColor: siteConfig.primaryColor,
  };
  const html = await renderReviewRequestEmail(props);

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM ?? "Revalo <onboarding@resend.dev>";

  if (!apiKey) {
    return {
      ok: true,
      id: `dry-run-${Date.now()}`,
      mode: "dry-run",
      html,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: customer.email,
      subject: `Wie war Ihr Besuch bei ${siteConfig.businessName}?`,
      html,
    });
    if (result.error) {
      return { ok: false, error: result.error.message };
    }
    return {
      ok: true,
      id: result.data?.id ?? "unknown",
      mode: "resend",
      html,
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Unknown email error",
    };
  }
}

export type SendDigestEmailResult =
  | { ok: true; id: string; mode: "resend" | "dry-run" }
  | { ok: false; error: string };

/**
 * Sends a daily WhatsApp digest email to the admin reminding them that
 * X pending messages are waiting in the copy-paste inbox.
 */
export async function sendDigestEmail(
  to: string,
  pendingCount: number,
): Promise<SendDigestEmailResult> {
  const baseUrl = getBaseUrl();
  const inboxUrl = `${baseUrl}/admin/versand`;
  const subject = `${pendingCount} WhatsApp-Nachrichten warten auf Versand`;
  const html = `<!doctype html>
<html lang="de"><body style="font-family: -apple-system, sans-serif; background:#f9fafb; padding:24px;">
  <div style="max-width:560px; margin:0 auto; background:#ffffff; border-radius:12px; padding:32px; border:1px solid #e5e7eb;">
    <h1 style="font-size:20px; margin:0 0 12px 0; color:#0ea5e9;">Guten Morgen bei ${siteConfig.businessName}</h1>
    <p style="font-size:16px; color:#111827; line-height:1.5;">
      <strong>${pendingCount}</strong> WhatsApp-Nachrichten warten auf dich.
    </p>
    <p style="margin:24px 0;">
      <a href="${inboxUrl}" style="display:inline-block; background:#0ea5e9; color:#ffffff; padding:12px 20px; border-radius:8px; text-decoration:none; font-weight:600;">
        Zur Inbox
      </a>
    </p>
    <p style="font-size:12px; color:#6b7280;">Revalo Daily Digest</p>
  </div>
</body></html>`;

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM ?? "Revalo <onboarding@resend.dev>";

  if (!apiKey) {
    return { ok: true, id: `dry-run-digest-${Date.now()}`, mode: "dry-run" };
  }
  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({ from, to, subject, html });
    if (result.error) {
      return { ok: false, error: result.error.message };
    }
    return {
      ok: true,
      id: result.data?.id ?? "unknown",
      mode: "resend",
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Unknown email error",
    };
  }
}
