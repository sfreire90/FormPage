import { GetFormStats } from "@/actions/form";
import { StatsCards } from "./stats-cards/stats-card";

export async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsCards loading={false} data={stats} />;
}
