import clsx from "clsx";
import React from "react";

import { useTheme } from "@application";

import type { IPageWrapper } from "@domain";

/**
 * @description Contenedor base de página.
 *              Vive DENTRO del Layout.
 *              NO controla scroll ni alturas.
 *
 *              Grid responsive:
 *              - Mobile: 4 columnas
 *              - Tablet: 8 columnas
 *              - Desktop: 12 columnas
 */
const PageWrapperComponent: React.FC<IPageWrapper> = ({
  children,
  className,
  isBackground = false,
  padding = "p-8",
}) => {
  const { theme } = useTheme();

  return (
    <section
      className={clsx("w-full h-full", padding, className)}
      style={{
        backgroundColor: isBackground ? theme.colors.background : "transparent",
      }}
    >
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 h-full w-full gap-4">
        {children}
      </div>
    </section>
  );
};

export default PageWrapperComponent;
