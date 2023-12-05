"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Linkedin, Github } from "lucide-react";

import { signInWithGithub, signInWithLinkedin } from "../auth/actions";
import { Separator } from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

export default function SigninButtonClient() {
  const [isLoadingGithub, setIsLoadingGithub] = useState<boolean>(false);
  const [isLoadingLinkedin, setIsLoadingLinkedin] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => signInWithLinkedin(setIsLoadingLinkedin)}
        isLoading={isLoadingLinkedin}
        className={cn(
          "w-full rounded-[30px] py-2 px-4 text-white text-md violetGradient-bg text-decoration:none flex items-center justify-center cursor-pointer hover:underline"
        )}
      >
        {isLoadingLinkedin ? null : (
          <span>
            <Linkedin className="mr-2" />
          </span>
        )}
        Signup
      </Button>
      <Separator className="my-2" />
      <Button
        onClick={() => signInWithGithub(setIsLoadingGithub)}
        isLoading={isLoadingGithub}
        className={cn(
          "w-full rounded-[30px] py-2 px-4 text-white text-md violetGradient-bg text-decoration:none flex items-center justify-center cursor-pointer hover:underline"
        )}
      >
        {isLoadingGithub ? null : (
          <span>
            <Github className="mr-2" />
          </span>
        )}
        Signup
      </Button>
    </>
  );
}
