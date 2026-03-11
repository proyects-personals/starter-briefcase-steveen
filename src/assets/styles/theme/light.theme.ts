import type { IAppTheme } from "@domain";

/**
 * @file light.theme
 * @description Tema claro profesional para la aplicación.
 *              Contiene todos los colores, tipografía, bordes y sombras
 *              según la interfaz AppTheme, listo para usar con PageWrapper, Layout y componentes.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const lightTheme: IAppTheme = {
  name: "light",
  colors: {
    background: "oklch(100% 0 0)",
    surface: "oklch(98% 0 0)", // base-200
    text: "oklch(21% 0.006 285.885)", // base-content
    textSecondary: "oklch(60% 0.005 285.823)",
    primary: "oklch(45% 0.24 277.023)",
    primaryHover: "oklch(40% 0.24 277.023)",
    secondary: "oklch(65% 0.241 354.308)",
    secondaryHover: "oklch(60% 0.241 354.308)",
    accent: "oklch(77% 0.152 181.912)",
    muted: "oklch(95% 0 0)",
    border: "oklch(80% 0 0)",
    shadow: "rgba(0,0,0,0.08)",
    error: "oklch(71% 0.194 13.428)",
    warning: "oklch(82% 0.189 84.429)",
    success: "oklch(76% 0.177 163.223)",
    info: "oklch(74% 0.16 232.661)",
    hover: "oklch(96% 0 0)",
    focus: "oklch(94% 0 0)",
    disabled: "oklch(90% 0 0)",
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
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 10px 15px rgba(0,0,0,0.15)",
    xl: "0 20px 25px rgba(0,0,0,0.2)",
  },
};
