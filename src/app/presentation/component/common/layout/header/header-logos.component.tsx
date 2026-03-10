import React from "react";
import { Link } from "react-router-dom";

import { useTheme, useLanguage } from "@application";
import { logoMadjs } from "@assets";

import { LanguageSwitcherComponent } from "../../lenguage";
import { ThemeSwitcherComponent } from "../../theme";

interface Props {
  scrolled: boolean;
}

const HeaderLogosComponent: React.FC<Props> = ({ scrolled }) => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div
      className={`grid grid-cols-2 px-4 sm:px-14 transition-all duration-500 ${
        scrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
      }`}
      style={{
        background: theme.colors.surface,
        color: theme.colors.text,
        borderBottom: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadow.sm,
      }}
    >
      <div className="flex items-center">
        <Link to="/" title={t("header.home")}>
          <img
            src={logoMadjs}
            alt={t("header.logo_ccm")}
            className="h-16 sm:h-20 w-auto cursor-pointer object-contain"
          />
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <Link to="/" title={t("header.home")}>
          <img
            src={logoMadjs}
            alt={t("header.logo_ecuador")}
            className="hidden sm:block h-16 sm:h-20 w-auto cursor-pointer object-contain"
          />
        </Link>

        <div className="flex items-center gap-2 ml-3">
          <LanguageSwitcherComponent />
          <ThemeSwitcherComponent />
        </div>
      </div>
    </div>
  );
};

export default HeaderLogosComponent;
