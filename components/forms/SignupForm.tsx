"use client";

import { useState } from "react";
import SignupButton from "../buttons/SignupButton";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { signUpWithEmail } from "../auth/actions";
import { signUpWithEmailPayload } from "@/lib/validators/auth";

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const payload: signUpWithEmailPayload = {
      email,
      password,
    };

    await signUpWithEmail(payload, setIsLoading, router);
  };

  return (
    <div className="flex flex-col items-center w-full h-fit">
      <div className="w-1/2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="violetGradient-border border-2 rounded-full py-2 px-4 focus:outline-none font-semibold placeholder:text-muted-/10"
          />
          <input
            type="password"
            name="password"
            placeholder="Choose a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="violetGradient-border border-2 rounded-full py-2 px-4 focus:outline-none font-semibold"
          />
          <Button isLoading={isLoading} className={cn("rounded-full text-md")}>
            {isLoading ? null : (
              <span>
                <Mail className="mr-2" />
              </span>
            )}
            Signup
          </Button>
        </form>
      </div>
      <p className="mt-2 text-muted-foreground/90 text-sm">
        Provide your email and password to sign up!
      </p>
      <hr className="h-px my-2 w-3/4 bg-gray-400" />
      <div className="w-1/2">
        <SignupButton />
      </div>
    </div>
  );
}
