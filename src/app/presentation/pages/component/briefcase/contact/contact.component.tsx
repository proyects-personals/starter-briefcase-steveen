import React from "react";

import {
  ContactDetailsCardComponent,
  ContactFormCardComponent,
  ContactInfoCardComponent,
} from "@/app";

import type { IContactComponent } from "@domain";

/**
 * @description
 * Constantes de diseño para la estructura del grid.
 */
const GRID_MIN_COLUMN_WIDTH = "300px";
const GRID_GAP = "1.5rem";
const FULL_WIDTH = "100%";

/**
 * @description
 * Componente principal de contacto que organiza la disposicion de las tarjetas.
 * Utiliza un sistema de Grid auto-ajustable para garantizar la responsividad,
 * distribuyendo equitativamente los componentes de informacion, detalles y formulario.
 *
 * @param props - Propiedades definidas en la interfaz IContactComponent.
 * @returns Un contenedor organizado con la seccion completa de contacto.
 */
const ContactComponent: React.FC<IContactComponent> = ({
  theme,
  translate,
}) => {
  return (
    <div style={{ width: FULL_WIDTH }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(${GRID_MIN_COLUMN_WIDTH}, 1fr))`,
          gap: GRID_GAP,
        }}
      >
        <ContactInfoCardComponent theme={theme} translate={translate} />
        <ContactDetailsCardComponent theme={theme} translate={translate} />
        <ContactFormCardComponent theme={theme} translate={translate} />
      </div>
    </div>
  );
};

export default ContactComponent;
