import { createContext } from "react";

import type { TranslateContextType } from "../../interface";
import type { Language } from "../../type";

export const TranslateContext = createContext<TranslateContextType | undefined>(
  undefined,
);

export const SUPPORTED_LANGUAGES: Language[] = ["es", "en"];
