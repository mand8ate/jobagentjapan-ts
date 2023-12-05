"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { singInWithEmailPayload } from "@/lib/validators/auth";
import { signInWithEmail } from "../auth/actions";
import Link from "next/link";

export default function LoginFormEmail() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const payload: singInWithEmailPayload = {
      email,
      password,
    };

    await signInWithEmail(payload, setIsLoading, router);
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none rounded-full py-2 px-4 text-gray-700 bg-silver-100 w-full focus:outline-none focus:ring-1 focus:ring-palevioletred-200 focus:border-transparent"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none rounded-full py-2 px-4 text-gray-700 bg-silver-100 w-full focus:outline-none focus:ring-1 focus:ring-palevioletred-200 focus:border-transparent"
            placeholder="Password"
          />
        </div>
        <div>
          <Button
            isLoading={isLoading}
            type="submit"
            className="w-full bg-palevioletred-100 hover:bg-palevioletred-500 text-white text-md font-medium py-2 px-4 rounded-full transition duration-200 ease-in-out"
          >
            {isLoading ? null : (
              <span>
                <Mail className="mr-2" />
              </span>
            )}
            Email Signin
          </Button>
          <Link
            href="reset-password"
            className="block text-right underline text-sm mt-1"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
}
