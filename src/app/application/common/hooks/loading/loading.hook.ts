import { useContext } from "react";

import { LoadingContext, type LoadingInferface } from "@domain";

export const useLoading = (): LoadingInferface => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading debe usarse dentro de LoadingProvider");
  }
  return context;
};
