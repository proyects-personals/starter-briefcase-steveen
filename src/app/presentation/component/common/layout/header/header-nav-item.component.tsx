import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useTheme, useLanguage, useAnalytics } from "@application";
import {
  FONT_WEIGHT_ACTIVE,
  FONT_WEIGHT_DEFAULT,
  type IHeaderNavItem,
} from "@domain";

/**
 * HeaderNavItemComponent
 *
 * @description
 * Componente de navegación del header con soporte para:
 * - Rutas internas (React Router)
 * - Enlaces externos
 * - Estado activo
 * - Tracking avanzado de analytics
 *
 * Incluye buenas prácticas de medición:
 * - Categoría consistente
 * - Acción estructurada (contexto + tipo + destino)
 */
const HeaderNavItemComponent: React.FC<IHeaderNavItem> = ({
  to,
  icon: Icon,
  text,
  target = "_self",
}) => {
  const location = useLocation();
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { event } = useAnalytics();

  const isExternal = target === "_blank";
  const isActive = location.pathname === to;

  /**
   * Tracking: navegación del header
   *
   * @description
   * Registra la interacción del usuario con elementos de navegación.
   * Se estructura el evento con:
   *
   * - Contexto: Header
   * - Tipo: Internal | External
   * - Label: texto del item
   * - Path: destino
   *
   * Esto permite análisis más profundo en herramientas como GA4.
   *
   * @returns {void}
   *
   * @example
   * "Header | Internal | Projects | /projects"
   */
  const handleNavigationClick = (): void => {
    const type = isExternal ? "External" : "Internal";
    const label = t(text);

    event("Navigation", `Header | ${type} | ${label} | ${to}`);
  };

  /**
   * @description
   * Props compartidas entre <Link> y <a>
   */
  const commonProps = {
    className: "flex items-center gap-1 transition-all duration-200",
    style: {
      color: isActive ? theme.colors.primary : theme.colors.text,
      fontWeight: isActive ? FONT_WEIGHT_ACTIVE : FONT_WEIGHT_DEFAULT,
      borderBottom: isActive
        ? `2px solid ${theme.colors.primary}`
        : "2px solid transparent",
    },
    onClick: handleNavigationClick,
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
