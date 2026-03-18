import { useEffect, useState } from "react";

import { fetchOrgRepos, fetchUserRepos, fetchRepoCommits } from "@/app";
import {
  calculateIssues,
  calculateStars,
  EMPTY_METRICS,
  getTopLanguages,
  getTopRepos,
  type IGitHubMetrics,
  type IGitHubRepo,
} from "@domain";

/**
 * Combina los repositorios del usuario y de la organización
 * en una sola lista.
 *
 * @param userRepos - Repositorios del usuario
 * @param orgRepos - Repositorios de la organización
 *
 * @returns Lista combinada de repositorios
 */
const mergeRepositories = (
  userRepos: IGitHubRepo[],
  orgRepos: IGitHubRepo[],
): IGitHubRepo[] => {
  return [...userRepos, ...orgRepos];
};

/**
 * Construye el objeto de métricas a partir de una lista de repositorios.
 * @description
 * Calcula dinámicamente el total de commits consultando cada repositorio.
 * Utiliza Promise.all para realizar las peticiones en paralelo.
 * * @param repos - Lista de repositorios
 * @returns Métricas agregadas incluyendo commits reales
 */
const buildMetrics = async (repos: IGitHubRepo[]): Promise<IGitHubMetrics> => {
  const commitsCounts = await Promise.all(
    repos.map((repo) => fetchRepoCommits(repo)),
  );

  const totalCommits = commitsCounts.reduce((acc, count) => acc + count, 0);

  return {
    repos: repos.length,
    stars: calculateStars(repos),
    issues: calculateIssues(repos),
    commits: totalCommits,
    topLanguages: getTopLanguages(repos),
    topRepos: getTopRepos(repos),
  };
};

/**
 * Obtiene todos los repositorios necesarios para calcular
 * las métricas del usuario.
 *
 * @param username - Usuario de GitHub
 * @param organization - Organización de GitHub
 *
 * @returns Lista combinada de repositorios
 */
const fetchRepositories = async (
  username: string,
  organization: string,
): Promise<IGitHubRepo[]> => {
  const [userRepos, orgRepos] = await Promise.all([
    fetchUserRepos(username),
    fetchOrgRepos(organization),
  ]);

  return mergeRepositories(userRepos, orgRepos);
};

/**
 * Hook que obtiene y calcula métricas de GitHub
 * para un usuario y una organización.
 *
 * Este hook consulta la API de GitHub, combina los
 * repositorios y genera estadísticas como:
 *
 * - número de repositorios
 * - estrellas totales
 * - issues abiertas
 * - lenguajes más usados
 * - repositorios destacados
 *
 * @param username - Nombre de usuario de GitHub
 * @param organization - Organización de GitHub
 *
 * @returns Métricas de GitHub o null mientras carga
 */
export const useGithubMetrics = (
  username: string,
  organization: string,
): IGitHubMetrics | null => {
  const [metrics, setMetrics] = useState<IGitHubMetrics | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadMetrics = async (): Promise<void> => {
      try {
        const repos = await fetchRepositories(username, organization);

        const result = await buildMetrics(repos);

        if (isMounted) {
          setMetrics(result);
        }
      } catch {
        if (isMounted) {
          setMetrics(EMPTY_METRICS);
        }
      }
    };

    loadMetrics();

    return (): void => {
      isMounted = false;
    };
  }, [username, organization]);

  return metrics;
};
