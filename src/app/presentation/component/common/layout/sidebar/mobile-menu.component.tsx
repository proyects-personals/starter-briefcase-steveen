import clsx from "clsx";
import React, { useEffect } from "react";

import { useTheme, useAnalytics } from "@application";
import { SIDEBAR_ITEMS, type IMobileMenu } from "@domain";

import SidebarItemComponent from "./sidebar-item.component";

/**
 * @description
 * Componente encargado de renderizar el menú de navegación en dispositivos
 * móviles. Este menú se despliega desde la parte superior de la pantalla
 * debajo del header y muestra las opciones definidas en `SIDEBAR_ITEMS`.
 * @component
 *
 * @param {boolean} isOpen
 * Indica si el menú móvil se encuentra visible.
 *
 * @param {() => void} onClose
 * Función callback que se ejecuta cuando el usuario hace click en el
 * overlay para cerrar el menú.
 *
 * @returns {JSX.Element}
 * Renderiza el panel del menú móvil junto con su overlay.
 *
 * @version 1.0.1
 */
const MobileMenuComponent: React.FC<IMobileMenu> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const { event } = useAnalytics(); // ✅ analytics

  /**
   * @description
   * Tracking: apertura del menú móvil
   */
  useEffect(() => {
    if (isOpen) {
      event("Mobile Menu", "Open");
    }
  }, [isOpen, event]);

  /**
   * @description
   * Tracking: cierre del menú móvil
   */
  const handleClose = (): void => {
    event("Mobile Menu", "Close - Overlay");
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={handleClose}
        />
      )}

      <div
        className={clsx(
          "fixed top-16 left-0 right-0 bottom-0 z-50 md:hidden transition-transform duration-300",
          isOpen ? "translate-y-0" : "-translate-y-full",
        )}
        style={{ backgroundColor: theme.colors.surface }}
      >
        <div className="h-full overflow-y-auto p-6 shadow-xl">
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            {SIDEBAR_ITEMS.map((item) => (
              <li key={item.path} className="list-none">
                <SidebarItemComponent {...item} isCollapsed={false} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenuComponent;
