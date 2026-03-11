import type { RoleEnum } from "@domain";
import type React from "react";

/**
 * @interface ISidebarItem
 * @description Representa un ítem dentro del Sidebar de la aplicación.
 *              Define la ruta, etiqueta visible, ícono y estado visual
 *              cuando el sidebar está colapsado.
 */
export interface ISidebarItem {
  path: string;
  label: string;
  icon: React.ElementType;
  isCollapsed: boolean;
}

/**
 * @interface ISidebarTooltip
 * @description Props para el componente de tooltip del Sidebar.
 *              Se utiliza cuando el sidebar está colapsado para
 *              mostrar el nombre del ítem al pasar el cursor.
 */
export interface ISidebarTooltip {
  label: string;
  isActive: boolean;
}

/**
 * @interface ISidebar
 * @description Props para el componente Sidebar principal.
 *              Controla la visibilidad, cierre del sidebar
 *              y permisos según el rol del usuario.
 */
export interface ISidebar {
  role?: RoleEnum | null;
  isOpen: boolean;
  onClose: () => void;
}
