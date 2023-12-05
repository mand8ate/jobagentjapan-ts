"use client";

import { buttonVariants } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

export default function ConfirmEmail() {
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data.user) {
        setTimeout(() => {
          router.replace("/");
        }, 10000);
        toast({
          variant: "destructive",
          title: "Imminent Redirect",
          description: "You will be redirected shortly",
        });
      } else {
        router.replace("/");
      }
    };
    getSession();
  }, []);

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
      <div className="flex justify-end">
        <Link
          href="/profile"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Profile
        </Link>
        <Link
          href="/journey"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          Journey
          <ChevronRight className="mr-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
