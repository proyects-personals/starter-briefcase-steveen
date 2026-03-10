import type { AppTheme } from "@domain";

/**
 * @file dark.theme
 * @description Tema oscuro profesional para la aplicación.
 *              Contiene todos los colores, tipografía, bordes y sombras
 *              según la interfaz AppTheme, listo para usar con PageWrapper, Layout y componentes.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const darkTheme: AppTheme = {
  name: "dark",
  colors: {
    background: "oklch(25.33% 0.016 252.42)", // base-100
    surface: "oklch(23.26% 0.014 253.1)", // base-200
    text: "oklch(97.807% 0.029 256.847)", // base-content
    textSecondary: "oklch(60% 0.005 285.823)",
    primary: "oklch(58% 0.233 277.117)",
    primaryHover: "oklch(52% 0.233 277.117)",
    secondary: "oklch(65% 0.241 354.308)",
    secondaryHover: "oklch(60% 0.241 354.308)",
    accent: "oklch(77% 0.152 181.912)",
    muted: "oklch(21.15% 0.012 254.09)",
    border: "oklch(30% 0.01 250.0)",
    shadow: "rgba(0,0,0,0.5)",
    error: "oklch(71% 0.194 13.428)",
    warning: "oklch(82% 0.189 84.429)",
    success: "oklch(76% 0.177 163.223)",
    info: "oklch(74% 0.16 232.661)",
    hover: "oklch(27% 0.01 250.0)",
    focus: "oklch(28% 0.01 250.0)",
    disabled: "oklch(20% 0 0)",
  },
  font: {
    family: "'Inter', sans-serif",
    sizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
    },
    weights: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    full: "9999px",
  },
  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.2)",
    md: "0 4px 6px rgba(0,0,0,0.3)",
    lg: "0 10px 15px rgba(0,0,0,0.35)",
    xl: "0 20px 25px rgba(0,0,0,0.4)",
  },
};
