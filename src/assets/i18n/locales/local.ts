import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import de from "./de.json";
import en from "./en.json";
import es from "./es.json";
import it from "./it.json";
import pt from "./pt.json";
import zh from "./zh.json";

/**
 * @description Inicializa i18next con soporte multilingüe (6 idiomas).
 * @version 1.1.0
 * @author Steveen Cues
 */
i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    zh: { translation: zh },
    de: { translation: de },
    it: { translation: it },
    pt: { translation: pt },
  },
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
