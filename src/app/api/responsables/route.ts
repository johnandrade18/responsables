import { NextResponse } from "next/server";
import { ResponsablesService } from "@/services/responsablesService";

/**
 * Endpoint para obtener todos los responsables
 * GET /api/responsables
 */
export async function GET() {
  try {
    const responsables = ResponsablesService.getAllResponsables();
    return NextResponse.json({ data: { responsables } }, { status: 200 });
  } catch (error) {
    console.error("Error en el endpoint de responsables:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
