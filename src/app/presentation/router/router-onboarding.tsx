import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { APP_ROUTES } from "@domain";
import {
  BriefcaseScreen,
  LoginScreen,
  NotFoundScreen,
  PageWrapperComponent,
} from "@presentation";

/**
 * Enrutador de Onboarding y Acceso Público (RoutesOnboarding).
 * * @description
 * Gestiona las rutas accesibles para usuarios no autenticados o que están
 * iniciando su flujo en la plataforma.
 * - **Redirección:** Envía el tráfico de la raíz (`/`) hacia la pantalla de Bienvenida.
 * - **Consistencia:** Envuelve todas las vistas en `PageWrapperComponent` con fondo habilitado
 * para mantener la identidad visual de la marca.
 * - **Seguridad:** Aísla las vistas de Login y Landing del resto del aplicativo protegido.
 * * @component
 * @version 1.0.0
 * @returns {JSX.Element} El switch de rutas públicas con `react-router-dom`.
 */
const RoutesOnboarding: React.FC = () => {
  return (
    <Routes>
      <Route
        path={APP_ROUTES.ROOT}
        element={<Navigate to={APP_ROUTES.BRIEFCASE} replace />}
      />
      <Route
        path={APP_ROUTES.BRIEFCASE}
        element={
          <PageWrapperComponent isBackground>
            <BriefcaseScreen />
          </PageWrapperComponent>
        }
      />

      <Route
        path={APP_ROUTES.LOGIN}
        element={
          <PageWrapperComponent isBackground>
            <LoginScreen />
          </PageWrapperComponent>
        }
      />

      <Route
        path={APP_ROUTES.NOT_FOUND}
        element={
          <PageWrapperComponent isBackground>
            <NotFoundScreen />
          </PageWrapperComponent>
        }
      />
    </Routes>
  );
};

export default RoutesOnboarding;
