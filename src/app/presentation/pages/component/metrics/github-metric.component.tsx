import React, { type JSX } from "react";
import {
  FaGithub,
  FaCodeBranch,
  FaProjectDiagram,
  FaExclamationCircle,
  FaStar,
} from "react-icons/fa";

import { GitHubFeaturedRepo, GitHubMetricCard } from "@/app";

import type { IGitHubMetricsPanel } from "@domain";

/**
 * @description Componente que renderiza un panel de métricas de GitHub.
 * Incluye un repositorio destacado y varias tarjetas de métricas como commits, PRs, repos, issues y estrellas.
 *
 * @param {IGitHubMetricsPanel} props - Propiedades del componente.
 * @property theme - Tema global de la aplicación para estilos dinámicos.
 *
 * @returns {JSX.Element} Panel con métricas y repositorio destacado.
 */
const GitHubMetric: React.FC<IGitHubMetricsPanel> = ({
  theme,
}): JSX.Element => {
  const username = "steveencues";

  const metrics = [
    {
      label: "Commits",
      value: 142,
      icon: <FaCodeBranch />,
      color: theme.colors.primary,
    },
    {
      label: "PRs",
      value: 38,
      icon: <FaGithub />,
      color: theme.colors.secondary,
    },
    {
      label: "Repos",
      value: 12,
      icon: <FaProjectDiagram />,
      color: theme.colors.accent,
    },
    {
      label: "Issues",
      value: 7,
      icon: <FaExclamationCircle />,
      color: theme.colors.warning,
    },
    { label: "Stars", value: 56, icon: <FaStar />, color: theme.colors.info },
  ];

  const highlightRepo = {
    name: "neuroniando-storage",
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 15,
    lastCommit: "2026-03-10",
    description: "High-performance decentralized storage logic.",
  };

  return (
    <section className="w-full p-4 flex flex-col gap-6">
      <div className="text-center font-bold text-sm sm:text-base opacity-70">
        GitHub Metrics of {username}
      </div>

      <GitHubFeaturedRepo repo={highlightRepo} theme={theme} />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {metrics.map((metric) => (
          <GitHubMetricCard
            key={metric.label}
            metric={metric}
            theme={theme}
            index={metrics.indexOf(metric)}
          />
        ))}
      </div>
    </section>
  );
};

export default GitHubMetric;
