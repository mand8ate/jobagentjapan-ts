import Image from "next/image";
import { PositionCardProps } from "@/lib/common.types";

import { WorkStyle } from "@/lib/common.types";
import { categories } from "@/constants";
import { agents } from "@/constants";

import {
  MapPinIcon,
  ComputerDesktopIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
} from "@heroicons/react/20/solid";

export default function PositionsCard({
  position: { id, title, category, company, salary, location, style, agent },
}: PositionCardProps) {
  type categoryKey = "Information Technology" | "Hospitality";
  type agentKey = "Malte";

  const { imagePath, border } = categories[category as categoryKey] || {
    imagePath: "/categoryimage@2x.png",
    border: "border-indianred",
  };

  const { name, profileImage } = agents[agent as agentKey] || "";

  return (
    <div
      key={id}
      className={`rounded-3xl bg-white shadow-md sm:w-[340px] md:w-[380px] flex flex-col p-8 gap-4 border-2 ${border}`}
    >
      <div
        className={`rounded-3xl border-2 ${border} relative w-[250px] h-[140px] md:w-[300px] md:h-[200px]`}
      >
        <Image
          alt={`${category} image`}
          src={imagePath}
          fill
          className="rounded-3xl"
        />
      </div>
      <h4 className="py-1.5 md:py-2.5 text-lg font-semibold">{title}</h4>
      <p className="py-1.5 md:py-2.5 text-darkslategray-100 text-lg">
        {company}
      </p>
      <p className="py-1.5 md:py-2.5 text-mediumslateblue text-lg font-semibold">
        ¥ {salary} Million/year
      </p>
      <div className="flex flex-row py-1.5 md:py-2.5 justify-around text-lg text-muted-foreground">
        <div className="flex gap-3 items-center">
          <MapPinIcon className="w-4 h-4" />
          <span className="font-medium">{location}</span>
        </div>
        <div className="flex gap-3 items-center">
          <div className="ml-4">
            {style === WorkStyle.OFFICE ? (
              <BuildingOffice2Icon className="w-4 h-4" />
            ) : style === WorkStyle.REMOTE ? (
              <ComputerDesktopIcon className="w-4 h-4" />
            ) : (
              <HomeModernIcon className="w-4 h-4" />
            )}
          </div>
          <span className="font-medium">{style}</span>
        </div>
      </div>
      <div className="flex flex-row py-1.5 md:py-2.5 items-center gap-[10px] text-base">
        <div className="rounded-full bg-white w-[40px] h-[40px] overflow-hidden relative">
          <Image src={profileImage} alt="agent profile" fill />
        </div>
        <span className="text-lg font-bold">{name}</span>
      </div>
      <button className="rounded-full bg-crimson-200 py-2 md:py-4 font-bold mt-auto tracking-widest text-white uppercase">
        Details
      </button>
    </div>
  );
}
