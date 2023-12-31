import ProfileCardContainer from "@/components/profile/ProfileContainer";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Profile() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("signin");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .single();

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center">
      <h1>
        Welcome back {profile?.username ? profile?.username : user?.email}
      </h1>
      <ProfileCardContainer />
    </div>
  );
}
