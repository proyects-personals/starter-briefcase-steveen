/**
 * @description Representa una entrada almacenada en caché.
 *
 * Se utiliza para guardar datos junto con el momento exacto
 * en que fueron almacenados, permitiendo validar si la caché
 * sigue siendo válida según un tiempo de expiración (TTL).
 *
 * @template T - Tipo de dato almacenado en la caché
 *
 * @property timestamp - Marca de tiempo en milisegundos (Date.now())
 * que indica cuándo se guardó la información en caché.
 *
 * @property data - Información almacenada en la caché.
 */
export interface ICacheEntry<T> {
  timestamp: number;
  data: T;
}
