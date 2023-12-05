import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import LoginFormEmail from "@/components/forms/LoginFormEmail";
import SigninButton from "../buttons/SigninButton";

import { ChevronDown } from "lucide-react";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default async function DropdownMenuTest() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "rounded-[30px] px-4 py-2 bg-blueviolet-200 text-white text-md"
          )}
        >
          Signin {<ChevronDown className="ml-1" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className={cn("mt-2 pt-6")}>
        <LoginFormEmail />
        <Separator className="my-2" />
        <SigninButton />
      </PopoverContent>
    </Popover>
  );
}
