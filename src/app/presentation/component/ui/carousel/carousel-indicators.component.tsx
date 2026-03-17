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
    <div className="flex gap-3 mt-6 justify-center">
      {indicatorIds.map((id, idx) => {
        const isActive = idx === current;

        return (
          <button
            key={id}
            onClick={() => onChange(idx)}
            className={`h-3 rounded-full transition-all duration-300 ease-in-out transform
              ${isActive ? "w-8 scale-110" : "w-3 scale-100"}`}
            style={{
              backgroundColor: isActive
                ? theme.colors.primary
                : `${theme.colors.muted}88`,
            }}
            aria-label={translate(
              `components.ui.carousel.go_to_slide ${idx + 1}`,
            )}
          />
        );
      })}
    </div>
  );
};

export default CarouselIndicatorsComponent;
