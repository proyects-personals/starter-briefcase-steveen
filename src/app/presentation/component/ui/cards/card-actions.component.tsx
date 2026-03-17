import { motion } from "framer-motion";
import React from "react";

import type { CardActionsProps } from "@domain";

/**
 * Componente que renderiza botones de acción de un proyecto (Visitar y Ver Código).
 * Solo se muestran los botones si las URLs están definidas y no están vacías.
 *
 * @param {CardActionsProps} props - Props del componente.
 * @returns {JSX.Element | null} Elemento JSX con los botones o null si no hay links.
 */
const CardActionsComponent: React.FC<CardActionsProps> = ({
  visitLink,
  codeLink,
  theme,
  translate,
}) => {
  const hasVisitLink = typeof visitLink === "string" && visitLink.trim() !== "";
  const hasCodeLink = typeof codeLink === "string" && codeLink.trim() !== "";

  if (!hasVisitLink && !hasCodeLink) {
    return null;
  }

  return (
    <div className="flex gap-2 mt-3">
      {hasVisitLink && (
        <motion.a
          href={visitLink}
          target="_blank"
          rel="noopener noreferrer"
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
