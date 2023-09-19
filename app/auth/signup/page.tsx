import SignupContainer from "@/components/auth/SignupContainer";

export default async function Signup() {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start">
      <header className="self-stretch h-[400px] flex flex-col py-[50px] px-[100px] box-border items-start justify-start bg-[url('/hero1@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-77xl text-white font-inter">
        <div className="self-stretch flex-1 flex flex-row py-[25px] px-10 items-center justify-center">
          <div className="flex-1 overflow-hidden flex flex-col p-2.5 items-center justify-center gap-[10px]">
            <b className="self-stretch relative md:text-35xl sm:text-13xl">
              Signup
            </b>
            <b className="self-stretch relative text-5xl sm:text-lg">
              Become a free member
            </b>
          </div>
        </div>
      </header>
      <SignupContainer />
    </div>
  );
}
