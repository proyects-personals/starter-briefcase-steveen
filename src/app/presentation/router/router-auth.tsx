import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { APP_ROUTES } from "@domain";
import {
  NotFoundScreen,
  PageWrapperComponent,
  HomeScreen,
} from "@presentation";

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
