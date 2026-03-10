import clsx from "clsx";
import React, { useState, useEffect, useCallback } from "react";

import { useTheme } from "@application";
import { type LayoutInterface, type UserModel, StorageUtil } from "@domain";

import { FooterComponent } from "./footer";
import { HeaderComponent } from "./header";
import { SidebarComponent } from "./sidebar";

/**
 * @description Clave por defecto para persistir el estado del sidebar
 */
const SIDEBAR_STORAGE_KEY = "sidebar_open";

/**
 * @description Instancia global de StorageUtil
 */
const storage = new StorageUtil();

/**
 * @description Layout principal de la aplicación, con sidebar, header y footer.
 * Gestiona el estado del sidebar y lo persiste en StorageUtil.
 * @version 2.0.0
 */
const LayoutComponent: React.FC<LayoutInterface> = ({
  children,
  isAutentificated,
}) => {
  const { theme } = useTheme();
  const user: UserModel | null = null;

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [loaded, setLoaded] = useState<boolean>(false);

  /**
   * @description Carga el estado inicial del sidebar desde StorageUtil
   */
  const loadSidebarState = useCallback(() => {
    if (!isAutentificated) {
      setIsSidebarOpen(false);
      setLoaded(true);
      return;
    }

    const result = storage.get<boolean>(SIDEBAR_STORAGE_KEY, true);
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
      storage.set(SIDEBAR_STORAGE_KEY, isSidebarOpen);
    }
  }, [isSidebarOpen, isAutentificated, loaded]); // storage ya no va en dependencias

  const handleToggleSidebar = (): void => setIsSidebarOpen((prev) => !prev);
  const handleCloseSidebar = (): void => setIsSidebarOpen(false);

  if (!loaded) {
    return null;
  }

  return (
    <div
      className="flex h-screen w-full overflow-hidden"
      style={{ backgroundColor: theme.colors.background }}
    >
      {isAutentificated && (
        <aside
          className={clsx(
            "shrink-0 transition-all duration-300",
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

      <div className="flex flex-col flex-1 min-h-0">
        <div
          className={clsx(
            "shrink-0",
            isAutentificated ? "h-14 md:h-14" : "h-26 md:h-32",
          )}
          style={{ backgroundColor: theme.colors.background }}
        >
          <HeaderComponent
            user={user}
            isAutentificated={isAutentificated}
            onToggleSidebar={handleToggleSidebar}
          />
        </div>

        <main
          className="flex-1 overflow-auto flex flex-col"
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
