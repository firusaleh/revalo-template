import { decrypt } from "@/lib/crypto";

const GRAPH_API_VERSION = "v21.0";
const GRAPH_BASE = `https://graph.facebook.com/${GRAPH_API_VERSION}`;

export type WhatsAppTemplateParam = { type: "text"; text: string };

export type SendTemplateMessageInput = {
  phoneNumberId: string;
  accessToken: string;
  to: string;
  templateName: string;
  languageCode?: string;
  params?: WhatsAppTemplateParam[];
};

export type SendTemplateMessageResult =
  | { ok: true; messageId: string }
  | { ok: false; error: string; status?: number };

export async function sendTemplateMessage(
  input: SendTemplateMessageInput,
  fetchImpl: typeof fetch = fetch,
): Promise<SendTemplateMessageResult> {
  const {
    phoneNumberId,
    accessToken,
    to,
    templateName,
    languageCode = "de",
    params = [],
  } = input;

  const url = `${GRAPH_BASE}/${phoneNumberId}/messages`;
  const body = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to,
    type: "template",
    template: {
      name: templateName,
      language: { code: languageCode },
      components:
        params.length > 0
          ? [{ type: "body", parameters: params }]
          : undefined,
    },
  };

  try {
    const res = await fetchImpl(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    const json = (await res.json().catch(() => ({}))) as {
      messages?: { id: string }[];
      error?: { message?: string };
    };

    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        error: json.error?.message ?? `HTTP ${res.status}`,
      };
    }

    const messageId = json.messages?.[0]?.id;
    if (!messageId) {
      return { ok: false, error: "No message id returned by Graph API" };
    }
    return { ok: true, messageId };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Unknown fetch error",
    };
  }
}

/**
 * Helper that decrypts a persisted access token from the DB
 * before calling sendTemplateMessage.
 */
export async function sendTemplateMessageWithEncryptedToken(
  input: Omit<SendTemplateMessageInput, "accessToken"> & {
    accessTokenEncrypted: string;
  },
  fetchImpl: typeof fetch = fetch,
): Promise<SendTemplateMessageResult> {
  const { accessTokenEncrypted, ...rest } = input;
  try {
    const accessToken = decrypt(accessTokenEncrypted);
    return sendTemplateMessage({ ...rest, accessToken }, fetchImpl);
  } catch (e) {
    return {
      ok: false,
      error:
        e instanceof Error
          ? `Failed to decrypt WhatsApp token: ${e.message}`
          : "Failed to decrypt WhatsApp token",
    };
  }
}
