import { motion, AnimatePresence } from "framer-motion";
import React from "react";

import type { IFieldWrapper } from "@domain";

/**
 * @description
 * Constantes de diseño para asegurar consistencia y evitar valores literales.
 */
const MARGIN_BOTTOM_WRAPPER = "1.5rem";
const LABEL_MARGIN_BOTTOM = "0.5rem";
const ERROR_MARGIN_TOP = "0.4rem";
const TRANSITION_DURATION_SEC = "0.2s";
const ANIMATION_Y_OFFSET = -5;
const FULL_WIDTH = "100%";

/**
 * @description
 * Componente contenedor compartido para campos de formulario.
 * Centraliza la logica de renderizado de etiquetas (labels), indicadores de campos
 * obligatorios y mensajes de error animados con Framer Motion.
 *
 * @param props - Propiedades definidas en la interfaz IFieldWrapper.
 * @returns Un contenedor estructurado con soporte para accesibilidad y validaciones.
 */
const FieldWrapperComponent: React.FC<IFieldWrapper> = ({
  label,
  name,
  required,
  hasError,
  errorMessage,
  theme,
  children,
}) => {
  const showLabel = label !== undefined && label !== "";
  const isInvalid = hasError === true;

  return (
    <div
      style={{
        marginBottom: MARGIN_BOTTOM_WRAPPER,
        textAlign: "left",
        width: FULL_WIDTH,
      }}
    >
      {showLabel && (
        <label
          htmlFor={name}
          style={{
            display: "block",
            marginBottom: LABEL_MARGIN_BOTTOM,
            fontSize: theme.font.sizes.sm,
            fontWeight: theme.font.weights.medium,
            color: isInvalid ? theme.colors.error : theme.colors.text,
            transition: `color ${TRANSITION_DURATION_SEC} ease`,
          }}
        >
          {label}{" "}
          {required === true && (
            <span style={{ color: theme.colors.error }}>*</span>
          )}
        </label>
      )}

      <div style={{ position: "relative" }}>{children}</div>

      <AnimatePresence>
        {isInvalid && (
          <motion.div
            initial={{ opacity: 0, y: ANIMATION_Y_OFFSET }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: ANIMATION_Y_OFFSET }}
            style={{
              color: theme.colors.error,
              fontSize: theme.font.sizes.xs,
              marginTop: ERROR_MARGIN_TOP,
              fontWeight: theme.font.weights.medium,
            }}
          >
            {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FieldWrapperComponent;
