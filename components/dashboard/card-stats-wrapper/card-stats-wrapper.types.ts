import { GetFormStats } from "@/actions/form";
import { ReactNode } from "react";

export interface StatsCardsProps {
  data?: Awaited<ReturnType<typeof GetFormStats>>;
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
