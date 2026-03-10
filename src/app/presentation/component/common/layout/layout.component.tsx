import clsx from "clsx";
import React, { useState } from "react";

import { FooterComponent } from "./footer";
import { HeaderComponent } from "./header";
import { SidebarComponent } from "./sidebar";

import type { LayoutInterface, UserModel } from "@domain";

const SIDEBAR_STORAGE_KEY = "sidebar_open";

const LayoutComponent: React.FC<LayoutInterface> = ({
  children,
  isAutentificated,
}) => {
  const user: UserModel | null = null;

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    if (!isAutentificated) {
      return false;
    }

    const saved = localStorage.getItem(SIDEBAR_STORAGE_KEY);
    if (saved !== null && saved !== "") {
      try {
        const parsed: unknown = JSON.parse(saved);
        if (typeof parsed === "boolean") {
          return parsed;
        }
      } catch {
        return true;
      }
    }

    return true;
  });

  const handleCloseSidebar = (): void => setIsSidebarOpen(false);
  const handleToggleSidebar = (): void => setIsSidebarOpen((v) => !v);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {isAutentificated && (
        <aside
          className={clsx(
            "shrink-0 transition-all duration-300",
            isSidebarOpen ? "w-64" : "w-16",
          )}
        >
          <SidebarComponent
            role={null}
            isOpen={isSidebarOpen}
            onClose={handleCloseSidebar}
          />
        </aside>
      )}

      <div className="flex flex-col flex-1 min-h-0">
        <div className="h-24 shrink-0">
          <HeaderComponent
            user={user}
            isAutentificated={isAutentificated}
            onToggleSidebar={handleToggleSidebar}
          />
        </div>

        <main className="flex-1 overflow-auto flex flex-col">
          <div className="flex-1">{children}</div>
          {!isAutentificated && <FooterComponent />}
        </main>
      </div>
    </div>
  );
};

export default LayoutComponent;
