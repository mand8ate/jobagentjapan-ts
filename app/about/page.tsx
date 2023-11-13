import DeveloperContainer from "@/components/about/DeveloperSection";
import CompanyContainer from "@/components/about/CompanySection";
import HeroPages from "@/components/heroes/HeroPages";
import { AboutUsSection } from "@/components/about/AboutUsSection";

export default async function About() {
  return (
    <div className="bg-white w-full flex flex-col">
      <HeroPages
        bgImg="/hero3@3x.png"
        bgColor="bg-headerred"
        title="About Us"
        subtitle="We are an open book"
      />
      <AboutUsSection />
      <DeveloperContainer />
      <CompanyContainer />
    </div>
  );
}
