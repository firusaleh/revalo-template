/**
 * WhatsApp template rendering + phone normalization + wa.me link builder.
 * Used by the copy-paste inbox flow.
 */

/**
 * Replaces {{key}} (with or without spaces inside braces) in `body` using `vars`.
 * Unknown placeholders are left unchanged (safer for humans to spot missing data).
 */
export function renderTemplate(
  body: string,
  vars: Record<string, string>,
): string {
  return body.replace(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, (match, key) => {
    if (Object.prototype.hasOwnProperty.call(vars, key)) {
      return vars[key];
    }
    return match;
  });
}

/**
 * Normalizes a raw phone number to E.164 form with a leading `+`.
 * Rules:
 *  - Strips spaces, hyphens, parentheses, dots.
 *  - `00...` prefix → `+...`
 *  - `0...` prefix → `+49...` (German default)
 *  - `+...` prefix → kept as-is
 *  - Otherwise: assume already international, prepend `+`.
 * Throws on empty/invalid input.
 */
export function normalizePhone(raw: string): string {
  if (!raw || typeof raw !== "string") {
    throw new Error("normalizePhone: phone is empty");
  }
  const cleaned = raw.replace(/[\s\-().]/g, "");
  if (cleaned.length === 0) {
    throw new Error("normalizePhone: phone is empty after cleaning");
  }

  let withPlus: string;
  if (cleaned.startsWith("+")) {
    withPlus = cleaned;
  } else if (cleaned.startsWith("00")) {
    withPlus = "+" + cleaned.slice(2);
  } else if (cleaned.startsWith("0")) {
    withPlus = "+49" + cleaned.slice(1);
  } else {
    withPlus = "+" + cleaned;
  }

  // Validate: must be + followed by digits only, reasonable length.
  if (!/^\+[0-9]{6,20}$/.test(withPlus)) {
    throw new Error(`normalizePhone: invalid phone "${raw}"`);
  }
  return withPlus;
}

/**
 * Builds a wa.me deep link with URL-encoded message body.
 */
export function buildWaMeLink(phone: string, text: string): string {
  const normalized = normalizePhone(phone);
  const digits = normalized.slice(1); // strip leading "+"
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
