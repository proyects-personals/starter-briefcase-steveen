import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useLanguage, useLastPublicRoute, useTheme } from "@application";
import { APP_ROUTES } from "@domain";

const AUTH_ROUTES = [APP_ROUTES.LOGIN, APP_ROUTES.REGISTER, APP_ROUTES.WELCOME];

const MAX_VISIBLE_BUTTONS = 2;

const LABELS: Record<string, string> = {
  [APP_ROUTES.LOGIN]: "login.button",
  [APP_ROUTES.REGISTER]: "register.button",
  [APP_ROUTES.WELCOME]: "welcome.button",
};

const HeaderAuthButtonsComponent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lastRoute = useLastPublicRoute();
  const { t } = useLanguage();
  const { theme } = useTheme();

  const currentRoute = location.pathname;

  const baseBtn = "px-4 py-2 rounded-md text-sm font-medium transition-all";

  const primaryStyle = {
    backgroundColor: theme.colors.primary,
    color: "#fff",
  };

  const ghostStyle = {
    color: theme.colors.primary,
  };

  const routesToShow = AUTH_ROUTES.filter(
    (route) => route !== currentRoute && route !== lastRoute,
  );

  if (
    lastRoute !== null &&
    lastRoute !== "" &&
    lastRoute !== currentRoute &&
    !routesToShow.includes(lastRoute)
  ) {
    routesToShow.unshift(lastRoute);
  }

  const finalRoutes = routesToShow.slice(0, MAX_VISIBLE_BUTTONS);

  return (
    <div className="flex items-center gap-3">
      {finalRoutes.map((route) => (
        <button
          key={route}
          className={baseBtn}
          style={route === lastRoute ? primaryStyle : ghostStyle}
          onClick={() => navigate(route)}
        >
          {t(LABELS[route])}
        </button>
      ))}
    </div>
  );
};

export default HeaderAuthButtonsComponent;
