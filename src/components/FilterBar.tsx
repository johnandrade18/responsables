"use client";

import { useState } from "react";

interface FilterBarProps {
  onFilterChange: (filter: string) => void;
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [activeFilter, setActiveFilter] = useState("todos");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => handleFilterChange("todos")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
          ${
            activeFilter === "todos"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
      >
        Todos
      </button>

      <button
        onClick={() => handleFilterChange("departamentos")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
          ${
            activeFilter === "departamentos"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
      >
        Departamentos
      </button>

      <button
        onClick={() => handleFilterChange("personas")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
          ${
            activeFilter === "personas"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
      >
        Personas
      </button>
    </div>
  );
}
