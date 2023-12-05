import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex flex-col justify-center items-center mt-12">
      <div className="relative w-[250px] h-[250px] xs:h-[300px] xs:w-[300px] md:h-[500px] md:w-[500px]">
        <Image src="/404character.png" alt="404 character" fill />
      </div>
      <div className="mb-4">
        <h1 className="text-center text-lg md:text-2xl leading-relaxed font-semibold tracking-wider mt-8">
          <span className="block violetGradient-text text-xl md:text-4xl mb-2">
            Oops!
          </span>{" "}
          This is not the site you are looking for!
        </h1>
      </div>
      <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
        <ChevronLeft className="mr-2 h-4 w-4" /> Home
      </Link>
    </div>
  );
}
