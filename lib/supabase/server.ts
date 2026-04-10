import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;

  const cookieStore = cookies();
  return createServerClient(url, key, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch {
          /* server component context */
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value: "", ...options });
        } catch {
          /* server component context */
        }
      },
    },
  });
}

export async function getCurrentUser() {
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return { id: "dev-admin", email: "dev@revalo.local" } as const;
  }
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
