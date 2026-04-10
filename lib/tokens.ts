import { randomBytes } from "node:crypto";

const TOKEN_LENGTH = 32;
const HEX_REGEX = /^[0-9a-f]+$/;

export function createReviewRequestToken(): string {
  return randomBytes(TOKEN_LENGTH / 2).toString("hex");
}

export function isValidToken(token: string): boolean {
  if (typeof token !== "string") return false;
  if (token.length !== TOKEN_LENGTH) return false;
  return HEX_REGEX.test(token);
}
