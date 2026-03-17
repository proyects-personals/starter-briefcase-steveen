import { motion } from "framer-motion";
import React from "react";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

import { BannerImageComponent } from "@/app";

import type { IBannerItemProps } from "@domain";

/**
 * @description Componente que representa un elemento individual del banner animado.
 * Se encarga de mostrar el título, descripción, fecha de finalización y la imagen
 * asociada a un proyecto o sección. Incluye animaciones de aparición y efectos al pasar el cursor.
 *
 * @param item - Objeto del banner con título, descripción, imagen, enlace y estado de finalización
 * @param theme - Tema global de la aplicación para estilos dinámicos
 * @param translate - Función de traducción i18next
 * @param navigate - Función de navegación de React Router
 */
const BannerItemComponent: React.FC<IBannerItemProps> = ({
  item,
  theme,
  translate,
  navigate,
}) => {
  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
      className="group relative flex flex-col md:flex-row items-center gap-8 p-6 sm:p-10 rounded-[2rem] overflow-hidden cursor-pointer"
      style={{
        backgroundColor: theme.colors.backgroundGlass,
        border: `1px solid ${theme.colors.borderGlass}`,
        backdropFilter: "blur(10px)",
      }}
      onClick={() => {
        if (item.link.startsWith("http")) {
          window.open(item.link, "_blank");
        } else {
          navigate(item.link);
        }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      <div className="flex-1 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
        <div
          className="mb-4 px-3 py-1 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"
          style={{
            backgroundColor: `${theme.colors.primary}15`,
            color: theme.colors.primary,
          }}
        >
          <FiCalendar /> {translate(item.finalized)}
        </div>

        <h2
          className="leading-tight group-hover:translate-x-1 transition-transform duration-300"
          style={{
            fontSize: "clamp(1.5rem, 5vw, 2.25rem)",
            fontWeight: 800,
            color: theme.colors.text,
          }}
        >
          {translate(item.title)}
        </h2>

        <p
          className="mt-4 max-w-lg opacity-70"
          style={{
            fontSize: theme.font.sizes.base,
            color: theme.colors.textSecondary,
            lineHeight: 1.6,
          }}
        >
          {translate(item.description)}
        </p>

        <motion.div
          className="mt-6 flex items-center gap-2 font-bold text-sm cursor-pointer"
          style={{ color: theme.colors.primary }}
          whileHover={{ x: 5 }}
          onClick={(e) => {
            e.stopPropagation();
            if (item.link.startsWith("http")) {
              window.open(item.link, "_blank");
            } else {
              navigate(item.link);
            }
          }}
        >
          {translate("components.ui.banner.view_page")} <FiArrowRight />
        </motion.div>
      </div>
      <BannerImageComponent
        src={item.image}
        alt={item.title}
        primaryColor={theme.colors.primary}
      />
    </motion.div>
  );
};

export default BannerItemComponent;
