import { HeroPageProps } from "@/lib/common.types";
import { string } from "zod";

export default async function HeroPages({
  bgImg,
  bgColor,
  title,
  subtitle,
}: HeroPageProps) {
  const backgroundImage = bgImg ? bgImg : "";
  console.log(backgroundImage);

  return (
    <header
      style={{ backgroundImage: `url(${bgImg ? bgImg : ""})` }}
      className="bg-cover bg-no-repeat bg-center"
    >
      <div
        className={`w-full h-full ${
          bgColor ? bgColor : "white"
        } bg-opacity-50 text-center text-white font-inter py-12 md:py-24 px-4 md:px-10`}
      >
        <div className="text-5xl md:text-7xl mb-4">
          <b>{title}</b>
        </div>
        <div className="text-lg md:text-5xl">
          <b>{subtitle}</b>
        </div>
      </div>
    </header>
  );
}
