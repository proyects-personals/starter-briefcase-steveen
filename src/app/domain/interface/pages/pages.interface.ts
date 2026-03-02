import type { ReactNode } from "react";

/**
 * @interface ChildrenInterface
 * @description Props genéricas para componentes que reciben contenido hijo.
 *              Ideal para wrappers, layouts o cualquier contenedor estructural.
 */
export interface ChildrenInterface {
  children: ReactNode;
}

/**
 * @interface PageWrapperInterface
 * @extends ChildrenInterface
 * @description Props para el componente PageWrapper.
 *              Extiende ChildrenInterface y agrega opciones de layout y fondo.
 */
export interface PageWrapperInterface extends ChildrenInterface {
  className?: string;
  isBackground?: boolean;
}
