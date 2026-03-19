import { motion } from "framer-motion";
import React from "react";

import { useAnalytics, useLanguage } from "@application";
import { CV_RESOURCES, type IHeroSectionComponent } from "@domain";

/**
 * HeroSectionComponent
 * @description Sección principal del portfolio con descarga de CV dinámica por idioma.
 */
const HeroSectionComponent: React.FC<IHeroSectionComponent> = ({
  theme,
  translate,
}): React.JSX.Element => {
  const { language } = useLanguage();
  const { trackClick } = useAnalytics();

  /**
   * Ejecuta la descarga del CV adaptando el nombre del archivo y el recurso según el idioma.
   * @description
   * Esta función obtiene el recurso dinámicamente desde CV_RESOURCES.
   * Genera un nombre de archivo que incluye el código del idioma actual (ej. "CV_Steveen_Ordoñez_DE.pdf")
   * y realiza la descarga mediante la inserción temporal de un elemento de anclaje en el DOM.
   * @returns {void}
   */
  const handleDownloadCV = (): void => {
    const selectedCV = CV_RESOURCES[language];
    const langSuffix = language.toUpperCase();

    const fileName = `CV_Steveen_Ordoñez_${langSuffix}.pdf`;

    trackClick(`Descargar CV - ${langSuffix}`);

    const link = document.createElement("a");
    link.href = selectedCV;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ color: theme.colors.text }}
      >
        {translate("welcome.title")}
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ color: theme.colors.primary, lineHeight: 1.4 }}
      >
        {translate("welcome.subtitle")}
      </motion.p>

      <motion.p
        className="text-sm sm:text-base md:text-lg text-justify mb-6 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        style={{ color: theme.colors.textSecondary, lineHeight: 1.7 }}
      >
        {translate("welcome.description")}
      </motion.p>

      <motion.button
        type="button"
        onClick={handleDownloadCV}
        className="px-6 py-3 rounded-lg font-medium shadow-md transition-all mb-8"
        style={{
          backgroundColor: theme.colors.primary,
          color: theme.colors.white,
        }}
        whileHover={{
          backgroundColor: theme.colors.primaryHover,
          scale: 1.05,
          boxShadow: `0 8px 20px ${theme.shadow.md}`,
        }}
        whileTap={{ scale: 0.95 }}
      >
        {translate("welcome.buttonDownloadCV")}
      </motion.button>
    </div>
  );
};

export default HeroSectionComponent;
