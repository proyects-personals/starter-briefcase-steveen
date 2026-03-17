import { motion } from "framer-motion";

import { CardContentComponent, CardImageComponent } from "@/app";

import type { ICardItemComponent } from "@domain";
import type { JSX } from "react";

/** Duración base de la animación de entrada de la tarjeta */
const CARD_ANIMATION_DURATION = 0.5;

/** Retraso incremental por índice para animación escalonada */
const CARD_ANIMATION_DELAY_STEP = 0.1;

/** Desplazamiento vertical inicial de la tarjeta */
const CARD_ANIMATION_OFFSET_Y = 20;

/**
 * Componente que renderiza una tarjeta individual animada.
 * Cada tarjeta aparece con una animación de entrada y un retraso
 * incremental basado en su posición en la lista.
 *
 * @param {ICardItemComponent} props - Propiedades del componente.
 * @param {ICardItem} props.item - Información del proyecto o elemento a mostrar.
 * @param {number} props.index - Índice del elemento en la lista, usado para animación escalonada.
 * @param {IAppTheme} props.theme - Tema de la aplicación para estilos dinámicos.
 * @param {TFunction} props.translate - Función de traducción para textos.
 * @returns {JSX.Element} Tarjeta animada con imagen y contenido.
 */
const CardItemComponent = ({
  item,
  index,
  theme,
  translate,
}: ICardItemComponent): JSX.Element => (
  <motion.div
    key={item.name}
    initial={{ opacity: 0, y: CARD_ANIMATION_OFFSET_Y }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: CARD_ANIMATION_DURATION,
      delay: index * CARD_ANIMATION_DELAY_STEP,
    }}
    style={{
      backgroundColor: theme.colors.backgroundGlass,
      color: theme.colors.text,
      borderRadius: theme.borderRadius.md,
      boxShadow: theme.shadow.md,
    }}
    className="overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-lg"
  >
    <CardImageComponent image={item.image} theme={theme} />
    <CardContentComponent
      name={item.name}
      description={item.description}
      kills={item.kills}
      theme={theme}
      visitLink={item.visitLink}
      codeLink={item.codeLink}
      translate={translate}
    />
  </motion.div>
);

export default CardItemComponent;
