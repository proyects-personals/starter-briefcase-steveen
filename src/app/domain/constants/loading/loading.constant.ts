import { createContext } from "react";

import type { LoadingInferface } from "../../interface";

export const LoadingContext = createContext<LoadingInferface | null>(null);
