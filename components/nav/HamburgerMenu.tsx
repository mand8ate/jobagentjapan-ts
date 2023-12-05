"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetOverlay,
} from "@/components/ui/sheet";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";

import { headerLinks } from "@/constants";

export default function HamburgerMenu() {
  const pathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleOpenChange = (open: boolean) => {
    setToggleMenu(open);
  };

  return (
    <>
      <Sheet onOpenChange={handleOpenChange}>
        <SheetTrigger asChild>
          {toggleMenu ? <X size={30} /> : <Menu size={30} />}
        </SheetTrigger>
        <SheetContent className={cn("flex flex-col h-screen")}>
          <SheetHeader>
            <Link href="/" className="flex items-center">
              <Image
                className="object-contain"
                alt=""
                src="/icon.svg"
                width={40}
                height={40}
              />
              <div className="xl:text-2xl text-md md:text-xl text-crimson-300 ml-2">
                <i>
                  Job <br className="block sm:hidden" /> Agent{" "}
                  <br className="block sm:hidden" /> Japan
                </i>
              </div>
            </Link>
            <SheetDescription>
              Your one-click job application platform for Japan🚀
            </SheetDescription>
          </SheetHeader>
          <div className="flex-grow flex items-center justify-center">
            <ul className="w-full">
              {headerLinks.map((link, i) => (
                <Link href={link.url} key={i}>
                  <li
                    className={`px-4 py-2 hover:bg-gray-100 font-semibold ${
                      pathname === link.url && "bg-blue-100"
                    } rounded-l-full`}
                  >
                    {link.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <SheetFooter className={cn("pb-2")}>
            <div className="text-center text-sm md:text-left md:flex md:justify-between md:items-center">
              <div className="space-x-4">
                <Link
                  className="cursor-pointer [text-decoration:none] font-medium"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] font-medium"
                  href="/terms-of-use"
                >
                  Terms of Use
                </Link>
              </div>
              <p className="mt-2">&copy; 2023 Job Agent Japan.</p>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
