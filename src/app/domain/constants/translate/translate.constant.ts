import { createContext } from "react";

import type {
  ILanguageOption,
  ITranslateContext,
  LanguageType,
} from "@/app/domain";

/**
 * @file TranslateContext.ts
 * @description Definición del contexto de internacionalización y constantes de idiomas soportados.
 * @author Steveen Cues
 * @version 1.2.0
 */

/**
 * Contexto de React para la gestión global de traducciones.
 * @description
 * Actúa como el motor de estado para la internacionalización (i18n).
 * Permite que cualquier componente de la aplicación acceda al idioma actual
 * y a la función para conmutar entre las diferentes localizaciones disponibles.
 * @type {React.Context<ITranslateContext | undefined>}
 * @example
 * const { language, changeTranslate } = useContext(TranslateContext);
 * console.log(`Idioma actual: ${language}`);
 */
export const TranslateContext = createContext<ITranslateContext | undefined>(
  undefined,
);

/**
 * Identificadores únicos de los idiomas soportados.
 * @description
 * Array de control que contiene los códigos ISO 639-1 autorizados.
 * Este array es utilizado principalmente por los Type Guards y validadores
 * del Provider para asegurar que no se intente cargar un idioma inexistente.
 * @type {LanguageType[]}
 * @constant
 */
export const SUPPORTED_LANGUAGES: LanguageType[] = [
  "es", // Español
  "en", // Inglés
  "pt", // Portugués
  "zh", // Chino Mandarín
  "de", // Alemán
  "it", // Italiano
];

/**
 * Configuración detallada de los idiomas para la interfaz de usuario.
 * @description
 * Provee la metadata necesaria para renderizar componentes visuales como el
 * `LanguageSwitcher`. Cada objeto incluye el código técnico, la etiqueta
 * legible por humanos y el glifo (emoji) de la bandera correspondiente.
 * @type {ILanguageOption[]}
 * @constant
 * @example
 * // Uso en un mapeo de UI:
 * languages.map(({ code, label, flag }) => (
 * <button key={code}>{flag} {label}</button>
 * ));
 */
export const languages: ILanguageOption[] = [
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
];
