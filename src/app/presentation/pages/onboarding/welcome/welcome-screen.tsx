import React from "react";
import { FaUserCheck } from "react-icons/fa";

import { useTheme } from "@/app/application";

/**
 * Pantalla de Bienvenida (Dashboard Welcome).
 * * @description
 * Proporciona una visión general y accesos rápidos a las funciones principales
 * del panel administrativo. Utiliza un layout de rejilla (Grid) responsivo que se
 * adapta de 1 a 3 columnas según el ancho de pantalla.
 * * @component
 * @version 1.0.0
 * @returns {JSX.Element} Sección de bienvenida con tarjetas informativas.
 */
const WelcomeScreen: React.FC = () => {
  const { theme } = useTheme(); // Integración con tu sistema de temas

  return (
    <div className="col-span-full flex flex-col gap-10 animate-fade-in">
      <div>
        <h1
          className="text-3xl font-bold transition-colors"
          style={{ color: theme.colors.text }}
        >
          Welcome
        </h1>
        <p className="text-gray-500 dark:text-zinc-400 mt-2 max-w-2xl">
          You are now inside the administration panel. From here you can manage
          users, products, permissions and system settings easily and securely.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className="rounded-xl border p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          style={{
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
          }}
        >
          <FaUserCheck className="text-blue-500 text-2xl mb-4" />
          <h3
            className="font-semibold text-lg"
            style={{ color: theme.colors.text }}
          >
            User Management
          </h3>
          <p
            className="text-sm mt-2 opacity-70"
            style={{ color: theme.colors.text }}
          >
            Create, edit and manage user profiles, roles and permissions.
          </p>
        </div>
      </div>

      <p
        className="text-sm opacity-50 italic"
        style={{ color: theme.colors.text }}
      >
        If you need help, contact the system administrator or check the
        documentation.
      </p>
    </div>
  );
};

export default WelcomeScreen;
