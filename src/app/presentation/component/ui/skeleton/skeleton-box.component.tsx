import { motion } from "framer-motion";

import {
  SKELETON_ANIMATION_DURATION,
  SKELETON_OPACITY_MAX,
  SKELETON_OPACITY_MIN,
  type ISkeletonBox,
} from "@domain";
import type { ReactElement } from "react";

/**
 * SkeletonBoxComponent
 *
 * @description
 * Componente reutilizable que representa un bloque de carga
 * (skeleton loader) utilizado para simular contenido mientras
 * se obtienen datos desde una API.
 *
 * Este componente utiliza una animación de opacidad con
 * Framer Motion para generar un efecto de pulso que indica
 * al usuario que el contenido se está cargando.
 *
 * Es utilizado comúnmente en:
 *
 * - tarjetas de métricas
 * - listas de repositorios
 * - bloques de información
 * - dashboards
 *
 * @component
 *
 * @param height
 * Altura del skeleton. Permite reutilizar el componente
 * en diferentes layouts manteniendo flexibilidad.
 *
 * @param theme
 * Tema visual de la aplicación que contiene colores,
 * bordes y estilos globales.
 *
 * @returns React component
 */
const SkeletonBoxComponent = ({
  height,
  theme,
}: ISkeletonBox): ReactElement => (
  <motion.div
    initial={{ opacity: SKELETON_OPACITY_MIN }}
    animate={{
      opacity: [
        SKELETON_OPACITY_MIN,
        SKELETON_OPACITY_MAX,
        SKELETON_OPACITY_MIN,
      ],
    }}
    transition={{
      duration: SKELETON_ANIMATION_DURATION,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{
      height,
      width: "100%",
      backgroundColor: theme.colors.muted,
      borderRadius: theme.borderRadius.lg,
      border: `1px solid ${theme.colors.border}`,
      position: "relative",
      overflow: "hidden",
    }}
  />
);

export default SkeletonBoxComponent;
