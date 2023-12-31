import PositionSearchForm from "@/components/forms/PositionSearchForm";
import HeroPages from "@/components/heroes/HeroPages";
import PositionContainer from "@/components/positions/PositionContainer";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

interface PageProps {
  searchParams: {
    limit: number;
  };
}

export default async function Positions({ searchParams }: PageProps) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const limit = searchParams.limit || 5;
  let positions;
  let isNext;

  console.log(limit);

  const loadPositions = async () => {
    const { data: result } = await supabase
      .from("positions")
      .select("id, title, category, company, salary, location, style, agent")
      .limit(limit);

    positions = result || [];
    isNext = (limit || 5) > positions.length;
  };

  await loadPositions();

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <HeroPages
        bgImg="/hero4@3x.png"
        bgColor="bg-headerblue"
        title="Positions"
        subtitle="Find the perfect fit for your lifestyle"
      />
      <PositionSearchForm />
      <PositionContainer positions={positions} limit={limit} isNext={isNext} />
    </div>
  );
}
