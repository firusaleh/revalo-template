import { siteConfig } from "@/site.config";
import { getAdminSettings } from "@/lib/admin-data";
import { BusinessLogo } from "@/components/BusinessLogo";

export const dynamic = "force-dynamic";

export default async function DankePage() {
  const settings = await getAdminSettings();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 bg-gray-50">
      <BusinessLogo
        logoUrl={settings.logoUrl}
        businessName={settings.businessName}
        size={80}
        className="rounded-lg"
      />
      <h1
        className="text-3xl font-bold"
        style={{ color: siteConfig.primaryColor }}
      >
        Vielen Dank!
      </h1>
      <p className="text-gray-700 text-center max-w-md">
        Ihr Feedback ist bei uns angekommen. Wir werden es nutzen, um
        unseren Service für Sie zu verbessern.
      </p>
      <p className="text-sm text-gray-500">{settings.businessName}</p>
    </main>
  );
}
