import { motion } from "framer-motion";
import React from "react";

import {
  CARD_GAP,
  CARD_PADDING,
  HOVER_ANIMATION_DURATION,
  HOVER_OFFSET_Y,
  INDICATOR_HEIGHT,
  INDICATOR_WIDTH,
  type IStatCard,
} from "@domain";

/**
 * @description
 * Tarjeta utilizada para mostrar una métrica individual
 * dentro del panel de estadísticas.
 *
 * Ejemplos de métricas:
 * - repositorios
 * - estrellas
 * - issues
 * - commits
 *
 * El componente incluye animaciones con Framer Motion
 * y estilos basados en el tema de la aplicación.
 */
const StartCardComponent: React.FC<IStatCard> = ({ label, value, theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: HOVER_OFFSET_Y,
        transition: { duration: HOVER_ANIMATION_DURATION },
        boxShadow: theme.shadow.lg,
      }}
      style={{
        padding: CARD_PADDING,
        borderRadius: theme.borderRadius.lg,
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadow.sm,
        display: "flex",
        flexDirection: "column",
        gap: CARD_GAP,
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: theme.font.sizes.sm,
          fontWeight: theme.font.weights.medium,
          color: theme.colors.textSecondary,
          textTransform: "uppercase",
          letterSpacing: "0.025em",
        }}
      >
        {label}
      </h3>

      <p
        style={{
          margin: 0,
          fontSize: theme.font.sizes["2xl"],
          fontWeight: theme.font.weights.bold,
          color: theme.colors.text,
        }}
      >
        {value}
      </p>

      <div
        style={{
          height: INDICATOR_HEIGHT,
          width: INDICATOR_WIDTH,
          borderRadius: theme.borderRadius.full,
          backgroundColor: theme.colors.primary,
        }}
      />
    </motion.div>
  );
};

export default StartCardComponent;
