"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { setNewPasswordValidator } from "@/lib/validators/auth";
import { toast } from "@/components/ui/use-toast";

export default function NewPasswordForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const supabase = createClient();

    const payload: setNewPasswordValidator = { password };

    try {
      const { error } = await supabase.auth.updateUser({
        password: payload.password,
      });
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
        description: "You successfully changed you password!",
      });

      router.push("/");
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
        Password
      </label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border-primary bg-gray-200 border-2 rounded-full py-2 px-4 focus:outline-none font-semibold placeholder:text-muted-/10 mt-2 focus:ring focus:ring-primary/50"
        placeholder="Enter your new password"
      />
      <hr className="h-px mt-8 mb-4 bg-gray-400/50" />
      <Button isLoading={isLoading} className={cn("w-full")}>
        {isLoading ? null : <span>Reset Password</span>}
      </Button>
    </form>
  );
}
