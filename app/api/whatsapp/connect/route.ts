import { NextResponse } from "next/server";

// Initiate Meta (Facebook) OAuth flow for WhatsApp Business.
// The user is redirected to Meta's auth dialog and will return to
// /api/whatsapp/callback with a `code` query parameter on success.
export async function GET() {
  const appId = process.env.META_APP_ID;
  const redirectUri = process.env.META_WHATSAPP_REDIRECT_URI;

  if (!appId || !redirectUri) {
    return NextResponse.json(
      {
        error:
          "META_APP_ID oder META_WHATSAPP_REDIRECT_URI ist nicht konfiguriert.",
      },
      { status: 500 },
    );
  }

  const state = crypto.randomUUID();
  const scope = [
    "whatsapp_business_management",
    "whatsapp_business_messaging",
    "business_management",
  ].join(",");

  const authUrl = new URL("https://www.facebook.com/v21.0/dialog/oauth");
  authUrl.searchParams.set("client_id", appId);
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("state", state);
  authUrl.searchParams.set("scope", scope);
  authUrl.searchParams.set("response_type", "code");

  const response = NextResponse.redirect(authUrl.toString());
  response.cookies.set("meta_oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 600,
    path: "/",
  });
  return response;
}
