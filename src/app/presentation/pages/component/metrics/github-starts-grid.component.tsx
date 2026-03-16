import React from "react";

import { StartCardComponent } from "@/app";
import { METRIC_KEYS, type IGitHubStatsGrid } from "@domain";

/**
 * @description
 * Componente que renderiza la cuadrícula de estadísticas
 * principales de GitHub.
 *
 * Muestra indicadores como:
 * - repositorios
 * - estrellas
 * - issues abiertas
 * - commits
 *
 * Cada estadística se renderiza mediante el componente `StartCard`.
 */
const GitHubStartsGridComponent: React.FC<IGitHubStatsGrid> = ({
  metrics,
  translate,
  theme,
}) => {
  /**
   * @description
   * Lista de métricas a renderizar.
   */
  const stats = [
    { label: translate(METRIC_KEYS.repos), value: metrics.repos },
    { label: translate(METRIC_KEYS.stars), value: metrics.stars },
    { label: translate(METRIC_KEYS.issues), value: metrics.issues },
    { label: translate(METRIC_KEYS.commits), value: metrics.commits },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <StartCardComponent
          key={stat.label}
          label={stat.label}
          value={stat.value}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default GitHubStartsGridComponent;
