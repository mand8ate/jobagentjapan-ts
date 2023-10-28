import { SectionTitleProps } from "@/lib/common.types";

export default async function SectionTitle({
  children,
  color,
}: SectionTitleProps) {
  return (
    <div
      className={`rounded-full ${
        color ? color : "bg-blue-500"
      } px-8 py-[10px] mb-4 lg:mb-8 shadow-md`}
    >
      <h2 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-widest uppercase w-unset lg:w-[550px] text-center">
        {children}
      </h2>
    </div>
  );
}
