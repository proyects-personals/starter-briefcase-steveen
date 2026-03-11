/**
 * Interfaz que define el contrato para la utilidad de parseo de valores.
 * @interface IParseValueUtil
 * @version 1.0.0
 */
export abstract class IParseValueUtil {
  /**
   * Intenta convertir un valor string a un tipo específico, retornando un valor por defecto si falla.
   * @template T
   * @param {string | null} raw - El valor de origen en formato string o null.
   * @param {T} fallback - El valor de respaldo que también determina el tipo esperado.
   * @returns {T} El valor parseado con el tipo correcto o el fallback.
   */
  abstract parse<T>(raw: string | null, fallback: T): T;
}
