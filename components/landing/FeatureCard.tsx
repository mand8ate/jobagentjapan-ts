import { FeatureCardProps } from "@/lib/common.types";

export default async function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="p-6 w-96 mx-8">
      <div className="flex items-center justify-center mb-4 lg:mb-10">
        <feature.icon className="w-14 h-14 lg:w-20 lg:h-20 text-crimson-300" />
      </div>
      <h3 className="text-2xl font-bold mb-4 lg:mb-10 text-center">
        {feature.title}
      </h3>
      <p className="text-gray-600 font-semibold text-lg lg:text-xl text-center">
        {feature.description}
      </p>
    </div>
  );
}
