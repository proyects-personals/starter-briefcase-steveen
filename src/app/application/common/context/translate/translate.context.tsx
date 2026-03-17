import { useState, useEffect, type JSX } from "react";

import i18n from "@assets/i18n";
import {
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  TranslateContext,
  type IChildren,
  type LanguageType,
} from "@domain";

/**
 * @component TranslateProvider
 * @description Proveedor de contexto para la gestión de internacionalización (i18n).
 * Se encarga de la detección inicial del idioma, la persistencia en el almacenamiento
 * local y la sincronización con la instancia de i18next.
 * @param {IChildren} props - Propiedades del componente que incluyen los elementos hijos.
 * @returns {JSX.Element} El proveedor de contexto de traducción envolviendo a sus hijos.
 * @version 1.0.4
 * @author Steveen Cues
 */
export const TranslateProvider = ({ children }: IChildren): JSX.Element => {
  const LANGUAGE_CODE_LENGTH = 2;

  /**
   * @method getInitialLanguage
   * @description Determina el idioma de inicio siguiendo este orden de prioridad:
   * 1. Idioma previamente guardado en localStorage.
   * 2. Idioma detectado en la configuración del navegador.
   * 3. Idioma por defecto ('es').
   * @returns {LanguageType} El código del idioma inicial validado.
   */
  const getInitialLanguage = (): LanguageType => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const validatedStored = SUPPORTED_LANGUAGES.find((lang) => lang === stored);
    if (validatedStored) {
      return validatedStored;
    }

    const browserLang = navigator.language.slice(0, LANGUAGE_CODE_LENGTH);
    const matchedLang = SUPPORTED_LANGUAGES.find((l) => l === browserLang);

    return matchedLang ?? "es";
  };

  /**
   * @state {LanguageType} language
   * Estado global que rastrea el idioma activo en la aplicación.
   */
  const [language, setLanguage] = useState<LanguageType>(getInitialLanguage);

  /**
   * @effect
   * @description Sincroniza el cambio de idioma con i18next y actualiza
   * el localStorage cada vez que el estado 'language' se modifica.
   * @returns {void}
   */
  useEffect((): void => {
    void i18n.changeLanguage(language);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  /**
   * @method changeTranslate
   * @description Función expuesta para actualizar el idioma de la aplicación.
   * Realiza una búsqueda segura en SUPPORTED_LANGUAGES antes de actualizar el estado.
   * @param {string} lang - Código de idioma recibido (usualmente desde un evento de UI).
   * @returns {void}
   */
  const changeTranslate = (lang: string): void => {
    const newLang = SUPPORTED_LANGUAGES.find((l) => l === lang);
    if (newLang) {
      setLanguage(newLang);
    }
  };

  return (
    <TranslateContext.Provider value={{ language, changeTranslate }}>
      {children}
    </TranslateContext.Provider>
  );
};
