import { describe, it, expect, beforeAll, vi } from "vitest";
import { randomBytes } from "node:crypto";
import {
  sendTemplateMessage,
  sendTemplateMessageWithEncryptedToken,
} from "../client";

beforeAll(() => {
  process.env.ENCRYPTION_KEY = randomBytes(32).toString("hex");
});

function makeFetch(
  status: number,
  body: unknown,
): typeof fetch {
  return vi.fn(async () =>
    new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json" },
    }),
  ) as unknown as typeof fetch;
}

describe("sendTemplateMessage", () => {
  it("posts a well-formed Graph API request", async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      expect(url).toContain("/v21.0/PHONE_ID/messages");
      expect(init?.method).toBe("POST");
      const headers = init?.headers as Record<string, string>;
      expect(headers.Authorization).toBe("Bearer SECRET");
      expect(headers["Content-Type"]).toBe("application/json");
      const parsed = JSON.parse(init?.body as string);
      expect(parsed.messaging_product).toBe("whatsapp");
      expect(parsed.to).toBe("+491701234567");
      expect(parsed.template.name).toBe("review_request_de");
      expect(parsed.template.language.code).toBe("de");
      expect(parsed.template.components[0].parameters[0].text).toBe("Anna");
      return new Response(
        JSON.stringify({ messages: [{ id: "wamid.TEST123" }] }),
        { status: 200 },
      );
    });

    const result = await sendTemplateMessage(
      {
        phoneNumberId: "PHONE_ID",
        accessToken: "SECRET",
        to: "+491701234567",
        templateName: "review_request_de",
        params: [{ type: "text", text: "Anna" }],
      },
      fetchMock as unknown as typeof fetch,
    );

    expect(result.ok).toBe(true);
    if (result.ok) expect(result.messageId).toBe("wamid.TEST123");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("omits components when no params are given", async () => {
    const fetchMock = vi.fn(async (_url: string, init?: RequestInit) => {
      const parsed = JSON.parse(init?.body as string);
      expect(parsed.template.components).toBeUndefined();
      return new Response(
        JSON.stringify({ messages: [{ id: "wamid.NOPARAMS" }] }),
        { status: 200 },
      );
    });
    const result = await sendTemplateMessage(
      {
        phoneNumberId: "P",
        accessToken: "T",
        to: "+49",
        templateName: "hello",
      },
      fetchMock as unknown as typeof fetch,
    );
    expect(result.ok).toBe(true);
  });

  it("returns ok=false with Graph API error message on 4xx", async () => {
    const fetchMock = makeFetch(400, {
      error: { message: "Invalid phone number" },
    });
    const result = await sendTemplateMessage(
      {
        phoneNumberId: "P",
        accessToken: "T",
        to: "invalid",
        templateName: "x",
      },
      fetchMock,
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error).toBe("Invalid phone number");
      expect(result.status).toBe(400);
    }
  });

  it("returns ok=false when Graph API returns no messages array", async () => {
    const fetchMock = makeFetch(200, {});
    const result = await sendTemplateMessage(
      {
        phoneNumberId: "P",
        accessToken: "T",
        to: "+49",
        templateName: "x",
      },
      fetchMock,
    );
    expect(result.ok).toBe(false);
  });

  it("catches fetch-level errors gracefully", async () => {
    const fetchMock = vi.fn(async () => {
      throw new Error("network down");
    }) as unknown as typeof fetch;
    const result = await sendTemplateMessage(
      {
        phoneNumberId: "P",
        accessToken: "T",
        to: "+49",
        templateName: "x",
      },
      fetchMock,
    );
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error).toBe("network down");
  });
});

describe("sendTemplateMessageWithEncryptedToken", () => {
  it("decrypts the token from lib/crypto and delegates to sendTemplateMessage", async () => {
    const { encrypt } = await import("@/lib/crypto");
    const encrypted = encrypt("PLAIN_TOKEN_XYZ");

    const fetchMock = vi.fn(async (_url: string, init?: RequestInit) => {
      const headers = init?.headers as Record<string, string>;
      expect(headers.Authorization).toBe("Bearer PLAIN_TOKEN_XYZ");
      return new Response(
        JSON.stringify({ messages: [{ id: "wamid.DEC1" }] }),
        { status: 200 },
      );
    });

    const result = await sendTemplateMessageWithEncryptedToken(
      {
        phoneNumberId: "P",
        accessTokenEncrypted: encrypted,
        to: "+49",
        templateName: "x",
      },
      fetchMock as unknown as typeof fetch,
    );

    expect(result.ok).toBe(true);
    if (result.ok) expect(result.messageId).toBe("wamid.DEC1");
  });

  it("returns ok=false when decryption fails", async () => {
    const result = await sendTemplateMessageWithEncryptedToken({
      phoneNumberId: "P",
      accessTokenEncrypted: "not-a-valid-ciphertext",
      to: "+49",
      templateName: "x",
    });
    expect(result.ok).toBe(false);
    if (!result.ok)
      expect(result.error).toMatch(/decrypt/i);
  });
});
