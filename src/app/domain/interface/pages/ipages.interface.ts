import type { IChildren } from "../ibase.interface";

/**
 * @interface IPageWrapper
 * @extends IChildren
 * @description Props para el componente PageWrapper.
 *              Extiende IChildren y agrega opciones de layout y fondo.
 */
export interface IPageWrapper extends IChildren {
  className?: string;
  isBackground?: boolean;
  padding?: string;
}
