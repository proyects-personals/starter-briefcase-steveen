import type { UserModel } from "@domain";
import type React from "react";

/**
 * @interface IHeaderAuthBar
 * @description Interfaz para el componente HeaderAuthBar.
 *              Permite pasar la información del usuario autenticado y un callback
 *              para alternar la visibilidad del sidebar.
 */
export interface IHeaderAuthBar {
  user: UserModel | null;
  onToggleSidebar?: () => void;
}

/**
 * @interface IHeaderLogos
 * @description Interfaz para el componente HeaderLogos.
 *              Contiene el estado de desplazamiento de la página (scrolled)
 *              para ajustar el diseño de los logotipos en el header.
 */
export interface IHeaderLogos {
  scrolled: boolean;
  backgroundVideo?: string;
  backgroundYoutube?: string;
  backgroundImage?: string;
}

/**
 * @interface IHeaderNavItem
 * @description Representa un ítem en la barra de navegación del header.
 *              Cada ítem tiene un destino, un ícono y un texto asociado.
 */
export interface IHeaderNavItem {
  to: string;
  icon: React.ElementType;
  text: string;
  auth: boolean | null;
  target?: "_self" | "_blank";
}

/**
 * @interface IHeaderNav
 * @description Interfaz para la barra de navegación del header.
 *              Incluye los ítems de navegación y el estado de autenticación.
 */
export interface IHeaderNav {
  isAutentificated?: boolean;
  scrolled: boolean;
}

/**
 * @interface IHeaderUserMenu
 * @description Interfaz para el menú de usuario en el header.
 *              Muestra opciones relacionadas con el usuario autenticado.
 */
export interface IHeaderUserMenu {
  user: UserModel | null;
}

/**
 * @interface IHeader
 * @description Props para el componente Header de la aplicación.
 *              Permite pasar la información del usuario,
 *              un callback para alternar la visibilidad del sidebar,
 *              y un estado que indica si el usuario está autenticado.
 */
export interface IHeader {
  user?: UserModel | null;
  onToggleSidebar?: () => void;
  isAutentificated: boolean;
}
