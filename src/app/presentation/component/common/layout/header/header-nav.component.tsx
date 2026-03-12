import React from "react";

import { useNavItems, useTheme } from "@application";
import { type IHeaderNav } from "@domain";

import HeaderNavItemComponent from "./header-nav-item.component";

/**
 * Componente de navegación principal del encabezado.
 * * @description
 * Barra de navegación responsive y theme-aware:
 * - Filtra los elementos según autenticación y traduce automáticamente.
 * - Fondo sólido con blur visible (`backdrop-blur-md`) y transición suave al hacer scroll.
 * - Espaciado y padding adaptativo según breakpoints (`sm`, `lg`).
 * - Efecto de sombra que cambia al hacer scroll.
 *
 * * @param {IHeaderNav} props
 * @param {boolean} [props.isAutentificated=false] - Indica si el usuario está autenticado.
 * @param {boolean} [props.scrolled] - Estado de scroll para ajustar fondo y sombra.
 * * @returns {JSX.Element} Barra de navegación lista para renderizar.
 * * @version 1.5.0
 */
const HeaderNavComponent: React.FC<IHeaderNav> = ({
  isAutentificated = false,
}) => {
  const { theme } = useTheme();
  const navItems = useNavItems(isAutentificated);

  return (
    <nav
      className="w-full flex justify-center py-3 md:py-2 px-4 md:px-8 backdrop-blur-xl"
      style={{
        backgroundColor: theme.colors.backgroundGlass,
        borderBottom: `1px solid ${theme.colors.border}`,
      }}
    >
      <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-10 px-4">
        {navItems.map((item) => (
          <HeaderNavItemComponent key={item.to} {...item} />
        ))}
      </div>
    </nav>
  );
};

export default HeaderNavComponent;
