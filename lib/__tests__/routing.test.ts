import { describe, it, expect } from "vitest";
import { routeFeedback } from "../routing";
import { createReviewRequestToken, isValidToken } from "../tokens";

const GOOGLE_URL = "https://g.page/r/demo/review";

describe("routeFeedback", () => {
  it("rating 5 with threshold 4 routes to google", () => {
    const result = routeFeedback(5, 4, GOOGLE_URL);
    expect(result.destination).toBe("google");
    expect(result.redirectUrl).toBe(GOOGLE_URL);
  });

  it("rating 4 with threshold 4 routes to google (inclusive)", () => {
    const result = routeFeedback(4, 4, GOOGLE_URL);
    expect(result.destination).toBe("google");
    expect(result.redirectUrl).toBe(GOOGLE_URL);
  });

  it("rating 3 with threshold 4 routes to internal", () => {
    const result = routeFeedback(3, 4, GOOGLE_URL);
    expect(result.destination).toBe("internal");
    expect(result.redirectUrl).toBeUndefined();
  });

  it("rating 1 with threshold 4 routes to internal", () => {
    const result = routeFeedback(1, 4, GOOGLE_URL);
    expect(result.destination).toBe("internal");
  });

  it("threshold 5: only 5 stars go to google", () => {
    expect(routeFeedback(5, 5, GOOGLE_URL).destination).toBe("google");
    expect(routeFeedback(4, 5, GOOGLE_URL).destination).toBe("internal");
    expect(routeFeedback(3, 5, GOOGLE_URL).destination).toBe("internal");
    expect(routeFeedback(2, 5, GOOGLE_URL).destination).toBe("internal");
    expect(routeFeedback(1, 5, GOOGLE_URL).destination).toBe("internal");
  });

  it("threshold 3: ratings 3,4,5 go to google", () => {
    expect(routeFeedback(5, 3, GOOGLE_URL).destination).toBe("google");
    expect(routeFeedback(4, 3, GOOGLE_URL).destination).toBe("google");
    expect(routeFeedback(3, 3, GOOGLE_URL).destination).toBe("google");
    expect(routeFeedback(2, 3, GOOGLE_URL).destination).toBe("internal");
    expect(routeFeedback(1, 3, GOOGLE_URL).destination).toBe("internal");
  });

  it("throws on rating 0", () => {
    expect(() => routeFeedback(0, 4, GOOGLE_URL)).toThrow(/Invalid rating/);
  });

  it("throws on rating 6", () => {
    expect(() => routeFeedback(6, 4, GOOGLE_URL)).toThrow(/Invalid rating/);
  });

  it("throws on rating -1", () => {
    expect(() => routeFeedback(-1, 4, GOOGLE_URL)).toThrow(/Invalid rating/);
  });

  it("throws on rating NaN", () => {
    expect(() => routeFeedback(NaN, 4, GOOGLE_URL)).toThrow(/Invalid rating/);
  });

  it("passes through redirectUrl unchanged", () => {
    const customUrl = "https://search.google.com/local/writereview?placeid=XYZ";
    const result = routeFeedback(5, 4, customUrl);
    expect(result.redirectUrl).toBe(customUrl);
  });

  it("internal destination has no redirectUrl", () => {
    const result = routeFeedback(2, 4, GOOGLE_URL);
    expect(result.destination).toBe("internal");
    expect(result.redirectUrl).toBeUndefined();
  });
});

describe("createReviewRequestToken", () => {
  it("has length exactly 32", () => {
    const token = createReviewRequestToken();
    expect(token).toHaveLength(32);
  });

  it("contains only lowercase hex characters [0-9a-f]", () => {
    for (let i = 0; i < 50; i++) {
      const token = createReviewRequestToken();
      expect(token).toMatch(/^[0-9a-f]{32}$/);
    }
  });

  it("generates unique tokens across calls", () => {
    const tokens = new Set<string>();
    for (let i = 0; i < 1000; i++) {
      tokens.add(createReviewRequestToken());
    }
    expect(tokens.size).toBe(1000);
  });
});

describe("isValidToken", () => {
  it("accepts a freshly generated token", () => {
    expect(isValidToken(createReviewRequestToken())).toBe(true);
  });

  it("rejects short string 'abc'", () => {
    expect(isValidToken("abc")).toBe(false);
  });

  it("rejects empty string", () => {
    expect(isValidToken("")).toBe(false);
  });

  it("rejects uppercase hex characters", () => {
    expect(isValidToken("ABCDEF0123456789ABCDEF0123456789")).toBe(false);
  });

  it("rejects 33-character token", () => {
    expect(isValidToken("abcdef0123456789abcdef0123456789a")).toBe(false);
  });

  it("rejects non-hex characters", () => {
    expect(isValidToken("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")).toBe(false);
  });
});
