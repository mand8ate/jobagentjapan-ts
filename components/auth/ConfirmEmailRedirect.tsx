"use client";

import { buttonVariants } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

export default function ConfirmEmailRedirect() {
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data.user) {
        setTimeout(() => {
          router.replace("/");
        }, 7000);
        toast({
          variant: "destructive",
          title: "Imminent Redirect",
          description: "You will be redirected shortly",
        });
      }
    };
    getSession();
  }, []);

  return (
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
  );
}
