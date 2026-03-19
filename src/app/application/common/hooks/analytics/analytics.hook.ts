import { useCallback } from "react";

import { trackEvent } from "@/app";

/**
 * @hook useAnalytics
 * @description
 * Hook personalizado que encapsula la lógica de analítica de eventos
 * utilizando Google Analytics.
 *
 * Proporciona métodos reutilizables para registrar diferentes tipos
 * de interacciones del usuario dentro de la aplicación, manteniendo
 * una separación clara entre la capa de presentación y la lógica de tracking.
 *
 * Este hook actúa como intermediario entre los componentes UI y el
 * controlador de analytics (`trackEvent`).
 *
 * @returns {Object} Métodos para el registro de eventos analíticos.
 */
export const useAnalytics = (): {
  event: (category: string, action: string) => void;
  trackScreen: (screenName: string) => void;
  trackSection: (section: string) => void;
  trackClick: (label: string) => void;
} => {
  /**
   * Registra un evento personalizado genérico.
   *
   * @function event
   * @description
   * Permite enviar cualquier tipo de evento a Google Analytics
   * definiendo manualmente la categoría y la acción.
   *
   * @param {string} category - Categoría del evento (ej. "Click", "Sección").
   * @param {string} action - Acción específica realizada por el usuario.
   *
   * @returns {void}
   *
   * @example
   * event("Click", "Botón Login");
   */
  const event = useCallback((category: string, action: string): void => {
    trackEvent(category, action);
  }, []);

  /**
   * Registra la vista de una pantalla.
   *
   * @function trackScreen
   * @description
   * Envía un evento indicando que el usuario ha visualizado una
   * pantalla o vista específica dentro de la aplicación.
   *
   * Ideal para medir navegación o vistas principales.
   *
   * @param {string} screenName - Nombre de la pantalla (ej. "Portafolio", "Home").
   *
   * @returns {void}
   *
   * @example
   * trackScreen("Portafolio");
   */
  const trackScreen = useCallback((screenName: string): void => {
    trackEvent("Screen", screenName);
  }, []);

  /**
   * Registra la visualización o interacción con una sección.
   *
   * @function trackSection
   * @description
   * Permite medir el interés del usuario en diferentes secciones
   * de la aplicación, como "Proyectos", "Experiencia", etc.
   *
   * @param {string} section - Nombre de la sección.
   *
   * @returns {void}
   *
   * @example
   * trackSection("Proyectos");
   */
  const trackSection = useCallback((section: string): void => {
    trackEvent("Sección", section);
  }, []);

  /**
   * Registra un evento de tipo click.
   *
   * @function trackClick
   * @description
   * Se utiliza para medir interacciones clave del usuario,
   * como clicks en botones importantes (ej. descarga de CV,
   * contacto, navegación, etc.).
   *
   * @param {string} label - Descripción del elemento clickeado.
   *
   * @returns {void}
   *
   * @example
   * trackClick("Descargar CV");
   */
  const trackClick = useCallback((label: string): void => {
    trackEvent("Click", label);
  }, []);

  return {
    event,
    trackScreen,
    trackSection,
    trackClick,
  };
};
