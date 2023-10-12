import { features } from "@/constants";
import FeatureCard from "@/components/landing/FeatureCard";
import SectionContainer from "./SectionContainer";

export default async function FeatureContainer() {
  return (
    <SectionContainer title="What makes us special?" color="violetGradient-bg">
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} />
      ))}
    </SectionContainer>
  );
}
