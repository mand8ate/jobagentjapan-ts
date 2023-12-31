"use client";

import { updateSearchParams } from "@/lib/utils";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  children: React.ReactNode;
}

const LoadButton = ({ pageNumber, isNext, children }: ShowMoreProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 5;
    const newPathName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName, { scroll: false });
  };

  return (
    <>
      {!isNext && (
        <Button
          isLoading={isLoading}
          size="2xl"
          className={`rounded-[30px] text-decoration:none flex items-center justify-center cursor-pointer text-xl`}
          onClick={handleNavigation}
        >
          {children}
        </Button>
      )}
    </>
  );
};

export default LoadButton;
