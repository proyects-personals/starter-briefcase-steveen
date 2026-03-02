import type { ThemeName } from "../../type";
import type { ReactNode } from "react";

/**
 * @description Valor expuesto por el ThemeContext.
 * Contiene el tema actual, su nombre y la función para cambiarlo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeContextValue {
  theme: AppTheme;
  themeName: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

/**
 * @description Props del ThemeProvider
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * @description Representa un tema completo de la aplicación.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface AppTheme {
  name: ThemeName;

  colors: {
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    primary: string;
    primaryHover: string;
    secondary: string;
    secondaryHover: string;
    accent: string;
    muted: string;
    border: string;
    shadow: string;
    error: string;
    warning: string;
    success: string;
    info: string;
    hover: string;
    focus: string;
    disabled: string;
  };
  font: {
    family: string;
    sizes: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
    };
    weights: {
      normal: number;
      medium: number;
      bold: number;
    };
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };

  /** Sombras */
  shadow: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
