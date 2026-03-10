import React, { useState } from "react";

import {
  LoadingContext,
  safeValue,
  type ChildrenInterface,
  type LoadingInferface,
  type LoadingOptionsInterface,
} from "@domain";
import { LoadingAppComponent } from "@presentation";

/**
 * @description Proveedor global de Loading.
 * Permite mostrar un spinner o un logo configurable en toda la app.
 * @version 1.2.0
 */
export const LoadingProvider: React.FC<ChildrenInterface> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [logo, setLogo] = useState<string | undefined>();

  const DEFAULT_COLOR = "#fff";
  const DEFAULT_SIZE = 64;
  const [color, setColor] = useState<string>(DEFAULT_COLOR);
  const [size, setSize] = useState<number>(DEFAULT_SIZE);

  /**
   * @description Muestra el loading con opciones opcionales
   * @param options logo, color y tamaño
   */
  const show = (options?: LoadingOptionsInterface): void => {
    setLogo(safeValue(options?.logo, undefined, (v) => v !== ""));
    setColor(safeValue(options?.color, DEFAULT_COLOR, (v) => v !== ""));
    setSize(safeValue(options?.size, DEFAULT_SIZE, (v) => !isNaN(v) && v > 0));
    setIsVisible(true);
  };

  /** @description Oculta el loading */
  const hide = (): void => setIsVisible(false);

  const context: LoadingInferface = { show, hide, logo, color, size };

  return (
    <LoadingContext.Provider value={context}>
      {children}
      {isVisible && <LoadingAppComponent />}
    </LoadingContext.Provider>
  );
};
