import { NextResponse, type NextRequest } from "next/server";
import { encrypt } from "@/lib/crypto";

type TokenResponse = {
  access_token: string;
  expires_in?: number;
  token_type?: string;
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  if (!code) {
    return NextResponse.json(
      { error: "Missing code parameter" },
      { status: 400 },
    );
  }

  const cookieState = request.cookies.get("meta_oauth_state")?.value;
  if (!cookieState || cookieState !== state) {
    return NextResponse.json(
      { error: "Invalid OAuth state" },
      { status: 400 },
    );
  }

  const appId = process.env.META_APP_ID;
  const appSecret = process.env.META_APP_SECRET;
  const redirectUri = process.env.META_WHATSAPP_REDIRECT_URI;

  if (!appId || !appSecret || !redirectUri) {
    return NextResponse.json(
      { error: "Meta-Credentials nicht konfiguriert." },
      { status: 500 },
    );
  }

  // Exchange code for access token
  const tokenUrl = new URL(
    "https://graph.facebook.com/v21.0/oauth/access_token",
  );
  tokenUrl.searchParams.set("client_id", appId);
  tokenUrl.searchParams.set("client_secret", appSecret);
  tokenUrl.searchParams.set("redirect_uri", redirectUri);
  tokenUrl.searchParams.set("code", code);

  const tokenRes = await fetch(tokenUrl.toString());
  if (!tokenRes.ok) {
    const errBody = await tokenRes.text();
    return NextResponse.json(
      { error: `Token exchange failed: ${errBody}` },
      { status: 502 },
    );
  }
  const tokenJson = (await tokenRes.json()) as TokenResponse;
  const accessToken = tokenJson.access_token;

  // Fetch WABA + phone number info (stub — in production iterate debug_token → businesses → phone_numbers)
  const businessAccountId = "pending";
  const phoneNumberId = "pending";
  const templateInitialName = "review_request_de";

  // Encrypt and persist
  const encryptedToken = encrypt(accessToken);
  const expiresAt = tokenJson.expires_in
    ? new Date(Date.now() + tokenJson.expires_in * 1000)
    : null;

  try {
    const [{ db }, { whatsappConnection }] = await Promise.all([
      import("@/db"),
      import("@/db/schema"),
    ]);
    await db.insert(whatsappConnection).values({
      phoneNumberId,
      businessAccountId,
      accessTokenEncrypted: encryptedToken,
      tokenExpiresAt: expiresAt,
      templateInitialName,
    });
  } catch (e) {
    return NextResponse.json(
      {
        error: `Failed to persist whatsapp connection: ${
          e instanceof Error ? e.message : String(e)
        }`,
      },
      { status: 500 },
    );
  }

  const response = NextResponse.redirect(
    new URL("/admin/einstellungen?whatsapp=connected", request.url),
  );
  response.cookies.delete("meta_oauth_state");
  return response;
}
