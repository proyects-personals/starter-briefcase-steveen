import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useTheme, useAnalytics } from "@application";
import { logoMadjs } from "@assets";

import HeaderUserMenuComponent from "./header-user-menu.component";

import type { IHeaderAuthBar } from "@domain";

/**
 * Barra de navegación superior para el área autenticada del sistema.
 * @description
 * Proporciona acceso rápido al menú lateral (Sidebar), el logo principal de la aplicación
 * y el menú de acciones del usuario. Gestiona visualmente el contraste y sombreado
 * basándose en el sistema de temas dinámico.
 *
 * Integra tracking de eventos para analítica de interacción del usuario.
 *
 * @component
 * @param {IHeaderAuthBar} props - Propiedades del componente.
 * @param {UserInterface} props.user - Objeto con la información del usuario actual.
 * @param {() => void} props.onToggleSidebar - Función para abrir/cerrar el menú lateral.
 *
 * @version 1.1.0
 * @returns {JSX.Element} Un contenedor horizontal con controles de navegación y usuario.
 */
const HeaderAuthBarComponent: React.FC<IHeaderAuthBar> = ({
  user,
  onToggleSidebar,
}) => {
  const { theme } = useTheme();
  const { event } = useAnalytics();

  /**
   * Tracking: toggle del sidebar
   *
   * @description
   * Registra cuando el usuario abre o cierra el menú lateral.
   */
  const handleToggleSidebar = (): void => {
    event("Header", "Toggle Sidebar");
    if (onToggleSidebar) {
      onToggleSidebar();
    }
  };

  /**
   * 📊 Tracking: click en logo (home)
   *
   * @description
   * Registra la navegación hacia la página principal desde el header.
   */
  const handleLogoClick = (): void => {
    event("Header", "Click Logo - Home");
  };

  /**
   * @description Estilos base para el contenedor principal
   */
  const barStyles = {
    background: theme.colors.surface,
    borderBottom: `1px solid ${theme.colors.border}`,
    boxShadow: theme.shadow.sm,
  };

  return (
    <div
      className="flex items-center justify-between px-4 py-4"
      style={barStyles}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={handleToggleSidebar}
          aria-label="Toggle Sidebar"
          className="p-2 rounded-md transition-all duration-200 ease-in-out"
          style={{ color: theme.colors.text }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = theme.colors.hover)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          <FaBars size={18} />
        </button>

        <Link to="/" className="flex items-center" onClick={handleLogoClick}>
          <img
            src={logoMadjs}
            alt="Logo MadJS"
            className="h-10 w-auto object-contain cursor-pointer transition-opacity hover:opacity-80"
          />
        </Link>
      </div>

      <HeaderUserMenuComponent user={user} />
    </div>
  );
};

export default HeaderAuthBarComponent;
