export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                © {new Date().getFullYear()} Directorio de Responsables
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Desarrollado con Next.js, TypeScript y Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }