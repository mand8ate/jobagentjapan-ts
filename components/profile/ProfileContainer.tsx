export default async function ProfileContainer () {
    return (
        <div className="self-stretch flex flex-col pt-[200px] px-0 pb-[50px] items-center justify-center">
          <div className="self-stretch overflow-hidden flex flex-col py-2.5 px-[150px] items-center justify-start gap-[10px] md:pl-[50px] md:pr-[50px] md:box-border sm:pl-2.5 sm:pr-2.5 sm:box-border">
            <div className="rounded-181xl bg-whitesmoke w-[350px] h-[350px] overflow-hidden shrink-0 flex flex-row p-5 box-border items-center justify-center md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px]">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/malte-img-1@2x.png"
              />
            </div>
            <div className="flex flex-row py-[25px] px-2.5 items-center justify-start gap-[10px] md:pt-[15px] md:pb-[15px] md:box-border sm:pt-2.5 sm:pb-2.5 sm:box-border">
              <img
                className="relative w-[183.93px] h-[35.42px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px]"
                alt=""
                src="/malte-d.svg"
              />
              <img className="relative w-6 h-6" alt="" src="/akariconsedit.svg" />
            </div>
            <div className="overflow-hidden flex flex-row py-0 px-2.5 items-center justify-start gap-[10px]">
              <img
                className="relative w-[283.69px] h-[26.37px]"
                alt=""
                src="/fullstack-developer.svg"
              />
              <img className="relative w-6 h-6" alt="" src="/akariconsedit1.svg" />
            </div>
            <div className="overflow-hidden flex flex-row py-0 px-2.5 items-center justify-start gap-[10px]">
              <img
                className="relative w-[342.23px] h-[23.36px]"
                alt=""
                src="/web3-solidity-ai-nextjs.svg"
              />
              <img className="relative w-6 h-6" alt="" src="/akariconsedit2.svg" />
            </div>
            <div className="self-stretch overflow-hidden flex flex-row py-10 px-[100px] items-center justify-start gap-[10px] md:py-5 md:px-[50px] md:box-border sm:py-[15px] sm:px-2.5 sm:box-border">
              <img
                className="flex-1 relative max-w-full overflow-hidden h-[342.36px]"
                alt=""
                src="/i-am-lorem-ipsum-i-am-interested-ind-lorem-ipsum-when-i-am-not-lorem-ipsum-then-i-like-to-to-lorem-ipsumetcetcetci-am-lorem-ipsum-i-am-interested-ind-lorem-ipsum-when-i-am-not-lorem-ipsum-then-i-like-to-to-lorem-ipsumetcetcetci-am-lorem-ipsum-i-am-interested-ind-lorem-ipsum-when-i-am-not-lorem-ipsum-then-i-like-to-to-lorem-ipsumetcetcetci-am-lorem-ipsum-i-am-interested-ind-lorem-ipsum-when-i-am-not-lorem-ipsum-then-i-like-to-to-lorem-ipsumetcetcetci-am-lorem-ipsum-i-am-interested-ind-lorem-ipsum-when-i-am-not-lorem-ipsum-then-i-like-to-to-lorem-ipsumetcetcetci-am-lorem-ipsum-i-am-interested-ind-lorem-ipsum-when-i-am-not-lorem-ipsum-then-i-like-to-to-lorem-ipsumetcetcetci-am-lorem-ipsum-i-am-interested-ind-lorem-ipsum-when-i-am-not-lorem-ipsum-then-i-like-to-to-lorem-ipsumetcetcetc.svg"
              />
              <img className="relative w-6 h-6" alt="" src="/akariconsedit3.svg" />
            </div>
            <a className="[text-decoration:none] rounded-6xl [background:linear-gradient(270deg,_#ae46ff_16.07%,_#0879fe)] w-[350px] flex flex-row py-[25px] px-2.5 box-border items-center justify-center gap-[10px] md:w-[250px] md:pt-5 md:pb-5 md:box-border sm:w-[200px] sm:pt-2.5 sm:pb-2.5 sm:box-border">
              <img
                className="relative w-[30px] h-[30px] md:w-5 md:h-5 sm:w-[15px] sm:h-[15px]"
                alt=""
                src="/vector1.svg"
              />
              <img
                className="relative w-[238.72px] h-[24.94px] md:w-[180px] md:h-[18px] sm:w-40 sm:h-3.5"
                alt=""
                src="/linkedin-profile.svg"
              />
            </a>
          </div>
        </div>
      );
}