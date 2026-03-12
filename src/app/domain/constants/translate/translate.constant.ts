import { createContext } from "react";

import type { ITranslateContext } from "../../interface";
import type { LanguageType } from "../../type";

/**
 * Contexto de React para la internacionalización (i18n) y gestión de traducciones.
 * * @description
 * Proporciona el estado del idioma actual y las funciones de traducción necesarias
 * para localizar la interfaz de usuario.
 * * @type {React.Context<ITranslateContext | undefined>}
 * @version 1.0.0
 * * @example
 * const { t, changeLanguage } = useContext(TranslateContext);
 * <p>{t('welcome_message')}</p>
 */
export const TranslateContext = createContext<ITranslateContext | undefined>(
  undefined,
);

/**
 * Lista de idiomas soportados por el sistema de traducción.
 * * @description
 * Array que contiene las claves de los idiomas disponibles para la aplicación.
 * Se basa en el tipo `LanguageType` para asegurar que solo se utilicen códigos
 * de idioma válidos (ISO 639-1).
 * * @type {LanguageType[]}
 * @version 1.0.0
 * * @example
 * // Utilizado para renderizar un selector de idiomas:
 * SUPPORTED_LANGUAGES.map(lang => <button onClick={() => setLang(lang)}>{lang}</button>)
 */
export const SUPPORTED_LANGUAGES: LanguageType[] = ["es", "en"];
