import type { IAppTheme } from "@/app/domain";
import type { TFunction } from "i18next";
import type { useNavigate } from "react-router-dom";

/**
 * @description Representa un elemento individual del banner con su información.
 * Contiene el título, imagen, enlace, descripción y estado de finalización del proyecto.
 * @typeparam title - Título del proyecto o sección
 * @typeparam image - URL de la imagen representativa del proyecto
 * @typeparam link - Enlace a la página o sección relacionada con el proyecto
 * @typeparam description - Breve descripción del proyecto o sección
 * @typeparam finalized - Indica si el proyecto está finalizado o en desarrollo
 */
export interface IBannerItem {
  title: string;
  image: string;
  link: string;
  description: string;
  finalized: string;
}

/**
 * @description Props del componente principal de banner animado.
 * Contiene la lista de elementos a mostrar, el tema de la aplicación, el intervalo de animación y la función de traducción.
 * @param items - Lista de elementos del banner a mostrar
 * @param theme - Tema de la aplicación para estilos consistentes
 * @param interval - Intervalo de tiempo entre animaciones (opcional)
 * @param translate - Función de traducción para textos del banner
 */
export interface IAnimatedBanner {
  items: IBannerItem[];
  theme: IAppTheme;
  interval?: number;
  translate: TFunction<"translation", undefined>;
}

/**
 * @description Props de un componente individual de banner.
 * Contiene el elemento del banner a mostrar, el tema de la aplicación, la función de traducción y la función de navegación.
 * @param item - Elemento del banner a mostrar
 * @param theme - Tema de la aplicación para estilos consistentes
 * @param translate - Función de traducción para textos del banner
 * @param navigate - Función de navegación para redirigir al usuario al hacer clic en el banner
 */
export interface IBannerItemProps {
  item: IBannerItem;
  theme: IAppTheme;
  translate: TFunction<"translation", undefined>;
  navigate: ReturnType<typeof useNavigate>;
}

/**
 * @description Props del componente de imagen dentro del banner.
 * Contiene la URL de la imagen, el texto alternativo para accesibilidad y el color principal del tema para el fondo decorativo.
 * @param src - URL de la imagen
 * @param alt - Texto alternativo de la imagen
 * @param primaryColor - Color principal del tema para el fondo decorativo
 */
export interface IBannerImage {
  src: string;
  alt: string;
  primaryColor: string;
}
