import clsx from "clsx";
import React, { useState, useEffect, useCallback } from "react";

import { useTheme } from "@application";
import {
  BREAKPOINTS,
  SIDEBAR_STORAGE_KEY,
  storageUtil,
  type ILayout,
} from "@domain";

import { FooterComponent } from "./footer";
import { HeaderComponent } from "./header";
import { SidebarComponent } from "./sidebar";
import MobileMenuComponent from "./sidebar/mobile-menu.component";

/**
 * @description Layout principal de la aplicación, con sidebar, header y footer.
 * Gestiona el estado del sidebar y lo persiste en StorageUtil.
 * @version 2.0.0
 */
const LayoutComponent: React.FC<ILayout> = ({ children, isAutentificated }) => {
  const { theme } = useTheme();

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const MOBILE_BREAKPOINT = 768;

  /**
   * @description Carga el estado inicial del sidebar desde StorageUtil
   */
  const loadSidebarState = useCallback(() => {
    if (!isAutentificated) {
      setIsSidebarOpen(false);
      setLoaded(true);
      return;
    }

    const result = storageUtil.get<boolean>(SIDEBAR_STORAGE_KEY, true);

    const initialSidebar =
      result.success && typeof result.value === "boolean" ? result.value : true;

    setIsSidebarOpen(initialSidebar);
    setLoaded(true);
  }, [isAutentificated]);

  useEffect(() => {
    loadSidebarState();
  }, [loadSidebarState]);

  /**
   * @description Persiste el estado del sidebar en StorageUtil
   */
  useEffect(() => {
    if (loaded && isAutentificated) {
      storageUtil.set(SIDEBAR_STORAGE_KEY, isSidebarOpen);
    }
  }, [isSidebarOpen, isAutentificated, loaded]);

  /**
   * SIDEBAR DESKTOP
   */
  const handleToggleSidebar = (): void => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCloseSidebar = (): void => {
    setIsSidebarOpen(false);
  };

  /**
   * MOBILE MENU
   */
  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  /**
   * HAMBURGER (mobile vs desktop)
   */
  const handleHamburger = (): void => {
    if (window.innerWidth < BREAKPOINTS.MOBILE) {
      toggleMobileMenu();
    } else {
      handleToggleSidebar();
    }
  };

  if (!loaded) {
    return null;
  }

  return (
    <div
      className="flex min-h-screen w-full"
      style={{ backgroundColor: theme.colors.background }}
    >
      {isAutentificated && (
        <aside
          className={clsx(
            "hidden md:block shrink-0 transition-all duration-300",
            isSidebarOpen ? "w-64" : "w-16",
          )}
          style={{ backgroundColor: theme.colors.surface }}
        >
          <SidebarComponent
            role={null}
            isOpen={isSidebarOpen}
            onClose={handleCloseSidebar}
          />
        </aside>
      )}
      {isAutentificated && (
        <MobileMenuComponent
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
        />
      )}

      <div className="flex flex-col flex-1 min-h-0">
        <HeaderComponent
          isAutentificated={isAutentificated}
          onToggleSidebar={handleHamburger}
        />

        <main
          className={clsx(
            "flex-1 overflow-auto flex flex-col",
            !isAutentificated && "pt-28",
          )}
          style={{ backgroundColor: theme.colors.background }}
        >
          <div className="flex-1">{children}</div>

          {!isAutentificated && <FooterComponent />}
        </main>
      </div>
    </div>
  );
};

export default LayoutComponent;
