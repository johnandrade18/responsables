# Directorio de Responsables

Esta aplicación web muestra un directorio de responsables por departamento y posición, desarrollada con Next.js 14, TypeScript y Tailwind CSS.

## Características

- Servicio web que expone datos de responsables
- Interfaz responsive y atractiva para mostrar los datos
- Filtrado por tipo (departamentos y personas)
- Búsqueda por nombre o puesto
- Vista detallada de cada responsable
- Optimizado para rendimiento

## Tecnologías utilizadas

- **Next.js 14**: Framework principal
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos y diseño UI
- **ESLint**: Linting de código
- **Vercel**: Plataforma de despliegue

## Instalación y ejecución local

1. Clona el repositorio:

```bash
git clone git@github.com:johnandrade18/responsables.git
cd responsables
```

2. Instala las dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del proyecto

```
directorio-responsables/
├── src/
│   ├── app/               # Rutas y páginas (App Router)
│   │   ├── api/           # API endpoints
│   │   ├── departamentos/ # Página de departamentos
│   │   ├── personas/      # Página de personas 
│   │   ├── responsable/   # Página de detalle de responsable
│   ├── components/        # Componentes reutilizables
│   ├── data/              # Datos estáticos (JSON)
│   ├── lib/               # Utilidades y cliente API
│   ├── services/          # Servicios para manejo de datos
│   ├── types/             # Definiciones de tipos TypeScript
├── public/                # Archivos estáticos
├── .env.local             # Variables de entorno locales
├── next.config.js         # Configuración de Next.js
├── tailwind.config.js     # Configuración de Tailwind CSS
├── tsconfig.json          # Configuración de TypeScript
```

## Despliegue

La aplicación está desplegada en Vercel y se puede acceder a través de la siguiente URL:

[https://responsables.vercel.app/](https://responsables.vercel.app/)

## Decisiones técnicas

### Arquitectura

- **App Router**: Utilicé el nuevo router de páginas de Next.js 14 para aprovechar sus características de renderizado y optimización.
- **Componentes reutilizables**: Diseñé componentes modulares para facilitar la mantenibilidad y reutilización.
- **TypeScript**: Implementé tipado estricto para mejorar la detección de errores temprana.

### Optimizaciones

- **Lazy loading**: Implementé carga diferida para componentes pesados.
- **Caching**: Configuré estrategias de caché para mejorar los tiempos de respuesta.

### UI/UX

- **Diseño responsive**: La aplicación se adapta a diferentes tamaños de pantalla.
- **Accesibilidad**: Seguí prácticas de accesibilidad en los componentes.
- **Feedback visual**: Implementé estados de carga y manejo de errores claros.

## Dificultades enfrentadas y soluciones

1. **Manejo de CORS**: Tuve que configurar correctamente los encabezados para evitar problemas de CORS. Solucioné esto implementando la API y el frontend en el mismo dominio utilizando Next.js API Routes.

2. **Optimización de rendimiento**: Mejoré los tiempos de carga implementando server components donde fue posible y aplicando estrategias de caché.

3. **Manejo de tipos**: Al trabajar con datos externos, necesité crear interfaces TypeScript adecuadas. Implementé una estructura robusta de tipos para manejar todos los datos.

## Contacto

Para cualquier pregunta o sugerencia, puedes contactarme en [sistemas@johnandrade.com](mailto:sistemas@johnandrade.com).