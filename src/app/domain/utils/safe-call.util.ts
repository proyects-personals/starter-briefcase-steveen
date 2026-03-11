import type { IStorageResult } from "../interface";

/**
 * Utilidad para la ejecución segura de funciones con manejo de errores integrado.
 * * @description
 * Proporciona un mecanismo para envolver llamadas a funciones que podrían fallar (operaciones de I/O,
 * parseo de datos, etc.) en un bloque try-catch.
 * * @version 1.0.0
 */
export class SafeCallUtil {
  /**
   * Ejecuta una función síncrona y captura cualquier excepción que ocurra.
   * * @template T - El tipo de dato esperado como resultado de la función y el fallback.
   * * @param {() => T} fn - La función o callback que se desea ejecutar de forma segura.
   * @param {T} fallback - El valor que se retornará en caso de que la ejecución de `fn` falle.
   * * @returns {IStorageResult<T>} Un objeto que contiene:
   * - `success`: boolean indicando el estado de la operación.
   * - `value`: El resultado de `fn` o el `fallback`.
   * - `error`: (Opcional) La instancia de Error capturada, normalizada si es necesario.
   * * @example
   * const safeCall = new SafeCallUtil();
   * const result = safeCall.execute(() => JSON.parse("{invalid}"), {});
   * * if (!result.success) {
   * console.error("Error capturado:", result.error?.message);
   * }
   */
  execute<T>(fn: () => T, fallback: T): IStorageResult<T> {
    try {
      const res = fn();
      return { success: true, value: res };
    } catch (err) {
      return {
        success: false,
        value: fallback,
        error: err instanceof Error ? err : new Error(String(err)),
      };
    }
  }
}
