/**
 * Clase de utilidad para la validación y protección de integridad de datos.
 * * @description
 * Contiene métodos para asegurar que los valores manejados por la aplicación
 * cumplan con criterios mínimos de existencia y validez lógica.
 * * @version 1.0.0
 */
export class ValidationUtil {
  /**
   * Garantiza la obtención de un valor válido, aplicando un respaldo (fallback) si es necesario.
   * * @description
   * Evalúa si un valor es `undefined` o si cumple con una condición lógica
   * personalizada mediante un `validator`. Es útil para limpiar datos de entrada
   * o asegurar estados consistentes.
   * * @template T - El tipo de dato del valor y del respaldo.
   * * @param {T | undefined} value - El valor de entrada que se desea validar.
   * @param {T} defaultValue - El valor que se retornará si el original es `undefined` o inválido.
   * @param {(v: T) => boolean} [validator] - Función opcional que debe retornar `true` para considerar al valor como válido.
   * * @returns {T} El valor original si es válido, de lo contrario, el `defaultValue`.
   * * @version 1.0.0
   * * @example
   * ValidationUtil.safeValue(undefined, "Invitado"); // "Invitado"
   * ValidationUtil.safeValue(150, 10, (v) => v < 100); // 10
   */
  public safeValue<T>(
    value: T | undefined,
    defaultValue: T,
    validator?: (v: T) => boolean,
  ): T {
    if (value === undefined) {
      return defaultValue;
    }

    if (validator && !validator(value)) {
      return defaultValue;
    }

    return value;
  }
}

export const validationUtil = new ValidationUtil();
