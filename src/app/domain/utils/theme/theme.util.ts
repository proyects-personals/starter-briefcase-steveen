import { darkTheme, lightTheme } from "@/assets";

import { THEME_STORAGE_KEY } from "../../constants";
import { ThemeEnum } from "../../enums";

import type { ThemeNameType } from "../../type";

/**
 * Utilidad para la gestión y resolución del tema visual (Light/Dark).
 * * @description
 * Esta clase centraliza la lógica de detección de preferencias del sistema,
 * persistencia en almacenamiento local y resolución de objetos de estilo.
 * * @version 1.1.0
 */
export class ThemeUtil {
  /**
   * Detecta el tema preferido configurado en el sistema operativo del usuario.
   * * @private
   * @returns {ThemeNameType} "dark" si el sistema está en modo oscuro, de lo contrario "light".
   */
  private getSystemTheme(): ThemeNameType {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? ThemeEnum.DARK
      : ThemeEnum.LIGHT;
  }

  /**
   * Recupera el tema guardado en el almacenamiento local.
   * * @private
   * @returns {ThemeNameType | null} El tema guardado o null si no existe o no es válido.
   */
  private getStoredTheme(): ThemeNameType | null {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === ThemeEnum.LIGHT || storedTheme === ThemeEnum.DARK
      ? storedTheme
      : null;
  }

  /**
   * Resuelve el tema inicial que debe aplicar la aplicación al cargar.
   * * @description
   * Aplica la siguiente prioridad:
   * 1. Preferencia guardada por el usuario en `localStorage`.
   * 2. Preferencia del sistema operativo mediante `matchMedia`.
   * * @returns {ThemeNameType} Nombre del tema resultante.
   * @example
   * const initialThemeName = themeUtil.resolveInitialTheme();
   */
  public resolveInitialTheme(): ThemeNameType {
    return this.getStoredTheme() ?? this.getSystemTheme();
  }

  /**
   * Retorna el objeto de configuración del tema basado en su nombre.
   * * @param {ThemeNameType} themeName - Nombre del tema ("light" | "dark").
   * @returns {typeof darkTheme} Objeto de tema importado de los assets.
   */
  public resolveThemeConfig(themeName: ThemeNameType): typeof darkTheme {
    // <--- Tipo de retorno añadido
    return themeName === ThemeEnum.DARK ? darkTheme : lightTheme;
  }

  /**
   * Persiste la elección del tema en el almacenamiento local.
   * * @param {ThemeNameType} themeName - El tema a guardar.
   */
  public saveTheme(themeName: ThemeNameType): void {
    localStorage.setItem(THEME_STORAGE_KEY, themeName);
  }
}

export const themeUtil = new ThemeUtil();
