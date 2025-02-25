import { NextResponse } from "next/server";
import { ResponsablesService } from "@/services/responsablesService";

/**
 * Endpoint para obtener un responsable por su ID
 * GET /api/responsables/[id]
 */
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    if (!id) {
      return NextResponse.json(
        { error: "ID de responsable requerido" },
        { status: 400 }
      );
    }

    const responsable = ResponsablesService.getResponsableById(id);

    if (!responsable) {
      return NextResponse.json(
        { error: "Responsable no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: { responsable } }, { status: 200 });
  } catch (error) {
    console.error(`Error al obtener responsable:`, error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
