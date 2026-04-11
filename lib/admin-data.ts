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
  logoUrl: string | null;
  googlePlaceId: string;
  googleReviewUrl: string;
  smartRoutingThreshold: number;
};

async function getDb() {
  const { db } = await import("@/db");
  return db;
}

async function getSchema() {
  return await import("@/db/schema");
}

async function getDrizzle() {
  return await import("drizzle-orm");
}

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
      const db = await getDb();
      const schema = await getSchema();
      const { sql, eq, gte, count, avg } = await getDrizzle();

      const now = new Date();
      const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

      const [reqResult] = await db
        .select({ value: count() })
        .from(schema.reviewRequests)
        .where(gte(schema.reviewRequests.createdAt, firstOfMonth));
      const requestsThisMonth = reqResult?.value ?? 0;

      const [avgResult] = await db
        .select({ value: avg(schema.feedbacks.rating) })
        .from(schema.feedbacks);
      const avgRating = avgResult?.value ? parseFloat(avgResult.value) : 0;

      const [routedResult] = await db
        .select({ value: count() })
        .from(schema.reviewRequests)
        .where(
          sql`${schema.reviewRequests.status} = 'routed_google' AND ${schema.reviewRequests.createdAt} >= ${firstOfMonth}`,
        );
      const routedCount = routedResult?.value ?? 0;
      const smartRoutingRate =
        requestsThisMonth > 0 ? routedCount / requestsThisMonth : 0;

      const [googleResult] = await db
        .select({ value: count() })
        .from(schema.googleReviews);
      const totalGoogleReviews = googleResult?.value ?? 0;

      // suppress unused-variable warnings for imported but destructured names
      void eq;

      return { requestsThisMonth, avgRating, smartRoutingRate, totalGoogleReviews };
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
    const db = await getDb();
    const schema = await getSchema();
    const { eq, desc } = await getDrizzle();

    const rows = await db
      .select({
        id: schema.reviewRequests.id,
        channel: schema.reviewRequests.channel,
        status: schema.reviewRequests.status,
        createdAt: schema.reviewRequests.createdAt,
        sentAt: schema.reviewRequests.sentAt,
        token: schema.reviewRequests.token,
        customerName: schema.customers.name,
        customerEmail: schema.customers.email,
        customerPhone: schema.customers.phone,
      })
      .from(schema.reviewRequests)
      .leftJoin(
        schema.customers,
        eq(schema.reviewRequests.customerId, schema.customers.id),
      )
      .orderBy(desc(schema.reviewRequests.createdAt));

    return rows.map((r) => ({
      id: r.id,
      customerName: r.customerName ?? "Unbekannt",
      customerEmail: r.customerEmail ?? "",
      customerPhone: r.customerPhone,
      channel: r.channel,
      status: r.status,
      createdAt: r.createdAt.toISOString(),
      sentAt: r.sentAt?.toISOString() ?? null,
      token: r.token,
    }));
  }, MOCK_REQUESTS);
}

export async function listFeedbacks(): Promise<AdminFeedback[]> {
  return tryDb(async () => {
    const db = await getDb();
    const schema = await getSchema();
    const { desc } = await getDrizzle();

    const rows = await db
      .select()
      .from(schema.feedbacks)
      .orderBy(desc(schema.feedbacks.createdAt));

    return rows.map((r) => ({
      id: r.id,
      rating: r.rating,
      comment: r.comment,
      isAnonymous: r.isAnonymous,
      createdAt: r.createdAt.toISOString(),
    }));
  }, MOCK_FEEDBACKS);
}

export async function listGoogleReviews(): Promise<AdminGoogleReview[]> {
  return tryDb(async () => {
    const db = await getDb();
    const schema = await getSchema();
    const { desc } = await getDrizzle();

    const rows = await db
      .select()
      .from(schema.googleReviews)
      .orderBy(desc(schema.googleReviews.publishedAt));

    return rows.map((r) => ({
      id: r.id,
      reviewerName: r.reviewerName,
      rating: r.rating,
      text: r.text,
      publishedAt: r.publishedAt.toISOString(),
    }));
  }, MOCK_GOOGLE_REVIEWS);
}

export async function listCustomers(): Promise<AdminCustomer[]> {
  return tryDb(async () => {
    const db = await getDb();
    const schema = await getSchema();
    const { desc } = await getDrizzle();

    const rows = await db
      .select()
      .from(schema.customers)
      .orderBy(desc(schema.customers.createdAt));

    return rows.map((r) => ({
      id: r.id,
      name: r.name,
      email: r.email,
      phone: r.phone,
      createdAt: r.createdAt.toISOString(),
    }));
  }, MOCK_CUSTOMERS);
}

export async function listTemplates(): Promise<AdminTemplate[]> {
  return tryDb(async () => {
    const db = await getDb();
    const schema = await getSchema();
    const { desc } = await getDrizzle();

    const rows = await db
      .select()
      .from(schema.messageTemplates)
      .orderBy(desc(schema.messageTemplates.updatedAt));

    return rows.map((r) => ({
      id: r.id,
      channel: r.channel,
      name: r.name,
      subject: r.subject,
      body: r.body,
      isActive: r.isActive,
      isCopyPaste: r.isCopyPaste,
    }));
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
      const db = await getDb();
      const schema = await getSchema();
      const { eq, and, gte, desc } = await getDrizzle();

      const conditions = [
        eq(schema.reviewRequests.channel, "whatsapp"),
        eq(schema.reviewRequests.status, "pending"),
      ];

      if (filter === "today") {
        conditions.push(gte(schema.reviewRequests.createdAt, startOfToday()));
      }

      const rows = await db
        .select({
          id: schema.reviewRequests.id,
          channel: schema.reviewRequests.channel,
          status: schema.reviewRequests.status,
          createdAt: schema.reviewRequests.createdAt,
          sentAt: schema.reviewRequests.sentAt,
          token: schema.reviewRequests.token,
          customerName: schema.customers.name,
          customerEmail: schema.customers.email,
          customerPhone: schema.customers.phone,
        })
        .from(schema.reviewRequests)
        .leftJoin(
          schema.customers,
          eq(schema.reviewRequests.customerId, schema.customers.id),
        )
        .where(and(...conditions))
        .orderBy(desc(schema.reviewRequests.createdAt));

      return rows.map((r) => ({
        id: r.id,
        customerName: r.customerName ?? "Unbekannt",
        customerEmail: r.customerEmail ?? "",
        customerPhone: r.customerPhone,
        channel: r.channel as "email" | "whatsapp" | "qr",
        status: r.status as AdminReviewRequest["status"],
        createdAt: r.createdAt.toISOString(),
        sentAt: r.sentAt?.toISOString() ?? null,
        token: r.token,
      }));
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
      const db = await getDb();
      const schema = await getSchema();
      const { eq, and } = await getDrizzle();

      const rows = await db
        .select()
        .from(schema.messageTemplates)
        .where(
          and(
            eq(schema.messageTemplates.channel, "whatsapp"),
            eq(schema.messageTemplates.isCopyPaste, true),
          ),
        );

      return rows.map((r) => ({
        id: r.id,
        channel: r.channel,
        name: r.name,
        subject: r.subject,
        body: r.body,
        isActive: r.isActive,
        isCopyPaste: r.isCopyPaste,
      }));
    },
    MOCK_TEMPLATES.filter(
      (t) => t.channel === "whatsapp" && t.isCopyPaste === true,
    ),
  );
}

export async function getAdminSettings(): Promise<AdminSettings> {
  return tryDb(
    async () => {
      const db = await getDb();
      const schema = await getSchema();
      const { eq } = await getDrizzle();

      const [row] = await db
        .select()
        .from(schema.settings)
        .where(eq(schema.settings.id, "singleton"));

      if (!row) {
        return {
          businessName: siteConfig.businessName,
          logoUrl: null,
          googlePlaceId: "",
          googleReviewUrl: siteConfig.googleReviewUrl,
          smartRoutingThreshold: DEFAULT_SMART_ROUTING_THRESHOLD,
        };
      }

      return {
        businessName: row.businessName,
        logoUrl: row.logoUrl ?? null,
        googlePlaceId: row.googlePlaceId ?? "",
        googleReviewUrl: row.googleReviewUrl ?? siteConfig.googleReviewUrl,
        smartRoutingThreshold: row.smartRoutingThreshold,
      };
    },
    {
      businessName: siteConfig.businessName,
      logoUrl: null,
      googlePlaceId: "",
      googleReviewUrl: siteConfig.googleReviewUrl,
      smartRoutingThreshold: DEFAULT_SMART_ROUTING_THRESHOLD,
    },
  );
}
