import { useContext } from "react";

import { ThemeContext, type IThemeContextValue } from "@domain";

/**
 * @description Hook que expone el contexto de tema.
 * @throws {Error} Si se usa fuera de ThemeProvider
 *
 * @returns {IChildren} Contexto del tema actual
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useTheme(): IThemeContextValue {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
