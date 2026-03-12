import { motion } from "framer-motion";
import React, { useMemo, type JSX } from "react";

import type { IAnimatedBackground } from "@domain";

/**
 * Componente de fondo animado con círculos flotantes.
 *
 * Genera círculos animados con opacidad variable dentro de un contenedor.
 * Integra los colores del theme de la aplicación y permite ajustar tamaño,
 * cantidad y opacidad de los círculos.
 *
 * @component
 * @param {AnimatedBackgroundProps} props Props del componente.
 * @returns {JSX.Element} Fondo animado con círculos flotantes.
 */
const AnimatedBackgroundComponent: React.FC<IAnimatedBackground> = ({
  width = "100%",
  height = "100%",
  opacity = 0.5,
  circleCount = 50,
  theme,
}): JSX.Element => {
  const MIN_SIZE = 2;
  const MAX_SIZE_VARIATION = 3;
  const MIN_DURATION = 1;
  const MAX_DURATION_VARIATION = 2;
  const MAX_PERCENT = 100;

  /**
   * @description Genera un array de círculos con propiedades aleatorias para animación.
   *
   * Cada círculo tiene un tamaño, posición, duración de animación y color basados
   * en el tema de la aplicación. La cantidad de círculos se determina por la
   *
   * @returns {Array} Array de objetos representando cada círculo con sus propiedades.
   */
  const circles = useMemo(() => {
    return Array.from({ length: circleCount }).map((_, i) => {
      const size = Math.random() * MAX_SIZE_VARIATION + MIN_SIZE;
      const top = `${Math.random() * MAX_PERCENT}%`;
      const left = `${Math.random() * MAX_PERCENT}%`;
      const duration = Math.random() * MAX_DURATION_VARIATION + MIN_DURATION;
      const circleColor = theme.colors.primary;

      return { key: i, size, top, left, duration, circleColor };
    });
  }, [theme.colors.primary, circleCount]);

  return (
    <div
      className="absolute overflow-hidden pointer-events-none"
      style={{ width, height }}
    >
      {circles.map(({ key, size, top, left, duration, circleColor }) => (
        <motion.div
          key={key}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            top,
            left,
            backgroundColor: circleColor,
            opacity,
          }}
          animate={{ opacity: [0, opacity, 0] }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackgroundComponent;
