import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import { useTheme } from "@application";
import { ThemeEnum, type IThemeSwitcher } from "@domain";

/**
 * Interruptor de Tema (Light/Dark) con estilos dinámicos.
 * * @description
 * Permite al usuario alternar entre los modos visuales de la aplicación.
 * - **Lógica:** Realiza un toggle entre "light" y "dark" usando el hook `useTheme`.
 * - **Estética:** Implementa efectos de vidrio (glassmorphism) mediante `backdrop-blur`
 * y mezclas de color inteligentes con `color-mix`.
 * - **Accesibilidad:** Incluye `aria-label` para facilitar la navegación con lectores de pantalla.
 * * @component
 * @param {IThemeSwitcher} props - Propiedades del componente.
 * @param {string} [props.className] - Clases opcionales para ajustes de layout.
 * * @version 1.0.0
 * @returns {JSX.Element} Un botón interactivo que cambia el estado global del tema.
 */
const ThemeSwitcherComponent: React.FC<IThemeSwitcher> = ({ className }) => {
  const { themeName, setTheme, theme } = useTheme();

  const isDark = themeName === ThemeEnum.DARK;

  return (
    <button
      onClick={() => setTheme(isDark ? ThemeEnum.LIGHT : ThemeEnum.DARK)}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg backdrop-blur-md transition-all ${className ?? ""}`}
      style={{
        backgroundColor:
          theme.name === ThemeEnum.DARK
            ? `color-mix(in oklch, ${theme.colors.surface} 70%, transparent)`
            : `color-mix(in oklch, ${theme.colors.background} 85%, transparent)`,
        border: `1px solid ${theme.colors.border}`,
        color: theme.colors.text,
      }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaMoon style={{ color: theme.colors.primary }} />
      ) : (
        <FaSun style={{ color: theme.colors.primary }} />
      )}
      <span className="text-sm font-medium capitalize">{themeName}</span>
    </button>
  );
};

export default ThemeSwitcherComponent;
