import type { IAppTheme } from "@domain";

/**
 * @file emerald.theme
 * @description Tema futurista con estética Cyber-Emerald.
 * Enfoque en alta tecnología, tonos neón y contrastes eléctricos.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const emeraldTheme: IAppTheme = {
  name: "emerald",
  colors: {
    background: "oklch(15% 0.04 220)",
    backgroundGlass: "oklch(18% 0.05 220 / 0.75)",
    borderGlass: "oklch(40% 0.12 160 / 0.3)",

    black: "oklch(5% 0.01 220)",
    white: "oklch(98% 0.01 220)",

    surface: "oklch(20% 0.06 220)",
    text: "oklch(92% 0.04 160)",
    textSecondary: "oklch(75% 0.08 160 / 0.8)",

    primary: "oklch(78% 0.18 160)",
    primaryHover: "oklch(82% 0.22 160)",

    secondary: "oklch(65% 0.25 300)",
    secondaryHover: "oklch(70% 0.28 300)",
    accent: "oklch(88% 0.15 190)",

    muted: "oklch(25% 0.05 220)",
    border: "oklch(35% 0.1 160 / 0.5)",
    shadow: "rgba(0, 255, 170, 0.15)",

    error: "oklch(60% 0.2 25)",
    warning: "oklch(82% 0.15 90)",
    success: "oklch(80% 0.2 155)",
    info: "oklch(75% 0.15 210)",
    hover: "oklch(28% 0.08 160 / 0.2)",
    focus: "oklch(78% 0.18 160 / 0.4)",
    disabled: "oklch(30% 0.02 220 / 0.6)",
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
    sm: "0.25rem",
    md: "0.6rem",
    lg: "1rem",
    full: "9999px",
  },
  shadow: {
    sm: "0 2px 4px rgba(0, 255, 170, 0.1)",
    md: "0 8px 20px rgba(0, 255, 170, 0.15)",
    lg: "0 15px 30px rgba(0, 255, 170, 0.2)",
    xl: "0 25px 50px rgba(0, 255, 170, 0.25)",
  },
};
