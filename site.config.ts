export type WhatsAppMode = "copy_paste" | "automated";

export type SiteConfig = {
  businessName: string;
  primaryColor: string;
  logoUrl: string;
  googleReviewUrl: string;
  whatsappMode: WhatsAppMode;
};

export const siteConfig: SiteConfig = {
  businessName: "Revalo Demo",
  primaryColor: "#0ea5e9",
  logoUrl: "/logo.svg",
  googleReviewUrl:
    "https://www.google.com/maps/place/Revalo+Demo/@0,0,15z",
  whatsappMode: "copy_paste",
};

export const DEFAULT_SMART_ROUTING_THRESHOLD = 4;
