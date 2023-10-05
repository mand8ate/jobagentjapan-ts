import { ReactNode } from "react";

export interface CustomButtonProps {
  customClasses: string;
  title: string;
  url: string;
}

export interface SectionTitleProps {
  children: ReactNode;
  color: string;
}

export interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  };
}

export interface SectionProps {
  title: string;
  color?: string;
  children: ReactNode;
}
