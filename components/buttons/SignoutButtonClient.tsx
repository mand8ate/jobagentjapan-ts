"use client";

import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function SignoutButtonClient() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignout = async () => {
    const response = await fetch(`${location.origin}/api/auth/signout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response) {
      router.refresh();
    }
  };

  return (
    <button
      onClick={handleSignout}
      className="rounded-[30px] py-2 px-4 text-white text-md bg-blueviolet-200 text-decoration:none flex items-center justify-center cursor-pointer hover:underline"
    >
      This is the logout button
    </button>
  );
}
