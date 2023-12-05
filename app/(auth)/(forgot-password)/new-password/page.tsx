import NewPasswordForm from "@/components/forms/NewPasswordForm";
import { createClient } from "@/lib/supabase/server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function NewPassword() {
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
      <div className="w-full max-w-md mx-auto">
        <div className="mb-4">
          <h1 className="text-left leading-relaxed font-semibold tracking-wider violetGradient-text text-xl md:text-4xl mb-4">
            <span className="">Reset Your Password</span>
          </h1>
          <p>Choose your new password and then click the button below!</p>
        </div>
        <div className="w-full mt-12">
          <NewPasswordForm />
        </div>
      </div>
    </div>
  );
}
