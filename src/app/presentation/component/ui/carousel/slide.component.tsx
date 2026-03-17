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
 * @version 1.0.1
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
    enter: (dir: number): { x: string; opacity: number; filter: string } => ({
      x: dir > 0 ? "15%" : "-15%",
      opacity: 0,
      filter: "blur(5px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (dir: number): { x: string; opacity: number; filter: string } => ({
      x: dir > 0 ? "-15%" : "15%",
      opacity: 0,
      filter: "blur(5px)",
    }),
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.4 },
      }}
      className="absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-6 md:px-20 py-8 md:py-10 overflow-hidden"
    >
      <div className="w-full md:w-1/2 flex items-center justify-center flex-shrink-1">
        <div className="relative w-full flex items-center justify-center">
          <img
            src={item.image}
            alt={translate(item.title)}
            className="max-w-full h-auto object-contain rounded-xl drop-shadow-2xl"
            style={{
              maxHeight: item.imageHeight ?? "250px",
              filter: `drop-shadow(0 10px 20px ${theme.colors.primary}22)`,
            }}
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h3
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight tracking-tight"
          style={{ color: theme.colors.text }}
        >
          {translate(item.title)}
        </h3>

        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-90"
          style={{
            color: theme.colors.textSecondary,
            textAlign: "justify",
            hyphens: "auto",
          }}
        >
          {translate(item.description)}
        </p>

        <div className="mt-6 flex justify-center md:justify-start">
          <div
            className="h-1.5 w-16 rounded-full"
            style={{ backgroundColor: theme.colors.primary }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SlideComponent;
