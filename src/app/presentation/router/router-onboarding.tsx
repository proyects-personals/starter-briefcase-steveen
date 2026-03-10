import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { APP_ROUTES } from "@domain";
import {
  LoginScreen,
  NotFoundScreen,
  PageWrapperComponent,
  WelcomeScreen,
} from "@presentation";

const RoutesOnboarding: React.FC = () => {
  return (
    <Routes>
      <Route
        path={APP_ROUTES.ROOT}
        element={<Navigate to={APP_ROUTES.WELCOME} replace />}
      />
      <Route
        path={APP_ROUTES.WELCOME}
        element={
          <PageWrapperComponent isBackground>
            <WelcomeScreen />
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
