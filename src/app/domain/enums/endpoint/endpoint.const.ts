/**
 * @enum {string}
 * @description Centralización de los puntos de acceso (endpoints) para servicios externos y APIs propias.
 * Facilita la gestión de URLs base para peticiones HTTP y evita el uso de "Magic Strings" en el código.
 * @version 1.0.0
 */
export enum endpointEnum {
  /** * @description URL base para realizar peticiones a la API REST de GitHub (v3).
   * Se utiliza para consultar perfiles, repositorios y eventos públicos.
   * @see https://docs.github.com/en/rest
   */
  GITHUB_API_BASE_URL = "https://api.github.com",
}
