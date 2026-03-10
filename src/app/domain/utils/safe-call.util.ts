import type { StorageResult } from "./storage.util";

/**
 * @description Clase para ejecutar funciones de forma segura y capturar errores
 * @version 1.0.0
 */
export class SafeCallUtil {
  execute<T>(fn: () => T, fallback: T): StorageResult<T> {
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
