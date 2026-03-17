import { motion } from "framer-motion";
import React from "react";

import type { ICardImage } from "@domain";

/**
 * @description Componente que representa la imagen de una tarjeta de proyecto.
 * Aplica un efecto de escala al pasar el cursor sobre la imagen y utiliza
 * el tema de la aplicación para el color de fondo del contenedor.
 *
 * @param image - URL o path de la imagen del proyecto
 * @param theme - Tema global de la aplicación para estilos dinámicos
 */
const CardImageComponent: React.FC<ICardImage> = ({ image, theme }) => (
  <motion.div
    className="w-full h-32 sm:h-36 md:h-40 overflow-hidden"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 250 }}
    style={{ backgroundColor: theme.colors.backgroundGlass }}
  >
    <img src={image} alt="Card image" className="w-full h-full object-cover" />
  </motion.div>
);

export default CardImageComponent;
