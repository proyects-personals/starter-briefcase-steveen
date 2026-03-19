import { motion } from "framer-motion";
import React from "react";

import { useAnalytics } from "@/app";

import type { ICardActions } from "@domain";

/**
 * Componente que renderiza botones de acción de un proyecto (Visitar y Ver Código).
 * Solo se muestran los botones si las URLs están definidas y no están vacías.
 *
 * @param {CardActionsProps} props - Props del componente.
 * @returns {JSX.Element | null} Elemento JSX con los botones o null si no hay links.
 */
const CardActionsComponent: React.FC<ICardActions> = ({
  visitLink,
  codeLink,
  theme,
  translate,
  name,
}) => {
  const { event } = useAnalytics();

  const hasVisitLink = typeof visitLink === "string" && visitLink.trim() !== "";
  const hasCodeLink = typeof codeLink === "string" && codeLink.trim() !== "";

  if (!hasVisitLink && !hasCodeLink) {
    return null;
  }

  /**
   * @function handleVisit
   * @description
   * Registra un evento de analítica cuando el usuario accede a la demo
   * del proyecto (enlace de producción).
   *
   * @category Analytics
   * @returns {void}
   * @example
   * // Evento enviado a analytics:
   * // "Proyecto" → "Demo - E-commerce App"
   */
  const handleVisit = (): void => {
    event("Proyecto", `Demo - ${name}`);
  };

  /**
   * @function handleCode
   * @description
   * Registra un evento de analítica cuando el usuario accede al
   * repositorio de código del proyecto.
   *
   * @category Analytics
   * @returns {void}
   * @example
   * // Evento enviado a analytics:
   * // "Proyecto" → "Code - Chat AI"
   */
  const handleCode = (): void => {
    event("Proyecto", `Code - ${name}`);
  };

  return (
    <div className="flex gap-2 mt-3">
      {hasVisitLink && (
        <motion.a
          href={visitLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleVisit}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            backgroundColor: theme.colors.primary,
            color: theme.colors.white,
            borderRadius: theme.borderRadius.md,
          }}
          className="px-3 py-1 text-sm font-medium text-center flex-1"
        >
          {translate("components.ui.card.card-action.visit")}
        </motion.a>
      )}

      {hasCodeLink && (
        <motion.a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCode}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            backgroundColor: theme.colors.secondary,
            color: theme.colors.white,
            borderRadius: theme.borderRadius.md,
          }}
          className="px-3 py-1 text-sm font-medium text-center flex-1"
        >
          {translate("components.ui.card.card-action.view_code")}
        </motion.a>
      )}
    </div>
  );
};

export default CardActionsComponent;
