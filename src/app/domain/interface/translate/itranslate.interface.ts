import type { LanguageType } from "../../type";

/**
 * @description Interfaz para el contexto de traducción.
 * @version 1.0.0
 * @property {Language} language Idioma actual de la aplicación
 * @property {(lang: Language) => void} changeTranslate Función para cambiar el idioma
 * @example
 * const context: ITranslateContext = {
 *   language: 'en',
 *   changeTranslate: (lang) => console.log(lang)
 * }
 */
export interface ITranslateContext {
  language: LanguageType;
  changeTranslate: (lang: LanguageType) => void;
}

export interface ILanguageSwitcher {
  className?: string;
}
