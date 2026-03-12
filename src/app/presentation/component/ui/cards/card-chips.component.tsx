import { motion } from "framer-motion";
import { type JSX } from "react";

import type { ICardChips } from "@domain";

/** Tiempo base de retraso para la animación de cada chip */
const CHIP_ANIMATION_DELAY = 0.03;

/** Duración de la animación de aparición del chip */
const CHIP_ANIMATION_DURATION = 0.25;

/**
 * Componente que renderiza una lista de chips animados.
 * Cada chip aparece con una animación escalonada para mejorar la percepción visual.
 *
 * @param {ICardChips} props - Propiedades del componente.
 * @param {string[]} props.chips - Lista de textos que se mostrarán como chips.
 * @param {IAppTheme} props.theme - Tema de la aplicación usado para estilos dinámicos.
 * @returns {JSX.Element} Contenedor con los chips animados.
 */
const CardChipsComponent = ({ chips, theme }: ICardChips): JSX.Element => (
  <div className="flex flex-wrap gap-1 mt-2">
    {chips.map((chip, index) => (
      <motion.span
        key={chip}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: CHIP_ANIMATION_DELAY * index,
          duration: CHIP_ANIMATION_DURATION,
        }}
        style={{
          backgroundColor: theme.colors.primary,
          color: theme.colors.white,
          borderRadius: theme.borderRadius.full,
        }}
        className="px-2 py-0.5 text-[0.65rem] sm:text-xs font-medium"
      >
        {chip}
      </motion.span>
    ))}
  </div>
);

export default CardChipsComponent;
