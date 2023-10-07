import CustomButton from "@/components/buttons/CustomButton";

export default async function HeroLanding() {
  return (
    <header className="w-full h-[40vh] flex flex-col items-center sm:items-start justify-start text-left text-4xl md:text-7xl lg:text-9xl text-black font-inter px-24 ">
      <h1 className="font-bold text-6xl md:text-8xl lg:text-9xl mb-6 md:mb-8">
        Job <span className="blueGradient-text">Agent</span> Japan
      </h1>
      <div className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4">
        Empowering <span className="violetGradient-text">Dreams</span>,
        Connecting <span className="violetGradient-text">Talent</span>
      </div>
      <div className="text-xl md:text-2xl lg:text-3xl mb-2 md:mb-4">
        Apply with one click: No CV Repetition
      </div>
      <CustomButton
        customClasses="hidden sm:block violetGradient-bg mt-4 py-3 md:py-3 px-4 text-white text-2xl"
        title="Let's start a new journey"
        url="positions"
      />
      <CustomButton
        customClasses="md:hidden w-[120px] violetGradient-bg mt-4 py-3 px-2 text-white text-base"
        title="Let's go"
        url="positions"
      />
    </header>
  );
}
