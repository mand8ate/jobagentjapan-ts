import LoadButton from "../buttons/LoadButton";
import PositionsCard from "./PositionCard";
import { WorkStyle } from "@/lib/common.types";

const positions = [
  {
    id: 1,
    title: "Softweare Engineer",
    category: "Information Technology",
    company:
      "Worldwide IT conglomarate looking to expand into the Asian market starting with Japan. They look for a Full Stack developer for their newest platform.",
    salary: 4,
    location: "Tokyo",
    style: WorkStyle.REMOTE,
    agent: "Malte",
  },
  {
    id: 2,
    title: "Softweare Engineer",
    category: "Other",
    company:
      "Worldwide IT conglomarate looking to expand into the Asian market starting with Japan. They look for a Full Stack developer for their newest platform.",
    salary: 4,
    location: "Tokyo",
    style: WorkStyle.OFFICE,
    agent: "Malte",
  },
  {
    id: 3,
    title: "Softweare Engineer",
    category: "Other",
    company:
      "Worldwide IT conglomarate looking to expand into the Asian market starting with Japan. They look for a Full Stack developer for their newest platform.",
    salary: 4,
    location: "Tokyo",
    style: WorkStyle.OFFICE,
    agent: "Malte",
  },
  {
    id: 4,
    title: "Software Engineer",
    category: "Hospitality",
    company:
      "Worldwide IT conglomarate looking to expand into the Asian market starting with Japan. They look for a Full Stack developer for their newest platform.",
    salary: 4,
    location: "Tokyo",
    style: WorkStyle.HYBRID,
    agent: "Malte",
  },
];

export default async function PositionContainer() {
  return (
    <div className="flex flex-col items-center">
      <div className="container flex flex-wrap gap-4 justify-center">
        {positions.map((position) => (
          <PositionsCard position={position} key={position.id} />
        ))}
      </div>
      <hr className=" my-6 border-t border-gray-300 w-3/4" />
      <LoadButton title="Load more"></LoadButton>
    </div>
  );
}
