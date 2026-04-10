import {
  pgTable,
  uuid,
  text,
  timestamp,
  integer,
  boolean,
  pgEnum,
} from "drizzle-orm/pg-core";

export const channelEnum = pgEnum("channel", ["email", "whatsapp", "qr"]);
export const templateChannelEnum = pgEnum("template_channel", [
  "email",
  "whatsapp",
]);
export const reviewRequestStatusEnum = pgEnum("review_request_status", [
  "pending",
  "sent",
  "clicked",
  "rated",
  "routed_google",
  "feedback_submitted",
]);

export const customers = pgTable("customers", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const reviewRequests = pgTable("review_requests", {
  id: uuid("id").defaultRandom().primaryKey(),
  customerId: uuid("customer_id")
    .notNull()
    .references(() => customers.id, { onDelete: "cascade" }),
  token: text("token").notNull().unique(),
  channel: channelEnum("channel").notNull(),
  status: reviewRequestStatusEnum("status").notNull().default("pending"),
  sentAt: timestamp("sent_at", { withTimezone: true }),
  clickedAt: timestamp("clicked_at", { withTimezone: true }),
  ratedAt: timestamp("rated_at", { withTimezone: true }),
  whatsappSentManuallyAt: timestamp("whatsapp_sent_manually_at", {
    withTimezone: true,
  }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const feedbacks = pgTable("feedbacks", {
  id: uuid("id").defaultRandom().primaryKey(),
  reviewRequestId: uuid("review_request_id").references(
    () => reviewRequests.id,
    { onDelete: "set null" },
  ),
  rating: integer("rating").notNull(),
  comment: text("comment"),
  isAnonymous: boolean("is_anonymous").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const googleReviews = pgTable("google_reviews", {
  id: uuid("id").defaultRandom().primaryKey(),
  googlePlaceId: text("google_place_id").notNull(),
  reviewerName: text("reviewer_name").notNull(),
  rating: integer("rating").notNull(),
  text: text("text"),
  publishedAt: timestamp("published_at", { withTimezone: true }).notNull(),
  syncedAt: timestamp("synced_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  externalId: text("external_id").notNull().unique(),
});

export const messageTemplates = pgTable("message_templates", {
  id: uuid("id").defaultRandom().primaryKey(),
  channel: templateChannelEnum("channel").notNull(),
  name: text("name").notNull(),
  subject: text("subject"),
  body: text("body").notNull(),
  isActive: boolean("is_active").notNull().default(true),
  isCopyPaste: boolean("is_copy_paste").notNull().default(false),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const whatsappConnection = pgTable("whatsapp_connection", {
  id: uuid("id").defaultRandom().primaryKey(),
  phoneNumberId: text("phone_number_id").notNull(),
  businessAccountId: text("business_account_id").notNull(),
  accessTokenEncrypted: text("access_token_encrypted").notNull(),
  tokenExpiresAt: timestamp("token_expires_at", { withTimezone: true }),
  templateInitialName: text("template_initial_name").notNull(),
  connectedAt: timestamp("connected_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  role: text("role").notNull().default("admin"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const settings = pgTable("settings", {
  id: text("id").primaryKey().default("singleton"),
  businessName: text("business_name").notNull(),
  googlePlaceId: text("google_place_id"),
  googleReviewUrl: text("google_review_url"),
  smartRoutingThreshold: integer("smart_routing_threshold")
    .notNull()
    .default(4),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type Customer = typeof customers.$inferSelect;
export type NewCustomer = typeof customers.$inferInsert;
export type ReviewRequest = typeof reviewRequests.$inferSelect;
export type NewReviewRequest = typeof reviewRequests.$inferInsert;
export type Feedback = typeof feedbacks.$inferSelect;
export type NewFeedback = typeof feedbacks.$inferInsert;
export type GoogleReview = typeof googleReviews.$inferSelect;
export type NewGoogleReview = typeof googleReviews.$inferInsert;
export type MessageTemplate = typeof messageTemplates.$inferSelect;
export type NewMessageTemplate = typeof messageTemplates.$inferInsert;
export type WhatsappConnection = typeof whatsappConnection.$inferSelect;
export type NewWhatsappConnection = typeof whatsappConnection.$inferInsert;
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Settings = typeof settings.$inferSelect;
export type NewSettings = typeof settings.$inferInsert;
