import type { IGitHubRepo, LanguageStatType } from "@domain";

/**
 * Número máximo de lenguajes a mostrar en el ranking.
 */
const DEFAULT_TOP_LANGUAGES_LIMIT = 3;

/**
 * Número máximo de repositorios a mostrar en el ranking.
 */
const DEFAULT_TOP_REPOS_LIMIT = 5;

/**
 * @description Calcula el número total de estrellas
 * acumuladas en todos los repositorios.
 *
 * @param repos - Lista de repositorios obtenidos desde la API de GitHub
 *
 * @returns Total de estrellas
 */
export const calculateStars = (repos: IGitHubRepo[]): number =>
  repos.reduce((totalStars, repo) => totalStars + repo.stargazers_count, 0);

/**
 * @description Calcula el número total de issues abiertas
 * en todos los repositorios.
 *
 * @param repos - Lista de repositorios
 *
 * @returns Total de issues abiertas
 */
export const calculateIssues = (repos: IGitHubRepo[]): number =>
  repos.reduce((totalIssues, repo) => totalIssues + repo.open_issues_count, 0);

/**
 * @description Obtiene los lenguajes de programación más utilizados
 * en los repositorios.
 *
 * El resultado se ordena por la cantidad de repositorios que utilizan
 * cada lenguaje.
 *
 * @param repos - Lista de repositorios
 * @param limit - Número máximo de lenguajes a devolver
 *
 * @returns Lista de lenguajes con su cantidad de repositorios
 */
export const getTopLanguages = (
  repos: IGitHubRepo[],
  limit: number = DEFAULT_TOP_LANGUAGES_LIMIT,
): LanguageStatType[] => {
  const languages: Record<string, number> = {};

  repos.forEach((repo) => {
    if (repo.language === null) return;

    const language = repo.language;

    languages[language] = (languages[language] ?? 0) + 1;
  });

  const entries: LanguageStatType[] = Object.entries(languages);

  return entries.sort((a, b) => b[1] - a[1]).slice(0, limit);
};

/**
 * @description Obtiene los repositorios con mayor número de estrellas.
 *
 * Los repositorios se ordenan de forma descendente según
 * su número de estrellas.
 *
 * @param repos - Lista de repositorios
 * @param limit - Número máximo de repositorios a devolver
 *
 * @returns Lista de repositorios más populares
 */
export const getTopRepos = (
  repos: IGitHubRepo[],
  limit: number = DEFAULT_TOP_REPOS_LIMIT,
): IGitHubRepo[] =>
  [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, limit);
