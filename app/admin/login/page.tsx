import { getAdminSettings } from "@/lib/admin-data";
import { LoginClient } from "./login-client";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  const settings = await getAdminSettings();
  return <LoginClient logoUrl={settings.logoUrl} />;
}
