import React, { useState } from "react";

import { LoadingContext } from "@domain";
import { LoadingAppComponent } from "@presentation";

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const show = (): void => setIsVisible(true);
  const hide = (): void => setIsVisible(false);

  return (
    <LoadingContext.Provider value={{ show, hide, isVisible }}>
      {children}
      {isVisible && <LoadingAppComponent />}
    </LoadingContext.Provider>
  );
};
