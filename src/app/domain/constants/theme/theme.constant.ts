import { createContext } from "react";

import type { IThemeContextValue } from "../../interface";

/**
 * Contexto de React para la gestión del tema visual (Light/Dark mode) de la aplicación.
 * * @description
 * Proporciona el estado actual del tema y las funciones para alternar entre diferentes
 * modos visuales.
 * * @type {React.Context<IThemeContextValue | null>}
 * @version 1.0.0
 * * @example
 * const theme = useContext(ThemeContext);
 * if (!theme) throw new Error("useTheme debe usarse dentro de ThemeProvider");
 */
export const ThemeContext = createContext<IThemeContextValue | null>(null);
