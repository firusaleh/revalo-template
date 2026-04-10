import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/site.config";

const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/anfragen", label: "Anfragen" },
  { href: "/admin/anfragen/neu", label: "Neue Anfrage" },
  { href: "/admin/feedback", label: "Feedback" },
  { href: "/admin/google-reviews", label: "Google-Reviews" },
  { href: "/admin/kunden", label: "Kunden" },
  { href: "/admin/templates", label: "Templates" },
  { href: "/admin/versand", label: "💬 WhatsApp-Versand" },
  { href: "/admin/whatsapp-templates", label: "WhatsApp-Templates" },
  { href: "/admin/qr", label: "QR-Code" },
  { href: "/admin/einstellungen", label: "Einstellungen" },
];

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function AdminShell({ title, subtitle, children }: Props) {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="px-6 py-5 border-b border-gray-200">
          <div
            className="text-lg font-bold"
            style={{ color: siteConfig.primaryColor }}
          >
            {siteConfig.businessName}
          </div>
          <div className="text-xs text-gray-500 mt-1">Admin-Bereich</div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-6 py-4 border-t border-gray-200 text-xs text-gray-500">
          Revalo v0.1
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-x-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">{title}</h1>
          {subtitle && (
            <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
          )}
        </header>
        {children}
      </main>
    </div>
  );
}
