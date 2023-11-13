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

export default async function ProfileDropdown({ user }: UserMetadata) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          {user.avatar_url ? (
            <AvatarImage
              src={user.avatar_url}
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
        className={cn("flex justify-center mt-2 pt-6 ")}
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={user.avatar_url}
              width={60}
              height={60}
              alt="user avatar"
              className="rounded-full"
            />
            <Badge>{user.email || ""}</Badge>
          </div>
          <div>
            <ul>
              <li>first</li>
              <li>second</li>
              <li>third</li>
            </ul>
          </div>
          <SignoutButton />
        </div>
      </PopoverContent>
    </Popover>
  );
}
