import { buttonVariants } from "./ui/button";
import { toast, useToast } from "./ui/use-toast";
import Link from "next/link";

export const useCustomToast = () => {
  const loginToast = () => {
    const { dismiss } = toast({
      title: "Login required",
      description: "You need to be logged in to see more!",
      variant: "destructive",
      action: (
        <Link
          href="/signin"
          className={buttonVariants({ variant: "outline" })}
          onClick={() => dismiss()}
        >
          Signin
        </Link>
      ),
    });
  };

  return { loginToast };
};
