import type { ChildrenInterface } from "../base.interface";

/**
 * @interface PageWrapperInterface
 * @extends ChildrenInterface
 * @description Props para el componente PageWrapper.
 *              Extiende ChildrenInterface y agrega opciones de layout y fondo.
 */
export interface PageWrapperInterface extends ChildrenInterface {
  className?: string;
  isBackground?: boolean;
  padding?: string;
}
