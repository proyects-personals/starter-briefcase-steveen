import { useContext } from "react";

import { TranslateContext, type ITranslateContext } from "@domain";

/**
 * @description Hook para acceder al contexto de traducción.
 *              Lanza un error si se usa fuera del TranslateProvider.
 * @version 1.0.0
 * @returns {ITranslateContext} Objeto con:
 *  - language: Idioma actual
 *  - changeTranslate: Función para cambiar el idioma
 * @throws {Error} Si se usa fuera de TranslateProvider
 * @example
 * const { language, changeTranslate } = useTranslateContext()
 * changeTranslate('en')
 */
export const useTranslateContext = (): ITranslateContext => {
  const context = useContext(TranslateContext);
  if (!context) {
    throw new Error(
      "useTranslateContext must be used within TranslateProvider",
    );
  }
  return context;
};
