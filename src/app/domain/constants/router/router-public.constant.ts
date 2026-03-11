import { APP_ROUTES } from "./router.constant";

/**
 * Lista de rutas públicas permitidas en la aplicación.
 * * @description
 * Define un array de strings que contiene los paths de las vistas que no requieren
 * autenticación previa.
 * * @type {string[]}
 * @version 1.0.0
 * * @example
 * if (PUBLIC_ROUTES.includes(location.pathname)) {
 * // Permitir acceso sin token
 * }
 */
export const PUBLIC_ROUTES = [
  APP_ROUTES.LOGIN,
  APP_ROUTES.REGISTER,
  APP_ROUTES.WELCOME,
];
