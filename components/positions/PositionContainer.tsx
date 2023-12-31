import { PositionParentProps } from "@/lib/common.types";
import LoadButton from "../buttons/LoadButton";
import PositionsCard from "./PositionCard";

export default async function PositionContainer({
  positions,
  limit,
}: PositionParentProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="container flex flex-wrap gap-4 justify-center">
        {positions?.map((position) => (
          <PositionsCard position={position} key={position.id} />
        ))}
      </div>
      <hr className="my-6 border-t border-gray-300 w-3/4" />
      {positions ? (
        <LoadButton pageNumber={(limit || 5) / 5} isNext={true}>
          Load more
        </LoadButton>
      ) : (
        <div>Nothing to display</div>
      )}
    </div>
  );
}
