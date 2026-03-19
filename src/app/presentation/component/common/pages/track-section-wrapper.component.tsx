import React from "react";

import { useAnalytics } from "@/app";

/**
 * @component TrackSectionWrapperComponent
 * @description
 * Componente contenedor que permite registrar eventos de analítica
 * cuando el usuario interactúa con una sección específica de la UI.
 *
 * Su uso principal es envolver secciones del portafolio u otras vistas
 * para medir el interés del usuario mediante eventos como `onMouseEnter`.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.name - Nombre de la sección a registrar en analytics.
 * @param {React.ReactNode} props.children - Contenido hijo que será renderizado dentro del contenedor.
 *
 * @returns {React.JSX.Element} Contenedor que envuelve la sección y registra eventos de interacción.
 *
 * @example
 * <TrackSectionWrapperComponent name="Proyectos">
 *   <CardComponent items={projects} />
 * </TrackSectionWrapperComponent>
 */
const TrackSectionWrapperComponent: React.FC<{
  name: string;
  children: React.ReactNode;
}> = ({ name, children }) => {
  const { trackSection } = useAnalytics();

  /**
   * Maneja el evento de interacción con la sección.
   *
   * @function handleTrackSection
   * @description
   * Dispara un evento de analítica cuando el usuario posiciona
   * el cursor sobre la sección, indicando interés en el contenido.
   *
   * @returns {void}
   */
  const handleTrackSection = (): void => {
    trackSection(name);
  };

  return <div onMouseEnter={handleTrackSection}>{children}</div>;
};

export default TrackSectionWrapperComponent;
