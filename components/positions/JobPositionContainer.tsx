import PositionContainer from "./PositionsContainer";

export default async function JobPositionsContainer() {
  return (
    <div className="self-stretch bg-white flex flex-col py-[50px] px-0 items-center justify-center text-center text-xl text-mediumslateblue font-inter">
      <div className="self-stretch flex flex-col py-[50px] px-0 items-center justify-center gap-[100px]">
        <PositionContainer />
        <div className="overflow-hidden flex flex-row p-2.5 items-end justify-center gap-[10px]">
          <div className="bg-silver-200 overflow-hidden flex flex-row p-2.5 items-end justify-center">
            <img
              className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
              alt=""
              src="/typcnarrowback.svg"
            />
          </div>
          <div className="bg-mediumslateblue overflow-hidden flex flex-row p-2.5 items-end justify-center text-white">
            <b className="relative flex items-end justify-center w-[26px] h-[26px] shrink-0">
              1
            </b>
          </div>
          <div className="bg-silver-200 overflow-hidden flex flex-row p-2.5 items-end justify-center">
            <b className="relative flex items-end justify-center w-[26px] h-[26px] shrink-0">
              2
            </b>
          </div>
          <div className="bg-silver-200 overflow-hidden flex flex-row p-2.5 items-end justify-center">
            <b className="relative flex items-end justify-center w-[26px] h-[26px] shrink-0">
              3
            </b>
          </div>
          <div className="bg-silver-200 overflow-hidden flex flex-row p-2.5 items-end justify-center">
            <b className="relative flex items-end justify-center w-[26px] h-[26px] shrink-0">
              ...
            </b>
          </div>
          <div className="bg-silver-200 overflow-hidden flex flex-row p-2.5 items-end justify-center">
            <b className="relative flex items-end justify-center w-[26px] h-[26px] shrink-0">
              29
            </b>
          </div>
          <div className="bg-silver-200 overflow-hidden flex flex-row p-2.5 items-end justify-center">
            <img
              className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
              alt=""
              src="/typcnarrowforward.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
