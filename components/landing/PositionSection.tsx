import PositionCard from "@/components/positions/PositionCard";
import SectionContainer from "@/components/landing/SectionContainer";

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

export default async function PositionSection() {
  return (
    <SectionContainer
      title="Top Positions"
      color="blueGradient-bg"
      background="bg-gradient-to-b from-crimson-300 to-white"
      container
    >
      <div className="flex flex-wrap gap-8 justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
        {positions.map((position) => (
          <PositionCard position={position} key={position.id} />
        ))}
      </div>
    </SectionContainer>
  );
}
