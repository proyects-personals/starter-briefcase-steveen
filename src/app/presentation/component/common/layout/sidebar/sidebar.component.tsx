import clsx from "clsx";
import React from "react";

import { SIDEBAR_ITEMS, type SidebarInterface } from "@domain";

import SidebarItemComponent from "./sidebar-item.component";

const SidebarComponent: React.FC<SidebarInterface> = ({ isOpen, onClose }) => {
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
