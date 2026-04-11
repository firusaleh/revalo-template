import { getAdminSettings } from "@/lib/admin-data";
import { BewertenClient } from "./bewerten-client";

export const dynamic = "force-dynamic";

export default async function BewertenPage() {
  const settings = await getAdminSettings();
  return <BewertenClient logoUrl={settings.logoUrl} />;
}
