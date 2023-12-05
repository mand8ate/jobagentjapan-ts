import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

type ErrorObject = {
  parameter: string;
  title: string;
  description: string;
  destination: string;
  url: string;
};

const errors = [
  {
    parameter: "auth_error",
    title: "Auth Error",
    description:
      "This is an auth error. Something must have gone wrong. Please try again.",
    destination: "Home",
    url: "/",
  },
  {
    parameter: "token_error",
    title: "Token invalid",
    description:
      "This link expired or was used already. Please return to the main page",
    destination: "Home",
    url: "/",
  },
];

export default async function AuthError(props: Props) {
  const searchParams = props.searchParams;
  const errorParam = searchParams.error;

  const matchingError: ErrorObject | undefined = errors.find(
    (error) => error.parameter === errorParam
  );

  if (!matchingError) {
    redirect("/");
  }

  return (
    <div className="container flex flex-col justify-center items-center mt-12">
      <div className="mb-4">
        <h1 className="text-center text-lg md:text-2xl leading-relaxed font-semibold tracking-wider mt-8">
          <span className="block violetGradient-text text-xl md:text-4xl mb-2">
            {matchingError.title}
          </span>{" "}
          {matchingError.description}
        </h1>
      </div>
      <Link
        href={matchingError.url}
        className={cn(buttonVariants({ variant: "ghost" }))}
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> {matchingError.destination}
      </Link>
    </div>
  );
}
