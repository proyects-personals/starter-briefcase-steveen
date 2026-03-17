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
 * @version 1.0.1
 */
const CarouselControlsComponent: React.FC<IControls> = ({
  onPrev,
  onNext,
  theme,
  translate,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQueryMaxWidth(BREAKPOINTS.MOBILE);

  if (isMobile) {
    return null;
  }

  const bgColorActive = `color-mix(in oklch, ${theme.colors.surface} 80%, transparent)`;
  const bgColorIdle = `color-mix(in oklch, ${theme.colors.surface} 20%, transparent)`;

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isHovered ? bgColorActive : bgColorIdle,
    color: theme.colors.text,
    border: `1px solid ${isHovered ? theme.colors.primary : theme.colors.border}`,
    width: "48px",
    height: "48px",
  };

  return (
    <div
      className="absolute inset-0 z-20 pointer-events-none flex items-center justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute left-0 h-full w-20 bg-gradient-to-r from-black/5 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
      />

      <button
        onClick={onPrev}
        style={buttonStyle}
        className={`
          pointer-events-auto ml-2 rounded-full backdrop-blur-md
          flex items-center justify-center transition-all duration-500
          ${
            isHovered
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-30 -translate-x-2 scale-90"
          }
          hover:scale-110 active:scale-95 hover:!opacity-100
        `}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = theme.colors.primary;
          e.currentTarget.style.color = theme.colors.background;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = isHovered
            ? bgColorActive
            : bgColorIdle;
          e.currentTarget.style.color = theme.colors.text;
        }}
        aria-label={translate("components.ui.carousel.previous_slide")}
      >
        <FaChevronLeft size={18} />
      </button>

      <div
        className={`absolute right-0 h-full w-20 bg-gradient-to-l from-black/5 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
      />

      <button
        onClick={onNext}
        style={buttonStyle}
        className={`
          pointer-events-auto mr-2 rounded-full backdrop-blur-md
          flex items-center justify-center transition-all duration-500
          ${
            isHovered
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-30 translate-x-2 scale-90"
          }
          hover:scale-110 active:scale-95 hover:!opacity-100
        `}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = theme.colors.primary;
          e.currentTarget.style.color = theme.colors.background;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = isHovered
            ? bgColorActive
            : bgColorIdle;
          e.currentTarget.style.color = theme.colors.text;
        }}
        aria-label={translate("components.ui.carousel.next_slide")}
      >
        <FaChevronRight size={18} />
      </button>
    </div>
  );
};

export default CarouselControlsComponent;
