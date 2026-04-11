import {
  siteConfig,
  DEFAULT_SMART_ROUTING_THRESHOLD,
} from "@/site.config";

export type EffectiveSettings = {
  businessName: string;
  googleReviewUrl: string;
  smartRoutingThreshold: number;
};

export async function getEffectiveSettings(): Promise<EffectiveSettings> {
  // Try loading from DB first, fall back to site.config.ts defaults
  try {
    const { db } = await import("@/db");
    const { settings } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");

    const [row] = await db
      .select()
      .from(settings)
      .where(eq(settings.id, "singleton"))
      .limit(1);

    if (row) {
      return {
        businessName: row.businessName,
        googleReviewUrl: row.googleReviewUrl ?? siteConfig.googleReviewUrl,
        smartRoutingThreshold:
          row.smartRoutingThreshold ?? DEFAULT_SMART_ROUTING_THRESHOLD,
      };
    }
  } catch {
    // DB not available — use static config
  }

  return {
    businessName: siteConfig.businessName,
    googleReviewUrl: siteConfig.googleReviewUrl,
    smartRoutingThreshold: DEFAULT_SMART_ROUTING_THRESHOLD,
  };
}
