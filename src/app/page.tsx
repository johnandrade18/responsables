'use client';

import { useEffect, useState } from 'react';
import { ApiClient } from '@/lib/apiClient';
import { Responsable } from '@/types/responsables';
import ResponsablesGrid from '@/components/ResponsablesGrid';
import Loading from '@/components/Loading';
import ErrorMessage from '@/components/ErrorMessage';
import FilterBar from '@/components/FilterBar';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const [responsables, setResponsables] = useState<Responsable[]>([]);
  const [filteredResponsables, setFilteredResponsables] = useState<Responsable[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchResponsables = async () => {
      try {
        setLoading(true);
        const data = await ApiClient.getResponsables();
        setResponsables(data);
        setFilteredResponsables(data);
        setError(null);
      } catch (err) {
        setError('Error al cargar los responsables. Por favor, intenta de nuevo más tarde.');
        console.error('Error fetching responsables:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResponsables();
  }, []);

  const handleFilterChange = (filter: string) => {
    let filtered = responsables;
    
    if (filter === 'departamentos') {
      filtered = responsables.filter(r => r.IDTipo === '0');
    } else if (filter === 'personas') {
      filtered = responsables.filter(r => r.IDTipo === '1');
    }
    
    // Mantén la búsqueda activa con el filtro
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(r => 
        r.Responsable.toLowerCase().includes(query) || 
        r.Puesto.toLowerCase().includes(query)
      );
    }
    
    setFilteredResponsables(filtered);
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query) {
      // Si la búsqueda está vacía, muestra todos los responsables según el filtro actual
      handleFilterChange('todos');
      return;
    }
    
    const lowercaseQuery = query.toLowerCase();
    const results = responsables.filter(
      resp => 
        resp.Responsable.toLowerCase().includes(lowercaseQuery) ||
        resp.Puesto.toLowerCase().includes(lowercaseQuery)
    );
    
    setFilteredResponsables(results);
  };

  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Directorio de Responsables
        </h1>
        <p className="text-gray-600">
          Encuentra información de contacto de departamentos y personal
        </p>
      </section>
      
      <SearchBar onSearch={handleSearch} />
      <FilterBar onFilterChange={handleFilterChange} />
      
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <ResponsablesGrid responsables={filteredResponsables} />
      )}
    </div>
  );
}