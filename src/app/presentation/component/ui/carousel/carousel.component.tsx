import { AnimatePresence } from "framer-motion";
import React, { useState, useCallback, useEffect, type JSX } from "react";
import { useSwipeable } from "react-swipeable";

import {
  CarouselControlsComponent,
  CarouselIndicatorsComponent,
  SlideComponent,
} from "@/app";

import type { ICarousel } from "@domain";

/**
 * @description Componente de carrusel que muestra slides con animaciones, indicadores y controles.
 * Soporta autoplay, pausa al pasar el mouse, y gestos de swipe en dispositivos moviles.
 *
 * @component
 * @param {ICarousel} props Propiedades del componente
 * @param {Array} props.items Lista de slides a mostrar
 * @param {string} [props.height='450px'] Altura del carrusel
 * @param {number} [props.autoPlayInterval=4000] Intervalo en ms para autoplay
 * @param {object} props.theme Tema actual para estilos
 * @param {(text: string) => string} props.translate Funcion para traducciones de texto
 * @returns {JSX.Element} Componente de carrusel completo
 */
const CarouselComponent: React.FC<ICarousel> = ({
  items,
  autoPlayInterval = 4000,
  theme,
  translate,
  height,
}: ICarousel): JSX.Element => {
  const [current, setCurrent] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const DIRECTION_PREV = -1;
  const DIRECTION_NEXT = 1;

  /**
   * @description Cambia de slide segun la direccion
   * @param {number} newDir Direccion del cambio (DIRECTION_PREV | DIRECTION_NEXT)
   */
  const slideChange = useCallback(
    (newDir: number): void => {
      setDirection(newDir);
      setCurrent((prev) => (prev + newDir + items.length) % items.length);
    },
    [items.length],
  );

  /**
   * @description Lanza autoplay del carrusel si no esta pausado
   * @returns {() => void} Limpia el intervalo al desmontar o cambiar estado de pausa
   */
  useEffect((): (() => void) => {
    if (isPaused) {
      return () => {};
    }

    const interval = setInterval(() => {
      slideChange(DIRECTION_NEXT);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPaused, slideChange, autoPlayInterval]);

  /**
   * @description Maneja el cambio de slide al hacer click en los indicadores
   * @param {number} idx Indice del slide seleccionado
   */
  const handleIndicatorChange = (idx: number): void => {
    if (idx === current) {
      return;
    }
    setDirection(idx > current ? DIRECTION_NEXT : DIRECTION_PREV);
    setCurrent(idx);
  };

  /**
   * @description Configuracion de swipe para dispositivos moviles
   */
  const handlers = useSwipeable({
    onSwipedLeft: (): void => slideChange(DIRECTION_NEXT),
    onSwipedRight: (): void => slideChange(DIRECTION_PREV),
    preventScrollOnSwipe: true,
    trackMouse: false,
  });

  return (
    <div
      className="w-full flex flex-col items-center"
      onMouseEnter={(): void => setIsPaused(true)}
      onMouseLeave={(): void => setIsPaused(false)}
    >
      <div
        {...handlers}
        className="relative w-full overflow-hidden rounded-xl"
        style={{ height }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <SlideComponent
            key={current}
            item={items[current]}
            direction={direction}
            theme={theme}
            translate={translate}
          />
        </AnimatePresence>

        <CarouselControlsComponent
          onPrev={(): void => slideChange(DIRECTION_PREV)}
          onNext={(): void => slideChange(DIRECTION_NEXT)}
          theme={theme}
          translate={translate}
        />
      </div>

      <CarouselIndicatorsComponent
        length={items.length}
        current={current}
        onChange={handleIndicatorChange}
        theme={theme}
        translate={translate}
      />
    </div>
  );
};

export default CarouselComponent;
