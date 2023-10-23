import { getFormStats } from "@/actions/form";
import { ReactNode } from "react";

export interface StatsCardsProps {
  data?: Awaited<ReturnType<typeof getFormStats>>;
  loading: boolean;
}

export interface StatsCardProp {
  title: string;
  value: string;
  helperText: string;
  className: string;
  loading: boolean;
  icon: ReactNode;
}
