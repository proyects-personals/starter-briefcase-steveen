import { AnimatePresence } from "framer-motion";
import { useEffect, useState, type JSX } from "react";
import { useNavigate } from "react-router-dom";

import { BannerItemComponent } from "@/app";

import type { IAnimatedBanner } from "@domain";

/**
 * Componente principal que renderiza un banner animado con rotación automática y pausa al interactuar.
 * @description
 * El banner rota automáticamente cada X milisegundos. La rotación se detiene si el usuario:
 * - Pasa el cursor sobre el banner (onMouseEnter).
 * - Mantiene presionado el banner en dispositivos táctiles (onTouchStart).
 *
 * @param {IAnimatedBanner} props - Props del banner animado.
 * @returns {JSX.Element} Componente de banner con animaciones y control de pausa.
 */
const BannerComponent = ({
  items,
  theme,
  interval = 5000,
  translate,
}: IAnimatedBanner): JSX.Element => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  /**
   * @description
   * Hook que gestiona el ciclo de vida del intervalo de rotación.
   * Se reinicia si cambia el intervalo, la cantidad de items o el estado de pausa.
   */
  useEffect((): (() => void) => {
    if (isPaused) {
      return () => {};
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval, isPaused]);

  return (
    <div
      className="relative w-full flex flex-col gap-10 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        {items.map(
          (item, index) =>
            index === currentIndex && (
              <BannerItemComponent
                key={item.title}
                item={item}
                theme={theme}
                translate={translate}
                navigate={navigate}
              />
            ),
        )}
      </AnimatePresence>
    </div>
  );
};

export default BannerComponent;
