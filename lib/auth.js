import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const getUser = async () => {
    const auth = getSupabaseClient().auth;
    const user = (await auth.getUser()).data.user;
    return user;
}

export function getSupabaseClient () {
  const cookieStorePromise = cookies();

  const supabaseClient = createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        async getAll() {
          const cookieStore = await cookieStorePromise;
          return cookieStore.getAll();
        },
        async setAll(cookiesToSet) {
          try {
            const cookieStore = await cookieStorePromise;
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );

  return supabaseClient;
}