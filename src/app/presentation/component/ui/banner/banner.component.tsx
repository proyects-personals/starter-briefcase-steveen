import { AnimatePresence } from "framer-motion";
import { useEffect, useState, type JSX } from "react";
import { useNavigate } from "react-router-dom";

import { BannerItemComponent } from "@/app";

import type { IAnimatedBanner } from "@domain";

/**
 * Componente principal que renderiza un banner animado con rotación automática.
 * Cada banner se muestra uno a la vez y se desplaza automáticamente según el intervalo definido.
 *
 * @param {IAnimatedBanner} props - Props del banner animado.
 * @param {IBannerItem[]} props.items - Lista de elementos del banner a mostrar.
 * @param {IAppTheme} props.theme - Tema de la aplicación, para estilos dinámicos.
 * @param {number} [props.interval=5000] - Intervalo en milisegundos para rotar entre banners.
 * @param {TFunction} props.translate - Función de traducción i18next para títulos y descripciones.
 * @returns {JSX.Element} Componente de banner con animación y rotación automática.
 */
const BannerComponent = ({
  items,
  theme,
  interval = 5000,
  translate,
}: IAnimatedBanner): JSX.Element => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  /**
   * Hook que controla la rotación automática de los banners.
   * Crea un intervalo que cambia el índice actual cada cierto tiempo
   * y limpia el intervalo cuando el componente se desmonta o cambian dependencias.
   *
   * @returns {() => void} Función de limpieza que elimina el intervalo activo.
   */
  useEffect((): (() => void) => {
    const timer: ReturnType<typeof setInterval> = setInterval(() => {
      setCurrentIndex((prev: number) => (prev + 1) % items.length);
    }, interval);

    return (): void => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <div className="relative w-full flex flex-col gap-10 overflow-hidden">
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
