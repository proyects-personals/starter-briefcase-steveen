import { motion } from "framer-motion";
import React from "react";
import type { ISectionComponent } from "@domain";

/**
 * SectionComponent
 *
 * @description
 * Componente reutilizable que representa una sección
 * del portfolio con:
 *
 * - título animado
 * - contenido central
 * - separador inferior
 *
 * Permite mantener una estructura consistente
 * entre las diferentes secciones del sitio.
 */
const SectionComponent: React.FC<ISectionComponent> = ({
  title,
  children,
  theme,
}): React.JSX.Element => {
  return (
    <>
      <div className="w-full py-3 md:py-16 bg-transparent text-center">
        <motion.h2
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ color: theme.colors.text }}
        >
          {title}
        </motion.h2>

        {children}
      </div>

      <div className="w-full h-px bg-gray-300 dark:bg-zinc-700 mb-8" />
    </>
  );
};

export default SectionComponent;
