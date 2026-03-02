import type { RoleEnum } from "../../enums";
import type { UserModel } from "../../models";
import type { ReactNode } from "react";

/**
 * @interface HeaderInterface
 * @description Props para el componente Header de la aplicación.
 *              Permite pasar información del usuario y un callback
 *              para alternar la visibilidad del sidebar.
 */
export interface HeaderInterface {
  user?: UserModel;
  onToggleSidebar?: () => void;
}

/**
 * @interface SidebarInterface
 * @description Props para el componente Sidebar de la aplicación.
 *              Controla visibilidad y permisos según rol.
 */
export interface SidebarInterface {
  role?: RoleEnum;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * @interface ChildrenInterface
 * @description Props genéricas para componentes que reciben children.
 */
export interface ChildrenInterface {
  children: ReactNode;
}
