import { useEffect, useState, type JSX } from "react";

import {
  ThemeContext,
  themeUtil,
  type IChildren,
  type ThemeNameType,
} from "@domain";

/**
 * @component ThemeProvider
 * @description Proveedor de contexto que gestiona el estado global del tema visual.
 * Soporta múltiples temas (Light, Dark, Emerald, etc.) y persiste la elección en LocalStorage.
 * @param {IChildren} props - Componentes hijos.
 * @returns {JSX.Element} Provider con el estado del tema sincronizado.
 * @version 1.2.1
 * @author Steveen Cues
 */
export function ThemeProvider({ children }: IChildren): JSX.Element {
  /**
   * @description
   * Inicializa el estado recuperando la preferencia guardada o detectando el sistema.
   * La lógica de resolución reside en themeUtil para mantener el componente limpio.
   */
  const [themeName, setThemeName] = useState<ThemeNameType>(() =>
    themeUtil.resolveInitialTheme(),
  );

  /**
   * @description Sincronización con el almacenamiento local.
   * Cada vez que el usuario cambia el tema, se actualiza automáticamente la Storage.
   */
  useEffect((): void => {
    themeUtil.saveTheme(themeName);
    document.body.setAttribute("data-theme", themeName);
  }, [themeName]);

  /**
   * @description Actualiza el nombre del tema activo.
   * @param {ThemeNameType} newTheme - Identificador del nuevo tema.
   */
  const setTheme = (newTheme: ThemeNameType): void => {
    setThemeName(newTheme);
  };

  /**
   * @description
   * Obtiene el objeto de configuración (colores, sombras, etc.) basado en el nombre actual.
   */
  const theme = themeUtil.resolveThemeConfig(themeName);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeName,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
