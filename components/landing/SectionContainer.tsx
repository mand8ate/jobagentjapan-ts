import SectionTitle from "@/components/landing/SectionTitle";
import { SectionProps } from "@/lib/common.types";

export default async function SectionContainer({
  title,
  color,
  background,
  container,
  children,
}: SectionProps) {
  const hasContainer = container ? "container" : "";

  return (
    <div>
      <div
        className={`flex flex-col items-center py-20 px-6 gap-12 mb-10 ${background}`}
      >
        <SectionTitle color={color || "bg-gray-700"}>{title}</SectionTitle>
        <div className={`${hasContainer} flex flex-wrap justify-center gap-6`}>
          {children}
        </div>
      </div>
    </div>
  );
}
