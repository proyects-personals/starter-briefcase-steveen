import { useContext } from "react";

import { LoadingContext, type ILoading } from "@domain";

/**
 * @description Hook para usar el LoadingProvider en cualquier componente
 */
export const useLoading = (): ILoading => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading debe usarse dentro de LoadingProvider");
  }
  return context;
};
