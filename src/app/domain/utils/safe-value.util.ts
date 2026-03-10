/**
 * @description Devuelve un valor seguro, usando un valor por defecto si es inválido
 * @version 1.0.0
 */
export const safeValue = <T>(
  value: T | undefined,
  defaultValue: T,
  validator?: (v: T) => boolean,
): T => {
  if (value === undefined) {
    return defaultValue;
  }
  if (validator && !validator(value)) {
    return defaultValue;
  }
  return value;
};
