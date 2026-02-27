import { createContext } from "react";

import type { ThemeContextValue } from "../../interface";

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export const STORAGE_KEY = "app_theme";
