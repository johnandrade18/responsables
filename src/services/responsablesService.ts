import { Responsable, ResponsablesData } from '@/types/responsables';
import responsablesData from '@/data/responsables.json';

/**
 * Servicio para gestionar los datos de responsables
 */
export class ResponsablesService {
  /**
   * Obtiene todos los responsables
   * @returns Array de responsables
   */
  static getAllResponsables(): Responsable[] {
    try {
      return (responsablesData as ResponsablesData).data.responsables;
    } catch (error) {
      console.error('Error al obtener responsables:', error);
      return [];
    }
  }

  /**
   * Obtiene un responsable por su ID
   * @param id ID del responsable a buscar
   * @returns Responsable encontrado o undefined
   */
  static getResponsableById(id: string): Responsable | undefined {
    try {
      return this.getAllResponsables().find(resp => resp.IDResponsable === id);
    } catch (error) {
      console.error(`Error al obtener responsable con ID ${id}:`, error);
      return undefined;
    }
  }

  /**
   * Filtra responsables por tipo
   * @param tipoId ID del tipo de responsable
   * @returns Array de responsables filtrados
   */
  static getResponsablesByTipo(tipoId: string): Responsable[] {
    try {
      return this.getAllResponsables().filter(resp => resp.IDTipo === tipoId);
    } catch (error) {
      console.error(`Error al filtrar responsables por tipo ${tipoId}:`, error);
      return [];
    }
  }

  /**
   * Filtra responsables por categoría
   * @param categoriaId ID de la categoría
   * @returns Array de responsables filtrados
   */
  static getResponsablesByCategoria(categoriaId: string): Responsable[] {
    try {
      return this.getAllResponsables().filter(resp => resp.IDCategoria === categoriaId);
    } catch (error) {
      console.error(`Error al filtrar responsables por categoría ${categoriaId}:`, error);
      return [];
    }
  }
}