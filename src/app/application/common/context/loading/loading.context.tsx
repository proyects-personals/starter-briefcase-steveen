import React, { useState } from "react";

import {
  LoadingContext,
  validationUtil,
  type IChildren,
  type ILoading,
  type ILoadingOptions,
} from "@domain";
import { LoadingAppComponent } from "@presentation";

/**
 * @description Proveedor global de Loading.
 * Permite mostrar un spinner o un logo configurable en toda la app.
 * @version 1.2.0
 */
export const LoadingProvider: React.FC<IChildren> = ({ children }) => {
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
  const show = (options?: ILoadingOptions): void => {
    setLogo(
      validationUtil.safeValue(options?.logo, undefined, (v) => v !== ""),
    );
    setColor(
      validationUtil.safeValue(options?.color, DEFAULT_COLOR, (v) => v !== ""),
    );
    setSize(
      validationUtil.safeValue(
        options?.size,
        DEFAULT_SIZE,
        (v) => !isNaN(v) && v > 0,
      ),
    );
    setIsVisible(true);
  };

  /** @description Oculta el loading */
  const hide = (): void => setIsVisible(false);

  const context: ILoading = { show, hide, logo, color, size };

  return (
    <LoadingContext.Provider value={context}>
      {children}
      {isVisible && <LoadingAppComponent />}
    </LoadingContext.Provider>
  );
};
