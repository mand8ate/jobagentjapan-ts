"use client";
import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";

export default function LoginFormEmail() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const formActionUrl = `${location.origin}/api/auth/signin`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    try {
      setIsLoading(true);
      const response = await fetch(formActionUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        toast({
          variant: "destructive",
          title: "Email Signin",
          description: errorMessage.error,
        });
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="email"
            name="email"
            className="appearance-none rounded-full py-2 px-4 text-gray-700 bg-silver-100 w-full focus:outline-none focus:ring-1 focus:ring-palevioletred-200 focus:border-transparent"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            name="password"
            className="appearance-none rounded-full py-2 px-4 text-gray-700 bg-silver-100 w-full focus:outline-none focus:ring-1 focus:ring-palevioletred-200 focus:border-transparent"
            placeholder="Password"
          />
        </div>
        <div>
          <Button
            isLoading={isLoading}
            type="submit"
            className="relative w-full bg-palevioletred-100 hover:bg-palevioletred-500 text-white text-md font-medium py-2 px-4 rounded-full transition duration-200 ease-in-out"
          >
            {isLoading ? null : (
              <span className="absolute left-6">
                <Mail className="mr-2" />
              </span>
            )}
            Email Signin
          </Button>
        </div>
      </form>
    </div>
  );
}
