import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { useLoading } from "@application";
import { logoMadjs } from "@assets";

import { LayoutComponent } from "../component";

import AuthRoutes from "./router-auth";
import RoutesOnboarding from "./router-onboarding";

/**
 * Enrutador Principal de la Aplicación (AppRouter).
 * * @description
 * Actúa como el orquestador global de la navegación. Gestiona:
 * 1. **Verificación de Identidad:** Ejecuta la lógica de validación de sesión al montar el componente.
 * 2. **Pantalla de Carga (Splash Screen):** Controla el loader global mediante el hook `useLoading`.
 * 3. **Gatekeeper:** Renderiza condicionalmente el árbol de rutas autenticadas o de onboarding.
 * * @component
 * @version 1.0.0
 * @returns {JSX.Element | null} El Layout principal con el switch de rutas o null durante el check inicial.
 */
const AppRouter: React.FC = () => {
  const { show, hide } = useLoading();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(false);

  /**
   * Ejecuta la lógica de validación de identidad al arrancar la App.
   * * @description
   * - Inicia la experiencia de usuario con un Splash Screen personalizado.
   * - Utiliza un bloque try/finally para asegurar que el Loader se cierre
   * incluso si la verificación falla (evitando bloqueos de pantalla).
   * - Actualmente está configurado en 'false' de forma estática para pruebas,
   * pero está listo para integrar llamadas a Storage o API.
   * * @async
   * @returns {Promise<void>}
   */
  const checkAuth = useCallback(async (): Promise<void> => {
    // 2. Envolver la función
    show({ logo: logoMadjs, size: 200, color: "#00f" });
    try {
      setIsAuthenticated(false);
    } finally {
      hide();
    }
  }, [show, hide]);

  /**
   * Hook de efecto para el montaje inicial.
   * * @listens [show, hide] - Reacciona si las funciones de carga cambian (usualmente estables).
   * @action Llama a checkAuth() inmediatamente después del primer renderizado.
   */
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  /**
   * Protección contra el parpadeo de interfaz (FOUC).
   * * @description
   * Mientras 'isAuthenticated' sea null (estado inicial), la función retorna null.
   * Esto evita que el usuario vea brevemente la pantalla de Login o el Dashboard
   * antes de que el proceso asíncrono termine de decidir cuál mostrar.
   */
  if (isAuthenticated === null) {
    return null;
  }

  return (
    <LayoutComponent isAutentificated={isAuthenticated}>
      <Routes>
        <Route
          path="/*"
          element={isAuthenticated ? <AuthRoutes /> : <RoutesOnboarding />}
        />
      </Routes>
    </LayoutComponent>
  );
};

export default React.memo(AppRouter);
