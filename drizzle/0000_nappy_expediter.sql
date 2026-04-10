DO $$ BEGIN
 CREATE TYPE "public"."channel" AS ENUM('email', 'whatsapp', 'qr');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."review_request_status" AS ENUM('pending', 'sent', 'clicked', 'rated', 'routed_google', 'feedback_submitted');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."template_channel" AS ENUM('email', 'whatsapp');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "customers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "feedbacks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"review_request_id" uuid,
	"rating" integer NOT NULL,
	"comment" text,
	"is_anonymous" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "google_reviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"google_place_id" text NOT NULL,
	"reviewer_name" text NOT NULL,
	"rating" integer NOT NULL,
	"text" text,
	"published_at" timestamp with time zone NOT NULL,
	"synced_at" timestamp with time zone DEFAULT now() NOT NULL,
	"external_id" text NOT NULL,
	CONSTRAINT "google_reviews_external_id_unique" UNIQUE("external_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "message_templates" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"channel" "template_channel" NOT NULL,
	"name" text NOT NULL,
	"subject" text,
	"body" text NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "review_requests" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"customer_id" uuid NOT NULL,
	"token" text NOT NULL,
	"channel" "channel" NOT NULL,
	"status" "review_request_status" DEFAULT 'pending' NOT NULL,
	"sent_at" timestamp with time zone,
	"clicked_at" timestamp with time zone,
	"rated_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "review_requests_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "settings" (
	"id" text PRIMARY KEY DEFAULT 'singleton' NOT NULL,
	"business_name" text NOT NULL,
	"google_place_id" text,
	"google_review_url" text,
	"smart_routing_threshold" integer DEFAULT 4 NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"role" text DEFAULT 'admin' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "whatsapp_connection" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"phone_number_id" text NOT NULL,
	"business_account_id" text NOT NULL,
	"access_token_encrypted" text NOT NULL,
	"token_expires_at" timestamp with time zone,
	"template_initial_name" text NOT NULL,
	"connected_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_review_request_id_review_requests_id_fk" FOREIGN KEY ("review_request_id") REFERENCES "public"."review_requests"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "review_requests" ADD CONSTRAINT "review_requests_customer_id_customers_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
