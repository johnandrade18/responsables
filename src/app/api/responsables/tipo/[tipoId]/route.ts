import { NextResponse } from 'next/server';
import { ResponsablesService } from '@/services/responsablesService';

/**
 * Endpoint para obtener responsables por tipo
 * GET /api/responsables/tipo/[tipoId]
 */
export async function GET(
  request: Request,
  { params }: { params: { tipoId: string } }
) {
  try {
    const tipoId = params.tipoId;
    
    if (!tipoId) {
      return NextResponse.json(
        { error: 'ID de tipo requerido' },
        { status: 400 }
      );
    }

    const responsables = ResponsablesService.getResponsablesByTipo(tipoId);
    
    return NextResponse.json({ data: { responsables } }, { status: 200 });
  } catch (error) {
    console.error(`Error al obtener responsables por tipo:`, error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}