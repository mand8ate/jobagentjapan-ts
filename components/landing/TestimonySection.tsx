import SectionContainer from "./SectionContainer";
import Slider from "./Slider";
import TestimonyCard from "./TestimonyCard";

export default async function FeatureContainer() {
  return (
    <SectionContainer
      title="Success Stories"
      color="violetGradient-bg"
      container
    >
      <div className="w-screen">
        <Slider options={{ align: "center" }}>
          <div className="flex-[0_0_90%] md:flex-[0_0_80%] lg:flex-[0_0_40%]">
            <TestimonyCard />
          </div>
          <div className="flex-[0_0_90%] md:flex-[0_0_80%] lg:flex-[0_0_40%]">
            <TestimonyCard />
          </div>
          <div className="flex-[0_0_90%] md:flex-[0_0_80%] lg:flex-[0_0_40%]">
            <TestimonyCard />
          </div>
          <div className="flex-[0_0_90%] md:flex-[0_0_60%] lg:flex-[0_0_40%]">
            <TestimonyCard />
          </div>
        </Slider>
      </div>
    </SectionContainer>
  );
}
