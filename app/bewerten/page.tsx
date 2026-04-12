import type { Metadata } from "next";
import { getAdminSettings } from "@/lib/admin-data";
import { BewertenClient } from "./bewerten-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Bewertung abgeben | Revalo",
  description: "Teilen Sie Ihre Erfahrung — Ihre Meinung hilft anderen Kunden.",
  alternates: { canonical: "/bewerten" },
};

export default async function BewertenPage() {
  const settings = await getAdminSettings();
  return <BewertenClient logoUrl={settings.logoUrl} />;
}
