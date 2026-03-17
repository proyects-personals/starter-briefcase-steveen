import { motion } from "framer-motion";
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

import { ContactItemComponent } from "@/app";
import { UrlEnum, type IContactComponent } from "@domain";

/**
 * @description
 * Constantes para configuracion de diseño y animaciones de la tarjeta de contacto.
 */
const ANIMATION_Y_START = 20;
const ANIMATION_DELAY = 0.1;
const DECORATIVE_BAR_WIDTH = "4px";
const DECORATIVE_BAR_OPACITY = 0.8;
const TITLE_BORDER_OPACITY = "20";
const GAP_CONTAINER = "1rem";
const PADDING_CARD = "2.5rem";

/**
 * @description
 * Componente que muestra la tarjeta de detalles de contacto.
 * Presenta una jerarquia visual clara con iconos y enlaces directos a metodos
 * de comunicacion como email, WhatsApp y LinkedIn.
 *
 * @param props - Propiedades definidas en la interfaz IContactComponent.
 * @returns Una tarjeta animada con informacion detallada de contacto.
 */
const ContactDetailsCard: React.FC<IContactComponent> = ({
  theme,
  translate,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: ANIMATION_Y_START }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: ANIMATION_DELAY }}
      style={{
        padding: PADDING_CARD,
        borderRadius: theme.borderRadius.lg,
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadow.md,
        position: "relative",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: DECORATIVE_BAR_WIDTH,
          height: "100%",
          backgroundColor: theme.colors.primary,
          opacity: DECORATIVE_BAR_OPACITY,
        }}
      />

      <h2
        style={{
          fontSize: theme.font.sizes.xl,
          fontWeight: theme.font.weights.bold,
          color: theme.colors.text,
          marginBottom: "2rem",
          textAlign: "left",
          borderBottom: `2px solid ${theme.colors.primary}${TITLE_BORDER_OPACITY}`,
          paddingBottom: "0.5rem",
          display: "inline-block",
        }}
      >
        {translate("contactMe.title")}
      </h2>

      <div
        style={{ display: "flex", flexDirection: "column", gap: GAP_CONTAINER }}
      >
        <ContactItemComponent
          icon={FaEnvelope}
          label={translate("contactMe.email")}
          value="zh31505@gmail.com"
          href="mailto:zh31505@gmail.com"
          theme={theme}
        />

        <ContactItemComponent
          icon={FaPhoneAlt}
          label={translate("contactMe.phone")}
          value="+593 96 263 9779"
          href={UrlEnum.WHATSAPP}
          theme={theme}
        />

        <ContactItemComponent
          icon={FaLinkedin}
          label="LinkedIn"
          value="steveen-ordoñez"
          href={UrlEnum.LINKEDIN}
          theme={theme}
        />
      </div>
    </motion.div>
  );
};

export default ContactDetailsCard;
