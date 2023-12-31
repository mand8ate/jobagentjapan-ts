"use client";

import { useRouter } from "next/navigation";

import CloseModal from "@/components/modals/CloseModal";
import { useEffect } from "react";

export default function AuthModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleBackgroundClick = (e: React.FormEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      router.back();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-20 flex items-center justify-center"
      onClick={handleBackgroundClick}
    >
      <div className="container flex items-center max-w-lg mx-auto">
        <div className="relative border-primary border-1 border bg-white shadow-md w-full h-fit py-20 px-2 rounded-lg">
          <div className="absolute top-4 right-4">
            <CloseModal />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
