import { createContext } from "react";

import {
  type ILanguageOption,
  type ITranslateContext,
  type LanguageType,
} from "@/app/domain";
import { TranslateEnum } from "@/app/domain/enums";
import {
  CVSTEVEENORDOLEZDE,
  CVSTEVEENORDOLEZEN,
  CVSTEVEENORDOLEZES,
  CVSTEVEENORDOLEZIT,
  CVSTEVEENORDOLEZPT,
  CVSTEVEENORDOLEZZH,
} from "@/assets";

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
 */
export const TranslateContext = createContext<ITranslateContext | undefined>(
  undefined,
);

/**
 * Identificadores únicos de los idiomas soportados.
 * @description
 * Array de control que contiene los códigos ISO 639-1 autorizados.
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
 */
export const languages: ILanguageOption[] = [
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
];

/**
 * Mapa de configuración que asocia cada idioma con su respectivo recurso de CV.
 * @description
 * Se utilizan las claves del Enum de forma explícita. Si persiste el error de 'undefined'
 * al leer 'ES', sustituye [TranslateEnum.ES] por 'es' directamente.
 */
export const CV_RESOURCES: Record<TranslateEnum, string> = {
  [TranslateEnum.ES]: CVSTEVEENORDOLEZES,
  [TranslateEnum.EN]: CVSTEVEENORDOLEZEN,
  [TranslateEnum.DE]: CVSTEVEENORDOLEZDE,
  [TranslateEnum.IT]: CVSTEVEENORDOLEZIT,
  [TranslateEnum.PT]: CVSTEVEENORDOLEZPT,
  [TranslateEnum.ZH]: CVSTEVEENORDOLEZZH,
};
