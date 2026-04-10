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
  // TODO (Phase 4): load from DB settings table when available,
  // fall back to site.config.ts defaults.
  return {
    businessName: siteConfig.businessName,
    googleReviewUrl: siteConfig.googleReviewUrl,
    smartRoutingThreshold: DEFAULT_SMART_ROUTING_THRESHOLD,
  };
}
