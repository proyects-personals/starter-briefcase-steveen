import clsx from "clsx";
import React from "react";

import { SIDEBAR_ITEMS, type ISidebar } from "@domain";

import SidebarItemComponent from "./sidebar-item.component";

/**
 * Componente de Barra Lateral (Sidebar).
 * * @description
 * Administra el menú de navegación principal del panel administrativo.
 * - **Responsividad:** En dispositivos móviles (`lg:hidden`), muestra un overlay oscuro al abrirse.
 * - **Estados:** Cambia su ancho entre 64px (`w-16`) y 256px (`w-64`) mediante la propiedad `isOpen`.
 * - **Organización:** Incluye una sección de encabezado ("Admin") que solo es visible en modo expandido.
 * * @component
 * @param {ISidebar} props - Propiedades del componente.
 * @param {boolean} props.isOpen - Define si el sidebar está expandido o contraído.
 * @param {() => void} props.onClose - Callback para cerrar el sidebar (especialmente útil en móviles).
 * * @version 1.0.0
 * @returns {JSX.Element} La estructura lateral con navegación y soporte de capas (overlay).
 */
const SidebarComponent: React.FC<ISidebar> = ({ isOpen, onClose }) => {
  const isCollapsed = !isOpen;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={clsx(
          "fixed top-0 left-0 z-50 h-screen bg-white shadow-xl",
          "pt-24 transition-all duration-300",
          "hidden lg:block",
          isCollapsed ? "w-16" : "w-64",
        )}
      >
        <nav
          className={clsx(
            "h-full flex flex-col",
            isCollapsed ? "pt-4" : "pt-6",
          )}
        >
          <ul className="space-y-2 px-2">
            {!isCollapsed && (
              <li className="text-xs font-semibold text-gray-400 uppercase px-2">
                Admin
              </li>
            )}

            {SIDEBAR_ITEMS.map((item) => (
              <SidebarItemComponent
                key={item.path}
                {...item}
                isCollapsed={isCollapsed}
              />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SidebarComponent;
