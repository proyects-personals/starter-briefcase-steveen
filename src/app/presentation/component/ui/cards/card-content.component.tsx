import React from "react";

import { CardActionsComponent, CardChipsComponent } from "@/app";

import type { ICardContent } from "@domain";

/**
 * @description Componente que representa el contenido principal de una tarjeta de proyecto.
 * Muestra el nombre, descripción, tecnologías utilizadas (chips) y acciones de enlace
 * a la página del proyecto o al repositorio de código.
 *
 * @param name - Nombre del proyecto (clave de traducción)
 * @param description - Descripción del proyecto (clave de traducción)
 * @param kills - Lista de tecnologías o skills utilizadas
 * @param theme - Tema global de la aplicación para estilos dinámicos
 * @param visitLink - URL para visitar el proyecto en producción (opcional)
 * @param codeLink - URL al repositorio del proyecto (opcional)
 * @param translate - Función de traducción i18next
 */
const CardContentComponent: React.FC<ICardContent> = ({
  name,
  description,
  kills,
  theme,
  visitLink,
  codeLink,
  translate,
}) => (
  <div className="flex flex-col h-full py-4 px-4">
    <div className="flex flex-col flex-1 gap-2 justify-between">
      <h2
        style={{ color: theme.colors.text }}
        className="text-md sm:text-lg font-semibold text-center"
      >
        {translate(name)}
      </h2>

      <div className="flex-1 flex items-center">
        <p
          style={{ color: theme.colors.textSecondary }}
          className="text-sm sm:text-md text-center sm:text-left leading-relaxed px-2"
        >
          {translate(description)}
        </p>
      </div>

      <CardChipsComponent chips={kills} theme={theme} />
    </div>

    <div className="mt-auto">
      <CardActionsComponent
        visitLink={visitLink}
        codeLink={codeLink}
        theme={theme}
        translate={translate}
      />
    </div>
  </div>
);

export default CardContentComponent;
