import type { IAppTheme } from "@/app/domain";
import type React from "react";

/**
 * @description Representa una métrica individual que se mostrará en una tarjeta.
 * Contiene la información necesaria para visualizar un indicador con su valor,
 * etiqueta descriptiva, ícono y color representativo.
 *
 * @property label - Etiqueta descriptiva de la métrica (ej: Stars, Followers, Commits)
 * @property value - Valor de la métrica que se mostrará en la interfaz
 * @property icon - Ícono visual asociado a la métrica
 * @property color - Color representativo utilizado en estilos visuales
 */
export interface IMetric {
  label: string;
  value: number | string;
  icon: React.ReactNode;
  color: string;
}

/**
 * @description Define las propiedades necesarias para renderizar una tarjeta
 * de métricas de GitHub dentro de la interfaz.
 *
 * @property metric - Información de la métrica que será mostrada en la tarjeta
 * @property theme - Tema global de la aplicación utilizado para estilos dinámicos
 * @property index - Índice del elemento dentro de la lista, usado para animaciones o control de orden
 */
export interface IGitHubMetricCard {
  metric: IMetric;
  theme: IAppTheme;
  index: number;
}

/**
 * @description Propiedades necesarias para el componente que renderiza
 * un panel de métricas de GitHub.
 *
 * @property theme - Tema global de la aplicación utilizado para estilos dinámicos
 */
export interface IGitHubMetricsPanel {
  theme: IAppTheme;
}

/**
 * @description Representa un repositorio destacado en GitHub con información clave.
 *
 * @property name - Nombre del repositorio
 * @property language - Lenguaje principal del repositorio
 * @property langColor - Color representativo del lenguaje
 * @property stars - Número de estrellas del repositorio
 * @property lastCommit - Fecha del último commit
 * @property description - Breve descripción del repositorio
 */
interface IHighlightRepo {
  name: string;
  language: string;
  langColor: string;
  stars: number;
  lastCommit: string;
  description: string;
}

/**
 * @description Propiedades para un componente que muestra un repositorio destacado de GitHub.
 *
 * @property repo - Información del repositorio destacado (IHighlightRepo)
 * @property theme - Tema global de la aplicación
 */
export interface IGitHubFeaturedRepo {
  repo: IHighlightRepo;
  theme: IAppTheme;
}
