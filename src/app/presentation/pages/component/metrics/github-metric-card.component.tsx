import { motion } from "framer-motion";

import type { IGitHubMetricCard } from "@domain";
import type { JSX } from "react";

/**
 * @description Componente que renderiza una tarjeta de métrica de GitHub con animación.
 * Cada tarjeta muestra un valor, etiqueta e ícono representativo de una métrica.
 * Incluye animación de entrada escalonada y efecto visual al pasar el cursor.
 *
 * @param {IGitHubMetricCard} props - Propiedades del componente.
 * @property metric - Información de la métrica a mostrar (valor, etiqueta, ícono y color).
 * @property theme - Tema global de la aplicación para estilos dinámicos.
 * @property index - Índice del elemento dentro de la lista, usado para animación escalonada.
 *
 * @returns {JSX.Element} Tarjeta animada con información de métricas de GitHub.
 */
const GitHubMetricCardComponent = ({
  metric,
  theme,
  index,
}: IGitHubMetricCard): JSX.Element => {
  const CARD_INITIAL_Y = 20;
  const CARD_HOVER_Y = -5;
  const CARD_DELAY_STEP = 0.1;
  const CARD_HOVER_DURATION = 0.2;
  const CARD_BACKDROP_BLUR = 10;
  const CARD_HOVER_GLOW_OPACITY = 0.2;

  return (
    <motion.div
      initial={{ y: CARD_INITIAL_Y, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * CARD_DELAY_STEP }}
      whileHover={{
        y: CARD_HOVER_Y,
        transition: { duration: CARD_HOVER_DURATION },
      }}
      className="group relative overflow-hidden p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all"
      style={{
        backgroundColor: theme.colors.backgroundGlass,
        borderColor: theme.colors.borderGlass,
        backdropFilter: `blur(${CARD_BACKDROP_BLUR}px)`,
      }}
    >
      <div
        className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
        style={{
          backgroundColor: metric.color,
          opacity: CARD_HOVER_GLOW_OPACITY,
        }}
      />
      <div
        className="p-3 rounded-xl mb-1 transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${metric.color}20`, color: metric.color }}
      >
        {metric.icon}
      </div>
      <span
        className="text-2xl font-black tracking-tighter"
        style={{ color: theme.colors.text }}
      >
        {metric.value}
      </span>
      <span
        className="text-[10px] uppercase tracking-wider opacity-60 font-bold"
        style={{ color: theme.colors.textSecondary }}
      >
        {metric.label}
      </span>
    </motion.div>
  );
};

export default GitHubMetricCardComponent;
