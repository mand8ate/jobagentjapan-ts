import HeroLanding from "@/components/heroes/HeroLanding";
import FeatureSection from "@/components/landing/FeatureSection";
import PositionSection from "@/components/landing/PositionSection";
import PositionSearchForm from "@/components/forms/PositionSearchForm";
import TestimonySection from "@/components/landing/TestimonySection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = await createClient(cookieStore);

  const { data: positions } = await supabase
    .from("positions")
    .select("*")
    .eq("priority", true);

  return (
    <main>
      <HeroLanding />
      <FeatureSection />
      <PositionSection positions={positions} />
      <PositionSearchForm />
      <TestimonySection />
      <ContactFormSection />
    </main>
  );
}
