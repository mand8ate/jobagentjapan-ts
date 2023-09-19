import Hero from "@/components/landing/Hero";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Hero />
    </main>
  );
}
