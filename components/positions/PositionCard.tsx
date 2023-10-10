import Image from "next/image";
import { PositionCardProps } from "@/lib/common.types";

import { WorkStyle } from "@/lib/common.types";
import { categories } from "@/constants";

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

  const { imagePath, border } = categories[category as categoryKey] || {
    imagePath: "/default.png",
    border: "border-indianred",
  };

  return (
    <div
      key={id}
      className={`rounded-3xl bg-white shadow-md w-[380px] flex flex-col p-8 gap-4 border-2 violetGradient-border`}
    >
      <Image
        className={`rounded-3xl border-2 ${border}`}
        height={200}
        width={320}
        alt={category}
        src={imagePath}
      />

      <h4 className="p-2.5 text-lg font-semibold">{title}</h4>
      <p className="p-2.5 text-darkslategray-100 text-lg">{company}</p>
      <p className="p-2.5 text-mediumslateblue text-lg font-semibold">
        ¥ {salary} Million/year
      </p>
      <div className="flex flex-row p-2.5 justify-around text-lg text-gray-200">
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
      <div className="flex flex-row p-2.5 items-center gap-[10px] text-base">
        <div className="rounded-31xl bg-white w-[30px] h-[30px] overflow-hidden">
          <img className="object-cover" alt="Agent" src={"agentImg"} />
        </div>
        <span className="text-lg font-bold">{agent}</span>
      </div>
      <button className="rounded-full bg-crimson-200 py-4 font-bold mt-auto tracking-widest text-white uppercase">
        Details
      </button>
    </div>
  );
}
