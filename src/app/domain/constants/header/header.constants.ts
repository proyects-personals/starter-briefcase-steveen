import {
  FaHome,
  FaCalendarAlt,
  FaInfoCircle,
  FaBook,
  FaHandshake,
  FaTag,
  FaEnvelope,
} from "react-icons/fa";

import type { IHeaderNavItem } from "../../interface";

export const FONT_WEIGHT_ACTIVE = 600;
export const FONT_WEIGHT_DEFAULT = 500;

/**
 * Configuración de los elementos de navegación de la aplicación.
 * * @description
 * Define una lista de objetos que representan los enlaces de la barra de navegación.
 * Cada objeto contiene la ruta (`to`), el componente de icono de `react-icons`,
 * el texto descriptivo y el nivel de acceso requerido (`auth`).
 * * - `auth: null`: Ruta pública accesible para todos.
 * - `auth: true`: Ruta protegida que requiere autenticación.
 * * @type {Array<{to: string, icon: import("react-icons").IconType, text: string, auth: boolean | null}>}
 * @version 1.0.0
 */
export const NAV_ITEMS_BASE: IHeaderNavItem[] = [
  {
    to: "/bienvenidos",
    icon: FaHome,
    text: "nav.bienvenidos",
    auth: null,
  },
  {
    to: "/",
    icon: FaHome,
    text: "nav.home",
    auth: true,
  },
  {
    to: "/agenda-activities",
    icon: FaCalendarAlt,
    text: "nav.agenda-activities",
    auth: true,
  },
  {
    to: "/discover-Ecuador-travel",
    icon: FaInfoCircle,
    text: "nav.discover-ecuador-travel",
    auth: true,
  },
  {
    to: "/catalog",
    icon: FaBook,
    text: "nav.catalog",
    auth: true,
  },
  {
    to: "/commercial-proposal",
    icon: FaHandshake,
    text: "nav.commercial-proposal",
    auth: true,
  },
  {
    to: "/packages",
    icon: FaTag,
    text: "nav.packages",
    auth: true,
  },
  {
    to: "/contact",
    icon: FaEnvelope,
    text: "nav.contact",
    auth: true,
  },
];
