/**
 * Clase de utilidades para manejo de strings, como validación y truncado.
 * Proporciona métodos estáticos para verificar si un string tiene valor y para truncar strings largos.
 * Utilizada en componentes como HeaderLogosComponent para validar props de tipo string.
 * @type {StringUtils}
 * @example
 * StringUtils.hasValue("Hello");
 */
export class StringUtils {
  /**
   * Verifica si un string es válido (no nulo, no undefined, no vacío, no solo espacios)
   * @param value string a verificar
   * @returns true si tiene valor, false si es null/undefined/empty
   */
  static hasValue(value?: string | null): value is string {
    return typeof value === "string" && value.trim() !== "";
  }

  /**
   * Devuelve el string recortado a cierta longitud, agregando "..." si se corta
   * @param value string original
   * @param maxLength longitud máxima
   */
  static truncate(value: string, maxLength: number): string {
    if (!this.hasValue(value)) {
      return "";
    }
    return value.length > maxLength ? value.slice(0, maxLength) + "..." : value;
  }
}
