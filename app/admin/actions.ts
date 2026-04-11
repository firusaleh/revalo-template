"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

const emailSchema = z.object({ email: z.string().email() });

export async function sendMagicLink(formData: FormData) {
  const parsed = emailSchema.safeParse({ email: formData.get("email") });
  if (!parsed.success) {
    return { ok: false as const, error: "Ungültige E-Mail-Adresse." };
  }
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    return {
      ok: true as const,
      message: "(Dev-Modus) Magic-Link-Versand simuliert.",
    };
  }
  try {
    const { createServerClient } = await import("@supabase/ssr");
    const { cookies } = await import("next/headers");
    const cookieStore = cookies();
    const supabase = createServerClient(url, key, {
      cookies: {
        get: (n) => cookieStore.get(n)?.value,
        set: () => {},
        remove: () => {},
      },
    });
    const { error } = await supabase.auth.signInWithOtp({
      email: parsed.data.email,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/admin/auth/callback`,
      },
    });
    if (error) return { ok: false as const, error: error.message };
    return { ok: true as const, message: "Magic Link wurde versendet." };
  } catch (e) {
    return {
      ok: false as const,
      error: e instanceof Error ? e.message : "Unbekannter Fehler.",
    };
  }
}

const newRequestSchema = z.object({
  customerId: z.string().min(1),
  channel: z.enum(["email", "whatsapp", "qr"]),
});

export async function createReviewRequest(
  _: unknown,
  formData: FormData,
): Promise<{ ok: boolean; message: string }> {
  const parsed = newRequestSchema.safeParse({
    customerId: formData.get("customerId"),
    channel: formData.get("channel"),
  });
  if (!parsed.success) {
    return { ok: false, message: "Bitte alle Felder korrekt ausfüllen." };
  }
  try {
    const { db } = await import("@/db");
    const { reviewRequests } = await import("@/db/schema");
    const { createReviewRequestToken } = await import("@/lib/tokens");

    const token = createReviewRequestToken();
    await db.insert(reviewRequests).values({
      customerId: parsed.data.customerId,
      token,
      channel: parsed.data.channel,
      status: "pending",
    });
  } catch (e) {
    console.warn(
      "[createReviewRequest] DB unavailable:",
      e instanceof Error ? e.message : String(e),
    );
    return {
      ok: false,
      message: e instanceof Error ? e.message : "DB-Fehler.",
    };
  }
  revalidatePath("/admin/anfragen");
  return {
    ok: true,
    message: `Bewertungsanfrage über ${parsed.data.channel} erstellt.`,
  };
}

const customerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
});

export async function upsertCustomer(
  _: unknown,
  formData: FormData,
): Promise<{ ok: boolean; message: string }> {
  const parsed = customerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
  });
  if (!parsed.success) {
    return { ok: false, message: "Bitte Name und E-Mail korrekt eingeben." };
  }
  try {
    const { db } = await import("@/db");
    const { customers } = await import("@/db/schema");

    await db.insert(customers).values({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ?? null,
    });
  } catch (e) {
    console.warn(
      "[upsertCustomer] DB unavailable:",
      e instanceof Error ? e.message : String(e),
    );
    return {
      ok: false,
      message: e instanceof Error ? e.message : "DB-Fehler.",
    };
  }
  revalidatePath("/admin/kunden");
  return { ok: true, message: `Kunde ${parsed.data.name} gespeichert.` };
}

const templateSchema = z.object({
  name: z.string().min(2),
  channel: z.enum(["email", "whatsapp"]),
  subject: z.string().optional(),
  body: z.string().min(10),
});

export async function upsertTemplate(
  _: unknown,
  formData: FormData,
): Promise<{ ok: boolean; message: string }> {
  const parsed = templateSchema.safeParse({
    name: formData.get("name"),
    channel: formData.get("channel"),
    subject: formData.get("subject") || undefined,
    body: formData.get("body"),
  });
  if (!parsed.success) {
    return { ok: false, message: "Template ungültig." };
  }
  try {
    const { db } = await import("@/db");
    const { messageTemplates } = await import("@/db/schema");

    await db.insert(messageTemplates).values({
      name: parsed.data.name,
      channel: parsed.data.channel,
      subject: parsed.data.subject ?? null,
      body: parsed.data.body,
      isActive: true,
    });
  } catch (e) {
    console.warn(
      "[upsertTemplate] DB unavailable:",
      e instanceof Error ? e.message : String(e),
    );
    return {
      ok: false,
      message: e instanceof Error ? e.message : "DB-Fehler.",
    };
  }
  revalidatePath("/admin/templates");
  return { ok: true, message: `Template „${parsed.data.name}" gespeichert.` };
}

const settingsSchema = z.object({
  businessName: z.string().min(2),
  googlePlaceId: z.string().optional(),
  googleReviewUrl: z.string().url().or(z.literal("")),
  smartRoutingThreshold: z.coerce.number().int().min(1).max(5),
});

export async function updateSettings(
  _: unknown,
  formData: FormData,
): Promise<{ ok: boolean; message: string }> {
  const parsed = settingsSchema.safeParse({
    businessName: formData.get("businessName"),
    googlePlaceId: formData.get("googlePlaceId") || "",
    googleReviewUrl: formData.get("googleReviewUrl") || "",
    smartRoutingThreshold: formData.get("smartRoutingThreshold"),
  });
  if (!parsed.success) {
    return { ok: false, message: "Einstellungen ungültig." };
  }
  try {
    const { db } = await import("@/db");
    const { settings } = await import("@/db/schema");
    const { eq, sql } = await import("drizzle-orm");

    const values = {
      businessName: parsed.data.businessName,
      googlePlaceId: parsed.data.googlePlaceId ?? null,
      googleReviewUrl: parsed.data.googleReviewUrl || null,
      smartRoutingThreshold: parsed.data.smartRoutingThreshold,
      updatedAt: new Date(),
    };

    const result = await db
      .update(settings)
      .set(values)
      .where(eq(settings.id, "singleton"));

    // If no row was updated, insert a new one
    const rowCount =
      typeof result === "object" && result !== null && "rowCount" in result
        ? (result as { rowCount: number }).rowCount
        : 0;
    if (rowCount === 0) {
      await db
        .insert(settings)
        .values({ id: "singleton", ...values })
        .onConflictDoNothing();
    }

    void sql; // suppress unused warning
  } catch (e) {
    console.warn(
      "[updateSettings] DB unavailable:",
      e instanceof Error ? e.message : String(e),
    );
    return {
      ok: false,
      message: e instanceof Error ? e.message : "DB-Fehler.",
    };
  }
  revalidatePath("/admin/einstellungen");
  return { ok: true, message: "Einstellungen gespeichert." };
}

/**
 * Marks a WhatsApp review request as manually sent by the operator
 * (copy-paste workflow). Falls back gracefully when no DB is configured.
 */
export async function markWhatsAppSentManually(
  reviewRequestId: string,
): Promise<{ ok: boolean }> {
  if (!reviewRequestId || typeof reviewRequestId !== "string") {
    return { ok: false };
  }
  try {
    const [{ db }, schemaMod, drizzle] = await Promise.all([
      import("@/db"),
      import("@/db/schema"),
      import("drizzle-orm"),
    ]);
    const { reviewRequests } = schemaMod;
    const { eq } = drizzle;
    await db
      .update(reviewRequests)
      .set({
        whatsappSentManuallyAt: new Date(),
        sentAt: new Date(),
        status: "sent",
      })
      .where(eq(reviewRequests.id, reviewRequestId));
  } catch (e) {
    // Mock-first fallback: no DB configured.
    console.warn(
      `[markWhatsAppSentManually] DB unavailable, mocked for ${reviewRequestId}:`,
      e instanceof Error ? e.message : String(e),
    );
  }
  revalidatePath("/admin/versand");
  return { ok: true };
}

const whatsappTemplateSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2),
  body: z.string().min(5),
});

export async function upsertWhatsAppTemplate(
  _: unknown,
  formData: FormData,
): Promise<{ ok: boolean; message: string }> {
  const parsed = whatsappTemplateSchema.safeParse({
    id: (formData.get("id") as string | null) ?? undefined,
    name: formData.get("name"),
    body: formData.get("body"),
  });
  if (!parsed.success) {
    return {
      ok: false,
      message:
        "Template ungültig. Name (min. 2) und Nachricht (min. 5 Zeichen) erforderlich.",
    };
  }
  try {
    const [{ db }, schemaMod] = await Promise.all([
      import("@/db"),
      import("@/db/schema"),
    ]);
    const { messageTemplates } = schemaMod;
    await db.insert(messageTemplates).values({
      channel: "whatsapp",
      name: parsed.data.name,
      body: parsed.data.body,
      isActive: true,
      isCopyPaste: true,
    });
  } catch (e) {
    console.warn(
      "[upsertWhatsAppTemplate] DB unavailable, mocked:",
      e instanceof Error ? e.message : String(e),
    );
  }
  revalidatePath("/admin/whatsapp-templates");
  return { ok: true, message: `Template „${parsed.data.name}" gespeichert.` };
}

