import { motion } from "framer-motion";

import type { ISlide } from "@domain";
import type { JSX } from "react";

/**
 * @description Renderiza la imagen y contenido de un slide con animaciones de entrada/salida
 * según la dirección de navegación. Soporta traducción y tema.
 * Ajusta automáticamente la altura del slide según la cantidad de texto en cualquier dispositivo.
 *
 * Carousel slide component
 *
 * Renders the image and content of a carousel slide with entry/exit animations
 * depending on the navigation direction. Supports translation, theme colors,
 * and auto-adjusts height based on content length.
 *
 * @component
 * @param {ISlide} props Propiedades del slide / Slide properties
 * @param {object} props.item Slide actual / Current slide object
 * @param {number} props.direction Dirección de animación (-1 o 1) / Animation direction (-1 or 1)
 * @param {object} props.theme Tema actual / Current theme
 * @param {(text: string) => string} props.translate Función de traducción / Translation function
 * @returns {JSX.Element} Slide del carrusel / Carousel slide
 */
const SlideComponent = ({
  item,
  direction,
  theme,
  translate,
}: ISlide): JSX.Element => {
  /**
   * @description Variantes de animación para entrada, centro y salida
   * @param {number} dir Dirección de animación (-1 | 1)
   * @returns {object} Objetos con propiedades de animación
   */
  const variants = {
    enter: (dir: number): { x: string; opacity: number } => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number): { x: string; opacity: number } => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  /**
   * @description Calcula la altura de la imagen, manejando valores null o undefined
   * @returns {string} Altura de la imagen
   */
  const getImageHeight = (): string => {
    return item.imageHeight ?? "auto";
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      }}
      className="absolute inset-0 w-full min-h-[400px] md:min-h-[300px] flex flex-col md:flex-row items-center justify-center gap-6 p-6 md:p-12"
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={item.image}
          alt={translate(item.title)}
          className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
          style={{ height: getImageHeight() }}
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col">
        <h3
          className="text-2xl md:text-3xl font-bold mb-4 break-words"
          style={{ color: theme.colors.text }}
        >
          {translate(item.title)}
        </h3>

        <p
          className="text-base md:text-lg opacity-90 break-words leading-relaxed text-justify"
          style={{ color: theme.colors.textSecondary }}
        >
          {translate(item.description)}
        </p>
      </div>
    </motion.div>
  );
};

export default SlideComponent;
