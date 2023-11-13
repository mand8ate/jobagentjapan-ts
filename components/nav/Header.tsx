import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";

import { headerLinks } from "@/constants";
import CustomButton from "@/components/buttons/CustomButton";
import DropdownMenu from "@/components/nav/DropdownMenu";
import ProfileDropdown from "./ProfileDropdown";

export default async function Header() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <nav className="navbar">
      <div className="flex-1 flex flex-row items-center justify-between">
        <div className="flex items-center gap-10 mr-2">
          <Link href="/">
            <div className="flex items-center ml-4 gap-2">
              <Image
                className="object-contain"
                alt=""
                src="/icon.svg"
                width={40}
                height={40}
              />
              <div className="xl:text-2xl text-md md:text-xl text-crimson-300">
                <i className="hidden sm:block">Job Agent Japan</i>
              </div>
            </div>
          </Link>

          {headerLinks.map((link) => (
            <Link
              className="cursor-pointer [text-decoration:none] relative uppercase text-[inherit] hidden lg:block font-semibold tracking-widest"
              href={link.url}
              key={link.title}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-5 mr-2 md:mr-4">
          {session ? (
            <ProfileDropdown user={session.user.user_metadata} />
          ) : (
            <div className=" flex gap-4">
              <DropdownMenu />
              <CustomButton
                title="Signup"
                url="signup"
                customClasses="py-2 px-4 text-white text-md blueGradient-bg"
              />
            </div>
          )}

          <Image
            src="/hamburger-icon.svg"
            alt="hamburger menu"
            width={30}
            height={30}
            className="block lg:hidden cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
}
