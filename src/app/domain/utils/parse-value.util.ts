import type { IParseValueUtil } from "./iparse-value.util";

/**
 * Utilidad para el parseo seguro de tipos (Type-Safe Casting) de valores serializados.
 * * @description
 * Esta clase proporciona métodos para convertir strings (comúnmente de `localStorage` o Query Params)
 * a tipos primitivos (`string`, `number`, `boolean`) u objetos complejos mediante `JSON.parse`.
 * Implementa una lógica de validación estricta para evitar errores en tiempo de ejecución sin usar 'any'.
 * * @implements {IParseValueUtil}
 * @version 1.0.0
 */
export class ParseValueUtil implements IParseValueUtil {
  /**
   * Type Guard privado para validar si un valor desconocido coincide con el tipo de un objetivo.
   * * @private
   * @template T
   * @param {unknown} value - El valor a evaluar.
   * @param {T} target - El valor de referencia para comparar el tipo.
   * @returns {value is T} Verdadero si los tipos coinciden.
   */
  private isType<T>(value: unknown, target: T): value is T {
    return typeof value === typeof target;
  }

  /**
   * Ejecuta la lógica de parseo basada en el tipo del valor `fallback`.
   * * @template T
   * @param {string | null} raw - El string a parsear.
   * @param {T} fallback - Valor por defecto y guía de tipo.
   * @returns {T} El resultado del parseo o el fallback en caso de error o nulidad.
   * * @example
   * const util = new ParseValueUtil();
   * const count = util.parse("123", 0); // 123 (number)
   * const isActive = util.parse("true", false); // true (boolean)
   * const user = util.parse(null, { name: "Guest" }); // { name: "Guest" }
   */
  parse<T>(raw: string | null, fallback: T): T {
    if (raw === null) {
      return fallback;
    }

    const type = typeof fallback;

    if (type === "string") {
      const val: unknown = raw;
      if (this.isType(val, fallback)) {
        return val;
      }
    }

    if (type === "number") {
      const num = Number(raw);
      const val: unknown = Number.isNaN(num) ? fallback : num;
      if (this.isType(val, fallback)) {
        return val;
      }
    }

    if (type === "boolean") {
      const boolValue: unknown =
        raw === "true" ? true : raw === "false" ? false : fallback;
      if (this.isType(boolValue, fallback)) {
        return boolValue;
      }
    }

    try {
      const parsed: unknown = JSON.parse(raw);
      if (parsed !== null && this.isType(parsed, fallback)) {
        return parsed;
      }
    } catch {
      return fallback;
    }

    return fallback;
  }
}
