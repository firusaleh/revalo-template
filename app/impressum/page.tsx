import Link from "next/link";
import { siteConfig } from "@/site.config";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-3xl bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Startseite
          </Link>
          <span className="mx-2">/</span>
          <span>Impressum</span>
        </nav>

        <h1 className="text-3xl font-bold mb-6">Impressum</h1>

        {/* TODO: Rechtstext ergänzen */}
        <section className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              {siteConfig.businessName}
              <br />
              [Platzhalter Straße und Hausnummer]
              <br />
              [Platzhalter PLZ Ort]
              <br />
              [Platzhalter Land]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Vertreten durch</h2>
            <p>[Platzhalter Geschäftsführer / Inhaber]</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Kontakt</h2>
            <p>
              Telefon: [Platzhalter]
              <br />
              E-Mail: [Platzhalter]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p>
              USt-ID gemäß § 27 a Umsatzsteuergesetz: [Platzhalter USt-ID]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Handelsregister
            </h2>
            <p>
              Registergericht: [Platzhalter]
              <br />
              Registernummer: [Platzhalter]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              [Platzhalter Name]
              <br />
              [Platzhalter Adresse]
            </p>
          </div>

          <p className="text-xs text-gray-500 pt-6 border-t border-gray-200">
            Dieser Text ist ein Platzhalter und ersetzt keine rechtlich
            geprüfte Anbieterkennzeichnung.
          </p>
        </section>
      </div>
    </main>
  );
}
