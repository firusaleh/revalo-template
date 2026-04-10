import Link from "next/link";
import { siteConfig } from "@/site.config";

export const metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-3xl bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Startseite
          </Link>
          <span className="mx-2">/</span>
          <span>Datenschutz</span>
        </nav>

        <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

        {/* TODO: Rechtstext ergänzen */}
        <section className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold mb-2">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-2">
              {siteConfig.businessName}
              <br />
              [Platzhalter Straße und Hausnummer]
              <br />
              [Platzhalter PLZ Ort]
              <br />
              E-Mail: [Platzhalter E-Mail]
              <br />
              Telefon: [Platzhalter Telefon]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              2. Datenerhebung auf dieser Website
            </h2>
            <p>
              Wir erheben personenbezogene Daten nur im Rahmen der
              Bewertungsanfragen, die Sie von uns erhalten. Dazu gehören Name,
              E-Mail-Adresse, gegebenenfalls Telefonnummer sowie das von Ihnen
              abgegebene Feedback.
            </p>
            <p className="mt-2">[Platzhalter: Zwecke und Rechtsgrundlage]</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">3. Cookies</h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige
              Cookies. Es findet kein Tracking und keine Analyse durch Dritte
              statt.
            </p>
            <p className="mt-2">[Platzhalter: Details zu Cookies]</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              4. Rechte der betroffenen Personen
            </h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
              Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten.
              Darüber hinaus steht Ihnen ein Beschwerderecht bei der
              zuständigen Aufsichtsbehörde zu.
            </p>
            <p className="mt-2">[Platzhalter: Kontaktdaten Aufsichtsbehörde]</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              5. Speicherdauer
            </h2>
            <p>[Platzhalter: Informationen zur Speicherdauer]</p>
          </div>

          <p className="text-xs text-gray-500 pt-6 border-t border-gray-200">
            Stand: [Platzhalter Datum] — Dieser Text ist ein Platzhalter und
            ersetzt keine individuelle Datenschutzerklärung. Bitte durch
            rechtlich geprüften Inhalt ersetzen.
          </p>
        </section>
      </div>
    </main>
  );
}
