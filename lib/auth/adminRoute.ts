import { cookies } from "next/headers";
import { createClient } from "../supabase/server";
import { redirect } from "next/navigation";

export default async function isAdminRoute() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return redirect("/");
  }

  const { data: user } = await supabase.from("profiles").select("*").single();

  if (user?.role !== "admin") {
    return redirect("/");
  }

  return;
}
