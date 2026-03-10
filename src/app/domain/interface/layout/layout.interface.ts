import type { RoleEnum } from "../../enums";
import type { UserModel } from "../../models";
import type { ChildrenInterface } from "../base.interface";

/**
 * @interface HeaderInterface
 * @description Props para el componente Header de la aplicación.
 *              Permite pasar información del usuario y un callback
 *              para alternar la visibilidad del sidebar.
 */
export interface HeaderInterface {
  user?: UserModel | null;
  onToggleSidebar?: () => void;
  isAutentificated: boolean;
}

/**
 * @interface SidebarInterface
 * @description Props para el componente Sidebar de la aplicación.
 *              Controla visibilidad y permisos según rol.
 */
export interface SidebarInterface {
  role?: RoleEnum | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface LayoutInterface extends ChildrenInterface {
  isAutentificated: boolean;
}
