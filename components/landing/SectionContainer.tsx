import SectionTitle from "@/components/landing/SectionTitle";
import { SectionProps } from "@/lib/common.types";

export default async function SectionContainer({
  title,
  color,
  children,
}: SectionProps) {
  return (
    <div>
      <div className="flex flex-col items-center py-20 px-6 gap-12">
        <SectionTitle color={color || ""}>{title}</SectionTitle>
        <div className="flex flex-wrap justify-center gap-6">{children}</div>
      </div>
    </div>
  );
}
