import PositionSearchForm from "@/components/forms/PositionSearchForm";
import HeroPages from "@/components/heroes/HeroPages";
import PositionContainer from "@/components/positions/PositionContainer";

export default async function Positions() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <HeroPages
        bgImg="/hero4@3x.png"
        bgColor="bg-headerblue"
        title="Open Positions"
        subtitle="Find the perfect fit for your lifestyle"
      />
      <PositionSearchForm />
      <PositionContainer />
    </div>
  );
}
