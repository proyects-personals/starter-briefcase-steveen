import type { IAppTheme } from "@/app/domain";
import type { TFunction } from "i18next";

/**
 * @description
 * Propiedades base para los componentes relacionados con el contacto.
 * Esta interfaz garantiza que los componentes tengan acceso al tema
 * de estilo global y a la funcion de internacionalizacion.
 * @typeparam theme - Objeto del tema global que contiene colores, fuentes y espaciados.
 * @typeparam translate - Funcion de traduccion para obtener textos en diferentes idiomas.
 */
export interface IContactComponent {
  theme: IAppTheme;
  translate: TFunction<"translation", undefined>;
}
