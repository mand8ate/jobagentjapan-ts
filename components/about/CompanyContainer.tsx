export default async function CompanyContainer () {
    return (
        <div className="self-stretch flex flex-col py-[200px] px-[150px] items-center justify-center gap-[50px] text-center text-21xl text-white font-inter">
          <div className="rounded-6xl [background:linear-gradient(91.62deg,_rgba(255,_255,_255,_0.8),_#ae46ff_0.01%,_#0879fe)] shadow-[4px_5px_8px_rgba(0,_0,_0,_0.25)] w-[700px] overflow-hidden flex flex-row py-[15px] px-16 box-border items-center justify-center md:w-[400px] md:pl-[34px] md:pt-2.5 md:pr-[34px] md:box-border sm:w-[300px] sm:pl-[18px] sm:pt-2.5 sm:pr-[18px] sm:box-border">
            <b className="flex-1 relative leading-[35px] uppercase md:text-9xl sm:text-5xl">
              企業向け情報
            </b>
          </div>
          <div className="self-stretch rounded-xl overflow-hidden flex flex-col py-[25px] px-[50px] items-center justify-center gap-[10px] text-9xl text-black md:pl-5 md:pr-5 md:box-border sm:pt-2.5 sm:px-0 sm:pb-[15px] sm:box-border">
            <div className="flex flex-row p-2.5 items-center justify-center sm:self-stretch sm:w-auto sm:h-auto sm:pl-0 sm:pr-0 sm:box-border">
              <b className="relative md:text-lg sm:text-sm sm:flex-1">
                企業向け情報は下記のリンクをご利用ください
              </b>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row p-2.5 items-center justify-center text-17xl text-midnightblue">
              <div className="flex-1 relative font-extrabold md:text-5xl sm:text-lg">
                こちら
              </div>
            </div>
          </div>
        </div>
      );
}