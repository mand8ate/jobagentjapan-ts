import HeroLanding from "@/components/heroes/HeroLanding";
import FeatureSection from "@/components/landing/FeatureSection";
import PositionSection from "@/components/landing/PositionSection";
import PositionSearchForm from "@/components/forms/PositionSearchForm";

export default async function Home() {
  return (
    <main className="py-24">
      <HeroLanding />
      <FeatureSection />
      <PositionSection />
      <PositionSearchForm />
    </main>
  );
}
