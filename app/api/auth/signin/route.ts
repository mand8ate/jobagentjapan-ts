import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import type { Database } from "@/lib/database.types";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createRouteHandlerClient<Database>({ cookies });
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(requestUrl.origin);
}

export async function POST(request: Request) {
  try {
    const requestUrl = new URL(request.url);
    const formData = await request.formData();
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing Email or Password" },
        {
          status: 400,
        }
      );
    }

    const supabase = createRouteHandlerClient<Database>({ cookies });

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json(
        { error: "Email and Password don't match" },
        { status: 400 }
      );
    }

    return NextResponse.redirect(requestUrl.origin, {
      status: 301,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
