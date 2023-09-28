export default async function DeveloperContainer () {
    return (
        <div className="self-stretch bg-darkslategray-200 flex flex-col py-[125px] px-[150px] items-center justify-center text-center text-29xl text-pink font-inter md:pl-[50px] md:pr-[50px] md:box-border sm:pl-[50px] sm:box-border">
          <div className="self-stretch rounded-xl overflow-hidden flex flex-col p-[50px] items-center justify-center">
            <div className="w-[461px] overflow-hidden flex flex-col p-2.5 box-border items-center justify-center gap-[20px]">
              <b className="relative [text-shadow:2px_4px_4px_rgba(255,_255,_255,_0.25)] md:text-17xl sm:text-13xl">
                Product by
              </b>
              <div className="overflow-hidden flex flex-col p-2.5 items-center justify-center">
                <img
                  className="relative w-[250px] h-[250px] object-cover md:w-[150px] md:h-[150px] sm:w-[100px] sm:h-[100px]"
                  alt=""
                  src="/tabicon-1@2x.png"
                />
              </div>
              <b className="relative [text-shadow:2px_4px_4px_rgba(255,_255,_255,_0.25)] md:text-17xl sm:text-13xl">
                Omnilabs Digital
              </b>
              <b className="relative text-base text-rosybrown [text-shadow:2px_4px_4px_rgba(255,_255,_255,_0.25)]">
                Visit us at: omnilabs.digital
              </b>
            </div>
          </div>
        </div>
      );
}