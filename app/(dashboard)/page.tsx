import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import {
  CardStatsWrapper,
  CreateFormBtn,
  StatsCards,
} from "@/components/dashboard";

export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-3xl font-bold col-span-2">Tus formularios</h2>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CreateFormBtn />
      </div>
    </div>
  );
}
