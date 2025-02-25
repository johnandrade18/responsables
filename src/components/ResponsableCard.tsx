import { Responsable } from "@/types/responsables";
import Link from "next/link";

interface ResponsableCardProps {
  responsable: Responsable;
}

export default function ResponsableCard({ responsable }: ResponsableCardProps) {
  const isEmpty =
    !responsable.Correo && !responsable.Telefono && !responsable.Puesto;

  // Determinar si es un departamento o una persona
  const isDepartamento = responsable.IDTipo === "0";

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow
      ${
        isDepartamento
          ? "border-l-4 border-blue-500"
          : "border-l-4 border-green-500"
      }`}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {responsable.Responsable}
      </h2>

      {isDepartamento ? (
        <p className="text-sm text-blue-600 font-medium mb-3">Departamento</p>
      ) : (
        <p className="text-sm text-green-600 font-medium mb-3">
          {responsable.Puesto || "Empleado"}
        </p>
      )}

      {!isEmpty && (
        <div className="space-y-2 mt-4">
          {responsable.Correo && (
            <p className="text-sm">
              <span className="font-medium text-gray-600">Correo:</span>{" "}
              <a
                href={`mailto:${responsable.Correo}`}
                className="text-blue-500 hover:underline"
              >
                {responsable.Correo}
              </a>
            </p>
          )}

          {responsable.Telefono && (
            <p className="text-sm">
              <span className="font-medium text-gray-600">Teléfono:</span>{" "}
              <a
                href={`tel:${responsable.Telefono}`}
                className="text-blue-500 hover:underline"
              >
                {responsable.Telefono}
              </a>
            </p>
          )}
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link
          href={`/responsable/${responsable.IDResponsable.toString()}`}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          Ver detalles →
        </Link>
      </div>
    </div>
  );
}
