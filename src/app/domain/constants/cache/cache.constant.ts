/**
 * @description
 * Número de milisegundos en un segundo.
 */
const MILLISECONDS_PER_SECOND = 1000;

/**
 * @description
 * Número de segundos en un minuto.
 */
const SECONDS_PER_MINUTE = 60;

/**
 * @description
 * Número de minutos en una hora.
 */
const MINUTES_PER_HOUR = 60;

/**
 * @description
 * Tiempo de vida de la caché (1 hora).
 */
export const CACHE_TTL_MS =
  MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR;
