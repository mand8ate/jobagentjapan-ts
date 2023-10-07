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
    salary: 40000,
    location: "Tokyo",
    style: WorkStyle.REMOTE,
    agent: "Malte",
  },
  {
    id: 2,
    title: "Softweare Engineer",
    category: "Information Technology",
    company:
      "Worldwide IT conglomarate looking to expand into the Asian market starting with Japan. They look for a Full Stack developer for their newest platform.",
    salary: 40000,
    location: "Tokyo",
    style: WorkStyle.OFFICE,
    agent: "Malte",
  },
  {
    id: 3,
    title: "Software Engineer",
    category: "Information Technology",
    company:
      "Worldwide IT conglomarate looking to expand into the Asian market starting with Japan. They look for a Full Stack developer for their newest platform.",
    salary: 40000,
    location: "Tokyo",
    style: WorkStyle.HYBRID,
    agent: "Malte",
  },
];

export default async function PositionSection() {
  return (
    <SectionContainer title="Top Positions" color="blueGradient-bg">
      {positions.map((position) => (
        <PositionCard position={position} />
      ))}
    </SectionContainer>
  );
}
