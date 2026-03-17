import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useTheme, useLanguage } from "@application";
import {
  FONT_WEIGHT_ACTIVE,
  FONT_WEIGHT_DEFAULT,
  type IHeaderNavItem,
} from "@domain";

const HeaderNavItemComponent: React.FC<IHeaderNavItem> = ({
  to,
  icon: Icon,
  text,
  target = "_self",
}) => {
  const location = useLocation();
  const { theme } = useTheme();
  const { t } = useLanguage();

  const isExternal = target === "_blank";
  const isActive = location.pathname === to;

  const commonProps = {
    className: "flex items-center gap-1 transition-all duration-200",
    style: {
      color: isActive ? theme.colors.primary : theme.colors.text,
      fontWeight: isActive ? FONT_WEIGHT_ACTIVE : FONT_WEIGHT_DEFAULT,
      borderBottom: isActive
        ? `2px solid ${theme.colors.primary}`
        : "2px solid transparent",
    },
    onMouseEnter: (e: React.MouseEvent<HTMLElement>): void => {
      if (!isActive) {
        e.currentTarget.style.color = theme.colors.primaryHover;
      }
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>): void => {
      if (!isActive) {
        e.currentTarget.style.color = theme.colors.text;
      }
    },
  };

  const content = (
    <>
      <span className="text-sm md:text-base lg:text-lg">
        <Icon />
      </span>

      <span className="hidden xl:inline ml-2 text-[11px] lg:text-[13px] uppercase tracking-tight">
        {t(text)}
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...commonProps}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to} {...commonProps}>
      {content}
    </Link>
  );
};

export default HeaderNavItemComponent;
