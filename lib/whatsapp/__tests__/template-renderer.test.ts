import { describe, it, expect } from "vitest";
import {
  renderTemplate,
  normalizePhone,
  buildWaMeLink,
} from "@/lib/whatsapp/template-renderer";

describe("renderTemplate", () => {
  it("replaces a single placeholder", () => {
    expect(renderTemplate("Hallo {{vorname}}", { vorname: "Max" })).toBe(
      "Hallo Max",
    );
  });

  it("replaces multiple placeholders", () => {
    const out = renderTemplate(
      "Hallo {{vorname}}, willkommen bei {{businessName}}",
      { vorname: "Firas", businessName: "Revalo Demo" },
    );
    expect(out).toBe("Hallo Firas, willkommen bei Revalo Demo");
  });

  it("leaves unknown placeholders unchanged", () => {
    expect(renderTemplate("{{foo}} and {{bar}}", { foo: "A" })).toBe(
      "A and {{bar}}",
    );
  });

  it("handles spaces inside braces {{ key }}", () => {
    expect(renderTemplate("Hi {{ vorname }}", { vorname: "Max" })).toBe(
      "Hi Max",
    );
  });

  it("returns body unchanged when vars are empty", () => {
    expect(renderTemplate("Hi {{x}}", {})).toBe("Hi {{x}}");
  });
});

describe("normalizePhone", () => {
  it("strips spaces and hyphens", () => {
    expect(normalizePhone("0151 234-5678")).toBe("+491512345678");
  });

  it("converts 0 prefix to +49", () => {
    expect(normalizePhone("01512345678")).toBe("+491512345678");
  });

  it("keeps + prefix as-is", () => {
    expect(normalizePhone("+491512345678")).toBe("+491512345678");
  });

  it("converts 00 prefix to +", () => {
    expect(normalizePhone("00491512345678")).toBe("+491512345678");
  });

  it("strips parentheses and dots", () => {
    expect(normalizePhone("(0151) 234.5678")).toBe("+491512345678");
  });

  it("throws on empty string", () => {
    expect(() => normalizePhone("")).toThrow();
  });

  it("throws on whitespace-only input", () => {
    expect(() => normalizePhone("   ")).toThrow();
  });
});

describe("buildWaMeLink", () => {
  it("produces a correct wa.me URL with encoded text", () => {
    const url = buildWaMeLink("+491512345678", "Hallo Max");
    expect(url).toBe("https://wa.me/491512345678?text=Hallo%20Max");
  });

  it("URL-encodes special characters (emojis, newlines, & ?)", () => {
    const url = buildWaMeLink("+491512345678", "Hi 👋\nLink? a&b");
    expect(url).toContain("https://wa.me/491512345678?text=");
    const encoded = url.split("?text=")[1];
    expect(decodeURIComponent(encoded)).toBe("Hi 👋\nLink? a&b");
    // Verify special chars are actually encoded
    expect(encoded).not.toContain("\n");
    expect(encoded).not.toContain("?a");
  });
});
