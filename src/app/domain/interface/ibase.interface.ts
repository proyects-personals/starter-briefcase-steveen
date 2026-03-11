import type { ReactNode } from "react";

/**
 * Interfaz base para componentes que aceptan elementos hijos (Children).
 * * @description
 * Define la estructura estándar para props de componentes "Wrapper" o contenedores.
 * Utiliza `ReactNode` para permitir cualquier tipo de contenido válido en React:
 * elementos, strings, números, fragmentos, portales, etc.
 * * @interface IChildren
 * @property {import("react").ReactNode} children - Elementos o componentes anidados
 * que se renderizarán dentro del componente contenedor.
 * * @version 1.0.0
 * * @example
 * const Container = ({ children }: IChildren) => {
 * return <div className="main-wrapper">{children}</div>;
 * };
 */
export interface IChildren {
  children: ReactNode;
}
