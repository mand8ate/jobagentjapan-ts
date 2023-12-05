import ResetPasswordForm from "@/components/forms/ResetPasswordForm";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ResetPassword() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="container flex flex-col justify-center items-center h-full mt-12">
      <div className="w-full max-w-md mx-auto">
        <div className="mb-4">
          <h1 className="text-left leading-relaxed font-semibold tracking-wider violetGradient-text text-xl md:text-4xl mb-4">
            <span className="">Reset Your Password</span>
          </h1>
          <p>
            Type in your email and we'll send you a link to reset your password
          </p>
        </div>
        <div className="w-full mt-12">
          <ResetPasswordForm />
        </div>
        <p className="mt-2 text-sm text-center">
          Already have an account?{" "}
          <Link href="/signin" className="underline hover:opacity-50">
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
}
