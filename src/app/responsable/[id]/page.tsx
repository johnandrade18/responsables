import { ApiClient } from "@/lib/apiClient";
import ErrorMessage from "@/components/ErrorMessage";
import Link from "next/link";

export default async function ResponsableDetailPage({
  params,
}: {
  params: { id: string };
}) {
    console.log("ID recibido:", params.id);
  try {
    const responsable = await ApiClient.getResponsableById(params.id);
    console.log("Respuesta de la API:", responsable);
    if (!responsable) {
      return (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Responsable no encontrado
          </h2>
          <p className="text-gray-600 mb-6">
            No se pudo encontrar el responsable con ID: {params.id}
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Volver al inicio
          </Link>
        </div>
      );
    }

    const isDepartamento = responsable.IDTipo === "0";

    return (
      <div>
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline font-medium">
            ← Volver al directorio
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {responsable.Responsable}
              </h1>
              <p
                className={`text-sm font-medium ${
                  isDepartamento ? "text-blue-600" : "text-green-600"
                }`}
              >
                {isDepartamento
                  ? "Departamento"
                  : responsable.Puesto || "Empleado"}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  ID Responsable
                </dt>
                <dd className="mt-1 text-gray-900">
                  {responsable.IDResponsable}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">
                  ID Categoría
                </dt>
                <dd className="mt-1 text-gray-900">
                  {responsable.IDCategoria}
                </dd>
              </div>

              {responsable.Telefono && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Teléfono
                  </dt>
                  <dd className="mt-1 text-gray-900">
                    <a
                      href={`tel:${responsable.Telefono}`}
                      className="text-blue-600 hover:underline"
                    >
                      {responsable.Telefono}
                    </a>
                  </dd>
                </div>
              )}

              {responsable.Correo && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Correo electrónico
                  </dt>
                  <dd className="mt-1 text-gray-900">
                    <a
                      href={`mailto:${responsable.Correo}`}
                      className="text-blue-600 hover:underline"
                    >
                      {responsable.Correo}
                    </a>
                  </dd>
                </div>
              )}

              {responsable.Puesto && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">Puesto</dt>
                  <dd className="mt-1 text-gray-900">{responsable.Puesto}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(`Error al cargar el responsable con ID ${params.id}:`, error);
    return (
      <ErrorMessage message="Error al cargar los detalles del responsable" />
    );
  }
}
