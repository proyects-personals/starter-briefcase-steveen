import { createContext } from "react";

import type { ILoading } from "../../interface";

/**
 * Contexto de React para gestionar el estado de carga global de la aplicación.
 * * @description
 * Proporciona un mecanismo centralizado para controlar y acceder al estado de carga
 * * @type {React.Context<ILoading | null>}
 * @version 1.0.0
 * * @example
 * const loadingState = useContext(LoadingContext);
 * if (!loadingState) throw new Error("useLoading debe usarse dentro de LoadingProvider");
 */
export const LoadingContext = createContext<ILoading | null>(null);
