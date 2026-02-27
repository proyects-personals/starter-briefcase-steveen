import { useState, useEffect, type JSX } from "react";

import i18n from "@assets/i18n";
import {
  SUPPORTED_LANGUAGES,
  TranslateContext,
  type Language,
  type TranslateProviderProps,
} from "@domain";

/**
 * @description Proveedor de contexto que permite cambiar y obtener el idioma actual de la aplicación.
 *              Sincroniza con i18next y guarda la preferencia en localStorage.
 * @version 1.0.1
 * @author Steveen Cues
 */
export const TranslateProvider = ({
  children,
}: TranslateProviderProps): JSX.Element => {
  const LANGUAGE_CODE_LENGTH = 2;

  /**
   * @description Type guard que verifica si una cadena es un idioma soportado.
   * @param {string} lang
   * @returns {lang is Language}
   */
  function isLanguage(lang: string): lang is Language {
    return SUPPORTED_LANGUAGES.some((supported) => supported === lang);
  }

  /**
   * @description Obtiene el idioma inicial de la aplicación.
   *              1. Revisa localStorage.
   *              2. Detecta el idioma del navegador.
   *              3. Si no está soportado, devuelve 'es' por defecto.
   * @returns {Language} Idioma inicial
   */
  const getInitialLanguage = (): Language => {
    const stored = localStorage.getItem("app_language");
    if (stored !== null && isLanguage(stored)) {
      return stored;
    }

    const browserLang = navigator.language.slice(0, LANGUAGE_CODE_LENGTH);
    if (isLanguage(browserLang)) {
      return browserLang;
    }

    return "es";
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("app_language", language);
  }, [language]);

  /**
   * @description Cambia el idioma de la aplicación de manera segura.
   *              Solo permite idiomas soportados.
   * @param {string} lang Idioma a cambiar
   */
  const changeTranslate = (lang: string): void => {
    if (!isLanguage(lang)) {
      return;
    }
    setLanguage(lang);
  };

  return (
    <TranslateContext.Provider value={{ language, changeTranslate }}>
      {children}
    </TranslateContext.Provider>
  );
};
