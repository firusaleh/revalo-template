import QRCode from "qrcode";
import { AdminShell } from "@/components/admin/AdminShell";
import { siteConfig } from "@/site.config";
import { getAdminSettings } from "@/lib/admin-data";
import { BusinessLogo } from "@/components/BusinessLogo";

export const dynamic = "force-dynamic";

export default async function QrPage() {
  const settings = await getAdminSettings();
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000";
  const target = `${baseUrl}/bewerten`;
  const dataUrl = await QRCode.toDataURL(target, {
    width: 512,
    margin: 2,
    color: {
      dark: siteConfig.primaryColor,
      light: "#ffffff",
    },
  });

  return (
    <AdminShell
      title="QR-Code"
      subtitle="Für anonymes Bewerten am Point-of-Sale"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm flex flex-col items-center">
          <BusinessLogo
            logoUrl={settings.logoUrl}
            businessName={settings.businessName}
            size={64}
            className="rounded-lg mb-4"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={dataUrl}
            alt={`QR-Code für ${target}`}
            width={320}
            height={320}
            className="rounded-lg border border-gray-100"
          />
          <div className="text-sm text-gray-600 mt-4 text-center">
            Ziel:{" "}
            <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">
              {target}
            </code>
          </div>
          <a
            href={dataUrl}
            download="revalo-bewertung-qr.png"
            className="mt-6 rounded-lg px-5 py-2.5 text-sm font-semibold text-white"
            style={{ backgroundColor: siteConfig.primaryColor }}
          >
            Als PNG herunterladen
          </a>
        </section>
        <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="font-semibold mb-3">So funktioniert es</h2>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
            <li>
              QR-Code herunterladen und ausdrucken (z. B. als Tischaufsteller
              oder Kassen-Sticker).
            </li>
            <li>
              Kunden scannen den Code und landen direkt auf{" "}
              <code className="bg-gray-100 px-1 rounded">/bewerten</code>.
            </li>
            <li>
              Bei {siteConfig.businessName === "Revalo Demo" ? "≥ 4" : "hoher"}{" "}
              Bewertung werden Kunden automatisch zu Google weitergeleitet.
            </li>
            <li>
              Niedrige Bewertungen landen anonym im internen Feedback.
            </li>
          </ol>
        </section>
      </div>
    </AdminShell>
  );
}
