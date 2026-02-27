import { useEffect, useState, type JSX } from "react";

import {
  resolveInitialTheme,
  resolveTheme,
  STORAGE_KEY,
  ThemeContext,
  type ThemeName,
  type ThemeProviderProps,
} from "@domain";

/**
 * @description Proveedor de contexto de tema.
 *              Expone el tema actual, su nombre y una función para cambiarlo.
 *
 * @param {ThemeProviderProps} props Props del proveedor
 * @returns {JSX.Element} Proveedor de contexto de tema
 */
export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const [themeName, setThemeName] = useState<ThemeName>(resolveInitialTheme);

  /**
   * @description Persiste el tema seleccionado en localStorage
   *              cada vez que cambia.
   */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, themeName);
  }, [themeName]);

  /**
   * @description Cambia el tema de la aplicación.
   * @param {ThemeName} newTheme Nuevo tema a aplicar
   */
  const setTheme = (newTheme: ThemeName): void => {
    setThemeName(newTheme);
  };

  const theme = resolveTheme(themeName);

  return (
    <ThemeContext.Provider value={{ theme, themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
