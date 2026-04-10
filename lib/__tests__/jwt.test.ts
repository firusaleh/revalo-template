import { describe, it, expect, beforeAll } from "vitest";
import { SignJWT } from "jose";

beforeAll(() => {
  process.env.JWT_SECRET = "test-secret-phase-2-do-not-use-in-production";
});

describe("jwt (jose HS256)", () => {
  it("signToken → verifyToken yields the original payload", async () => {
    const { signToken, verifyToken } = await import("../jwt");
    const token = await signToken({ sub: "user-123", role: "admin" }, "1h");
    const payload = await verifyToken<{ sub: string; role: string }>(token);
    expect(payload).not.toBeNull();
    expect(payload?.sub).toBe("user-123");
    expect(payload?.role).toBe("admin");
  });

  it("verifyToken returns null for a malformed token", async () => {
    const { verifyToken } = await import("../jwt");
    expect(await verifyToken("not.a.jwt")).toBeNull();
    expect(await verifyToken("garbage")).toBeNull();
  });

  it("verifyToken returns null for an expired token", async () => {
    const { signToken, verifyToken } = await import("../jwt");
    const pastUnix = Math.floor(Date.now() / 1000) - 60;
    const token = await signToken({ sub: "expired" }, pastUnix);
    expect(await verifyToken(token)).toBeNull();
  });

  it("verifyToken returns null when signed with a different secret", async () => {
    const { verifyToken } = await import("../jwt");
    const otherSecret = new TextEncoder().encode("some-other-secret-value");
    const foreignToken = await new SignJWT({ sub: "intruder" })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(otherSecret);
    expect(await verifyToken(foreignToken)).toBeNull();
  });
});
