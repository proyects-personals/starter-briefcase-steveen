import type { IAppTheme } from "@/app/domain";
import type { TFunction } from "i18next";

/**
 * @description Propiedades para el componente de chips de un proyecto.
 *
 * @property chips - Lista de tecnologías o skills asociadas al proyecto
 * @property theme - Tema global de la aplicación para estilos dinámicos
 */
export interface ICardChips {
  chips: string[];
  theme: IAppTheme;
}

/**
 * @description Propiedades para el contenido de una tarjeta de proyecto.
 *
 * @property name - Nombre del proyecto
 * @property description - Breve descripción del proyecto
 * @property kills - Lista de tecnologías o skills utilizadas en el proyecto
 * @property visitLink - URL para visitar el proyecto en producción (opcional)
 * @property codeLink - URL al repositorio del proyecto (opcional)
 * @property theme - Tema global de la aplicación
 * @property translate - Función de traducción i18next
 */
export interface ICardContent {
  name: string;
  description: string;
  kills: string[];
  visitLink?: string;
  codeLink?: string;
  theme: IAppTheme;
  translate: TFunction<"translation", undefined>;
}

/**
 * @description Propiedades para el componente de imagen de la tarjeta.
 *
 * @property image - URL o path de la imagen del proyecto
 * @property theme - Tema global de la aplicación
 */
export interface ICardImage {
  image: string;
  theme: IAppTheme;
}

/**
 * @description Propiedades para un componente de item de tarjeta individual.
 *
 * @property item - Información del proyecto (CardItem)
 * @property index - Índice del item dentro de la lista, usado para animaciones
 * @property theme - Tema global de la aplicación
 * @property translate - Función de traducción i18next
 */
export interface ICardItemComponent {
  item: CardItem;
  index: number;
  theme: IAppTheme;
  translate: TFunction<"translation", undefined>;
}

/**
 * @description Propiedades para el componente de lista de tarjetas de proyectos.
 *
 * @property items - Lista de proyectos a mostrar
 * @property translate - Función de traducción i18next
 * @property theme - Tema global de la aplicación
 */
export interface ICardComponent {
  items: CardItem[];
  translate: TFunction<"translation", undefined>;
  theme: IAppTheme;
}

/**
 * @description Representa un proyecto individual con toda su información.
 *
 * @property name - Nombre del proyecto
 * @property description - Breve descripción del proyecto
 * @property image - URL o path de la imagen del proyecto
 * @property kills - Lista de tecnologías o skills utilizadas en el proyecto
 * @property visitLink - URL para visitar el proyecto en producción (opcional)
 * @property codeLink - URL al repositorio del proyecto (opcional)
 */
export interface CardItem {
  name: string;
  description: string;
  image: string;
  kills: string[];
  visitLink?: string;
  codeLink?: string;
}
