import { SignJWT, jwtVerify, type JWTPayload } from "jose";

function getSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not set");
  }
  return new TextEncoder().encode(secret);
}

export async function signToken(
  payload: JWTPayload,
  expiresIn: string | number = "7d",
): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(getSecret());
}

export async function verifyToken<T extends JWTPayload = JWTPayload>(
  token: string,
): Promise<T | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload as T;
  } catch {
    return null;
  }
}
