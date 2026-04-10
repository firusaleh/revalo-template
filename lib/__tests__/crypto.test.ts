import { describe, it, expect, beforeAll } from "vitest";
import { randomBytes } from "node:crypto";

beforeAll(() => {
  process.env.ENCRYPTION_KEY = randomBytes(32).toString("hex");
});

describe("crypto (AES-256-GCM)", () => {
  it("encrypt → decrypt yields original plaintext", async () => {
    const { encrypt, decrypt } = await import("../crypto");
    const plain = "Sehr geheime WhatsApp Access Token Daten";
    const enc = encrypt(plain);
    expect(enc).not.toBe(plain);
    expect(decrypt(enc)).toBe(plain);
  });

  it("encrypting the same input twice produces different ciphertexts (random IV)", async () => {
    const { encrypt } = await import("../crypto");
    const plain = "same-input";
    const a = encrypt(plain);
    const b = encrypt(plain);
    expect(a).not.toBe(b);
  });

  it("decrypt throws on tampered ciphertext", async () => {
    const { encrypt, decrypt } = await import("../crypto");
    const enc = encrypt("original message");
    const buf = Buffer.from(enc, "base64");
    buf[buf.length - 1] ^= 0xff;
    const tampered = buf.toString("base64");
    expect(() => decrypt(tampered)).toThrow();
  });

  it("round-trips empty string", async () => {
    const { encrypt, decrypt } = await import("../crypto");
    const enc = encrypt("");
    expect(decrypt(enc)).toBe("");
  });

  it("round-trips Unicode (umlauts and emoji)", async () => {
    const { encrypt, decrypt } = await import("../crypto");
    const plain = "Grüße äöü ß 🚀✨🇩🇪";
    const enc = encrypt(plain);
    expect(decrypt(enc)).toBe(plain);
  });
});
