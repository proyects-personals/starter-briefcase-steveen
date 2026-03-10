import React from "react";
import { FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import { useTheme } from "@application";
import { APP_ROUTES, type HeaderInterface } from "@domain";

import HeaderActionsComponent from "./header-actions.component";
import HeaderLogoComponent from "./header-logo.component";

const HeaderComponent: React.FC<HeaderInterface> = ({
  user,
  onToggleSidebar,
  isAutentificated,
}) => {
  const location = useLocation();
  const { theme } = useTheme();

  const isLoginPage = location.pathname === APP_ROUTES.LOGIN;
  const isRegisterPage = location.pathname === APP_ROUTES.REGISTER;
  const isMinimalHeader = isLoginPage || isRegisterPage;

  return (
    <header className="sticky top-4 z-[1000]">
      <div
        className="mx-auto w-full h-24 flex items-center justify-between"
        style={{
          backgroundColor: theme.colors.surface,
          boxShadow: theme.shadow.md,
          border: `1px solid ${theme.colors.border}`,
          color: theme.colors.text,
        }}
      >
        <div className="flex items-center gap-3 px-8">
          {isAutentificated && !isMinimalHeader && (
            <button
              onClick={onToggleSidebar}
              className="p-2 rounded-lg"
              style={{ backgroundColor: theme.colors.muted }}
            >
              <FaBars style={{ color: theme.colors.primary }} />
            </button>
          )}

          <HeaderLogoComponent isAutentificated={isAutentificated} />
        </div>

        <div className="px-4">
          <HeaderActionsComponent
            user={user ?? null}
            isAutentificated={isAutentificated}
            isLoginPage={isLoginPage}
            isRegisterPage={isRegisterPage}
            isMinimalHeader={isMinimalHeader}
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
