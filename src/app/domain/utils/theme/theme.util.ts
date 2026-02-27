import { darkTheme, lightTheme } from "@/assets";

import { STORAGE_KEY } from "../../constants";

import type { AppTheme } from "../../interface";
import type { ThemeName } from "../../type";

/**
 * @description Detecta el tema preferido del sistema operativo.
 * @returns {ThemeName} Tema del sistema ("light" | "dark")
 */
function getSystemTheme(): ThemeName {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * @description Obtiene el tema almacenado en localStorage si es válido.
 * @returns {ThemeName | null} Tema almacenado o null si no existe o es inválido
 */
function getStoredTheme(): ThemeName | null {
  const storedTheme = localStorage.getItem(STORAGE_KEY);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return null;
}

/**
 * @description Resuelve el tema inicial de la aplicación.
 *              Prioridad:
 *              1. Tema almacenado en localStorage
 *              2. Tema del sistema operativo
 *
 * @returns {ThemeName} Tema inicial
 */
export function resolveInitialTheme(): ThemeName {
  return getStoredTheme() ?? getSystemTheme();
}

/**
 * @description Devuelve el objeto de tema correspondiente al nombre del tema.
 * @param {ThemeName} themeName Nombre del tema
 * @returns {AppTheme} Tema de la aplicación
 */
export function resolveTheme(themeName: ThemeName): AppTheme {
  return themeName === "dark" ? darkTheme : lightTheme;
}
