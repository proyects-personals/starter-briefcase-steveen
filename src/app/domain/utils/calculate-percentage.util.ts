/**
 * Representa el valor base de porcentaje (100%).
 */
const PERCENTAGE_BASE = 100;

/**
 * @description
 * Calcula el porcentaje relativo de un lenguaje respecto
 * al lenguaje con más repositorios.
 */
export const calculatePercentage = (
  count: number,
  maxCount: number,
): number => {
  if (maxCount === 0) return 0;

  return (count / maxCount) * PERCENTAGE_BASE;
};
