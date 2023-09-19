import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";
import SearchFormContainer from "@/components/forms/SearchFormContainer";
import JobPositionsContainer from "@/components/positions/JobPositionContainer";

export default async function Positions() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <header className="bg-[url('/hero4@3x.png')] bg-cover bg-no-repeat bg-top text-center text-white font-inter py-12 md:py-24 px-4 md:px-10">
        <div className="text-5xl md:text-7xl mb-4">
          <b className="relative">Open Positions</b>
        </div>
        <div className="text-lg md:text-5xl">
          <b className="relative">Find the perfect fit for your lifestyle</b>
        </div>
      </header>
      <SearchFormContainer />
      <JobPositionsContainer />
    </div>
  );
}
