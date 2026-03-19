import { motion } from "framer-motion";
import React, { type JSX } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { useAnalytics } from "@/app";

import type { IContactItem } from "@domain";

/**
 * @description
 * Constantes para configuracion visual y comportamiento de animaciones.
 */
const HOVER_X_OFFSET = 5;
const ICON_CONTAINER_SIZE = "40px";
const ICON_FONT_SIZE = "1.2rem";
const EXTERNAL_ICON_SIZE = "0.8rem";
const EXTERNAL_ICON_OPACITY = 0.5;
const LETTER_SPACING = "0.5px";
const HOVER_BG_OPACITY = "10";
const ICON_BG_OPACITY = "15";
const TRANSITION_SPEED = "0.2s";

/**
 * @description
 * Componente interactivo para mostrar informacion de contacto.
 * Soporta enlaces externos con efectos de desplazamiento y cambio de color al pasar el cursor.
 * Incluye tracking de eventos para analítica.
 *
 * @param props - Propiedades definidas en la interfaz IContactItem.
 * @returns Un elemento de enlace animado con icono, etiqueta y valor descriptivo.
 */
const ContactItemComponent = ({
  icon: Icon,
  label,
  value,
  href,
  theme,
}: IContactItem): JSX.Element => {
  const { event } = useAnalytics();

  const hasValidHref = typeof href === "string" && href.trim() !== "";

  /**
   * Tracking: click en item de contacto
   *
   * @description
   * Registra la interacción del usuario con un elemento de contacto.
   * Si no existe un enlace válido, previene la navegación para evitar errores.
   *
   * @param {React.MouseEvent<HTMLAnchorElement>} e - Evento del click
   */
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (!hasValidHref) {
      e.preventDefault();
      return;
    }

    event("Contacto", `Click - ${label}`);
  };

  return (
    <motion.a
      href={hasValidHref ? href : undefined}
      target={hasValidHref ? "_blank" : undefined}
      rel="noopener noreferrer"
      onClick={handleClick}
      whileHover={{
        x: HOVER_X_OFFSET,
        backgroundColor: `${theme.colors.primary}${HOVER_BG_OPACITY}`,
      }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "0.75rem",
        borderRadius: theme.borderRadius.md,
        textDecoration: "none",
        transition: `background-color ${TRANSITION_SPEED} ease`,
        cursor: hasValidHref ? "pointer" : "default",
      }}
    >
      <div
        style={{
          width: ICON_CONTAINER_SIZE,
          height: ICON_CONTAINER_SIZE,
          borderRadius: "50%",
          backgroundColor: `${theme.colors.primary}${ICON_BG_OPACITY}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: theme.colors.primary,
          fontSize: ICON_FONT_SIZE,
          flexShrink: 0,
        }}
      >
        <Icon />
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <span
          style={{
            fontSize: theme.font.sizes.xs,
            fontWeight: theme.font.weights.bold,
            color: theme.colors.primary,
            textTransform: "uppercase",
            letterSpacing: LETTER_SPACING,
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontSize: theme.font.sizes.base,
            color: theme.colors.text,
            fontWeight: theme.font.weights.medium,
            wordBreak: "break-all",
          }}
        >
          {value}
        </span>
      </div>

      {hasValidHref && (
        <FaExternalLinkAlt
          style={{
            marginLeft: "auto",
            fontSize: EXTERNAL_ICON_SIZE,
            color: theme.colors.textSecondary,
            opacity: EXTERNAL_ICON_OPACITY,
          }}
        />
      )}
    </motion.a>
  );
};

export default ContactItemComponent;
