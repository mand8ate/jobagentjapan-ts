import { ReactNode } from "react";

export interface CustomButtonProps {
  customClasses?: string;
  title?: string;
  url?: string;
}

export interface SectionProps {
  title: string;
  color?: string;
  background?: string;
  container?: boolean;
  children: ReactNode;
}

export interface SectionTitleProps {
  children: ReactNode;
  color?: string;
}

export interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  };
}

export enum WorkStyle {
  OFFICE = "In-Office",
  REMOTE = "Remote",
  HYBRID = "Hybrid",
}

export interface PositionProps {
  id: string;
  title: string;
  category: string;
  company: string;
  salary: number;
  location: string;
  style: string;
  agent: string;
}

export interface PositionParentProps {
  positions?: PositionProps[] | null;
  limit?: number;
  isNext?: boolean;
}

export interface HeroPageProps {
  bgImg: string;
  bgColor: string;
  title: string;
  subtitle: string;
}
