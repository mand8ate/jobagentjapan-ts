"use client";

import CloseModal from "@/components/modals/CloseModal";
import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { PositionProps } from "@/lib/common.types";

export default function PositionModal({
  position,
}: {
  position: PositionProps;
}) {
  const { title } = position;
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current) {
        router.back();
      }
    },
    [router, overlay]
  );

  return (
    <div
      ref={overlay}
      className="fixed inset-0 bg-background/80 w-full h-full z-20"
      onClick={handleClick}
    >
      <div className="absolute top-4 right-4">
        <CloseModal />
      </div>
      <div
        ref={wrapper}
        className="flex justify-start items-center flex-col absolute h-[96%] w-full bottom-0 bg-primary-foreground rounded-t-3xl lg:px-40 px-8 pt-14 pb-72 overflow-auto shadow-xl"
      >
        {title}
      </div>
    </div>
  );
}
