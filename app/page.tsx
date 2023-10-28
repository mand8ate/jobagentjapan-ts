import HeroLanding from "@/components/heroes/HeroLanding";
import FeatureSection from "@/components/landing/FeatureSection";
import PositionSection from "@/components/landing/PositionSection";
import PositionSearchForm from "@/components/forms/PositionSearchForm";
import TestimonySection from "@/components/landing/TestimonySection";
import ContactFormSection from "@/components/landing/ContactFormSection";

export default async function Home() {
  return (
    <main>
      <HeroLanding />
      <FeatureSection />
      <PositionSection />
      <PositionSearchForm />
      <TestimonySection />
      <ContactFormSection />
    </main>
  );
}
