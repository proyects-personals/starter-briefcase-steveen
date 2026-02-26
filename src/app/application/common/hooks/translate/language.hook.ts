import { useTranslation } from "react-i18next";

import { useTranslateContext } from "./translate.hook";

import type { Language } from "@domain";
import type { TFunction } from "i18next"; // ⚠ import type

/**
 * @description Hook para obtener funciones y valores relacionados con la traducción.
 *              Permite:
 *              - Traducir textos con `t`
 *              - Obtener el idioma actual
 *              - Cambiar el idioma usando `changeTranslate`
 * @version 1.0.0
 * @returns {object} { t, language, changeTranslate }
 * @example
 * const { t, language, changeTranslate } = useLanguage()
 * t('key.path')
 * changeTranslate('en')
 */
export const useLanguage = (): {
  t: TFunction;
  language: Language;
  changeTranslate: (lang: Language) => void;
} => {
  const { t } = useTranslation();
  const { language, changeTranslate } = useTranslateContext();

  return {
    t,
    language,
    changeTranslate,
  };
};
