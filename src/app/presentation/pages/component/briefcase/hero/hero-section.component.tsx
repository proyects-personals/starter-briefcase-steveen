import { motion } from "framer-motion";
import React from "react";
import type { IHeroSectionComponent } from "@domain";

/**
 * HeroSectionComponent
 *
 * @description
 * Sección principal del portfolio que muestra:
 *
 * - título principal
 * - subtítulo
 * - descripción
 * - botón de acción (descargar CV)
 *
 * Incluye animaciones de entrada utilizando Framer Motion
 * para mejorar la experiencia visual del usuario.
 */
const HeroSectionComponent: React.FC<IHeroSectionComponent> = ({
  theme,
  translate,
}): React.JSX.Element => {
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
        style={{
          color: theme.colors.textSecondary,
          lineHeight: 1.7,
        }}
      >
        {translate("welcome.description")}
      </motion.p>

      <motion.button
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
