import { useEffect, useState, type JSX } from "react";

import {
  THEME_STORAGE_KEY,
  ThemeContext,
  themeUtil,
  type IChildren,
  type ThemeNameType,
} from "@domain";

/**
 * @description Proveedor de contexto de tema.
 *              Expone el tema actual, su nombre y una función para cambiarlo.
 *
 * @param {ThemeProviderProps} props Props del proveedor
 * @returns {JSX.Element} Proveedor de contexto de tema
 */
export function ThemeProvider({ children }: IChildren): JSX.Element {
  const [ThemeNameType, setThemeNameType] = useState<ThemeNameType>(
    themeUtil.resolveInitialTheme(),
  );

  /**
   * @description Persiste el tema seleccionado en localStorage
   *              cada vez que cambia.
   */
  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, ThemeNameType);
  }, [ThemeNameType]);

  /**
   * @description Cambia el tema de la aplicación.
   * @param {ThemeNameType} newTheme Nuevo tema a aplicar
   */
  const setTheme = (newTheme: ThemeNameType): void => {
    setThemeNameType(newTheme);
  };

  const theme = themeUtil.resolveThemeConfig(ThemeNameType);

  return (
    <ThemeContext.Provider
      value={{ theme, themeName: ThemeNameType, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
