# Revalo

Revalo ist eine Web-Anwendung zur Verwaltung von Kundenbewertungen mit
Smart-Routing: zufriedene Kunden werden zu Google-Reviews weitergeleitet,
unzufriedene Kunden landen in einem internen Feedback-Kanal. So steigen die
öffentlichen Google-Bewertungen, während kritische Rückmeldungen intern
bearbeitet werden können.

## Tech-Stack

- **Framework**: Next.js 14.2 (App Router, React Server Components)
- **Sprache**: TypeScript (strict)
- **Styling**: Tailwind CSS + shadcn/ui
- **Datenbank**: Postgres (Supabase) + Drizzle ORM
- **Auth**: Supabase Auth (SSR)
- **E-Mail**: Resend + React Email
- **WhatsApp**: Meta Cloud API (OAuth + Templates)
- **Background Jobs**: Inngest (Review-Requests, Google-Review-Sync)
- **Google Reviews**: Google Places Details API
- **Monitoring**: Sentry (optional)
- **Tests**: Vitest (Unit) + Playwright (E2E)
- **Package Manager**: pnpm

## Voraussetzungen

- Node.js 20+
- pnpm 9+
- Ein Supabase-Projekt (oder lokaler Postgres)
- Optional: Resend-, Meta- und Google-Places-Accounts für Vollbetrieb

## Setup

### 1. Abhängigkeiten installieren

```bash
pnpm install
```

### 2. Environment-Variablen anlegen

Kopiere `.env.example` nach `.env.local` und fülle die Werte aus:

```bash
# Datenbank (Supabase Postgres)
DATABASE_URL=postgresql://...

# Supabase Auth
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

# E-Mail (Resend)
RESEND_API_KEY=re_...
EMAIL_FROM="Revalo <noreply@example.com>"

# Security
JWT_SECRET=<mindestens 32 Zeichen>
ENCRYPTION_KEY=<32-Byte base64 / hex>

# Meta / WhatsApp
META_APP_ID=
META_APP_SECRET=
META_WHATSAPP_REDIRECT_URI=http://localhost:3000/api/meta/oauth/callback

# Google Places (für Google-Review-Sync)
GOOGLE_PLACES_API_KEY=
GOOGLE_PLACE_ID=

# Inngest
INNGEST_SIGNING_KEY=
INNGEST_EVENT_KEY=

# Öffentliche URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: Sentry
NEXT_PUBLIC_SENTRY_DSN=
```

Ohne Datenbank-Credentials läuft die App mit Mock-Daten im Admin-Bereich
(dank `tryDb`-Fallback in `lib/admin-data.ts`).

### 3. Datenbank-Schema migrieren

```bash
pnpm drizzle-kit push
```

### 4. Entwicklungsserver starten

```bash
pnpm dev
```

App unter <http://localhost:3000>, Admin unter <http://localhost:3000/admin>.

## Admin-Anleitung

### Login

Der Admin-Bereich liegt unter `/admin/login`. Die Authentifizierung läuft
über Supabase Auth. Ohne gültige Session werden alle `/admin/*`-Routen über
`middleware.ts` auf die Login-Seite umgeleitet.

### Neue Kunden anlegen

Unter `/admin/kunden` → Formular ausfüllen (Name, E-Mail, optional Telefon).
Kunden können auch direkt beim Erstellen einer Anfrage angelegt werden.

### Bewertungsanfragen versenden

Unter `/admin/anfragen/neu`:

1. Kunde auswählen oder neu anlegen
2. Kanal wählen: E-Mail, WhatsApp oder QR-Code
3. Absenden — Inngest übernimmt den Versand via `sendReviewRequest`

Der Kunde erhält einen Link (`/r/<token>`), der auf die öffentliche
Bewertungsseite `/bewerten` führt. Je nach Sterneanzahl wird er dann
entweder zu Google (≥ Schwellwert) oder zum internen Feedback-Formular
geroutet.

### QR-Code herunterladen

Unter `/admin/qr` lässt sich ein QR-Code für die `/bewerten`-Seite
generieren und als PNG herunterladen — ideal für Tisch-Aufsteller oder
Visitenkarten.

### Templates pflegen

Unter `/admin/templates` werden die Nachrichten-Vorlagen für E-Mail und
WhatsApp verwaltet. Platzhalter: `{{name}}`, `{{link}}`.

### Einstellungen

Unter `/admin/einstellungen`:

- **Smart-Routing-Schwellwert** (1–5): ab wie vielen Sternen zu Google
  weitergeleitet wird (Default 4)
- **Google Place ID** + Review-URL
- **Unternehmensname**

### Google-Reviews

Unter `/admin/google-reviews` werden die synchronisierten Google-Reviews
angezeigt. Die Synchronisation läuft täglich um 03:00 via Inngest-Cron
(`sync-google-reviews`) und nutzt die Google Places Details API.

### Feedback

Unter `/admin/feedback` landet das interne Feedback (niedrige Bewertungen),
das nicht zu Google weitergeleitet wurde.

## Entwicklung

```bash
# Lint
pnpm lint

# Unit-Tests (Vitest)
pnpm test

# E2E-Tests (Playwright)
pnpm test:e2e

# Build
pnpm build

# Inngest Dev-Server (für lokale Background Jobs)
npx inngest-cli dev
```

### Projektstruktur

```
app/            Next.js App Router (public + /admin)
components/     UI-Komponenten (shadcn/ui, AdminShell, CookieBanner)
db/             Drizzle Schema + Client
emails/         React-Email Templates
inngest/        Inngest Client + Functions
lib/            Business Logic (routing, tokens, email, whatsapp, google)
e2e/            Playwright Tests
```

## Deployment

Empfohlen: **Vercel** für das Frontend.

### Erforderliche Environment-Variablen (Production)

| Variable | Quelle |
|----------|--------|
| `DATABASE_URL` | Supabase → Settings → Database |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Settings → API |
| `RESEND_API_KEY` | Resend Dashboard |
| `EMAIL_FROM` | eigene verifizierte Domain |
| `JWT_SECRET` | selbst generieren (≥32 Zeichen) |
| `ENCRYPTION_KEY` | selbst generieren (32 Byte) |
| `META_APP_ID` / `META_APP_SECRET` | Meta for Developers |
| `META_WHATSAPP_REDIRECT_URI` | Production-URL + `/api/meta/oauth/callback` |
| `GOOGLE_PLACES_API_KEY` | Google Cloud Console |
| `GOOGLE_PLACE_ID` | Google Maps / Place-ID-Finder |
| `INNGEST_SIGNING_KEY` / `INNGEST_EVENT_KEY` | Inngest Cloud |
| `NEXT_PUBLIC_SITE_URL` | Production-URL |
| `NEXT_PUBLIC_SENTRY_DSN` | Sentry (optional) |

### Deployment-Checkliste

1. Supabase-Projekt erstellen und `pnpm drizzle-kit push` ausführen
2. Resend: Domain verifizieren und API-Key erstellen
3. Meta App mit WhatsApp-Business-Produkt aufsetzen
4. Google Cloud: Places API aktivieren und Schlüssel beschränken
5. Inngest Cloud: App anbinden (`/api/inngest`)
6. Sentry (optional): Projekt anlegen und DSN setzen
7. Vercel-Projekt mit allen Env-Variablen deployen
8. Nach Deploy: `/admin/login` aufrufen und ersten Admin-User in Supabase
   anlegen

## Lizenz

Proprietär. Alle Rechte vorbehalten.
