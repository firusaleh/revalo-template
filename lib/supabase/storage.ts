import { createClient } from "@supabase/supabase-js";

const ALLOWED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/svg+xml",
  "image/webp",
];
const MAX_SIZE_BYTES = 2 * 1024 * 1024; // 2 MB

/**
 * Uploads a logo image to Supabase Storage bucket "logos".
 * Returns the public URL on success, or null on failure.
 */
export async function uploadLogo(file: File): Promise<string | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    console.warn("[uploadLogo] Missing SUPABASE_URL or SERVICE_ROLE_KEY");
    return null;
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    console.warn("[uploadLogo] Invalid file type:", file.type);
    return null;
  }

  if (file.size > MAX_SIZE_BYTES) {
    console.warn("[uploadLogo] File too large:", file.size);
    return null;
  }

  const supabase = createClient(url, serviceKey);

  const ext = file.name.split(".").pop() ?? "png";
  const path = `logo-${Date.now()}.${ext}`;

  const { error } = await supabase.storage
    .from("logos")
    .upload(path, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type,
    });

  if (error) {
    console.error("[uploadLogo] Upload failed:", error.message);
    return null;
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("logos").getPublicUrl(path);

  return publicUrl;
}
