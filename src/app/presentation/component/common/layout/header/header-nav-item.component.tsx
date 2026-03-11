import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useTheme, useLanguage } from "@application";
import {
  FONT_WEIGHT_ACTIVE,
  FONT_WEIGHT_DEFAULT,
  type IHeaderNavItem,
} from "@domain";

/**
 * Item individual de navegación para el encabezado.
 * * @description
 * Representa un enlace de navegación que detecta automáticamente si su ruta
 * coincide con la ubicación actual (`useLocation`). Cambia dinámicamente su
 * estilo (peso de fuente, color y borde inferior) para dar feedback visual de "Estado Activo".
 * * @component
 * @param {IHeaderNavItem} props - Propiedades del ítem.
 * @param {string} props.to - Ruta de destino del enlace.
 * @param {React.ElementType} props.icon - Componente de icono (React Icon) a renderizar.
 * @param {string} props.text - Clave de traducción para el texto del enlace.
 * * @version 1.0.0
 * @returns {JSX.Element} Un enlace `Link` estilizado con soporte para hover y estados activos.
 */
const HeaderNavItemComponent: React.FC<IHeaderNavItem> = ({
  to,
  icon: Icon,
  text,
}) => {
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
