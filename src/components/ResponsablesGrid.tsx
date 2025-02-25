import { Responsable } from "@/types/responsables";
import ResponsableCard from "./ResponsableCard";

interface ResponsablesGridProps {
  responsables: Responsable[];
  titulo?: string;
}

export default function ResponsablesGrid({
  responsables,
  titulo,
}: ResponsablesGridProps) {
  if (responsables.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-medium text-gray-600">
          No se encontraron responsables
        </h2>
      </div>
    );
  }

  return (
    <div>
      {titulo && (
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{titulo}</h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {responsables.map((responsable, index) => (
          <ResponsableCard
            key={index}
            responsable={responsable}
          />
        ))}
      </div>
    </div>
  );
}
