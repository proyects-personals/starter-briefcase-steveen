import type { IAppTheme } from "@domain";

/**
 * @file dark.theme
 * @description Tema oscuro premium con estética Deep Midnight.
 * Optimizado para OLED, con mejor contraste y efectos de cristal realistas.
 * @author Steveen Cues
 * @version 1.2.0
 */
export const darkTheme: IAppTheme = {
  name: "dark",
  colors: {
    background: "oklch(12% 0.02 258.89)",
    backgroundGlass: "oklch(14% 0.03 258.89 / 0.7)",
    borderGlass: "oklch(25% 0.04 258.89 / 0.4)",

    black: "oklch(0% 0 0)",
    white: "oklch(100% 0 0)",

    surface: "oklch(18% 0.02 258.89)",
    text: "oklch(95% 0.01 258.89)",
    textSecondary: "oklch(70% 0.02 258.89)",

    primary: "oklch(65% 0.2 258.89)",
    primaryHover: "oklch(70% 0.2 258.89)",

    secondary: "oklch(70% 0.18 354.3)",
    secondaryHover: "oklch(75% 0.18 354.3)",
    accent: "oklch(85% 0.14 185)",

    muted: "oklch(22% 0.02 258.89)",
    border: "oklch(28% 0.03 258.89)",
    shadow: "rgba(0, 0, 0, 0.4)",

    error: "oklch(65% 0.22 28)",
    warning: "oklch(85% 0.18 85)",
    success: "oklch(75% 0.16 150)",
    info: "oklch(72% 0.14 240)",
    hover: "oklch(24% 0.03 258.89)",
    focus: "oklch(30% 0.04 258.89)",
    disabled: "oklch(20% 0.01 258.89 / 0.5)",
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
    sm: "0 1px 2px rgba(0, 0, 0, 0.5)",
    md: "0 8px 20px rgba(0, 0, 0, 0.4)",
    lg: "0 15px 30px rgba(0, 0, 0, 0.5)",
    xl: "0 25px 50px rgba(0, 0, 0, 0.6)",
  },
};
