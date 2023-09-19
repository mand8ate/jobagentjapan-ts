const SignupContainer = () => {
  return (
    <div className="self-stretch bg-white flex flex-row pt-[200px] px-5 pb-[50px] items-center justify-center gap-[50px] md:flex-col">
      <img
        className="flex-1 rounded-6xl max-w-full overflow-hidden h-[906px] object-cover md:h-[600px] md:flex-[unset] md:self-stretch"
        alt=""
        src="/img1@2x.png"
      />
      <div className="flex-1 rounded-6xl bg-whitesmoke shadow-[2px_4px_5px_rgba(0,_0,_0,_0.25)] box-border h-[906px] overflow-hidden flex flex-col p-2.5 items-center justify-center border-[1px] border-solid border-gainsboro-100 md:h-[600px] md:flex-[unset] md:self-stretch">
        <form className="self-stretch overflow-hidden flex flex-col p-2.5 items-center justify-center gap-[10px]">
          <div className="rounded-6xl w-[250px] flex flex-row py-2.5 px-[15px] box-border items-center justify-start">
            <div className="relative text-base font-medium font-inter text-gray-100 text-left">
              Enter your email
            </div>
          </div>
          <input
            className="[border:none] font-medium font-inter text-base bg-[transparent] rounded-6xl w-[250px] flex flex-row py-2.5 px-[15px] box-border items-center justify-start"
            type="text"
            placeholder="Choose your password"
          />
          <div className="relative text-sm font-medium font-inter text-gainsboro-200 text-center">
            Signup with email and password the old way
          </div>
          <div className="self-stretch rounded-6xl box-border h-px overflow-hidden shrink-0 border-[1px] border-solid border-silver-300" />
          <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] rounded-6xl [background:linear-gradient(270deg,_#ae46ff_16.07%,_#0879fe)] w-[250px] flex flex-row box-border items-center justify-center gap-[10px]">
            <img
              className="relative w-[18px] h-[18px]"
              alt=""
              src="/vector.svg"
            />
            <div className="relative text-base font-medium font-inter text-white text-center">
              LinkedIn Signup
            </div>
          </button>
          <div className="self-stretch relative text-sm font-medium font-inter text-gainsboro-200 text-center flex items-end justify-center h-[19px] shrink-0">
            Signup via LinkedIn, like the cool kids
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupContainer;
