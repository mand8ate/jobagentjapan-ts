"use client";

import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function SigninButtonClient() {
  const supabase = createClientComponentClient<Database>();

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleSignIn}
      className="rounded-[30px] py-2 px-4 text-white text-md bg-blueviolet-200 text-decoration:none flex items-center justify-center cursor-pointer hover:underline"
    >
      Signin
    </button>
  );
}
