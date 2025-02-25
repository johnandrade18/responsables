import { NextResponse } from "next/server";
import { ResponsablesService } from "@/services/responsablesService";

/**
 * Endpoint para obtener responsables por categoría
 * GET /api/responsables/categoria/[categoriaId]
 */
export async function GET(
  request: Request,
  { params }: { params: { categoriaId: string } }
) {
  try {
    const categoriaId = params.categoriaId;

    if (!categoriaId) {
      return NextResponse.json(
        { error: "ID de categoría requerido" },
        { status: 400 }
      );
    }

    const responsables =
      ResponsablesService.getResponsablesByCategoria(categoriaId);

    return NextResponse.json({ data: { responsables } }, { status: 200 });
  } catch (error) {
    console.error(`Error al obtener responsables por categoría:`, error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
