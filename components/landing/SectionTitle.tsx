import { SectionTitleProps } from "@/lib/common.types";

export default async function SectionTitle({
  children,
  color,
}: SectionTitleProps) {
  return (
    <div
      className={`rounded-full ${
        color ? color : "bg-blue-500"
      } px-8 py-4 mb-4 lg:mb-8 shadow-md`}
    >
      <h2 className="text-2xl lg:text-4xl font-bold text-white tracking-widest uppercase">
        {children}
      </h2>
    </div>
  );
}
