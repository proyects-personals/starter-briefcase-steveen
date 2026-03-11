import { useTranslation } from "react-i18next";

import { useTranslateContext } from "./translate.hook";

import type { LanguageType } from "@domain";
import type { TFunction } from "i18next";

/**
 * @description Hook para obtener funciones y valores relacionados con la traducción.
 *              Permite:
 *              - Traducir textos con `t`
 *              - Obtener el idioma actual
 *              - Cambiar el idioma usando `changeTranslate`
 * @version 1.0.0
 * @returns {object} { t, LanguageType, changeTranslate }
 * @example
 * const { t, LanguageType, changeTranslate } = useLanguage()
 * t('key.path')
 * changeTranslate('en')
 */
export const useLanguage = (): {
  t: TFunction;
  language: LanguageType;
  changeTranslate: (lang: LanguageType) => void;
} => {
  const { t } = useTranslation();
  const { language, changeTranslate } = useTranslateContext();

  return {
    t,
    language,
    changeTranslate,
  };
};
