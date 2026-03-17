import React from "react";

import {
  GitHubSkeletonComponent,
  GitHubStartsGridComponent,
  GitHubTopLanguagesComponent,
  GitHubTopReposComponent,
  useGithubMetrics,
} from "@/app";
import {
  GITHUB_ORGANIZATION,
  GITHUB_USERNAME,
  type IGitHubMetric,
} from "@domain";

/**
 * @description
 * Componente encargado de renderizar el panel de métricas
 * de GitHub dentro de la aplicación.
 *
 * Este componente utiliza el hook `useGithubMetrics`
 * para obtener estadísticas de la API de GitHub como:
 *
 * - número total de repositorios
 * - estrellas acumuladas
 * - issues abiertas
 * - lenguajes más utilizados
 * - repositorios destacados
 *
 * Mientras los datos se cargan se muestra un
 * `GitHubSkeletonComponent`.
 */
const GitHubMetricComponent: React.FC<IGitHubMetric> = ({
  translate,
  theme,
}) => {
  const metrics = useGithubMetrics(GITHUB_USERNAME, GITHUB_ORGANIZATION);

  /**
   * @description
   * Renderiza un skeleton mientras las métricas
   * se encuentran en proceso de carga.
   */
  if (!metrics) {
    return <GitHubSkeletonComponent theme={theme} />;
  }

  return (
    <div className="w-full flex flex-col gap-6">
      <GitHubStartsGridComponent
        metrics={metrics}
        translate={translate}
        theme={theme}
      />

      <GitHubTopLanguagesComponent
        languages={metrics.topLanguages}
        translate={translate}
        theme={theme}
      />

      <GitHubTopReposComponent
        repos={metrics.topRepos}
        translate={translate}
        theme={theme}
      />
    </div>
  );
};

export default GitHubMetricComponent;
