import React from "react";
import type { IAppTheme } from "@/app/domain";
import type { TFunction } from "i18next";

/**
 * ISectionComponent
 *
 * @description
 * Propiedades requeridas para el componente `SectionComponent`.
 *
 * Este componente representa una sección genérica reutilizable
 * dentro de la pantalla del portafolio. Se utiliza para agrupar
 * contenido bajo un título y mantener una estructura visual
 * consistente entre diferentes bloques de información.
 *
 * Ejemplos de uso:
 *
 * - Experiencia laboral
 * - Proyectos personales
 * - Estudios
 * - Métricas de GitHub
 *
 * @property title
 * Título de la sección que será mostrado en la cabecera.
 *
 * @property children
 * Contenido interno de la sección. Puede incluir cualquier
 * componente React como carruseles, tarjetas o banners.
 *
 * @property theme
 * Tema visual de la aplicación que contiene colores,
 * bordes, sombras y otros estilos globales.
 */
export interface ISectionComponent {
  title: string;
  children: React.ReactNode;
  theme: IAppTheme;
}

/**
 * IHeroSectionComponent
 *
 * @description
 * Propiedades requeridas para el componente `HeroSectionComponent`.
 *
 * Este componente representa la sección principal de introducción
 * del portafolio, donde se muestra información inicial como:
 *
 * - Título principal
 * - Subtítulo profesional
 * - Descripción personal
 * - Botón de acción (por ejemplo, descarga de CV)
 *
 * @property theme
 * Tema visual de la aplicación que define los colores,
 * estilos y diseño general de la interfaz.
 *
 * @property translate
 * Función de traducción proporcionada por `i18next`,
 * utilizada para obtener los textos internacionalizados
 * de la interfaz según el idioma seleccionado.
 */
export interface IHeroSectionComponent {
  theme: IAppTheme;
  translate: TFunction<"translation", undefined>;
}
