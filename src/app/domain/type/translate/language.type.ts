/**
 * Definición de los idiomas soportados por la aplicación.
 * * @description
 * Tipo de unión (Union Type) que restringe las opciones de idioma a códigos
 * estándares de 2 caracteres (ISO 639-1).
 * * @typedef {("es" | "en" | "pt")} LanguageType
 * @version 1.0.0
 * * @example
 * const currentLang: LanguageType = "es"; // Correcto
 * const currentLang: LanguageType = "fr"; // Error: 'fr' no está permitido
 */
export type LanguageType = "es" | "en" | "pt";
