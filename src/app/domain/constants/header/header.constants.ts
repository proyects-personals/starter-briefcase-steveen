import {
  FaHome,
  FaCalendarAlt,
  FaInfoCircle,
  FaBook,
  FaHandshake,
  FaTag,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { UrlEnum } from "@/app/domain/enums";
import { type IHeaderNavItem } from "@domain";

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
 * * @type {IHeaderNavItem[]}
 * @version 1.0.0
 */
export const NAV_ITEMS_BASE: IHeaderNavItem[] = [
  {
    to: "/portafolio",
    icon: FaHome,
    text: "nav.briefcase",
    auth: null,
  },
  {
    to: UrlEnum.PROJECTS_PERSONALS,
    icon: FaGithub,
    text: "nav.github",
    auth: null,
    target: "_blank",
  },
  {
    to: UrlEnum.LINKEDIN,
    icon: FaLinkedin,
    text: "nav.linkedin",
    auth: null,
    target: "_blank",
  },
  {
    to: UrlEnum.INSTAGRAM,
    icon: FaInstagram,
    text: "nav.instagram",
    auth: null,
    target: "_blank",
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
