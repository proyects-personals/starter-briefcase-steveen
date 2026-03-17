import { motion } from "framer-motion";
import React from "react";

import type { IContactComponent } from "@domain";

/**
 * @description
 * Constantes de diseño para evitar numeros magicos y asegurar consistencia visual.
 */
const ANIMATION_Y_START = 20;
const ANIMATION_DURATION = 0.5;
const DECORATIVE_BAR_WIDTH = "4px";
const BAR_OPACITY = 0.8;
const SEPARATOR_WIDTH = "50px";
const SEPARATOR_HEIGHT = "2px";
const SEPARATOR_MARGIN = "1.5rem 0";
const TEXT_LINE_HEIGHT = "1.8";
const TEXT_MAX_WIDTH = "90%";
const CIRCLE_DECORATION_SIZE = "100px";
const CIRCLE_OFFSET = "-20px";
const CIRCLE_OPACITY_HEX = "05";

/**
 * @description
 * Componente que muestra informacion introductoria sobre el contacto.
 * Incluye acentos visuales de marca, animaciones de entrada y un diseño
 * enfocado en la legibilidad del mensaje de bienvenida.
 *
 * @param props - Propiedades definidas en la interfaz IContactComponent.
 * @returns Una tarjeta informativa estilizada con elementos decorativos.
 */
const ContactInfoCardComponent: React.FC<IContactComponent> = ({
  theme,
  translate,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: ANIMATION_Y_START }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: ANIMATION_DURATION, ease: "easeOut" }}
      style={{
        padding: "2.5rem",
        borderRadius: theme.borderRadius.lg,
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadow.md,
        position: "relative",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: DECORATIVE_BAR_WIDTH,
          height: "100%",
          backgroundColor: theme.colors.primary,
          opacity: BAR_OPACITY,
        }}
      />

      <h2
        style={{
          fontSize: theme.font.sizes["2xl"],
          fontWeight: theme.font.weights.bold,
          color: theme.colors.text,
          margin: 0,
          textAlign: "left",
          lineHeight: 1.2,
        }}
      >
        {translate("contactUs.title")}
      </h2>

      <div
        style={{
          width: SEPARATOR_WIDTH,
          height: SEPARATOR_HEIGHT,
          backgroundColor: theme.colors.primary,
          margin: SEPARATOR_MARGIN,
          borderRadius: SEPARATOR_HEIGHT,
        }}
      />

      <p
        style={{
          color: theme.colors.textSecondary,
          lineHeight: TEXT_LINE_HEIGHT,
          fontSize: theme.font.sizes.base,
          textAlign: "left",
          margin: 0,
          maxWidth: TEXT_MAX_WIDTH,
        }}
      >
        {translate("contactUs.description")}
      </p>
      <div
        style={{
          position: "absolute",
          bottom: CIRCLE_OFFSET,
          right: CIRCLE_OFFSET,
          width: CIRCLE_DECORATION_SIZE,
          height: CIRCLE_DECORATION_SIZE,
          borderRadius: "50%",
          backgroundColor: `${theme.colors.primary}${CIRCLE_OPACITY_HEX}`,
          zIndex: 0,
        }}
      />
    </motion.div>
  );
};

export default ContactInfoCardComponent;
