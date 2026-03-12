import clsx from "clsx";
import React from "react";

import { useTheme } from "@application";
import { SIDEBAR_ITEMS, type ISidebar } from "@domain";

import SidebarItemComponent from "./sidebar-item.component";

/**
 * Componente de Barra Lateral (Sidebar).
 * - Responsividad: Solo visible en pantallas grandes (`lg`).
 * - Estados: Cambia su ancho entre 64px (`w-16`) y 256px (`w-64`) mediante `isOpen`.
 * - Animaciones: Transiciones suaves para ancho, padding y visibilidad del contenido.
 * - Organización: Sección de encabezado ("Admin") solo visible en modo expandido.
 * - Theming: Utiliza el sistema de temas (`light` / `dark`).
 */
const SidebarComponent: React.FC<ISidebar> = ({ isOpen }) => {
  const { theme } = useTheme();
  const isCollapsed = !isOpen;

  return (
    <aside
      className={clsx(
        "fixed top-0 left-0 z-50 h-screen",
        "pt-24 hidden lg:block",
        "transition-all duration-500 ease-in-out",
        isCollapsed ? "w-16" : "w-64",
      )}
      style={{
        backgroundColor: theme.colors.surface,
        borderRight: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadow.lg,
        fontFamily: theme.font.family,
      }}
    >
      <nav
        className={clsx(
          "h-full flex flex-col transition-all duration-300 ease-in-out",
          isCollapsed ? "pt-4" : "pt-6",
        )}
      >
        <ul className="space-y-2 px-2">
          {!isCollapsed && (
            <li
              className={clsx(
                "uppercase px-2 transition-all duration-300 ease-in-out",
                "opacity-100 translate-x-0",
              )}
              style={{
                fontSize: theme.font.sizes.xs,
                fontWeight: theme.font.weights.medium,
                color: theme.colors.textSecondary,
                letterSpacing: "0.05em",
              }}
            >
              Admin
            </li>
          )}

          {SIDEBAR_ITEMS.map((item) => (
            <SidebarItemComponent
              key={item.path}
              {...item}
              isCollapsed={isCollapsed}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarComponent;
