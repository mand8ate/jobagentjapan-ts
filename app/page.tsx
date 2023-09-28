import HeroLanding from "@/components/heroes/Hero";
import FeatureContainer from "@/components/landing/FeatureContainer";
import PositionContainer from "@/components/positions/PositionsContainer";
import PositionSearchForm from "@/components/forms/PositionSearchForm";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <HeroLanding />
      <FeatureContainer />
      <PositionContainer />
      <PositionSearchForm />
    </main>
  );
}
