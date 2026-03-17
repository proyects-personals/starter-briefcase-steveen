import { motion } from "framer-motion";
import React from "react";

import type { IBannerImage } from "@domain";

/**
 * BannerImageComponent
 *
 * Componente encargado de mostrar la imagen flotante dentro del banner,
 * con animación vertical suave y un fondo decorativo difuminado.
 *
 * @param src - URL de la imagen
 * @param alt - Texto alternativo de la imagen
 * @param primaryColor - Color principal del tema para el fondo difuminado
 */
const BannerImageComponent: React.FC<IBannerImage> = ({
  src,
  alt,
  primaryColor,
}) => {
  const imageWidthMobile = "14rem";
  const imageHeightMobile = "14rem";
  const blurBackgroundInset = "-1rem";
  const animationDistance = 10;
  const animationDuration = 6;

  return (
    <div className="relative order-1 md:order-2 z-10">
      <div
        className="absolute rounded-full opacity-20"
        style={{
          inset: blurBackgroundInset,
          backgroundColor: primaryColor,
          filter: "blur(3rem)",
        }}
      />
      <motion.div
        animate={{ y: [0, -animationDistance, 0] }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: imageWidthMobile,
            height: imageHeightMobile,
            maxWidth: "100%",
            objectFit: "contain",
          }}
          className="md:w-[18rem] md:h-[18rem] group-hover:scale-110 transition-transform duration-500"
        />
      </motion.div>
    </div>
  );
};

export default BannerImageComponent;
