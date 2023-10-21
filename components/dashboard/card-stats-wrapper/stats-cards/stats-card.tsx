import { StatsCardsProps } from "../card-stats-wrapper.types";
import { StatsCard } from "../stats-card/stats-card";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";

export function StatsCards(props: StatsCardsProps) {
  const { data, loading } = props;

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Visitas totales"
        icon={<LuView className="text-blue-600" />}
        helperText="Todas las visitas al constructor de formularios"
        value={data?.visits.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />
      <StatsCard
        title="Creaciones totales"
        icon={<FaWpforms className="text-yellow-600" />}
        helperText="Todas las creaciones de formularios"
        value={data?.submissions.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-yellow-600"
      />
      <StatsCard
        title="Ratio de creaciones"
        icon={<HiCursorClick className="text-green-600" />}
        helperText="Visitas en las que se crearon formularios"
        value={`${data?.submissionRate.toLocaleString()}%` || ""}
        loading={loading}
        className="shadow-md shadow-green-600"
      />
      <StatsCard
        title="Porcentaje de rebote"
        icon={<TbArrowBounce className="text-red-600" />}
        helperText="Visitas sin creación de formularios"
        value={`${data?.bounceRate.toLocaleString()}%` || ""}
        loading={loading}
        className="shadow-md shadow-red-600"
      />
    </div>
  );
}
