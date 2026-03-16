/**
 * @description Representa una estadística de lenguaje de programación.
 *
 * Se utiliza para almacenar el nombre de un lenguaje y la cantidad
 * de repositorios que lo utilizan.
 *
 * El tipo está definido como una tupla donde:
 *
 * @property [0] - Nombre del lenguaje de programación
 * @property [1] - Número de repositorios que utilizan ese lenguaje
 *
 * @example
 * const languages: LanguageStatType[] = [
 *   ["TypeScript", 12],
 *   ["JavaScript", 8],
 *   ["Python", 5]
 * ];
 */
export type LanguageStatType = [string, number];
