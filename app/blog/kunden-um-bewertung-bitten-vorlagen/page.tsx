import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { LandingNav } from "../../landing-nav";
import { TemplateBlock } from "./template-block";

const POST = {
  title:
    "Kunden um Google Bewertung bitten: 25 Vorlagen zum Kopieren (2026)",
  description:
    "Kostenlose Textvorlagen, um Kunden um eine Google-Bewertung zu bitten. Per E-Mail, WhatsApp, SMS, QR-Code. Für Restaurants, Ärzte, Handwerker & mehr.",
  date: "2026-04-12",
  author: "Firas Hattab",
  readingTime: "12 Min.",
  tags: ["Vorlagen", "E-Mail", "WhatsApp", "Praxis-Tipps"],
};

export const metadata: Metadata = {
  title: `${POST.title} | Revalo Blog`,
  description: POST.description,
  keywords:
    "google bewertung bitten text vorlage, kunden um bewertung bitten email, bewertung bitten whatsapp, google rezension bitten vorlage, bewertungsanfrage vorlage",
  alternates: { canonical: "/blog/kunden-um-bewertung-bitten-vorlagen" },
  openGraph: {
    title: POST.title,
    description: POST.description,
    type: "article",
    publishedTime: POST.date,
    authors: [POST.author],
  },
};

/* ── template data ─────────────────────────────────────────── */

type Template = {
  label: string;
  preview: string;
  locked: string;
};

const EMAIL_TEMPLATES: Template[] = [
  {
    label: "1. Nach dem Restaurantbesuch",
    preview:
      "Betreff: Vielen Dank für Ihren Besuch bei [Restaurant]!\n\nLiebe/r [Name],\n\nes hat uns sehr gefreut, Sie gestern Abend bei uns begrüßen zu dürfen. Wir hoffen, das Essen und der Service haben Ihnen gefallen.",
    locked:
      "Wenn Sie einen kurzen Moment Zeit haben, würden wir uns riesig über eine Google-Bewertung freuen. Das dauert nur 30 Sekunden und hilft uns enorm, noch mehr Gästen ein tolles Erlebnis zu bieten:\n\n[Bewertungslink]\n\nHerzlichen Dank und bis bald!\nIhr Team von [Restaurant]",
  },
  {
    label: "2. Nach dem Arzttermin",
    preview:
      "Betreff: Wie war Ihr Termin bei [Praxisname]?\n\nSehr geehrte/r [Name],\n\nvielen Dank, dass Sie sich für unsere Praxis entschieden haben. Wir hoffen, dass wir Ihnen weiterhelfen konnten und Sie sich bei uns gut aufgehoben gefühlt haben.",
    locked:
      "Ihre Meinung ist uns wichtig — nicht nur für uns, sondern auch für andere Patienten, die nach einem guten Arzt suchen. Wenn Sie zufrieden waren, freuen wir uns über eine kurze Google-Bewertung:\n\n[Bewertungslink]\n\nDas dauert nur einen Moment. Vielen Dank für Ihr Vertrauen!\n\nMit freundlichen Grüßen\n[Praxisname]",
  },
  {
    label: "3. Nach dem Handwerker-Auftrag",
    preview:
      "Betreff: Auftrag abgeschlossen — alles zu Ihrer Zufriedenheit?\n\nHallo [Name],\n\nwir hoffen, Sie sind mit unserer Arbeit zufrieden! Qualität und Zuverlässigkeit sind uns sehr wichtig, deshalb möchten wir kurz nachfragen, ob alles zu Ihrer Zufriedenheit ist.",
    locked:
      "Falls ja, würden wir uns sehr über eine kurze Google-Bewertung freuen. Gerade als Handwerksbetrieb sind ehrliche Bewertungen von Kunden wie Ihnen Gold wert — sie helfen anderen bei der Entscheidung:\n\n[Bewertungslink]\n\nVielen Dank und bei Fragen sind wir jederzeit erreichbar!\n\nFreundliche Grüße\n[Firmenname]",
  },
  {
    label: "4. Nach dem Friseurbesuch",
    preview:
      "Betreff: Ihr neuer Look steht Ihnen! ✂️\n\nHallo [Name],\n\nschön, dass Sie heute bei uns waren! Wir hoffen, Sie fühlen sich mit Ihrem neuen Haarschnitt rundum wohl.",
    locked:
      "Eine kurze Google-Bewertung von Ihnen würde uns riesig freuen — und hilft anderen, den richtigen Salon zu finden:\n\n[Bewertungslink]\n\nWir freuen uns auf Ihren nächsten Besuch!\nIhr [Salonname]-Team",
  },
  {
    label: "5. Nach dem Hotel-Checkout",
    preview:
      "Betreff: Danke für Ihren Aufenthalt im [Hotelname]!\n\nLiebe/r [Name],\n\nwir hoffen, Sie hatten einen wunderbaren Aufenthalt bei uns und konnten sich richtig erholen.",
    locked:
      "Wenn Ihnen Ihr Aufenthalt gefallen hat, würden wir uns sehr über eine kurze Google-Bewertung freuen. Damit helfen Sie anderen Reisenden bei ihrer Entscheidung — und uns, noch besser zu werden:\n\n[Bewertungslink]\n\nWir würden uns freuen, Sie bald wieder bei uns begrüßen zu dürfen!\n\nHerzliche Grüße\nIhr [Hotelname]-Team",
  },
  {
    label: "6. Nach der Autowerkstatt",
    preview:
      "Betreff: Ihr Fahrzeug ist fertig — alles in Ordnung?\n\nHallo [Name],\n\nIhr [Fahrzeugmodell] ist wieder einsatzbereit! Wir hoffen, Sie sind mit der Reparatur und unserem Service zufrieden.",
    locked:
      "Als kleine Werkstatt sind Google-Bewertungen für uns besonders wichtig. Wenn Sie zufrieden waren, freuen wir uns über eine kurze Rückmeldung:\n\n[Bewertungslink]\n\nBei Fragen zu Ihrem Fahrzeug sind wir jederzeit für Sie da.\n\nViele Grüße\n[Werkstattname]",
  },
  {
    label: "7. Nach dem Steuerberater-Termin",
    preview:
      "Betreff: Ihre Steuererklärung ist eingereicht!\n\nSehr geehrte/r [Name],\n\nIhre Steuererklärung für das Jahr [Jahr] wurde erfolgreich eingereicht. Wir halten Sie über den Bescheid auf dem Laufenden.",
    locked:
      "Wenn Sie mit unserer Beratung zufrieden sind, freuen wir uns über eine Google-Bewertung. Persönliche Empfehlungen sind für uns als Kanzlei besonders wertvoll:\n\n[Bewertungslink]\n\nVielen Dank für Ihr Vertrauen!\n\nMit freundlichen Grüßen\n[Kanzleiname]",
  },
  {
    label: "8. Nach dem Umzug",
    preview:
      "Betreff: Umzug geschafft — angekommen im neuen Zuhause?\n\nHallo [Name],\n\nwir hoffen, Sie haben sich in Ihrem neuen Zuhause gut eingelebt! Es war uns eine Freude, Ihren Umzug für Sie durchzuführen.",
    locked:
      "Wenn alles zu Ihrer Zufriedenheit war, würden wir uns sehr über eine kurze Google-Bewertung freuen. Als Umzugsunternehmen hilft uns jede Bewertung, neuen Kunden zu zeigen, dass sie bei uns in guten Händen sind:\n\n[Bewertungslink]\n\nAlles Gute im neuen Heim!\n[Firmenname]",
  },
  {
    label: "9. Nach der Reinigung",
    preview:
      "Betreff: Reinigung abgeschlossen — sind Sie zufrieden?\n\nHallo [Name],\n\nunsere Reinigungskräfte haben die vereinbarten Arbeiten in Ihrem [Objekt/Büro/Wohnung] abgeschlossen. Wir hoffen, das Ergebnis überzeugt Sie.",
    locked:
      "Sauberkeit sieht man — aber als Reinigungsfirma brauchen wir auch sichtbare Bewertungen. Wenn Sie zufrieden sind, freuen wir uns über Ihre Meinung:\n\n[Bewertungslink]\n\nVielen Dank!\n[Firmenname]",
  },
  {
    label: "10. Follow-up nach 1 Woche (branchenübergreifend)",
    preview:
      "Betreff: Kurze Frage zu Ihrem Erlebnis bei [Firmenname]\n\nHallo [Name],\n\nletzte Woche durften wir Sie bei uns betreuen. Wir möchten kurz nachfragen: Ist alles zu Ihrer Zufriedenheit?",
    locked:
      "Falls Sie bisher noch keine Gelegenheit hatten — wir freuen uns jederzeit über eine kurze Google-Bewertung. Das hilft uns, weiterhin das Beste für unsere Kunden zu geben:\n\n[Bewertungslink]\n\nHerzlichen Dank für Ihr Feedback!\n\nMit besten Grüßen\n[Firmenname]",
  },
];

const WHATSAPP_TEMPLATES: Template[] = [
  {
    label: "1. Kurz & freundlich (universell)",
    preview:
      'Hallo [Name]! 😊 Vielen Dank für Ihren Besuch bei uns heute.',
    locked:
      'Wir würden uns riesig freuen, wenn Sie sich 30 Sekunden Zeit nehmen könnten, um uns auf Google zu bewerten: [Link] Das hilft uns enorm — vielen Dank! 🙏',
  },
  {
    label: "2. Nach dem Restaurantbesuch",
    preview:
      'Hi [Name]! 🍽️ Wir hoffen, das Essen hat Ihnen geschmeckt!',
    locked:
      'Wenn ja, würde uns eine kurze Google-Bewertung sehr glücklich machen: [Link] Dauert nur 30 Sek. Bis zum nächsten Mal! 😊',
  },
  {
    label: "3. Nach dem Handwerker-Einsatz",
    preview:
      'Hallo [Name]! 🔧 Die Arbeit ist erledigt — wir hoffen, alles passt!',
    locked:
      'Falls Sie zufrieden sind, würde uns eine kurze Bewertung auf Google sehr helfen: [Link] Danke und bei Fragen melden Sie sich jederzeit!',
  },
  {
    label: "4. Nach dem Arzttermin",
    preview:
      'Hallo [Name], vielen Dank für Ihr Vertrauen in unsere Praxis!',
    locked:
      'Wir freuen uns, wenn Sie Ihre Erfahrung in einer kurzen Google-Bewertung teilen: [Link] Das hilft anderen Patienten bei der Suche. Herzlichen Dank! 🙏',
  },
  {
    label: "5. Erinnerung (freundlicher Nudge)",
    preview:
      'Hi [Name]! 👋 Kurze Erinnerung — wir hatten vor ein paar Tagen angefragt...',
    locked:
      'Falls Sie noch keine Gelegenheit hatten: Eine kurze Google-Bewertung würde uns sehr freuen! [Link] Dauert wirklich nur 30 Sekunden 😊 Danke!',
  },
];

const SMS_TEMPLATES: Template[] = [
  {
    label: "1. Standard (universell)",
    preview: "Danke für Ihren Besuch bei [Firma]!",
    locked:
      "Bewerten Sie uns auf Google — dauert nur 30 Sek: [Link]",
  },
  {
    label: "2. Nach dem Service",
    preview: "[Firma]: Alles zu Ihrer Zufriedenheit?",
    locked:
      "Freuen uns über Ihre Google-Bewertung: [Link] Danke!",
  },
  {
    label: "3. Freundliche Erinnerung",
    preview: "Hi [Name], kurze Erinnerung von [Firma]:",
    locked:
      "Haben Sie 30 Sek für eine Google-Bewertung? [Link] Danke! 🙏",
  },
];

const QR_TEMPLATES: Template[] = [
  {
    label: "1. Restaurant-Tischaufsteller",
    preview:
      "Hat es Ihnen geschmeckt?\n⭐⭐⭐⭐⭐",
    locked:
      "Scannen Sie den QR-Code und\nbewerten Sie uns auf Google!\nDauert nur 30 Sekunden.\n\n[QR-CODE]",
  },
  {
    label: "2. Tresen / Kasse",
    preview:
      "Zufrieden mit unserem Service?",
    locked:
      "Wir freuen uns über Ihre\nGoogle-Bewertung!\n\n[QR-CODE]\n\nEinfach scannen — fertig!",
  },
  {
    label: "3. Visitenkarte (Rückseite)",
    preview:
      "Empfehlen Sie uns weiter!",
    locked:
      "Scannen & auf Google bewerten\n\n[QR-CODE]\n\nIhre Meinung zählt!",
  },
  {
    label: "4. Wartezimmer-Plakat",
    preview:
      "Wie war Ihr Besuch bei uns?",
    locked:
      "Teilen Sie Ihre Erfahrung\nmit anderen Patienten!\n\nEinfach QR-Code scannen:\n\n[QR-CODE]\n\nVielen Dank für Ihr Feedback!",
  },
];

/* ── page component ────────────────────────────────────────── */

export default function VorlagenArticlePage() {
  const otherPosts = getAllPosts()
    .filter((p) => p.slug !== "kunden-um-bewertung-bitten-vorlagen")
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: POST.title,
    description: POST.description,
    datePublished: POST.date,
    author: { "@type": "Person", name: POST.author },
    publisher: { "@type": "Organization", name: "Revalo" },
    mainEntityOfPage:
      "https://getrevalo.de/blog/kunden-um-bewertung-bitten-vorlagen",
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <LandingNav logoUrl={null} businessName="Revalo" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="relative pb-20 pt-32 sm:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-sky-950" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative mx-auto max-w-3xl px-6">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="transition-colors hover:text-white">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-400">Vorlagen</span>
          </nav>

          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <time dateTime={POST.date}>
              {new Date(POST.date).toLocaleDateString("de-DE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{POST.readingTime} Lesezeit</span>
            <span>·</span>
            <span>{POST.author}</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Kunden um Google Bewertung bitten: 25&nbsp;Vorlagen zum Kopieren
            (2026)
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {POST.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs text-sky-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Intro */}
          <div className="prose-invert prose prose-slate mt-12 max-w-none prose-headings:font-bold prose-headings:text-white prose-h2:mt-12 prose-h2:text-2xl prose-h3:mt-6 prose-h3:text-lg prose-p:leading-relaxed prose-p:text-slate-300 prose-a:text-sky-400 prose-strong:text-white prose-li:text-slate-300">
            <p>
              Sie möchten Kunden um eine Google Bewertung bitten, aber Ihnen
              fehlen die richtigen Worte? Kein Problem. In diesem Artikel finden
              Sie <strong>25 fertige Textvorlagen</strong> — für E-Mail,
              WhatsApp, SMS und QR-Code-Aufsteller. Einfach kopieren, anpassen
              und versenden. Jede Vorlage ist praxiserprobt und auf{" "}
              <strong>hohe Rücklaufquoten</strong> optimiert.
            </p>
            <p>
              Denn die Statistik ist eindeutig:{" "}
              <strong>70% aller Kunden hinterlassen eine Bewertung</strong>, wenn
              sie aktiv darum gebeten werden. Ohne die Bitte? Weniger als 5%.
              Der Unterschied zwischen einem vollen und einem leeren
              Google-Profil ist oft nur eine einzige Nachricht.
            </p>

            {/* ── Section: Warum ── */}
            <h2>
              Warum Sie aktiv um Google-Bewertungen bitten sollten
            </h2>
            <p>
              Viele Unternehmer scheuen sich davor, Kunden direkt um eine
              Bewertung zu bitten. Dabei ist es das Normalste der Welt — und die
              Zahlen sprechen für sich:
            </p>
            <ul>
              <li>
                <strong>86% der Verbraucher</strong> lesen Google-Bewertungen
                vor einer Kaufentscheidung
              </li>
              <li>
                <strong>1 zusätzlicher Stern</strong> auf Google bedeutet bis zu{" "}
                <strong>9% mehr Umsatz</strong> (Harvard Business School)
              </li>
              <li>
                Google-Bewertungen sind der{" "}
                <strong>zweitwichtigste Ranking-Faktor</strong> für die lokale
                Suche
              </li>
              <li>
                Unternehmen mit <strong>50+ Bewertungen</strong> erhalten 266%
                mehr Anfragen
              </li>
              <li>
                Die meisten zufriedenen Kunden bewerten{" "}
                <strong>nicht von alleine</strong> — sie brauchen einen kleinen
                Anstoß
              </li>
            </ul>
            <p>
              Das Fazit: Wer nicht fragt, verliert. Mit den richtigen Vorlagen
              wird das Bitten um eine Bewertung so einfach wie das Versenden
              einer Nachricht.
            </p>

            {/* ── Section: E-Mail Vorlagen ── */}
            <h2>10 E-Mail-Vorlagen: Kunden um Google Bewertung bitten</h2>
            <p>
              E-Mail eignet sich besonders gut für Dienstleister mit
              Termingeschäft: Ärzte, Anwälte, Steuerberater, Werkstätten,
              Hotels und mehr. Der ideale Versandzeitpunkt ist{" "}
              <strong>24-48 Stunden</strong> nach dem Termin oder Service.
            </p>
            <p>
              <strong>Tipp:</strong> Verwenden Sie eine kurze, neugierig
              machende Betreffzeile. Der Bewertungslink sollte als{" "}
              <strong>auffälliger Button</strong> gestaltet sein — nicht als
              versteckter Textlink.
            </p>
          </div>

          {/* E-Mail Templates */}
          <div className="mt-8 space-y-6">
            {EMAIL_TEMPLATES.map((t, i) => (
              <TemplateBlock
                key={t.label}
                label={t.label}
                preview={t.preview}
                locked={t.locked}
                unlocked={i < 2}
              />
            ))}
          </div>

          {/* ── Section: WhatsApp ── */}
          <div className="prose-invert prose prose-slate mt-16 max-w-none prose-headings:font-bold prose-headings:text-white prose-h2:text-2xl prose-p:leading-relaxed prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300">
            <h2>5 WhatsApp-Vorlagen: Bewertung per Messenger erfragen</h2>
            <p>
              WhatsApp ist der{" "}
              <strong>effektivste Kanal für Bewertungsanfragen</strong>. Mit
              einer Öffnungsrate von über 90% und einer Antwortquote von
              45-60% schlägt WhatsApp jede E-Mail. Wichtig: Halten Sie die
              Nachricht <strong>kurz, persönlich und mit Emoji</strong>. Keine
              Romane — der Bewertungslink muss sofort sichtbar sein.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {WHATSAPP_TEMPLATES.map((t, i) => (
              <TemplateBlock
                key={t.label}
                label={t.label}
                preview={t.preview}
                locked={t.locked}
                unlocked={i < 1}
                channel="whatsapp"
              />
            ))}
          </div>

          {/* ── Section: SMS ── */}
          <div className="prose-invert prose prose-slate mt-16 max-w-none prose-headings:font-bold prose-headings:text-white prose-h2:text-2xl prose-p:leading-relaxed prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300">
            <h2>3 SMS-Vorlagen: Bewertungsanfrage in 160 Zeichen</h2>
            <p>
              SMS hat eine Öffnungsrate von <strong>98%</strong> — noch höher
              als WhatsApp. Allerdings haben Sie nur 160 Zeichen. Jedes Wort
              muss sitzen. SMS eignet sich besonders für{" "}
              <strong>ältere Zielgruppen</strong>, die kein WhatsApp nutzen.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {SMS_TEMPLATES.map((t) => (
              <TemplateBlock
                key={t.label}
                label={t.label}
                preview={t.preview}
                locked={t.locked}
                unlocked={false}
                channel="sms"
              />
            ))}
          </div>

          {/* ── Section: QR-Code ── */}
          <div className="prose-invert prose prose-slate mt-16 max-w-none prose-headings:font-bold prose-headings:text-white prose-h2:text-2xl prose-p:leading-relaxed prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300">
            <h2>4 Texte für QR-Code-Aufsteller & Schilder</h2>
            <p>
              Ein{" "}
              <Link
                href="/blog/qr-code-bewertungen-restaurant"
                className="text-sky-400 hover:text-sky-300"
              >
                QR-Code für Google Bewertungen
              </Link>{" "}
              ist nur so gut wie der Text drumherum. Hier sind vier erprobte
              Formulierungen für verschiedene Einsatzorte. Denken Sie daran:
              Weniger ist mehr. Der Text muss{" "}
              <strong>in 2 Sekunden erfassbar</strong> sein.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {QR_TEMPLATES.map((t) => (
              <TemplateBlock
                key={t.label}
                label={t.label}
                preview={t.preview}
                locked={t.locked}
                unlocked={false}
                channel="qr"
              />
            ))}
          </div>

          {/* ── Section: Tipps ── */}
          <div className="prose-invert prose prose-slate mt-16 max-w-none prose-headings:font-bold prose-headings:text-white prose-h2:text-2xl prose-h3:mt-6 prose-h3:text-lg prose-p:leading-relaxed prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300">
            <h2>7 Tipps für höhere Rücklaufquoten</h2>
            <p>
              Die beste Vorlage nutzt nichts, wenn Sie sie zum falschen
              Zeitpunkt oder auf die falsche Art versenden. Hier sind die
              wichtigsten Erfolgsfaktoren:
            </p>

            <h3>1. Timing ist alles</h3>
            <p>
              Senden Sie die Anfrage im <strong>Moment der höchsten
              Zufriedenheit</strong>. Für Restaurants: direkt nach dem Essen.
              Für Handwerker: direkt nach Abschluss der Arbeit. Für Ärzte:
              24 Stunden nach dem Termin. Je länger Sie warten, desto
              niedriger die Quote.
            </p>

            <h3>2. Personalisierung erhöht die Quote um 30%</h3>
            <p>
              &bdquo;Hallo Frau Müller&ldquo; wirkt deutlich besser als &bdquo;Lieber Kunde&ldquo;.
              Verwenden Sie den <strong>Namen des Kunden</strong> und
              beziehen Sie sich auf den konkreten Service. Das zeigt, dass
              die Nachricht nicht automatisch generiert wurde — selbst wenn
              sie es ist.
            </p>

            <h3>3. Kürze gewinnt</h3>
            <p>
              Je kürzer die Nachricht, desto höher die Rücklaufquote.
              Ideal: <strong>3-5 Sätze</strong> für E-Mails,{" "}
              <strong>2-3 Sätze</strong> für WhatsApp. Der Bewertungslink
              muss <strong>sofort sichtbar</strong> sein — nicht am Ende
              einer langen Nachricht versteckt.
            </p>

            <h3>4. &bdquo;30 Sekunden&ldquo; als magische Formulierung</h3>
            <p>
              Die Angabe &bdquo;dauert nur 30 Sekunden&ldquo; senkt die
              Hemmschwelle enorm. Der Kunde denkt: &bdquo;Das ist ja nichts&ldquo; — und
              klickt eher. Nutzen Sie diese Formulierung in jeder Vorlage.
            </p>

            <h3>5. Maximal eine Erinnerung</h3>
            <p>
              Wenn nach der ersten Nachricht keine Bewertung kommt,
              senden Sie <strong>maximal eine Erinnerung</strong> nach
              5-7 Tagen. Mehr wirkt aufdringlich und schadet der
              Kundenbeziehung.
            </p>

            <h3>6. Den richtigen Kanal wählen</h3>
            <p>
              WhatsApp für jüngere Zielgruppen und Laufkundschaft.
              E-Mail für B2B und professionelle Dienstleistungen. SMS für
              ältere Zielgruppen. QR-Codes für Vor-Ort-Kontakte. Im Zweifel:
              WhatsApp hat die <strong>höchste Conversion-Rate</strong>.
            </p>

            <h3>7. Direkten Bewertungslink verwenden</h3>
            <p>
              Verlinken Sie <strong>nie</strong> auf Ihre allgemeine
              Google-Maps-Seite. Nutzen Sie den direkten Bewertungslink,
              der sofort das Bewertungsfenster öffnet. Jeder zusätzliche
              Klick kostet Sie 20-30% der Bewertungen. In unserem{" "}
              <Link
                href="/blog/google-bewertungen-bekommen"
                className="text-sky-400 hover:text-sky-300"
              >
                ultimativen Guide
              </Link>{" "}
              erklären wir Schritt für Schritt, wie Sie den Link erstellen.
            </p>

            {/* ── Section: Revalo CTA ── */}
            <h2>Der automatische Weg: Revalo übernimmt das für Sie</h2>
            <p>
              Hand aufs Herz: Wie realistisch ist es, dass Sie oder Ihre
              Mitarbeiter nach <strong>jedem</strong> Kundenkontakt manuell
              eine Nachricht verschicken? Im stressigen Tagesgeschäft
              gehen diese Dinge als Erstes unter. Die Folge: Sie verschenken
              täglich potenzielle 5-Sterne-Bewertungen.
            </p>
            <p>
              <strong>Revalo automatisiert den gesamten Prozess:</strong>
            </p>
            <ul>
              <li>
                <strong>Automatischer Versand</strong> per E-Mail, WhatsApp
                oder SMS — nach jedem Kundenkontakt, zum optimalen Zeitpunkt
              </li>
              <li>
                <strong>Personalisierte Vorlagen</strong> mit dem Namen des
                Kunden, dem Datum und Ihrem Firmennamen — automatisch
                eingesetzt
              </li>
              <li>
                <strong>Smart-Routing</strong>: Zufriedene Kunden landen bei
                Google, unzufriedene geben internes Feedback — Ihr Rating
                steigt, Ihre Servicequalität auch
              </li>
              <li>
                <strong>QR-Codes</strong> mit integriertem Smart-Routing —
                einfach ausdrucken und aufstellen
              </li>
              <li>
                <strong>Dashboard</strong> mit Echtzeit-Überblick über alle
                Bewertungsanfragen, Rücklaufquoten und Ihr Google-Rating
              </li>
              <li>
                <strong>Erinnerungen</strong> werden automatisch verschickt,
                wenn der Kunde nach 5 Tagen noch nicht bewertet hat
              </li>
            </ul>
            <p>
              Statt jede Nachricht einzeln zu kopieren und zu versenden,
              lassen Sie Revalo die Arbeit übernehmen. Sie konzentrieren sich
              auf das, was Sie am besten können — Ihren Kunden einen
              großartigen Service bieten.
            </p>
          </div>

          {/* CTA Box */}
          <div className="mt-12 rounded-2xl border border-sky-500/20 bg-sky-500/5 p-8 text-center">
            <h3 className="text-xl font-bold text-white">
              Alle 25 Vorlagen automatisch versenden — mit Revalo
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Personalisiert, zum optimalen Zeitpunkt, mit Smart-Routing.
              Kein manuelles Kopieren mehr.
            </p>
            <Link
              href="/kontakt"
              className="mt-6 inline-flex items-center rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400"
            >
              Jetzt starten
            </Link>
          </div>

          {/* Fazit */}
          <div className="prose-invert prose prose-slate mt-16 max-w-none prose-headings:font-bold prose-headings:text-white prose-h2:text-2xl prose-p:leading-relaxed prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300">
            <h2>Fazit: Die richtige Vorlage macht den Unterschied</h2>
            <p>
              Google Bewertungen zu bekommen ist keine Glückssache — es ist
              eine Frage der richtigen Ansprache. Mit diesen 25 Vorlagen
              haben Sie für jede Situation und jeden Kanal den passenden
              Text. Die wichtigsten Regeln:
            </p>
            <ul>
              <li>
                <strong>Fragen Sie aktiv</strong> — 70% bewerten, wenn sie
                gebeten werden
              </li>
              <li>
                <strong>Timing ist entscheidend</strong> — im Moment der
                höchsten Zufriedenheit
              </li>
              <li>
                <strong>Personalisieren Sie</strong> — Name und konkreter
                Service
              </li>
              <li>
                <strong>Halten Sie es kurz</strong> — 30 Sekunden als
                magische Zahl
              </li>
              <li>
                <strong>Automatisieren Sie</strong> — damit im Alltag nichts
                untergeht
              </li>
            </ul>
            <p>
              <strong>Weiterführende Artikel:</strong>
            </p>
            <ul>
              <li>
                <Link
                  href="/blog/google-bewertungen-bekommen"
                  className="text-sky-400 hover:text-sky-300"
                >
                  Google Bewertungen bekommen: Der ultimative Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/negative-google-bewertungen-vermeiden"
                  className="text-sky-400 hover:text-sky-300"
                >
                  Negative Google-Bewertungen vermeiden
                </Link>
              </li>
            </ul>
            <p className="text-sm text-slate-500">
              <em>
                Stand: April 2026. Alle Vorlagen entsprechen den aktuellen
                Google-Richtlinien.
              </em>
            </p>
          </div>

          {/* Weitere Artikel */}
          {otherPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-bold text-white">
                Weitere Artikel
              </h2>
              <div className="mt-6 space-y-4">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-sky-500/20 hover:bg-white/[0.05]"
                  >
                    <h3 className="font-semibold text-white transition-colors group-hover:text-sky-400">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {p.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <footer className="border-t border-white/5 bg-slate-950 py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm text-slate-500">
            &copy; 2026 Revalo. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}
