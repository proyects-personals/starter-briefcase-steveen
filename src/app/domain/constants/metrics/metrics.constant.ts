import type { IGitHubMetrics } from "@/app/domain";

/**
 * @description
 * Usuario de GitHub utilizado para obtener repositorios.
 */
export const GITHUB_USERNAME = "steveencues";

/**
 * @description
 * Organización de GitHub utilizada para obtener repositorios.
 */
export const GITHUB_ORGANIZATION = "proyects-personals";

/**
 * @description
 * Estado inicial de métricas de GitHub.
 */
export const EMPTY_METRICS: IGitHubMetrics = {
  repos: 0,
  stars: 0,
  issues: 0,
  commits: 0,
  topLanguages: [],
  topRepos: [],
};

/**
 * @description
 * URL base de la API de GitHub.
 */
export const GITHUB_API_BASE_URL = "https://api.github.com";

/**
 * @description
 * Número máximo de repositorios a solicitar por petición.
 */
export const MAX_REPOSITORIES_PER_REQUEST = 100;

/**
 * @description
 * Claves de traducción para las métricas de GitHub.
 */
export const METRIC_KEYS = {
  repos: "pages.component.matrics.repos",
  stars: "pages.component.matrics.stars",
  issues: "pages.component.matrics.issues",
  commits: "pages.component.matrics.commits",
} as const;

/**
 * @description
 * Altura de la barra de progreso.
 */
export const PROGRESS_BAR_HEIGHT = "8px";

/**
 * @description
 * Duración base de la animación.
 */
export const ANIMATION_DURATION = 1;

/**
 * @description
 * Desplazamiento vertical en hover.
 */
export const HOVER_OFFSET_Y = -5;

/**
 * @description
 * Duración de la animación de hover.
 */
export const HOVER_ANIMATION_DURATION = 0.2;

/**
 * @description
 * Altura del indicador inferior.
 */
export const INDICATOR_HEIGHT = "3px";

/**
 * @description
 * Ancho del indicador inferior.
 */
export const INDICATOR_WIDTH = "40px";

/**
 * @description
 * Espaciado interno del card.
 */
export const CARD_PADDING = "1.25rem";

/**
 * @description
 * Espacio entre elementos internos.
 */
export const CARD_GAP = "0.5rem";

/**
 * @description
 * Repositorios animacion delay
 */
export const REPO_ANIMATION_DELAY = 0.05;

/**
 * @description
 * Delay entre cada barra animada.
 */
export const LANGUAGE_ANIMATION_DELAY = 0.1;
