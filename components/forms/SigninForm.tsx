"use client";

import { useState } from "react";
import SigninButton from "../buttons/SigninButton";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { signInWithEmail } from "../auth/actions";
import { singInWithEmailPayload } from "@/lib/validators/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const payload: singInWithEmailPayload = {
      email,
      password,
    };

    await signInWithEmail(payload, setIsLoading, router);
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
            Signin
          </Button>
        </form>
      </div>
      <p className="mt-2 text-muted-foreground/90 text-sm">
        Provide your email and password to sign in!{" "}
        <Link href="reset-password" className="underline">
          Forgot Password?
        </Link>
      </p>
      <hr className="h-px my-2 w-3/4 bg-gray-400" />
      <div className="w-1/2">
        <SigninButton />
      </div>
    </div>
  );
}
