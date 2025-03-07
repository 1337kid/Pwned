import { NextResponse } from 'next/server'
import { getSupabaseClient } from "@/lib/auth";
import { checkUserFromDB, insertUserIntoDB } from '@/lib/db/user';

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  try {
    if (code) {
      const supabase = getSupabaseClient()
      const { error } = await supabase.auth.exchangeCodeForSession(code)
      if (!error) {
        const currentUser = (await supabase.auth.getUser()).data.user;
        if (!await checkUserFromDB(currentUser?.email)) {
          const name = currentUser?.user_metadata?.name;
          await insertUserIntoDB(
            currentUser?.email,
            name,
          )
        }
        const forwardedHost = request.headers.get('x-forwarded-host')
        const isLocalEnv = process.env.NODE_ENV === 'development'
        if (isLocalEnv) {
          return NextResponse.redirect(`${origin}${next}`)
        } else if (forwardedHost) {
          return NextResponse.redirect(`https://${forwardedHost}${next}`)
        } else {
          return NextResponse.redirect(`${origin}${next}`)
        }
      }
    }
  } catch (error) {
      
  }


  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}