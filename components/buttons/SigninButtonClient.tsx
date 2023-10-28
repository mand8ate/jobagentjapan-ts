"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";

import { Linkedin } from "lucide-react";

export default function SigninButtonClient() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const supabase = createClientComponentClient<Database>();

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: `${location.origin}/api/auth/signin`,
        },
      });
    } catch (e) {
      toast({
        variant: "destructive",
        title: "LinkedIn Signin",
        description: "Oops, something went wrong! try again?",
      });

      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleSignIn}
      isLoading={isLoading}
      className="relative rounded-[30px] py-2 px-4 text-white text-md violetGradient-bg text-decoration:none flex items-center justify-center cursor-pointer hover:underline"
    >
      {isLoading ? null : (
        <span className="absolute left-12">
          <Linkedin className="mr-2" />
        </span>
      )}
      Signin
    </Button>
  );
}
