import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useTheme, useLanguage } from "@application";

interface Props {
  to: string;
  icon: React.ElementType;
  text: string;
}

const FONT_WEIGHT_ACTIVE = 600;
const FONT_WEIGHT_DEFAULT = 500;

const HeaderNavItemComponent: React.FC<Props> = ({ to, icon: Icon, text }) => {
  const location = useLocation();
  const { theme } = useTheme();
  const { t } = useLanguage();

  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className="flex items-center gap-1 transition-all duration-200"
      style={{
        color: isActive ? theme.colors.primary : theme.colors.text,
        fontWeight: isActive ? FONT_WEIGHT_ACTIVE : FONT_WEIGHT_DEFAULT,
        borderBottom: isActive
          ? `2px solid ${theme.colors.primary}`
          : "2px solid transparent",
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.color = theme.colors.primaryHover;
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.color = theme.colors.text;
        }
      }}
    >
      <span className="text-sm md:text-base lg:text-lg">
        <Icon />
      </span>

      <span className="hidden xl:inline ml-2 text-[11px] lg:text-[13px] uppercase tracking-tight">
        {t(text)}
      </span>
    </Link>
  );
};

export default HeaderNavItemComponent;
