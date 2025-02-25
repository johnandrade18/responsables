"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Obtiene la ruta actual

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold outline-none">
            Directorio de Responsables
          </Link>
          <div className="space-x-4">
            <Link
              href="/"
              className={`outline-none transition-colors ${
                pathname === "/"
                  ? "text-slate-600 bg-slate-200 font-semibold p-4"
                  : "text-slate-200"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/departamentos"
              className={`outline-none transition-colors ${
                pathname === "/departamentos"
                  ? "text-slate-600 bg-slate-200 font-semibold p-4"
                  : "text-slate-200"
              }`}
            >
              Departamentos
            </Link>
            <Link
              href="/personas"
              className={`outline-none transition-colors ${
                pathname === "/personas"
                  ? "text-slate-600 bg-slate-200 font-semibold p-4"
                  : "text-slate-200"
              }`}
            >
              Personas
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
