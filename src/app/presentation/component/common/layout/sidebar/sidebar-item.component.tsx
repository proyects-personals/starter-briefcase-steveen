import clsx from "clsx";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useTheme, useAnalytics } from "@application";

import SidebarTooltipComponent from "./sidebar-tooltip.component";

import type { ISidebarItem } from "@domain";

/**
 * Item individual de la barra lateral (Sidebar).
 * @description
 * Gestiona la visualización de un enlace de navegación dentro del Sidebar.
 * - **Estado Activo:** Resalta automáticamente si la ruta coincide con la actual.
 * - **Estado Colapsado:** Oculta el texto y activa un Tooltip flotante para mantener la usabilidad.
 * - **Estilos Dinámicos:** Aplica colores y bordes basados en el objeto `theme`.
 * - **Animaciones:** Incluye transiciones suaves para hover, iconos y visibilidad del texto.
 * @component
 * @param {ISidebarItem} props - Propiedades del ítem.
 * @param {string} props.path - Ruta de destino (React Router).
 * @param {string} props.label - Etiqueta de texto (o clave i18n) a mostrar.
 * @param {React.ElementType} props.icon - Icono a renderizar (componente de React Icons).
 * @param {boolean} props.isCollapsed - Indica si el Sidebar está en modo reducido.
 * @version 1.4.0
 * @returns {JSX.Element} Un elemento de lista `<li>` que contiene el enlace estilizado.
 */
const SidebarItemComponent: React.FC<ISidebarItem> = ({
  path,
  label,
  icon: Icon,
  isCollapsed,
}) => {
  const { pathname } = useLocation();
  const { theme } = useTheme();
  const { event } = useAnalytics();

  const isActive = pathname === path;

  /**
   * Tracking: navegación desde sidebar
   *
   * @description
   * Registra:
   * - sección seleccionada
   * - si ya estaba activa
   * - estado del sidebar
   */
  const handleNavigation = (): void => {
    event(
      "Sidebar",
      `Navigate - ${label} | ${isActive ? "Active" : "Inactive"} | ${
        isCollapsed ? "Collapsed" : "Expanded"
      }`,
    );
  };

  return (
    <li>
      <Link
        to={path}
        onClick={handleNavigation}
        className={clsx(
          "group relative flex items-center gap-3 p-2",
          "transition-all duration-300 ease-out",
          isCollapsed && "justify-center",
        )}
        style={{
          borderRadius: theme.borderRadius.md,
          backgroundColor: isActive ? theme.colors.primary : "transparent",
          color: isActive ? theme.colors.background : theme.colors.text,
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.backgroundColor = theme.colors.hover;
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.backgroundColor = "transparent";
          }
        }}
      >
        <Icon
          className={clsx(
            "text-lg shrink-0",
            "transition-transform duration-300 ease-out",
            "group-hover:scale-110",
          )}
          style={{
            color: isActive ? theme.colors.background : theme.colors.text,
          }}
        />

        {!isCollapsed && (
          <span
            className="
              transition-all duration-300 ease-out
              opacity-100 translate-x-0
            "
            style={{
              fontSize: theme.font.sizes.sm,
              fontWeight: theme.font.weights.medium,
            }}
          >
            {label}
          </span>
        )}

        {isCollapsed && (
          <SidebarTooltipComponent label={label} isActive={isActive} />
        )}
      </Link>
    </li>
  );
};

export default SidebarItemComponent;
