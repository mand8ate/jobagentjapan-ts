"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { resetPasswordPayload } from "@/lib/validators/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordForm() {
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const payload: resetPasswordPayload = {
      email,
    };

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(
        payload.email
      );

      if (error) {
        return toast({
          variant: "destructive",
          title: "Password Reset",
          description: error.message,
        });
      }

      toast({
        variant: "success",
        title: "Password Reset",
        description:
          "A link to reset you password has been sent to your email. Use it to set up a new password!",
      });

      router.push("/signin");
    } catch (e) {
      return toast({
        variant: "destructive",
        title: "Password Reset",
        description: "Oops, something went wrong! Try again?",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-12">
      <label htmlFor="email" className="block">
        Email
      </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border-primary bg-gray-200 border-2 rounded-full py-2 px-4 focus:outline-none font-semibold placeholder:text-muted-/10 mt-2 focus:ring focus:ring-primary/50"
        placeholder="Email Address"
      />
      <hr className="h-px mt-8 mb-4 bg-gray-400/50" />
      <Button isLoading={isLoading} className={cn("w-full")}>
        {isLoading ? null : <span>Reset Password</span>}
      </Button>
    </form>
  );
}
