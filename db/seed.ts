import { config } from "dotenv";
config({ path: ".env.local" });
config();

import { db } from "./index";
import { customers, messageTemplates, settings } from "./schema";

async function main() {
  console.log("Seeding database...");

  await db
    .insert(customers)
    .values([
      {
        name: "Anna Müller",
        email: "anna.mueller@example.com",
        phone: "+491701234567",
      },
      {
        name: "Bernd Schmidt",
        email: "bernd.schmidt@example.com",
        phone: "+491707654321",
      },
      {
        name: "Clara Weber",
        email: "clara.weber@example.com",
        phone: null,
      },
    ])
    .onConflictDoNothing();

  await db
    .insert(messageTemplates)
    .values([
      {
        channel: "email",
        name: "Standard Bewertungsanfrage (E-Mail)",
        subject: "Wie war Ihr Besuch bei uns?",
        body:
          "Hallo {{name}},\n\nvielen Dank für Ihren Besuch. " +
          "Wir würden uns sehr über Ihr Feedback freuen: {{link}}\n\n" +
          "Herzliche Grüße\nIhr Team",
        isActive: true,
      },
      {
        channel: "whatsapp",
        name: "Standard Bewertungsanfrage (WhatsApp)",
        subject: null,
        body:
          "Hallo {{name}}, vielen Dank für Ihren Besuch! " +
          "Wie war Ihre Erfahrung? {{link}}",
        isActive: true,
      },
    ])
    .onConflictDoNothing();

  await db
    .insert(settings)
    .values({
      id: "singleton",
      businessName: "Revalo Demo Business",
      googlePlaceId: null,
      googleReviewUrl: null,
      smartRoutingThreshold: 4,
    })
    .onConflictDoNothing();

  console.log("Seed complete.");
  process.exit(0);
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
