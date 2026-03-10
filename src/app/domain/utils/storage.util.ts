import { ParseValueUtil } from "./parse-value.util";
import { SafeCallUtil } from "./safe-call.util";

/**
 * @description Resultado de una operación de storage
 */
export interface StorageResult<T> {
  success: boolean;
  value: T;
  error?: Error;
}

/**
 * @description Clase para interactuar con localStorage de forma segura
 * Hereda la capacidad de parseo de ParseValueUtil
 * @version 2.1.0
 */
export class StorageUtil extends ParseValueUtil {
  private safeCall = new SafeCallUtil();

  remove(key: string): StorageResult<void> {
    return this.safeCall.execute(() => {
      localStorage.removeItem(key);
    }, undefined);
  }

  get<T>(key: string, fallback: T): StorageResult<T> {
    return this.safeCall.execute(() => {
      const raw = localStorage.getItem(key);
      return this.parse(raw, fallback);
    }, fallback);
  }

  set<T>(key: string, value: T): StorageResult<void> {
    return this.safeCall.execute(() => {
      const raw = typeof value === "string" ? value : JSON.stringify(value);
      localStorage.setItem(key, raw);
    }, undefined);
  }

  exists(key: string): StorageResult<boolean> {
    return this.safeCall.execute(
      () => localStorage.getItem(key) !== null,
      false,
    );
  }
}
