import type { IAppTheme } from "@domain";

/**
 * @file light.theme
 * @description Tema claro refinado con estética moderna (Soft UI / Glass).
 * Mejor contraste, coherencia en la paleta OKLCH y sombras suaves.
 * @author Steveen Cues
 * @version 1.2.0
 */
export const lightTheme: IAppTheme = {
  name: "light",
  colors: {
    background: "oklch(98.5% 0.002 247.83)",
    backgroundGlass: "rgba(255, 255, 255, 0.7)",
    borderGlass: "rgba(255, 255, 255, 0.3)",

    black: "oklch(15% 0.01 247.83)",
    white: "oklch(100% 0 0)",

    surface: "oklch(100% 0 0)",
    text: "oklch(25% 0.02 247.83)",
    textSecondary: "oklch(55% 0.015 247.83)",

    primary: "oklch(58% 0.158 258.89)",
    primaryHover: "oklch(52% 0.158 258.89)",

    secondary: "oklch(68% 0.14 12.5)",
    secondaryHover: "oklch(62% 0.14 12.5)",
    accent: "oklch(82% 0.12 175.5)",

    muted: "oklch(96% 0.005 247.83)",
    border: "oklch(91% 0.01 247.83)",
    shadow: "rgba(15, 23, 42, 0.06)",

    error: "oklch(62.8% 0.22 28.1)",
    warning: "oklch(84.5% 0.18 84.3)",
    success: "oklch(72% 0.16 148.5)",
    info: "oklch(70% 0.14 235)",

    hover: "oklch(97.5% 0.01 247.83)",
    focus: "oklch(94% 0.02 247.83)",
    disabled: "oklch(88% 0.005 247.83)",
  },
  font: {
    family: "'Inter', system-ui, -apple-system, sans-serif",
    sizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.625rem",
      "3xl": "2.125rem",
    },
    weights: {
      normal: 400,
      medium: 550,
      bold: 700,
    },
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.75rem",
    lg: "1.25rem",
    full: "9999px",
  },
  shadow: {
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
    md: "0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.03)",
    lg: "0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04)",
    xl: "0 25px 50px -12px rgba(15, 23, 42, 0.15)",
  },
};
