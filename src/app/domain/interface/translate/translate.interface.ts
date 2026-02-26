import type { Language } from "../../type";
import type { ReactNode } from "react";

/**
 * @description Interfaz para el contexto de traducción.
 * @version 1.0.0
 * @property {Language} language Idioma actual de la aplicación
 * @property {(lang: Language) => void} changeTranslate Función para cambiar el idioma
 * @example
 * const context: TranslateContextType = {
 *   language: 'en',
 *   changeTranslate: (lang) => console.log(lang)
 * }
 */
export interface TranslateContextType {
  language: Language;
  changeTranslate: (lang: Language) => void;
}

/**
 * @description Props esperadas por el TranslateProvider.
 * @version 1.0.0
 * @property {ReactNode} children Elementos hijos que recibirán el contexto
 * @example
 * <TranslateProvider>
 *   <App />
 * </TranslateProvider>
 */
export interface TranslateProviderProps {
  children: ReactNode;
}
