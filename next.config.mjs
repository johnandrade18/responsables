/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para las imágenes
  images: {
    domains: [],
  },

  // Configuración para mejorar el rendimiento
  experimental: {
    optimizeCss: true,
  },

  // Optimización de la compilación y despliegue
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
