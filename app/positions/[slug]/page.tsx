import PositionModal from "@/components/modals/PositionModal";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { slug } = params;
  const positionId = slug.split("-")[1];

  const { data: position } = await supabase
    .from("positions")
    .select("id, title, category, company, salary, location, style, agent")
    .eq("id", positionId)
    .single();

  if (!position) return notFound();

  return <PositionModal position={position} />;
}
