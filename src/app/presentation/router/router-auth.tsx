import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { APP_ROUTES } from "@domain";
import {
  NotFoundScreen,
  PageWrapperComponent,
  HomeScreen,
} from "@presentation";

/**
 * Enrutador de secciones autenticadas (AuthRoutes).
 * * @description
 * Define las rutas accesibles únicamente para usuarios con sesión activa.
 * - **Redirección:** Mapea la ruta raíz (`/`) hacia la Home para evitar una página vacía.
 * - **Composición:** Utiliza `PageWrapperComponent` como un Higher-Order Component (HOC)
 * visual para inyectar comportamientos comunes como fondos y espaciado.
 * - **Seguridad:** Centraliza las rutas protegidas en un único árbol de renderizado.
 * * @component
 * @version 1.0.0
 * @returns {JSX.Element} El switch de rutas con `react-router-dom`.
 */
const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path={APP_ROUTES.ROOT}
        element={<Navigate to={APP_ROUTES.HOME} replace />}
      />
      <Route
        path={APP_ROUTES.HOME}
        element={
          <PageWrapperComponent isBackground>
            <HomeScreen />
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

export default AuthRoutes;
