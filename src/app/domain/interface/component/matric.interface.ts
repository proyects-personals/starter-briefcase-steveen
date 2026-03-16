import type { IAppTheme, LanguageStatType } from "@domain";
import type { TFunction } from "i18next";

/**
 * @description Propiedades del componente principal que renderiza
 * el panel completo de métricas de GitHub.
 *
 * Este componente utiliza el tema global para estilos dinámicos
 * y la función de traducción para internacionalización.
 *
 * @property theme - Tema global de la aplicación
 * @property translate - Función de traducción de i18next
 */
export interface IGitHubMetric {
  theme: IAppTheme;
  translate: TFunction<"translation", undefined>;
}

/**
 * @description Métricas generales obtenidas desde la API de GitHub.
 *
 * Estas métricas representan un resumen del estado de los repositorios
 * del usuario y/o organización.
 *
 * @property repos - Número total de repositorios
 * @property stars - Número total de estrellas acumuladas
 * @property issues - Número total de issues abiertas
 * @property commits - Número total de commits
 */
export interface IGitHubStats {
  repos: number;
  stars: number;
  issues: number;
  commits: number;
}

/**
 * @description Propiedades del componente que renderiza la cuadrícula
 * de estadísticas principales.
 *
 * @property metrics - Métricas generales de GitHub
 * @property translate - Función de traducción
 * @property theme - Tema global para estilos dinámicos
 */
export interface IGitHubStatsGrid {
  metrics: IGitHubStats;
  translate: TFunction<"translation", undefined>;
  theme: IAppTheme;
}

/**
 * @description Propiedades de la tarjeta individual de estadística.
 *
 * Este componente representa un único indicador (ej: repositorios, estrellas).
 *
 * @property label - Etiqueta de la métrica
 * @property value - Valor numérico de la métrica
 * @property theme - Tema global para estilos
 */
export interface IStatCard {
  label: string;
  value: number;
  theme: IAppTheme;
}

/**
 * @description Propiedades del componente que muestra
 * los lenguajes de programación más utilizados.
 *
 * @property languages - Lista de lenguajes con su cantidad de repositorios
 * @property translate - Función de traducción
 * @property theme - Tema global
 */
export interface IGitHubTopLanguages {
  languages: LanguageStatType[];
  translate: TFunction<"translation", undefined>;
  theme: IAppTheme;
}

/**
 * @description Representa un repositorio obtenido desde la API de GitHub.
 *
 * Contiene la información básica necesaria para mostrar estadísticas
 * y enlaces a los repositorios.
 *
 * @property id - Identificador único del repositorio
 * @property name - Nombre del repositorio
 * @property language - Lenguaje principal del repositorio
 * @property stargazers_count - Número de estrellas del repositorio
 * @property open_issues_count - Número de issues abiertas
 * @property commits_url - URL base para obtener commits del repositorio
 * @property html_url - URL pública del repositorio en GitHub
 */
export interface IGitHubRepo {
  id: number;
  name: string;
  language: string | null;
  stargazers_count: number;
  open_issues_count: number;
  commits_url: string;
  html_url: string;
}

/**
 * @description Propiedades del componente que renderiza
 * los repositorios más destacados.
 *
 * @property repos - Lista de repositorios ordenados por relevancia (ej: estrellas)
 * @property translate - Función de traducción
 * @property theme - Tema global
 */
export interface IGitHubTopRepos {
  repos: IGitHubRepo[];
  translate: TFunction<"translation", undefined>;
  theme: IAppTheme;
}

/**
 * @description Métricas completas utilizadas por el panel de GitHub.
 *
 * Incluye estadísticas generales, lenguajes más utilizados
 * y repositorios destacados.
 *
 * @property repos - Número total de repositorios
 * @property stars - Total de estrellas acumuladas
 * @property issues - Total de issues abiertas
 * @property commits - Total de commits
 * @property topLanguages - Lenguajes más utilizados
 * @property topRepos - Repositorios destacados
 */
export interface IGitHubMetrics {
  repos: number;
  stars: number;
  issues: number;
  commits: number;
  topLanguages: LanguageStatType[];
  topRepos: IGitHubRepo[];
}

/**
 * @description Skeleton para las metricas.
 *
 * Incluye skeleton para todas las partes del skeleton de github
 *
 * @property theme - Tema global
 */
export interface ISkeletonMetric {
  theme: IAppTheme;
}
