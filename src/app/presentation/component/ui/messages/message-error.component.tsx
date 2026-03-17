import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

import { MessagesEnum, type IMessageError } from "@domain";

/**
 * @description
 * Constantes para configuracion de comportamiento y estilos visuales.
 */
const AUTO_HIDE_DURATION_MS = 5000;
const EXIT_ANIMATION_DURATION_SEC = 0.2;
const EXIT_SCALE_VALUE = 0.95;
const INITIAL_Y_OFFSET = -10;
const BACKGROUND_OPACITY_HEX = "10";
const ICON_SIZE_REM = "1.2rem";
const GAP_SIZE_PX = "12px";

/**
 * @description
 * Componente para mostrar mensajes de exito o error con animaciones y auto-ocultado.
 * Utiliza Framer Motion para las transiciones y React Icons para la simbologia.
 *
 * @param props - Propiedades definidas en la interfaz IMessageError.
 * @returns Un componente de alerta animado que desaparece automaticamente.
 */
const MessageErrorComponent: React.FC<IMessageError> = ({
  text,
  type,
  theme,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (text !== "") {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, AUTO_HIDE_DURATION_MS);

      return (): void => clearTimeout(timer);
    }
  }, [text]);

  const isSuccess = type === MessagesEnum.SUCCESS;
  const hasContent = text !== "";

  /**
   * @description
   * Definicion de colores basada en el tipo de mensaje y el tema global.
   */
  const colors = {
    text: isSuccess ? theme.colors.success : theme.colors.error,
    border: isSuccess ? theme.colors.success : theme.colors.error,
    bg: isSuccess
      ? `${theme.colors.success}${BACKGROUND_OPACITY_HEX}`
      : `${theme.colors.error}${BACKGROUND_OPACITY_HEX}`,
  };

  return (
    <AnimatePresence>
      {isVisible && hasContent && (
        <motion.div
          initial={{ opacity: 0, y: INITIAL_Y_OFFSET }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            scale: EXIT_SCALE_VALUE,
            transition: { duration: EXIT_ANIMATION_DURATION_SEC },
          }}
          className="py-2 px-3"
          style={{
            display: "flex",
            alignItems: "center",
            gap: GAP_SIZE_PX,
            marginBottom: "1.5rem",
            borderRadius: theme.borderRadius.md,
            color: colors.text,
            backgroundColor: colors.bg,
            border: `1px solid ${colors.border}`,
            fontSize: theme.font.sizes.sm,
            fontWeight: theme.font.weights.medium,
          }}
        >
          <div
            style={{ fontSize: ICON_SIZE_REM, display: "flex", flexShrink: 0 }}
          >
            {isSuccess ? <FaCheckCircle /> : <FaExclamationCircle />}
          </div>

          <p style={{ margin: 0, lineHeight: "1.4", textAlign: "left" }}>
            {text}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MessageErrorComponent;
