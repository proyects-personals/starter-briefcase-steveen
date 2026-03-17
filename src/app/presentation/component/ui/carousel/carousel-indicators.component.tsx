import React from "react";

import type { IIndicators } from "@domain";

/**
 * @description Renderiza una fila de puntos que representan cada slide del carrusel.
 * El punto activo se destaca con un tamano mayor y el color primario del tema.
 * Incluye transiciones suaves de ancho y escala al cambiar de slide.
 *
 * @component
 * @param {IIndicators} props Propiedades del componente
 * @param {number} props.length Numero de slides
 * @param {number} props.current Indice del slide activo
 * @param {(index: number) => void} props.onChange Callback al hacer click en un punto
 * @param {IAppTheme} props.theme Tema actual de la aplicacion
 * @param {(text: string) => string} props.translate Función de traduccion
 * @returns {JSX.Element} Indicadores del carrusel
 * @version 1.0.1
 */
const CarouselIndicatorsComponent: React.FC<IIndicators> = ({
  length,
  current,
  onChange,
  theme,
  translate,
}) => {
  const indicatorIds = Array.from(
    { length },
    (_, idx) => `carousel-indicator-${idx}`,
  );

  return (
    <div
      className="flex gap-4 mt-8 justify-center items-center py-2"
      role="tablist"
      aria-label={translate("components.ui.carousel.navigation_label")}
    >
      {indicatorIds.map((id, idx) => {
        const isActive = idx === current;

        const buttonDynamicStyle: React.CSSProperties = {
          backgroundColor: isActive
            ? theme.colors.primary
            : theme.colors.textSecondary,
          boxShadow: isActive ? `0 0 15px ${theme.colors.primary}66` : "none",
          outlineColor: theme.colors.primary,
        };

        return (
          <button
            key={id}
            id={id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(idx)}
            className={`
              relative h-2.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
              ${
                isActive
                  ? "w-10 opacity-100 shadow-lg"
                  : "w-2.5 opacity-40 hover:opacity-70 hover:scale-110"
              }
              focus:outline-none focus:ring-2 focus:ring-offset-2
            `}
            style={buttonDynamicStyle}
            title={`${translate("components.ui.carousel.go_to_slide")} ${idx + 1}`}
          >
            {isActive && (
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ backgroundColor: theme.colors.primary }}
              />
            )}

            <span className="sr-only">
              {translate("components.ui.carousel.slide")} {idx + 1}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CarouselIndicatorsComponent;
