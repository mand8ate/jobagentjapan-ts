import { createClient } from "@/lib/supabase/client";
import { getURL } from "@/lib/getURL";
import { Dispatch, SetStateAction } from "react";

export const signInWithGithub = async (
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  toast: any
) => {
  const supabase = createClient();
  try {
    setIsLoading(true);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${getURL()}/api/auth/signin`,
      },
    });
    if (error) console.log("Error");
  } catch (e) {
    toast({
      variant: "destructive",
      title: "GitHub Signin",
      description: "Oops, something went wrong! try again?",
    });

    setIsLoading(false);
  }
};

export const signInWithLinkedin = async (
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  toast: any
) => {
  const supabase = createClient();
  try {
    setIsLoading(true);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "linkedin_oidc",
      options: {
        redirectTo: `${getURL()}/api/auth/signin`,
      },
    });
    if (error) console.log("Error");
  } catch (e) {
    toast({
      variant: "destructive",
      title: "LinkedIn Signin",
      description: "Oops, something went wrong! try again?",
    });

    setIsLoading(false);
  }
};
