export default async function TestimonyCard(){
    return (
        <div className="self-stretch [background:linear-gradient(181.47deg,_#fff,_rgba(195,_195,_195,_0)_90.63%)] h-[1000px] overflow-hidden shrink-0 flex flex-col py-[100px] px-[50px] box-border items-center justify-center gap-[50px] text-center text-21xl text-white font-inter">
          <div className="rounded-6xl [background:linear-gradient(91.62deg,_#8d50ff,_#306cfe)] shadow-[4px_5px_8px_rgba(0,_0,_0,_0.25)] w-[700px] overflow-hidden flex flex-row py-[15px] px-16 box-border items-center justify-center md:pl-[45px] md:pr-[45px] md:box-border sm:pl-[25px] sm:pr-[25px] sm:box-border">
            <b className="relative leading-[35px] uppercase">Success Stories</b>
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-row flex-wrap py-[25px] px-[50px] items-center justify-center text-left text-base text-dimgray">
            <div className="self-stretch flex-1 overflow-hidden flex flex-col py-2.5 px-[50px] items-center justify-start">
              <div className="self-stretch flex-1 overflow-hidden flex flex-row p-2.5 items-center justify-start gap-[40px]">
                <TestimonyCard
                  dimensionLabel="/psquote.svg"
                  imageDimensionLabel="/image@2x.png"
                />
                <TestimonyCard
                  dimensionLabel="/psquote1.svg"
                  imageDimensionLabel="/image1@2x.png"
                  propBorder="3px solid #fc4459"
                />
                <TestimonyCard
                  dimensionLabel="/psquote2.svg"
                  imageDimensionLabel="/image2@2x.png"
                  propBorder="3px solid #904fff"
                />
              </div>
            </div>
          </div>
        </div>
      );
}