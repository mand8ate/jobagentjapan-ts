import { createClient } from "@/lib/supabase/client";
import { getURL } from "@/lib/getURL";
import { Dispatch, SetStateAction } from "react";
import { toast } from "@/components/ui/use-toast";
import {
  signUpWithEmailPayload,
  singInWithEmailPayload,
} from "@/lib/validators/auth";

export const signUpWithEmail = async (
  payload: signUpWithEmailPayload,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  router: any
) => {
  const supabase = createClient();
  try {
    setIsLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: payload.email,
      password: payload.password,
    });

    if (error) {
      return toast({
        variant: "destructive",
        title: "Email Signup",
        description: error.message,
      });
    }

    toast({
      variant: "success",
      title: "Check Email",
      description: "Check your email to confirm your signup.",
    });

    router.push("/");
  } catch (error) {
    toast({
      variant: "destructive",
      title: "Email Signup",
      description: "Oops, something went wrong! try again?",
    });
  } finally {
    setIsLoading(false);
  }
};

export const signInWithEmail = async (
  payload: singInWithEmailPayload,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  router: any,
  dropdown?: boolean
) => {
  const supabase = createClient();
  try {
    if (!payload.email || !payload.password) {
      return toast({
        variant: "destructive",
        title: "Email Signin",
        description: "Email or Password missing!",
      });
    }

    const { error } = await supabase.auth.signInWithPassword(payload);
    if (error) {
      return toast({
        variant: "destructive",
        title: "Email Signin",
        description: error.message,
      });
    }

    toast({
      variant: "success",
      title: "Login Success",
      description: "Welcome back!",
    });

    if (dropdown) {
      router.refresh();
    } else {
      window.location.replace("/");
    }
  } catch (e) {
    toast({
      variant: "destructive",
      title: "Email Signin",
      description: "Oops, something went wrong! try again?",
    });
  } finally {
    setIsLoading(false);
  }
};

export const signInWithGithub = async (
  setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
  const supabase = createClient();
  try {
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${getURL()}/api/auth/signin`,
      },
    });
    if (error) {
      toast({
        variant: "destructive",
        title: "GitHub Signin",
        description: error.message,
      });
    }
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
  setIsLoading: Dispatch<SetStateAction<boolean>>
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
    if (error) {
      toast({
        variant: "destructive",
        title: "LinkedIn Signin",
        description: error.message,
      });
    }
  } catch (e) {
    toast({
      variant: "destructive",
      title: "LinkedIn Signin",
      description: "Oops, something went wrong! try again?",
    });

    setIsLoading(false);
  }
};
