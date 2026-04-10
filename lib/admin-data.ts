import {
  siteConfig,
  DEFAULT_SMART_ROUTING_THRESHOLD,
} from "@/site.config";

export type DashboardKpis = {
  requestsThisMonth: number;
  avgRating: number;
  smartRoutingRate: number;
  totalGoogleReviews: number;
};

export type AdminReviewRequest = {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string | null;
  channel: "email" | "whatsapp" | "qr";
  status:
    | "pending"
    | "sent"
    | "clicked"
    | "rated"
    | "routed_google"
    | "feedback_submitted";
  createdAt: string;
  sentAt: string | null;
  token?: string;
};

export type AdminFeedback = {
  id: string;
  rating: number;
  comment: string | null;
  isAnonymous: boolean;
  createdAt: string;
};

export type AdminGoogleReview = {
  id: string;
  reviewerName: string;
  rating: number;
  text: string | null;
  publishedAt: string;
};

export type AdminCustomer = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  createdAt: string;
};

export type AdminTemplate = {
  id: string;
  channel: "email" | "whatsapp";
  name: string;
  subject: string | null;
  body: string;
  isActive: boolean;
  isCopyPaste?: boolean;
};

export type AdminSettings = {
  businessName: string;
  googlePlaceId: string;
  googleReviewUrl: string;
  smartRoutingThreshold: number;
};

async function tryDb<T>(query: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await query();
  } catch {
    return fallback;
  }
}

// ---------------------------- Mock data ------------------------------

function todayIso(offsetHours = 0): string {
  const d = new Date();
  d.setHours(d.getHours() - offsetHours);
  return d.toISOString();
}

const MOCK_REQUESTS: AdminReviewRequest[] = [
  {
    id: "req_001",
    customerName: "Anna Müller",
    customerEmail: "anna.mueller@example.com",
    channel: "email",
    status: "routed_google",
    createdAt: "2026-04-02",
    sentAt: "2026-04-02",
  },
  {
    id: "req_002",
    customerName: "Bernd Schmidt",
    customerEmail: "bernd.schmidt@example.com",
    channel: "whatsapp",
    status: "feedback_submitted",
    createdAt: "2026-04-03",
    sentAt: "2026-04-03",
  },
  {
    id: "req_003",
    customerName: "Clara Weber",
    customerEmail: "clara.weber@example.com",
    channel: "email",
    status: "sent",
    createdAt: "2026-04-05",
    sentAt: "2026-04-05",
  },
  {
    id: "req_004",
    customerName: "Daniel Fischer",
    customerEmail: "daniel.fischer@example.com",
    channel: "qr",
    status: "rated",
    createdAt: "2026-04-06",
    sentAt: null,
  },
  {
    id: "req_005",
    customerName: "Eva Hofmann",
    customerEmail: "eva.hofmann@example.com",
    channel: "email",
    status: "clicked",
    createdAt: "2026-04-07",
    sentAt: "2026-04-07",
  },
  {
    id: "req_006",
    customerName: "Florian Bauer",
    customerEmail: "florian.bauer@example.com",
    channel: "whatsapp",
    status: "routed_google",
    createdAt: "2026-04-08",
    sentAt: "2026-04-08",
  },
  {
    id: "req_007",
    customerName: "Greta Lang",
    customerEmail: "greta.lang@example.com",
    channel: "email",
    status: "pending",
    createdAt: "2026-04-09",
    sentAt: null,
  },
  {
    id: "req_wa_001",
    customerName: "Hannah Keller",
    customerEmail: "hannah.keller@example.com",
    customerPhone: "+491701112233",
    channel: "whatsapp",
    status: "pending",
    createdAt: todayIso(2),
    sentAt: null,
    token: "demo_token_hannah_001",
  },
  {
    id: "req_wa_002",
    customerName: "Ingo Richter",
    customerEmail: "ingo.richter@example.com",
    customerPhone: "0151 234-5678",
    channel: "whatsapp",
    status: "pending",
    createdAt: todayIso(5),
    sentAt: null,
    token: "demo_token_ingo_002",
  },
  {
    id: "req_wa_003",
    customerName: "Julia Becker",
    customerEmail: "julia.becker@example.com",
    customerPhone: "+491709998877",
    channel: "whatsapp",
    status: "pending",
    createdAt: todayIso(30),
    sentAt: null,
    token: "demo_token_julia_003",
  },
];

const MOCK_FEEDBACKS: AdminFeedback[] = [
  {
    id: "fb_001",
    rating: 2,
    comment: "Service war sehr langsam heute, wir mussten über 30 Minuten auf die Bestellung warten.",
    isAnonymous: false,
    createdAt: "2026-04-03",
  },
  {
    id: "fb_002",
    rating: 3,
    comment: "Essen war in Ordnung, aber die Atmosphäre war etwas laut.",
    isAnonymous: true,
    createdAt: "2026-04-05",
  },
  {
    id: "fb_003",
    rating: 1,
    comment: "Leider sehr enttäuschend, wird nicht mehr kommen.",
    isAnonymous: false,
    createdAt: "2026-04-07",
  },
];

const MOCK_GOOGLE_REVIEWS: AdminGoogleReview[] = [
  {
    id: "g_001",
    reviewerName: "Anna M.",
    rating: 5,
    text: "Hervorragender Service, sehr freundliches Team!",
    publishedAt: "2026-04-02",
  },
  {
    id: "g_002",
    reviewerName: "Florian B.",
    rating: 5,
    text: "Kann ich nur weiterempfehlen.",
    publishedAt: "2026-04-08",
  },
  {
    id: "g_003",
    reviewerName: "Marco T.",
    rating: 4,
    text: "Gutes Essen, schnelle Bedienung.",
    publishedAt: "2026-03-28",
  },
];

const MOCK_CUSTOMERS: AdminCustomer[] = [
  {
    id: "cus_001",
    name: "Anna Müller",
    email: "anna.mueller@example.com",
    phone: "+491701234567",
    createdAt: "2026-03-15",
  },
  {
    id: "cus_002",
    name: "Bernd Schmidt",
    email: "bernd.schmidt@example.com",
    phone: "+491707654321",
    createdAt: "2026-03-20",
  },
  {
    id: "cus_003",
    name: "Clara Weber",
    email: "clara.weber@example.com",
    phone: null,
    createdAt: "2026-03-25",
  },
];

const MOCK_TEMPLATES: AdminTemplate[] = [
  {
    id: "tpl_001",
    channel: "email",
    name: "Standard Bewertungsanfrage (E-Mail)",
    subject: "Wie war Ihr Besuch bei uns?",
    body:
      "Hallo {{name}},\n\nvielen Dank für Ihren Besuch. Wir würden uns sehr über Ihr Feedback freuen: {{link}}",
    isActive: true,
  },
  {
    id: "tpl_002",
    channel: "whatsapp",
    name: "Standard Bewertungsanfrage (WhatsApp)",
    subject: null,
    body: "Hallo {{name}}, vielen Dank für Ihren Besuch! Wie war Ihre Erfahrung? {{link}}",
    isActive: true,
  },
  {
    id: "tpl_003",
    channel: "whatsapp",
    name: "Copy-Paste Standardnachricht",
    subject: null,
    body:
      "Hallo {{vorname}}, vielen Dank für Ihren Besuch bei {{businessName}}. Würden Sie uns kurz bewerten? {{reviewLink}}",
    isActive: true,
    isCopyPaste: true,
  },
];

export const DEFAULT_COPY_PASTE_BODY =
  "Hallo {{vorname}}, vielen Dank für Ihren Besuch bei {{businessName}}. Würden Sie uns kurz bewerten? {{reviewLink}}";

// ---------------------------- Data access ----------------------------

export async function getDashboardKpis(): Promise<DashboardKpis> {
  return tryDb(
    async () => {
      throw new Error("DB not configured");
    },
    {
      requestsThisMonth: MOCK_REQUESTS.length,
      avgRating: 4.3,
      smartRoutingRate:
        MOCK_REQUESTS.filter((r) => r.status === "routed_google").length /
        MOCK_REQUESTS.length,
      totalGoogleReviews: MOCK_GOOGLE_REVIEWS.length + 125,
    },
  );
}

export async function listReviewRequests(): Promise<AdminReviewRequest[]> {
  return tryDb(async () => {
    throw new Error("DB not configured");
  }, MOCK_REQUESTS);
}

export async function listFeedbacks(): Promise<AdminFeedback[]> {
  return tryDb(async () => {
    throw new Error("DB not configured");
  }, MOCK_FEEDBACKS);
}

export async function listGoogleReviews(): Promise<AdminGoogleReview[]> {
  return tryDb(async () => {
    throw new Error("DB not configured");
  }, MOCK_GOOGLE_REVIEWS);
}

export async function listCustomers(): Promise<AdminCustomer[]> {
  return tryDb(async () => {
    throw new Error("DB not configured");
  }, MOCK_CUSTOMERS);
}

export async function listTemplates(): Promise<AdminTemplate[]> {
  return tryDb(async () => {
    throw new Error("DB not configured");
  }, MOCK_TEMPLATES);
}

export type WhatsAppInboxFilter = "today" | "all";

function startOfToday(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

export async function getPendingWhatsAppRequests(
  filter: WhatsAppInboxFilter = "all",
): Promise<AdminReviewRequest[]> {
  return tryDb(
    async () => {
      throw new Error("DB not configured");
    },
    MOCK_REQUESTS.filter((r) => {
      if (r.channel !== "whatsapp") return false;
      if (r.status !== "pending") return false;
      if (filter === "today") {
        const created = new Date(r.createdAt);
        return created.getTime() >= startOfToday().getTime();
      }
      return true;
    }),
  );
}

export async function listWhatsAppCopyPasteTemplates(): Promise<
  AdminTemplate[]
> {
  return tryDb(
    async () => {
      throw new Error("DB not configured");
    },
    MOCK_TEMPLATES.filter(
      (t) => t.channel === "whatsapp" && t.isCopyPaste === true,
    ),
  );
}

export async function getAdminSettings(): Promise<AdminSettings> {
  return tryDb(
    async () => {
      throw new Error("DB not configured");
    },
    {
      businessName: siteConfig.businessName,
      googlePlaceId: "",
      googleReviewUrl: siteConfig.googleReviewUrl,
      smartRoutingThreshold: DEFAULT_SMART_ROUTING_THRESHOLD,
    },
  );
}
