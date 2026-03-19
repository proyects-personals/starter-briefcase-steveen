import ReactGA from "react-ga4";

import { CONNECTION_CONFIG } from "@/app/domain";

/**
 * Inicializa Google Analytics.
 *
 * @function initAnalytics
 * @description
 * Configura la instancia de Google Analytics utilizando el identificador
 * de medición definido en la configuración global de la aplicación.
 *
 * Este método debe ejecutarse una única vez al iniciar la aplicación
 * (generalmente en el archivo `main.tsx`).
 *
 * @returns {void}
 *
 * @example
 * initAnalytics();
 */
export const initAnalytics = (): void => {
  ReactGA.initialize(CONNECTION_CONFIG.ANALYTICS.kEY);
};

/**
 * Registra una vista de página (pageview).
 *
 * @function trackPage
 * @description
 * Envía un evento de tipo "pageview" a Google Analytics cada vez
 * que el usuario navega a una nueva ruta dentro de la aplicación.
 *
 * Se recomienda ejecutar este método en listeners de navegación
 * como `useLocation` (React Router).
 *
 * @param {string} path - Ruta actual de la aplicación (ej. "/home", "/projects").
 *
 * @returns {void}
 *
 * @example
 * trackPage("/portfolio");
 */
export const trackPage = (path: string): void => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};

/**
 * Registra un evento personalizado en Google Analytics.
 *
 * @function trackEvent
 * @description
 * Permite enviar eventos personalizados que representan acciones
 * específicas del usuario dentro de la aplicación, como clicks,
 * descargas o interacciones con componentes.
 *
 * Este método es clave para medir métricas de negocio y comportamiento.
 *
 * @param {string} category - Categoría del evento (ej. "Click", "Sección", "CV").
 * @param {string} action - Acción específica realizada por el usuario.
 *
 * @returns {void}
 *
 * @example
 * trackEvent("Click", "Descargar CV");
 * trackEvent("Sección", "Proyectos");
 */
export const trackEvent = (category: string, action: string): void => {
  ReactGA.event({
    category,
    action,
  });
};
