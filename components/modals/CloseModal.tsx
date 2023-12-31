"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { Button } from "../ui/button";

export default function CloseModal() {
  const router = useRouter();

  return (
    <Button
      variant="link"
      aria-label="close modal"
      onClick={() => router.back()}
      className="h-6 w-6 p-0 rounded-md"
    >
      <X className="h-6 w-6" />
    </Button>
  );
}
