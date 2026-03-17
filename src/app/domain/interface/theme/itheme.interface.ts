import type { ThemeNameType } from "@/app/domain";

/**
 * @description Valor expuesto por el ThemeContext.
 * Contiene el tema actual, su nombre y la función para cambiarlo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface IThemeContextValue {
  theme: IAppTheme;
  themeName: ThemeNameType;
  setTheme: (theme: ThemeNameType) => void;
}

/**
 * @interface IThemeSwitcher
 * @description Props para el componente ThemeSwitcher.
 *              Permite personalizar el estilo externo del componente
 *              encargado de cambiar entre los temas de la aplicación
 *              (por ejemplo: claro y oscuro).
 */
export interface IThemeSwitcher {
  className?: string;
}

/**
 * @description Representa un tema completo de la aplicación.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface IAppTheme {
  name: ThemeNameType;

  colors: {
    background: string;
    backgroundGlass: string;
    borderGlass: string;
    black: string;
    white: string;
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

  shadow: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
