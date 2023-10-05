import HeroLanding from "@/components/heroes/HeroLanding";
import FeatureContainer from "@/components/landing/FeatureContainer";
import PositionsContainer from "@/components/positions/PositionsContainer";
import PositionSearchForm from "@/components/forms/PositionSearchForm";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <HeroLanding />
      <FeatureContainer />
      <PositionsContainer />
      <PositionSearchForm />
    </main>
  );
}
