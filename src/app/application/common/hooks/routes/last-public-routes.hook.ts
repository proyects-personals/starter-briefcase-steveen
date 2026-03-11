import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { PUBLIC_ROUTES } from "@domain";

/**
 * Hook personalizado que rastrea y persiste la última ruta pública visitada por el usuario.
 * * @description
 * Este hook monitorea los cambios en la ubicación actual mediante `useLocation`.
 * * @returns {string | null} La última ruta pública guardada en el almacenamiento local, o `null` si no existe ninguna.
 * * @version 1.0.0
 * * @example
 * const lastRoute = useLastPublicRoute();
 * console.log(lastRoute); // Devuelve p. ej. "/home" o "/login"
 */
export const useLastPublicRoute = (): string | null => {
  const location = useLocation();

  useEffect(() => {
    if (PUBLIC_ROUTES.includes(location.pathname)) {
      localStorage.setItem("lastPublicRoute", location.pathname);
    }
  }, [location.pathname]);

  const lastRoute = localStorage.getItem("lastPublicRoute");

  return lastRoute;
};
