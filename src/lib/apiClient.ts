import { Responsable } from "@/types/responsables";

/**
 * Cliente API para consumir los endpoints de responsables
 */
export class ApiClient {
  private static API_URL = process.env.NEXT_PUBLIC_API_URL || "";

  /**
   * Obtiene todos los responsables
   * @returns Array de responsables
   */
  static async getResponsables(): Promise<Responsable[]> {
    try {
      // En desarrollo, usa la ruta relativa
      const url = `${this.API_URL}/api/responsables`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // Usar cache: no-store para evitar caché en desarrollo
        cache: "default",
      });

      if (!response.ok) {
        throw new Error(`Error en la API: ${response.status}`);
      }

      const data = await response.json();
      return data.data.responsables;
    } catch (error) {
      console.error("Error al obtener responsables:", error);
      return [];
    }
  }

  /**
   * Obtiene un responsable por su ID
   * @param id ID del responsable
   * @returns Responsable o null
   */
  static async getResponsableById(id: string): Promise<Responsable | null> {
    try {
      const url = `${this.API_URL}/api/responsables/${id}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "default",
      });
      console.log("response", response);

      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error(`Error en la API: ${response.status}`);
      }

      const data = await response.json();
      return data.data.responsable;
    } catch (error) {
      console.error(`Error al obtener responsable con ID ${id}:`, error);
      return null;
    }
  }

  /**
   * Obtiene responsables por tipo
   * @param tipoId ID del tipo
   * @returns Array de responsables
   */
  static async getResponsablesByTipo(tipoId: string): Promise<Responsable[]> {
    try {
      const url = `${this.API_URL}/api/responsables/tipo/${tipoId}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "default",
      });

      if (!response.ok) {
        throw new Error(`Error en la API: ${response.status}`);
      }

      const data = await response.json();
      return data.data.responsables;
    } catch (error) {
      console.error(`Error al obtener responsables por tipo ${tipoId}:`, error);
      return [];
    }
  }

  /**
   * Obtiene responsables por categoría
   * @param categoriaId ID de la categoría
   * @returns Array de responsables
   */
  static async getResponsablesByCategoria(
    categoriaId: string
  ): Promise<Responsable[]> {
    try {
      const url = `${this.API_URL}/api/responsables/categoria/${categoriaId}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "default",
      });

      if (!response.ok) {
        throw new Error(`Error en la API: ${response.status}`);
      }

      const data = await response.json();
      return data.data.responsables;
    } catch (error) {
      console.error(
        `Error al obtener responsables por categoría ${categoriaId}:`,
        error
      );
      return [];
    }
  }
}
