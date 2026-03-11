import { ParseValueUtil } from "./parse-value.util";
import { SafeCallUtil } from "./safe-call.util";

import type { IStorageResult } from "../interface";

/**
 * Utilidad avanzada para la gestión segura del almacenamiento local (`localStorage`).
 * * @description
 * Esta clase centraliza las operaciones de lectura, escritura y eliminación en `localStorage`,
 * garantizando la seguridad de tipos y el manejo de excepciones.
 * * **Características principales:**
 * - **Herencia:** Utiliza `ParseValueUtil` para convertir strings de disco en tipos de datos complejos.
 * - **Composición:** Delega la ejecución a `SafeCallUtil` para prevenir bloqueos por cuotas de disco o errores de entorno.
 * - **Interfaz Consistente:** Todas las operaciones retornan un `IStorageResult`, facilitando el manejo de errores en la UI.
 * * @extends ParseValueUtil
 * @version 2.1.0
 */
export class StorageUtil extends ParseValueUtil {
  /** * Instancia privada para la ejecución segura de bloques try-catch.
   * @private
   */
  private safeCall = new SafeCallUtil();

  /**
   * Elimina una entrada del almacenamiento de forma segura.
   * * @param {string} key - La clave del ítem a eliminar.
   * @returns {IStorageResult<void>} Resultado de la operación con estado de éxito o error.
   */
  remove(key: string): IStorageResult<void> {
    return this.safeCall.execute(() => {
      localStorage.removeItem(key);
    });
  }

  /**
   * Obtiene y parsea un ítem del almacenamiento.
   * * @template T
   * @param {string} key - La clave a consultar.
   * @param {T} fallback - Valor por defecto y guía de tipo si la clave no existe o es inválida.
   * @returns {IStorageResult<T>} Objeto con el valor tipado y metadatos de éxito.
   * * @example
   * const result = storage.get("user_theme", "light");
   * if (result.success) console.log(result.value); // "light" | "dark"
   */
  get<T>(key: string, fallback: T): IStorageResult<T> {
    return this.safeCall.execute(() => {
      const raw = localStorage.getItem(key);
      return this.parse(raw, fallback);
    }, fallback);
  }

  /**
   * Serializa y guarda un valor en el almacenamiento.
   * * @template T
   * @param {string} key - Clave bajo la cual se guardará el valor.
   * @param {T} value - Valor a persistir (strings se guardan directos, otros tipos vía JSON.stringify).
   * @returns {IStorageResult<void>} Confirmación de la persistencia.
   */
  set<T>(key: string, value: T): IStorageResult<void> {
    return this.safeCall.execute(() => {
      const raw = typeof value === "string" ? value : JSON.stringify(value);
      localStorage.setItem(key, raw);
    });
  }

  /**
   * Verifica la existencia de una clave sin necesidad de parsear su contenido.
   * * @param {string} key - Clave a verificar.
   * @returns {IStorageResult<boolean>} `true` si la clave existe, `false` en caso contrario o error.
   */
  exists(key: string): IStorageResult<boolean> {
    return this.safeCall.execute(
      () => localStorage.getItem(key) !== null,
      false,
    );
  }
}

export const storageUtil = new StorageUtil();
