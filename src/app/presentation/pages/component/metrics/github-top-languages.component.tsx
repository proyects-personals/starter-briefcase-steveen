import React from "react";
import { motion } from "framer-motion";

import {
  ANIMATION_DURATION,
  calculatePercentage,
  getMaxLanguageCount,
  LANGUAGE_ANIMATION_DELAY,
  PROGRESS_BAR_HEIGHT,
  type IGitHubTopLanguages,
} from "@domain";

/**
 * @description
 * Componente que renderiza los lenguajes de programación
 * más utilizados en los repositorios de GitHub.
 *
 * Cada lenguaje se muestra con:
 *
 * - nombre del lenguaje
 * - número de repositorios
 * - barra de progreso proporcional
 *
 * La barra se anima utilizando Framer Motion.
 */
const GitHubTopLanguagesComponent: React.FC<IGitHubTopLanguages> = ({
  languages,
  translate,
  theme,
}) => {
  const maxCount = getMaxLanguageCount(languages);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{
        padding: "1.5rem",
        borderRadius: theme.borderRadius.lg,
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadow.md,
        color: theme.colors.text,
      }}
    >
      <h3
        style={{
          marginBottom: "1.25rem",
          fontSize: theme.font.sizes.lg,
          fontWeight: theme.font.weights.bold,
          color: theme.colors.primary,
        }}
      >
        {translate("pages.component.matrics.top_languages")}
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {languages.map(([language, count], index) => {
          const percentage = calculatePercentage(count, maxCount);

          return (
            <div key={language} style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.4rem",
                  fontSize: theme.font.sizes.sm,
                }}
              >
                <span style={{ fontWeight: theme.font.weights.medium }}>
                  {language}
                </span>

                <span style={{ color: theme.colors.textSecondary }}>
                  {count} repos
                </span>
              </div>

              <div
                style={{
                  height: PROGRESS_BAR_HEIGHT,
                  width: "100%",
                  backgroundColor: theme.colors.muted,
                  borderRadius: theme.borderRadius.full,
                  overflow: "hidden",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{
                    duration: ANIMATION_DURATION,
                    delay: index * LANGUAGE_ANIMATION_DELAY,
                    ease: "easeOut",
                  }}
                  style={{
                    height: "100%",
                    background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent})`,
                    borderRadius: theme.borderRadius.full,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default GitHubTopLanguagesComponent;
