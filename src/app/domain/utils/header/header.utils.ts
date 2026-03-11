/**
 * Clase de utilidad para operaciones relacionadas con el formato de nombres y perfiles.
 * * @description
 * Proporciona métodos estáticos para procesar cadenas de texto relacionadas con la identidad
 * del usuario, facilitando la creación de elementos visuales como Avatars.
 * * @version 1.0.0
 */
export class NameUtil {
  /**
   * Genera las iniciales a partir de un nombre y un apellido.
   * * @description
   * Toma la primera letra del nombre y la primera del apellido, las concatena
   * y las convierte a mayúsculas. Utiliza encadenamiento opcional y limpieza
   * de espacios para garantizar la robustez del resultado.
   * * @param {string} [nombre] - El primer nombre del usuario.
   * @param {string} [apellido] - El apellido del usuario.
   * * @returns {string} Las iniciales en mayúsculas (ej. "JD"). Si faltan ambos, devuelve un string vacío.
   * * @version 1.0.0
   * * @example
   * NameUtil.getInitials("juan", "perez"); // "JP"
   * NameUtil.getInitials("  maria "); // "M"
   * NameUtil.getInitials(); // ""
   */
  public static getInitials(nombre?: string, apellido?: string): string {
    const firstInitial = nombre?.trim()[0] ?? "";
    const lastInitial = apellido?.trim()[0] ?? "";

    return `${firstInitial}${lastInitial}`.toUpperCase();
  }
}

export const nameUtil = new NameUtil();
