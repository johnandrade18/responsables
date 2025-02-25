"use client";

import { useEffect, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    onSearch(query);
  }, [query])

  return (
      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre, departamento o puesto..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 h-12 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>
  );
}
