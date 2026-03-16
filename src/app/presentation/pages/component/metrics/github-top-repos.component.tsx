import React from "react";
import { motion } from "framer-motion";

import { REPO_ANIMATION_DELAY, type IGitHubTopRepos } from "@domain";

/**
 * GitHubTopReposComponent
 *
 * @description
 * Componente que muestra los repositorios más destacados
 * de un usuario u organización de GitHub.
 *
 * Cada repositorio incluye:
 * - Nombre del repositorio
 * - Número de estrellas
 * - Animación de entrada progresiva
 * - Animación hover interactiva
 *
 * El diseño utiliza un estilo tipo "glassmorphism"
 * con blur y transparencias para mejorar la estética
 * del dashboard.
 *
 * @component
 *
 * @param repos
 * Lista de repositorios ordenados por relevancia o estrellas.
 *
 * @param translate
 * Función de traducción utilizada para internacionalización.
 *
 * @param theme
 * Tema visual de la aplicación que contiene colores,
 * tipografías, sombras y radios de borde.
 *
 * @returns React component
 */
const GitHubTopReposComponent: React.FC<IGitHubTopRepos> = ({
  repos,
  translate,
  theme,
}) => {
  return (
    <div
      style={{
        padding: "1.5rem",
        borderRadius: theme.borderRadius.lg,
        backgroundColor: theme.colors.backgroundGlass,
        backdropFilter: "blur(10px)",
        border: `1px solid ${theme.colors.borderGlass}`,
        boxShadow: theme.shadow.lg,
      }}
    >
      <h3
        style={{
          marginBottom: "1.5rem",
          fontSize: theme.font.sizes.lg,
          fontWeight: theme.font.weights.bold,
          color: theme.colors.text,
          borderLeft: `4px solid ${theme.colors.secondary}`,
          paddingLeft: "1rem",
        }}
      >
        {translate("pages.component.matrics.top-repos")}
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        {repos.map((repo, index) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * REPO_ANIMATION_DELAY }}
            whileHover={{
              backgroundColor: theme.colors.hover,
              x: 5,
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.75rem 1rem",
              borderRadius: theme.borderRadius.md,
              textDecoration: "none",
              transition: "all 0.2s ease",
              border: `1px solid transparent`,
            }}
          >
            <span
              style={{
                fontWeight: theme.font.weights.medium,
                color: theme.colors.primary,
                fontSize: theme.font.sizes.base,
              }}
            >
              {repo.name}
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.25rem 0.75rem",
                borderRadius: theme.borderRadius.full,
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                fontSize: theme.font.sizes.sm,
                color: theme.colors.textSecondary,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill={theme.colors.warning}
              >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
              </svg>
              {repo.stargazers_count}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default GitHubTopReposComponent;
