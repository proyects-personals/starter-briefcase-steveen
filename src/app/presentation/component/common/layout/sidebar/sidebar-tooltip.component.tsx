import React from "react";

import { useTheme } from "@application";

import type { ISidebarTooltip } from "@domain";

/**
 * Componente de etiqueta flotante (Tooltip) para el Sidebar colapsado.
 * @description
 * Se posiciona de forma absoluta a la derecha del ítem del menú.
 * Aprovecha la clase `group` del elemento padre para activarse únicamente
 * cuando el usuario pasa el cursor sobre el contenedor del icono.
 * Incluye animaciones suaves de opacidad y desplazamiento.
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.label - Texto descriptivo que se mostrará al hacer hover.
 * @param {boolean} props.isActive - Indica si el item del sidebar está activo.
 * @version 1.2.0
 * @returns {JSX.Element} Un elemento span posicionado con transiciones suaves.
 */
const SidebarTooltipComponent: React.FC<ISidebarTooltip> = ({
  label,
  isActive,
}) => {
  const { theme } = useTheme();

  return (
    <span
      className="
        absolute left-full ml-3
        text-xs
        px-2 py-1
        whitespace-nowrap
        pointer-events-none
        opacity-0 translate-x-2
        group-hover:opacity-100
        group-hover:translate-x-0
        transition-all duration-300 ease-out
      "
      style={{
        borderRadius: theme.borderRadius.sm,
        backgroundColor: isActive ? theme.colors.primary : theme.colors.surface,
        color: isActive ? theme.colors.background : theme.colors.text,
        border: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadow.md,
        fontSize: theme.font.sizes.xs,
        fontWeight: theme.font.weights.medium,
      }}
    >
      {label}
    </span>
  );
};

export default SidebarTooltipComponent;
