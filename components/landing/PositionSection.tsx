import PositionCard from "@/components/positions/PositionCard";
import SectionContainer from "@/components/landing/SectionContainer";
import { PositionParentProps } from "@/lib/common.types";

export default async function PositionSection({
  positions,
}: PositionParentProps) {
  return (
    <SectionContainer
      title="Top Positions"
      color="blueGradient-bg"
      background="bg-gradient-to-b from-crimson-300 to-white"
      container
    >
      <div className="flex flex-wrap gap-8 justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
        {positions ? (
          positions?.map((position: any) => (
            <PositionCard position={position} key={position.id} />
          ))
        ) : (
          <div>Nothing to display</div>
        )}
      </div>
    </SectionContainer>
  );
}
