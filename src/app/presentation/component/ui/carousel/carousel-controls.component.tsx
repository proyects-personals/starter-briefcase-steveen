import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { BREAKPOINTS, useMediaQueryMaxWidth, type IControls } from "@domain";

/**
 * @description Muestra botones flotantes de "anterior" y "siguiente" que aparecen
 * al interactuar con el carrusel (hover o touch). Los botones
 * utilizan los colores y sombras definidos en el tema de la aplicación.
 *
 * @component
 * @param {IControls} props Propiedades del componente
 * @param {() => void} props.onPrev Función para ir al slide anterior
 * @param {() => void} props.onNext Función para ir al siguiente slide
 * @param {IAppTheme} props.theme Tema actual de la aplicación
 * @returns {JSX.Element} Controles del carrusel
 */
const CarouselControlsComponent: React.FC<IControls> = ({
  onPrev,
  onNext,
  theme,
  translate,
}) => {
  const [hovered, setHovered] = useState(false);
  const isMobile = useMediaQueryMaxWidth(BREAKPOINTS.MOBILE);
  const ICONSIZE = 16;

  if (isMobile) {
    return null;
  }

  const padding = theme.borderRadius.md;
  const iconSize = parseFloat(theme.font.sizes.lg) * ICONSIZE;

  const buttonStyle = {
    backgroundColor: `${theme.colors.primary}33`,
    color: theme.colors.white,
    boxShadow: theme.shadow.md,
    padding,
  };

  return (
    <div
      className="absolute inset-0 flex items-center justify-between px-2 md:px-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        onClick={onPrev}
        style={buttonStyle}
        className={`rounded-full backdrop-blur-md transition-all duration-300 ease-in-out flex items-center justify-center transform
          ${hovered ? "opacity-100 scale-110" : "opacity-0 scale-90"}
          hover:text-[${theme.colors.secondary}]`}
        aria-label={translate("components.ui.carousel.previous_slide")}
      >
        <FaChevronLeft size={iconSize} />
      </button>

      <button
        onClick={onNext}
        style={buttonStyle}
        className={`rounded-full backdrop-blur-md transition-all duration-300 ease-in-out flex items-center justify-center transform
          ${hovered ? "opacity-100 scale-110" : "opacity-0 scale-90"}
          hover:text-[${theme.colors.secondary}]`}
        aria-label={translate("components.ui.carousel.next_slide")}
      >
        <FaChevronRight size={iconSize} />
      </button>
    </div>
  );
};

export default CarouselControlsComponent;
