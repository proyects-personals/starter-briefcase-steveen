import React, { type JSX } from "react";

import { LanguageSwitcherComponent, ThemeSwitcherComponent } from "@/app";
import { useNavItems, useTheme } from "@application";
import { type IHeaderNav } from "@domain";

import HeaderNavItemComponent from "./header-nav-item.component";

/**
 * Componente de navegación principal del encabezado.
 * @description
 * Barra de navegación que gestiona la disposición de los ítems y los selectores.
 * Cuando hay scroll, los selectores de idioma y tema se anclan al extremo derecho.
 * @param {IHeaderNav} props
 * @param {boolean} [props.isAutentificated=false] - Estado de sesión del usuario.
 * @param {boolean} [props.scrolled] - Determina si los utilitarios deben mostrarse.
 * @returns {JSX.Element} Navegación con alineación dinámica.
 * @version 1.7.0
 */
const HeaderNavComponent: React.FC<IHeaderNav> = ({
  isAutentificated = false,
  scrolled = false,
}): JSX.Element => {
  const { theme } = useTheme();
  const navItems = useNavItems(isAutentificated);

  return (
    <nav
      className="w-full flex items-center py-3 md:py-2 px-6 md:px-12 backdrop-blur-xl transition-all duration-300"
      style={{
        backgroundColor: theme.colors.backgroundGlass,
        borderBottom: `1px solid ${theme.colors.border}`,
      }}
    >
      <div className="w-full flex items-center">
        <div className="flex-1 flex justify-center space-x-4 sm:space-x-6 lg:space-x-10">
          {navItems.map((item) => (
            <HeaderNavItemComponent key={item.to} {...item} />
          ))}
        </div>

        {scrolled && (
          <div className="flex justify-end min-w-[100px] md:min-w-[150px]">
            <div
              className="flex items-center gap-3 ml-4 pl-6 border-l animate-in fade-in slide-in-from-right-10 duration-500 ease-out"
              style={{
                borderColor: `color-mix(in oklch, ${theme.colors.border} 40%, transparent)`,
              }}
            >
              <LanguageSwitcherComponent />
              <ThemeSwitcherComponent />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HeaderNavComponent;
