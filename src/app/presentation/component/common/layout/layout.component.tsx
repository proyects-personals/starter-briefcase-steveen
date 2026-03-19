import clsx from "clsx";
import React, { useState, useEffect, useCallback } from "react";

import { useAnalytics, useLanguage, useTheme } from "@application";
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
 * Gestiona estado UI global, persistencia del sidebar y comportamiento responsive.
 * @version 2.0.1
 */
const LayoutComponent: React.FC<ILayout> = ({ children, isAutentificated }) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { event } = useAnalytics();

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  /**
   * @description
   * Tracking helper (evita errores si event es undefined)
   */
  const track = useCallback(
    (action: string): void => {
      if (typeof event === "function") {
        event("Layout", action);
      }
    },
    [event],
  );

  /**
   * @description Carga estado inicial del sidebar desde storage
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

    track("Load Sidebar State");
  }, [isAutentificated, track]);

  useEffect(() => {
    document.title = t("briefcase.page.title");
    loadSidebarState();
  }, [loadSidebarState, t]);

  /**
   * @description Persistencia del estado del sidebar
   */
  useEffect(() => {
    if (loaded && isAutentificated) {
      storageUtil.set(SIDEBAR_STORAGE_KEY, isSidebarOpen);
    }
  }, [isSidebarOpen, isAutentificated, loaded]);

  /**
   * @description
   * Toggle sidebar (desktop)
   */
  const handleToggleSidebar = (): void => {
    setIsSidebarOpen((prev) => {
      const next = !prev;
      track(`Sidebar ${next ? "Open" : "Close"}`);
      return next;
    });
  };

  const handleCloseSidebar = (): void => {
    setIsSidebarOpen(false);
    track("Sidebar Close (Manual)");
  };

  /**
   * @description
   * Mobile menu
   */
  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      track(`Mobile Menu ${next ? "Open" : "Close"}`);
      return next;
    });
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
    track("Mobile Menu Close (Overlay)");
  };

  /**
   * @description
   * Control inteligente (mobile vs desktop)
   */
  const handleHamburger = (): void => {
    if (window.innerWidth < BREAKPOINTS.MOBILE) {
      track("Hamburger Mobile Click");
      toggleMobileMenu();
    } else {
      track("Hamburger Desktop Click");
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
