import { darkTheme, lightTheme, emeraldTheme } from "@/assets";
import { THEME_STORAGE_KEY, ThemeEnum } from "@/app/domain";
import type { ThemeNameType } from "@/app/domain";

/**
 * @class ThemeUtil
 * @description Utilidad para la gestión de temas cumpliendo reglas estrictas de ESLint.
 * @version 1.2.2
 */
export class ThemeUtil {
  /**
   * @description
   * Type Guard para verificar si un string es un ThemeNameType válido.
   * Esto elimina la necesidad de usar 'as' (Type Assertion).
   * @private
   */
  private isThemeName(value: string | null): value is ThemeNameType {
    if (value === null) return false;
    const validThemes: string[] = Object.values(ThemeEnum);
    return validThemes.includes(value);
  }

  /**
   * @description
   * Detecta la preferencia de color del sistema operativo.
   * @private
   */
  private getSystemTheme(): ThemeNameType {
    if (typeof window === "undefined") return ThemeEnum.LIGHT;
    
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDarkMode ? ThemeEnum.DARK : ThemeEnum.LIGHT;
  }

  /**
   * @description
   * Recupera el tema almacenado validando explícitamente casos nullish.
   * @private
   */
  private getStoredTheme(): ThemeNameType | null {
    if (typeof window === "undefined") return null;

    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    
    if (this.isThemeName(storedTheme)) {
      return storedTheme;
    }

    return null;
  }

  /**
   * @description
   * Determina el tema inicial.
   */
  public resolveInitialTheme(): ThemeNameType {
    const stored = this.getStoredTheme();
    return stored !== null ? stored : this.getSystemTheme();
  }

  /**
   * @description
   * Resuelve el objeto de configuración basado en el nombre del tema.
   */
  public resolveThemeConfig(themeName: ThemeNameType): typeof darkTheme {
    const configMap: Record<ThemeNameType, typeof darkTheme> = {
      [ThemeEnum.LIGHT]: lightTheme,
      [ThemeEnum.DARK]: darkTheme,
      [ThemeEnum.EMERALD]: emeraldTheme,
    };

    return configMap[themeName];
  }

  /**
   * @description
   * Guarda la elección del tema.
   */
  public saveTheme(themeName: ThemeNameType): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_STORAGE_KEY, themeName);
    }
  }

  /**
   * @description
   * Retorna la llave para internacionalización.
   */
  public getThemeLabelKey(themeName: ThemeNameType): string {
    return `theme.${themeName}`;
  }
}

export const themeUtil = new ThemeUtil();