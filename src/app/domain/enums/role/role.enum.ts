/**
 * Enumeración de los roles de usuario permitidos en el sistema.
 * * @description
 * Define las constantes para los niveles de acceso y permisos dentro de la aplicación.
 * El uso de un `enum` asegura que no haya errores tipográficos al validar permisos
 * en componentes de rutas protegidas o en la lógica del backend.
 * * @enum {string}
 * @version 1.0.0
 * * @example
 * if (user.role === RoleEnum.ADMIN) {
 * // Mostrar panel de administración
 * }
 */
export enum RoleEnum {
  ADMIN = "ADMIN",
}
