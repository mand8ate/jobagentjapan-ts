import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "../ui/badge";
import SignoutButton from "@/components/buttons/SignoutButton";
import { cn } from "@/lib/utils";
import { UserMetadata } from "@supabase/supabase-js";
import { AppWindow, Network, Settings, User } from "lucide-react";
import Link from "next/link";

export default async function ProfileDropdown({ user }: UserMetadata) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          {user.avatar_url || user.picture ? (
            <AvatarImage
              src={user.avatar_url || user.picture}
              className="w-[40px] h-[40px]"
            ></AvatarImage>
          ) : (
            <AvatarFallback>
              <Image
                className="cursor-pointer"
                alt=""
                src="/account-circle.svg"
                width={40}
                height={40}
              />
            </AvatarFallback>
          )}
        </Avatar>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className={cn("flex justify-center mt-2 px-0")}
      >
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <div className="flex flex-col items-center gap-2">
            {user.avatar_url || user.picture ? (
              <Image
                src={user.avatar_url || user.picture}
                width={60}
                height={60}
                alt="user avatar"
                className="rounded-full"
              />
            ) : (
              <Image
                src="/account-circle.svg"
                width={60}
                height={60}
                alt="user avatar"
                className="rounded-full"
              />
            )}
            <p>{user.name}</p>
            <Badge>{user.email || ""}</Badge>
          </div>
          <hr className="my-2 border-t border-gray-300 w-full" />

          <ul className="w-full bg-white rounded">
            <li className="px-4 py-2 hover:bg-gray-100 font-semibold">
              <Link
                href="/profile"
                className="flex justify-between items-center "
              >
                Profile <User />
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 font-semibold">
              <Link
                href="/journey"
                className="flex justify-between items-center "
              >
                Journey <Network />
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 font-semibold">
              <Link
                href="/applications"
                className="flex justify-between items-center "
              >
                Applications <AppWindow />
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 font-semibold">
              <Link
                href="/settings"
                className="flex justify-between items-center "
              >
                Settings <Settings />
              </Link>
            </li>
          </ul>

          <hr className="my-2 border-t border-gray-300 w-full" />
          <SignoutButton />
        </div>
      </PopoverContent>
    </Popover>
  );
}
