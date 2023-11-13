import type { CustomButtonProps } from "@/lib/common.types";
import { Button } from "../ui/button";

const CustomButton = ({ customClasses, title }: CustomButtonProps) => {
  return (
    <Button
      size="2xl"
      className={`rounded-[30px] ${customClasses} text-decoration:none flex items-center justify-center cursor-pointer text-xl`}
    >
      {title || "Load more"}
    </Button>
  );
};

export default CustomButton;
