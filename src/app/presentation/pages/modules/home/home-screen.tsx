import type { JSX } from "react";

/**
 * Pantalla de Inicio (Home/Dashboard).
 * * @description
 * Actúa como el punto de entrada principal de la aplicación. En una arquitectura
 * de panel administrativo, este componente suele renderizar el resumen de datos,
 * estadísticas iniciales o la bienvenida al usuario.
 * * @component
 * @version 1.0.0
 * @returns {JSX.Element} El contenedor principal de la vista de inicio.
 */
const HomeScreen = (): JSX.Element => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors">
          Hola Home
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
          Bienvenido a **SteveenCues Insights**. Aquí comenzará la visualización
          de tus datos y la gestión de tu plataforma.
        </p>
      </div>
    </main>
  );
};

export default HomeScreen;
