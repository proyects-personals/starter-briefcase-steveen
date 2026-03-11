import React from "react";

import type { ISidebarTooltip } from "@domain";

/**
 * Componente de etiqueta flotante (Tooltip) para el Sidebar colapsado.
 * * @description
 * Se posiciona de forma absoluta a la derecha del ítem del menú.
 * Aprovecha la clase `group` del elemento padre para activarse únicamente
 * cuando el usuario pasa el cursor sobre el contenedor del icono.
 * * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.label - Texto descriptivo que se mostrará al hacer hover.
 * * @version 1.0.0
 * @returns {JSX.Element} Un elemento span posicionado con transiciones de opacidad.
 */
const SidebarTooltipComponent: React.FC<ISidebarTooltip> = ({ label }) => (
  <span
    className="
      absolute left-full ml-3
      bg-gray-900 text-white text-xs
      px-2 py-1 rounded shadow
      opacity-0 group-hover:opacity-100
      transition-opacity
      whitespace-nowrap
      pointer-events-none
    "
  >
    {label}
  </span>
);

export default SidebarTooltipComponent;
