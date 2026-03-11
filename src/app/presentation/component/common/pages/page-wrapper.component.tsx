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
 *
 *              Usa el sistema de Theme para colores,
 *              tipografía y consistencia visual.
 */
const PageWrapperComponent: React.FC<IPageWrapper> = ({
  children,
  className,
  isBackground = false,
  padding = "px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10",
}) => {
  const { theme } = useTheme();

  return (
    <section
      className={clsx(
        "w-full h-full",
        "transition-colors duration-300 ease-in-out",
        padding,
        className,
      )}
      style={{
        backgroundColor: isBackground ? theme.colors.background : "transparent",
        fontFamily: theme.font.family,
      }}
    >
      <div
        className="
          grid
          grid-cols-4
          md:grid-cols-8
          lg:grid-cols-12
          gap-4 md:gap-5 lg:gap-6
          w-full
          h-full
          mx-auto
        "
        style={{
          maxWidth: "1600px",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default PageWrapperComponent;
