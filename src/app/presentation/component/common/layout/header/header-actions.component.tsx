import React from "react";

import { LanguageSwitcherComponent } from "../../lenguage";
import { ThemeSwitcherComponent } from "../../theme";

import HeaderAuthButtonsComponent from "./header-auth-buttons.component";
import HeaderUserMenuComponent from "./header-user-menu.component";

import type { UserModel } from "@domain";

interface HeaderActionsProps {
  user?: UserModel | null;
  isAuthenticated: boolean;
}

const HeaderActionsComponent: React.FC<HeaderActionsProps> = ({
  user,
  isAuthenticated,
}) => {
  if (isAuthenticated && user) {
    return <HeaderUserMenuComponent user={user} />;
  }

  return (
    <>
      {!isAuthenticated && (
        <nav className="flex items-center gap-3 md:gap-4">
          <HeaderAuthButtonsComponent />

          <div className="flex items-center gap-2 ml-3">
            <LanguageSwitcherComponent />
            <ThemeSwitcherComponent />
          </div>
        </nav>
      )}
    </>
  );
};

export default HeaderActionsComponent;
