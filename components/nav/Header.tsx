import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { headerLinks } from "@/constants";
import CustomButton from "@/components/buttons/CustomButton";
import SigninDropdown from "../auth/SigninDropdown";
import AuthButtonClient from "../buttons/SigninButtonClient";
import ProfileDropdown from "../profile/ProfileDropdown";

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <nav className="navbar">
      <div className="flex-1 flex flex-row items-center justify-between">
        <div className="flex items-center gap-10 mr-2">
          <div className="flex ml-2 items-center justify-center text-crimson-300">
            <div className="flex flex-col items-center justify-center mx-2">
              <Link href="/">
                <Image
                  className="cursor-pointer object-contain"
                  alt=""
                  src="/group1@2x.png"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start xl:text-2xl text-md md:text-xl">
              <i>Job Agent Japan</i>
            </div>
          </div>

          {headerLinks.map((link) => (
            <Link
              className="cursor-pointer [text-decoration:none] relative uppercase text-[inherit] hidden xl:block"
              href={link.url}
              key={link.title}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-5 mr-2 md:mr-4">
          {session ? (
            <ProfileDropdown />
          ) : (
            <div className=" flex gap-4">
              <SigninDropdown />
              <AuthButtonClient />
              <CustomButton
                title="signup"
                url="auth/signup"
                customClasses="py-2 px-4 text-white text-md bg-blueviolet-100"
              />
            </div>
          )}

          <Image
            src="/hamburger-icon.svg"
            alt="hamburger menu"
            width={30}
            height={30}
            className="block md:hidden cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
}
