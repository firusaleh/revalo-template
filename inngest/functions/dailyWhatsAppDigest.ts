import { inngest } from "../client";
import { siteConfig } from "@/site.config";
import { sendDigestEmail } from "@/lib/email";

async function countPendingWhatsAppRequests(): Promise<number> {
  try {
    const [{ db }, schemaMod, drizzle] = await Promise.all([
      import("@/db"),
      import("@/db/schema"),
      import("drizzle-orm"),
    ]);
    const { reviewRequests } = schemaMod;
    const { and, eq, sql } = drizzle;
    const rows = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(reviewRequests)
      .where(
        and(
          eq(reviewRequests.channel, "whatsapp"),
          eq(reviewRequests.status, "pending"),
        ),
      );
    return rows[0]?.count ?? 0;
  } catch (e) {
    console.warn(
      "[dailyWhatsAppDigest] DB unavailable, defaulting to 0:",
      e instanceof Error ? e.message : String(e),
    );
    return 0;
  }
}

export const dailyWhatsAppDigest = inngest.createFunction(
  {
    id: "daily-whatsapp-digest",
    name: "Daily WhatsApp Copy-Paste Digest",
  },
  { cron: "0 9 * * *" },
  async ({ step }) => {
    const mode = await step.run("check-mode", async () => {
      return siteConfig.whatsappMode;
    });

    if (mode !== "copy_paste") {
      return { skipped: true, reason: "whatsappMode is not copy_paste" };
    }

    const pending = await step.run("count-pending", async () => {
      return countPendingWhatsAppRequests();
    });

    if (pending === 0) {
      return { skipped: true, reason: "no pending whatsapp requests" };
    }

    const result = await step.run("send-digest", async () => {
      const to = process.env.ADMIN_EMAIL ?? "firas@three-connect.de";
      return sendDigestEmail(to, pending);
    });

    return { skipped: false, pending, digest: result };
  },
);
