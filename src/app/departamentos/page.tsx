import { ApiClient } from '@/lib/apiClient';
import ResponsablesGrid from '@/components/ResponsablesGrid';
import ErrorMessage from '@/components/ErrorMessage';

export default async function DepartamentosPage() {
  try {
    const responsables = await ApiClient.getResponsablesByTipo('0');
    
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Departamentos</h1>
        
        <ResponsablesGrid 
          responsables={responsables} 
        />
      </div>
    );
  } catch (error) {
    console.error('Error en la página de departamentos:', error);
    return <ErrorMessage message="Error al cargar los departamentos" />;
  }
}