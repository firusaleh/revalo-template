import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { JsonLd } from "@/components/JsonLd";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getrevalo.de"),
  title: "Revalo – Mehr Google-Bewertungen automatisch | Bewertungsmanagement Software",
  description:
    "Revalo routet zufriedene Kunden automatisch zu Google Reviews und fängt negatives Feedback intern ab. Per QR-Code, WhatsApp oder E-Mail. DSGVO-konform. Jetzt kostenlos testen!",
  keywords:
    "bewertungsmanagement, google bewertungen, review management, smart routing, kundenbewertungen",
  robots: "index, follow",
  alternates: {
    canonical: "/",
    languages: { de: "/" },
  },
  openGraph: {
    title: "Revalo – Automatisch mehr Google-Bewertungen sammeln",
    description:
      "Smart-Routing für Kundenbewertungen: Zufriedene Kunden → Google Review. Unzufriedene → Internes Feedback. Ab 99€/Mo.",
    type: "website",
    url: "https://getrevalo.de",
    locale: "de_DE",
    siteName: "Revalo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revalo – Automatisch mehr Google-Bewertungen sammeln",
    description:
      "Smart-Routing für Kundenbewertungen: Zufriedene Kunden → Google Review. Unzufriedene → Internes Feedback.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieBanner />
        <JsonLd />
      </body>
    </html>
  );
}
