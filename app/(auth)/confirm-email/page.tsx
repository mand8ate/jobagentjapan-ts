import ConfirmEmailRedirect from "@/components/auth/ConfirmEmailRedirect";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ConfirmEmail() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="container flex flex-col justify-center items-center h-full mt-12">
      <div className="mb-4">
        <h1 className="text-center text-lg md:text-2xl leading-relaxed font-semibold tracking-wider mt-8">
          <span className="block violetGradient-text text-xl md:text-4xl mb-2">
            Signup Successfull
          </span>{" "}
          Your email is confirmed! <br /> Let your new professional adventure
          begin by filling out your profile and journey!
        </h1>
      </div>
      <ConfirmEmailRedirect />
    </div>
  );
}
