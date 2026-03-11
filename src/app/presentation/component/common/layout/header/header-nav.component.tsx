import React, { useMemo } from "react";

import { NAV_ITEMS, type IHeaderNav } from "@domain";

import HeaderNavItemComponent from "./header-nav-item.component";

/**
 * Componente de navegación principal del encabezado.
 * * @description
 * Renderiza una barra de navegación dinámica que filtra los elementos
 * basándose en el estado de autenticación del usuario. Utiliza un efecto
 * de desenfoque y cambio de color de fondo basado en el desplazamiento (scroll).
 * * @param {IHeaderNav} props - Propiedades del componente.
 * @param {boolean} [props.isAutentificated=false] - Indica si el usuario está autenticado.
 * @param {boolean} [props.scrolled] - Estado que indica si el usuario ha desplazado la página.
 * * @returns {JSX.Element} El componente de navegación renderizado.
 * @version 1.1.0
 */
const HeaderNavComponent: React.FC<IHeaderNav> = ({
  isAutentificated = false,
  scrolled,
}) => {
  /**
   * Filtrado memorizado de los elementos de navegación.
   * * @description
   * Se recalcula únicamente cuando cambia el estado de autenticación.
   * Previene ejecuciones costosas durante el re-renderizado por scroll.
   */
  const filteredItems = useMemo(() => {
    return NAV_ITEMS.filter((item) => {
      if (item.auth === null) {
        return true;
      }

      return item.auth === isAutentificated;
    });
  }, [isAutentificated]);

  return (
    <nav
      className={`w-full p-3 flex justify-center transition-colors duration-500 ${
        scrolled ? "bg-[#121212]" : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="flex space-x-4 sm:space-x-8 lg:space-x-12 items-center">
        {filteredItems.map((item) => (
          <HeaderNavItemComponent key={item.to} {...item} />
        ))}
      </div>
    </nav>
  );
};

export default HeaderNavComponent;
