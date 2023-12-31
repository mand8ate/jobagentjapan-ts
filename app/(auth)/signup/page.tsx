import HeroPages from "@/components/heroes/HeroPages";
import Signup from "@/components/forms/SignupForm";

import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/");
  }

  return (
    <>
      <HeroPages
        bgImg="/signup_hero.jpg"
        bgColor="bg-headergray"
        title="Signup"
        subtitle="Become a free member"
      />
      <div className="container flex flex-row justify-center items-center my-32 gap-10">
        <div className="relative w-full h-[600px] xl:h-[1000px] rounded-xl hidden md:block border-palevioletred-200 border-2">
          <Image
            src="/signup_img.jpg"
            alt="signup image"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-center items-center w-full h-[600px] xl:h-[1000px] rounded-xl border-blueviolet-200 border-2 bg-gray-300">
          <Signup />
        </div>
      </div>
    </>
  );
}
