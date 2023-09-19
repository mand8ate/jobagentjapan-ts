import Link from "next/link";

import type { CustomButtonProps } from "@/lib/common.types";

const CustomButton = ({ customClasses, title, url }: CustomButtonProps) => {
  return (
    <Link href={`/${url}`} className="no-underline hover:underline">
      <button
        className={`rounded-[30px] ${customClasses} text-decoration:none flex items-center justify-center cursor-pointer`}
      >
        {title}
      </button>
    </Link>
  );
};

export default CustomButton;
