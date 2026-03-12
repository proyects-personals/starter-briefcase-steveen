import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import { useTheme } from "@application";
import { ThemeEnum, type IThemeSwitcher } from "@domain";

/**
 * Interruptor de tema usando completamente los colores del theme.
 * - Responsive y moderno.
 * - Glassmorphism con backdrop-blur y color-mix.
 * - Accesible con aria-label.
 * - Transiciones suaves en hover y cambio de icono.
 */
const ThemeSwitcherComponent: React.FC<IThemeSwitcher> = ({ className }) => {
  const { themeName, setTheme, theme } = useTheme();

  const isDark = themeName === ThemeEnum.DARK;

  const buttonStyle = {
    backgroundColor: `color-mix(in oklch, ${theme.colors.surface} 70%, transparent)`,
    border: `1px solid ${theme.colors.border}`,
    color: theme.colors.text,
  };

  return (
    <button
      onClick={() => setTheme(isDark ? ThemeEnum.LIGHT : ThemeEnum.DARK)}
      className={`
        flex items-center gap-2 px-3 py-1.5 rounded-xl
        backdrop-blur-md transition-all duration-300
        hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1
        ${className ?? ""}
      `}
      style={buttonStyle}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaMoon
          style={{ color: theme.colors.primary, transition: "color 0.3s" }}
        />
      ) : (
        <FaSun
          style={{ color: theme.colors.primary, transition: "color 0.3s" }}
        />
      )}
      <span className="text-sm sm:text-base font-medium capitalize">
        {themeName}
      </span>
    </button>
  );
};

export default ThemeSwitcherComponent;
