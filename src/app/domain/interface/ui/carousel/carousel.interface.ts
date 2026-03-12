import type { IAppTheme } from "@/app/domain";
import type { TFunction } from "i18next";

/**
 * @description Propiedades para los controles de navegación de un carrusel.
 *
 * @property onPrev - Función que se ejecuta al presionar el botón "anterior"
 * @property onNext - Función que se ejecuta al presionar el botón "siguiente"
 * @property theme - Tema global de la aplicación para estilos dinámicos
 * @property translate - Función de traducción i18next
 */
export interface IControls {
  onPrev: () => void;
  onNext: () => void;
  theme: IAppTheme;
  translate: TFunction<"translation", undefined>;
}

/**
 * @description Propiedades para los indicadores de un carrusel (dots o paginación).
 *
 * @property length - Número total de slides en el carrusel
 * @property current - Índice del slide actualmente activo
 * @property onChange - Función que se ejecuta al seleccionar un indicador
 * @property theme - Tema global de la aplicación
 * @property translate - Función de traducción i18next
 */
export interface IIndicators {
  length: number;
  current: number;
  onChange: (idx: number) => void;
  theme: IAppTheme;
  translate: TFunction<"translation", undefined>;
}

/**
 * @description Representa un elemento individual del carrusel.
 *
 * @property id - Identificador único del slide
 * @property title - Título del slide
 * @property description - Descripción breve del slide
 * @property image - URL o path de la imagen del slide
 * @property imageHeight - Altura opcional de la imagen (ej: "300px")
 */
export interface ICarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  imageHeight?: string;
}

/**
 * @description Propiedades para un slide individual dentro del carrusel.
 *
 * @property item - Información del slide (ICarouselItem)
 * @property direction - Dirección de la animación (-1 para atrás, 1 para adelante)
 * @property theme - Tema global de la aplicación
 * @property translate - Función de traducción i18next
 */
export interface ISlide {
  item: ICarouselItem;
  direction: number;
  theme: IAppTheme;
  translate: TFunction<"translation", undefined>;
}

/**
 * @description Propiedades del componente principal de carrusel.
 *
 * @property items - Lista de slides a mostrar
 * @property height - Altura opcional del carrusel
 * @property autoPlayInterval - Intervalo en milisegundos para rotación automática
 * @property translate - Función de traducción i18next
 * @property theme - Tema global de la aplicación
 */
export interface ICarousel {
  items: ICarouselItem[];
  height?: string;
  autoPlayInterval?: number;
  translate: TFunction<"translation", undefined>;
  theme: IAppTheme;
}
