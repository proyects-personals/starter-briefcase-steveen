import React from "react";
import { Link } from "react-router-dom";

import { useTheme, useLanguage } from "@application";
import { logoMadjs } from "@assets";

import { LanguageSwitcherComponent } from "../../lenguage";
import { ThemeSwitcherComponent } from "../../theme";

import type { IHeaderLogos } from "@domain";

/**
 * Componente de cabecera que muestra los logos principales y selectores globales.
 * @description
 * Este componente es dinámico y reacciona al desplazamiento de la página:
 * - Se oculta suavemente cuando el usuario hace scroll hacia abajo para ahorrar espacio.
 * - Incluye accesos directos al inicio, el selector de idiomas y el switch de tema.
 * * @component
 * @param {IHeaderLogos} props - Propiedades del componente.
 * @param {boolean} props.scrolled - Estado que determina si el componente debe colapsar y ocultarse.
 * * @version 1.0.0
 * @returns {JSX.Element} Una barra de identidad visual con soporte para temas y i18n.
 */
const HeaderLogosComponent: React.FC<IHeaderLogos> = ({ scrolled }) => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  /**
   * @description Estilos calculados del tema.
   * Se aplican mediante el atributo 'style' para permitir cambios de color en tiempo real.
   */
  const containerStyles = {
    background: theme.colors.surface,
    color: theme.colors.text,
    borderBottom: `1px solid ${theme.colors.border}`,
    boxShadow: theme.shadow.sm,
  };

  return (
    <div
      className={`grid grid-cols-2 px-4 sm:px-14 transition-all duration-500 ease-in-out ${
        scrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto py-2"
      }`}
      style={containerStyles}
    >
      <div className="flex items-center">
        <Link to="/" title={t("header.home")}>
          <img
            src={logoMadjs}
            alt={t("header.logo_ccm")}
            className="h-16 sm:h-20 w-auto cursor-pointer object-contain hover:scale-105 transition-transform"
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
