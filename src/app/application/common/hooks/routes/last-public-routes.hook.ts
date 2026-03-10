import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { APP_ROUTES } from "@domain";

export const PUBLIC_ROUTES = [
  APP_ROUTES.LOGIN,
  APP_ROUTES.REGISTER,
  APP_ROUTES.WELCOME,
];

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
