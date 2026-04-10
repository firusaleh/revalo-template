import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

// Load .env.local first (for local dev), then .env as fallback
config({ path: ".env.local" });
config();

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  strict: true,
  verbose: true,
});
