import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { useLoading } from "@application";

import { LayoutComponent } from "../component";

import AuthRoutes from "./router-auth";
import RoutesOnboarding from "./router-onboarding";

const AppRouter: React.FC = () => {
  const { show, hide } = useLoading();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(false);

  useEffect(() => {
    const checkAuth = async (): Promise<void> => {
      show();
      try {
        setIsAuthenticated(false);
      } finally {
        hide();
      }
    };

    checkAuth();
  }, [show, hide]);

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
