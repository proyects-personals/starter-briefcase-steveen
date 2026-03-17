/**
 * Definición de los idiomas soportados por la aplicación.
 * * @description
 * Tipo de unión (Union Type) que restringe las opciones de idioma a códigos
 * estándares de 2 caracteres (ISO 639-1).
 * @typedef {("es" | "en" | "pt" | "zh" | "de" | "it")} LanguageType
 * @version 1.1.0
 * @author Steveen Cues
 * @example
 * const currentLang: LanguageType = "zh"; // Correcto (Chino)
 * const currentLang: LanguageType = "fr"; // Error: 'fr' no está permitido aún
 */
export type LanguageType = "es" | "en" | "pt" | "zh" | "de" | "it";
