import type { LanguageType } from "../../type";

/**
 * @interface ITranslateContext
 * @description Define el contrato para el contexto de internacionalización (i18n).
 * Proporciona el estado global del idioma y el método para su modificación.
 * @property {LanguageType} language - El identificador del idioma activo actualmente (ej. 'es', 'zh').
 * @property {function} changeTranslate - Método para actualizar el idioma global de la aplicación.
 * @version 1.1.0
 * @author Steveen Cues
 * @example
 * const { language, changeTranslate } = useLanguage();
 * changeTranslate('zh');
 */
export interface ITranslateContext {
  language: LanguageType;
  changeTranslate: (lang: LanguageType) => void;
}

/**
 * @interface ILanguageSwitcher
 * @description Propiedades para el componente visual de selección de idiomas.
 * @property {string} [className] - Cadena opcional de clases CSS (Tailwind) para personalizar el estilo del contenedor.
 */
export interface ILanguageSwitcher {
  className?: string;
}

/**
 * @interface ILanguageOption
 * @description Estructura de datos que representa una opción de idioma en la interfaz de usuario.
 * @property {LanguageType} code - El código técnico del idioma.
 * @property {string} label - El nombre legible del idioma (ej. 'Deutsch').
 * @property {string} flag - El glifo o emoji que representa la bandera del país.
 * @example
 * const option: ILanguageOption = { code: 'pt', label: 'Português', flag: '🇧🇷' };
 */
export interface ILanguageOption {
  code: LanguageType;
  label: string;
  flag: string;
}
