import { FaHome } from "react-icons/fa";

/**
 * Configuración de los elementos de navegación del Sidebar administrativo.
 * * @description
 * Define la estructura de los enlaces laterales del panel de administración.
 * Cada objeto representa un acceso directo que incluye una etiqueta de texto (`label`),
 * la ruta de navegación interna (`path`) y un componente de icono proveniente de `react-icons`.
 * * @type {Array<{label: string, path: string, icon: import("react-icons").IconType}>}
 * @version 1.0.0
 * * @example
 * // Ejemplo de renderizado en un componente Sidebar:
 * SIDEBAR_ITEMS.map((item) => (
 * <Link to={item.path}>
 * <item.icon /> {item.label}
 * </Link>
 * ));
 */
export const SIDEBAR_ITEMS = [
  {
    label: "Home",
    path: "/home",
    icon: FaHome,
  },
];
