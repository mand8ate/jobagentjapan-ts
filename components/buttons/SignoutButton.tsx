import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default async function SignoutButton() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
  };

  return (
    <form action={signOut}>
      <Button
        className={cn(
          "rounded-[30px] py-2 px-4 text-white text-md font-semibold bg-blueviolet-200 text-decoration:none flex items-center justify-center cursor-pointer hover:underline"
        )}
      >
        Signout <LogOut className="ml-2" />
      </Button>
    </form>
  );
}
