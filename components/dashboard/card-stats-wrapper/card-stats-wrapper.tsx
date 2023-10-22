import { getFormStats } from "@/actions/form";
import { StatsCards } from "./stats-cards/stats-card";

export async function CardStatsWrapper() {
  const stats = await getFormStats();
  return <StatsCards loading={false} data={stats} />;
}
