export default async function FeatureContainer() {
    return (
        <div className="self-stretch overflow-hidden flex flex-col pt-[75px] px-[25px] pb-2.5 items-center justify-center gap-[50px] text-center text-21xl text-white font-inter">
          <div className="rounded-6xl [background:linear-gradient(91.62deg,_rgba(255,_255,_255,_0.8),_#ae46ff_0.01%,_#0879fe)] shadow-[4px_5px_8px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row py-[15px] px-16 items-center justify-center md:pl-[45px] md:pr-[45px] md:box-border sm:py-0 sm:px-[25px] sm:box-border">
            <b className="relative leading-[35px] uppercase md:text-9xl sm:text-lg">
              What makes us special?
            </b>
          </div>
          <div className="w-[1390px] overflow-hidden flex flex-row flex-wrap p-2.5 box-border items-center justify-between text-left text-17xl text-black md:flex-row sm:flex-col">
            <div className="bg-white w-[450px] overflow-hidden shrink-0 flex flex-col p-2.5 box-border items-center justify-start gap-[15px] sm:gap-[0px]">
              <div className="overflow-hidden flex flex-row p-2.5 items-center justify-center">
                <img
                  className="relative w-[75px] h-[75px] overflow-hidden shrink-0"
                  alt=""
                  src="/mdiregister.svg"
                />
              </div>
              <div className="h-[60px] overflow-hidden shrink-0 flex flex-row p-2.5 box-border items-center justify-center">
                <b className="relative">Easy Signup</b>
              </div>
              <div className="self-stretch h-[305px] overflow-hidden shrink-0 flex flex-row p-2.5 box-border items-start justify-center text-center text-xl">
                <div className="relative leading-[35px] flex items-center w-[359px] h-[242px] shrink-0 sm:text-sm">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">{`Sign up with us is a breeze! `}</p>
                    <p className="m-0">
                      No CV required upfront – just link your LinkedIn profile, and
                      you're good to go! Join us today and unlock a world of
                      opportunities.
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white w-[450px] overflow-hidden shrink-0 flex flex-col p-2.5 box-border items-center justify-start gap-[15px] sm:gap-[0px]">
              <div className="overflow-hidden flex flex-row p-2.5 items-center justify-center">
                <img
                  className="relative w-[75px] h-[75px] overflow-hidden shrink-0"
                  alt=""
                  src="/clarityformline.svg"
                />
              </div>
              <div className="h-[60px] overflow-hidden shrink-0 flex flex-row p-2.5 box-border items-center justify-center">
                <b className="relative">Easy Application</b>
              </div>
              <div className="self-stretch h-[305px] overflow-hidden shrink-0 flex flex-row p-2.5 box-border items-start justify-center text-center text-xl">
                <div className="relative leading-[35px] flex items-center justify-center w-[359px] h-[242px] shrink-0 sm:text-sm">
                  Discover your dream job and sign up with just one click! Simplify
                  your application process and unlock endless career opportunities.
                  Your next job is just a click away!
                </div>
              </div>
            </div>
            <div className="bg-white w-[450px] overflow-hidden shrink-0 flex flex-col p-2.5 box-border items-center justify-start gap-[15px] sm:gap-[0px]">
              <div className="overflow-hidden flex flex-row p-2.5 items-center justify-center">
                <img
                  className="relative w-[75px] h-[75px] overflow-hidden shrink-0"
                  alt=""
                  src="/mdiregister.svg"
                />
              </div>
              <div className="h-[60px] overflow-hidden shrink-0 flex flex-row p-2.5 box-border items-center justify-center">
                <b className="relative">Easy Signup</b>
              </div>
              <div className="self-stretch h-[305px] overflow-hidden shrink-0 flex flex-row p-2.5 box-border items-start justify-center text-center text-xl">
                <div className="relative leading-[35px] flex items-center w-[359px] h-[242px] shrink-0 sm:text-sm">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">{`Sign up with us is a breeze! `}</p>
                    <p className="m-0">
                      No CV required upfront – just link your LinkedIn profile, and
                      you're good to go! Join us today and unlock a world of
                      opportunities.
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}