import React, { useState, useRef, useEffect, type JSX } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useLanguage, useTheme } from "@application";
import { APP_ROUTES, getInitials, type UserModel } from "@domain";

interface HeaderUserMenuProps {
  user: UserModel | null;
}

const HeaderUserMenuComponent: React.FC<HeaderUserMenuProps> = ({
  user,
}): JSX.Element | null => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { theme } = useTheme();

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = (): void => {
    localStorage.clear();
    navigate(APP_ROUTES.LOGIN, { replace: true });
  };

  const name = user
    ? `${user.nombre} ${user.apellido}`.toUpperCase()
    : t("user.undefined");
  const role = user ? user.role.toUpperCase() : t("user.undefined");
  const initials = user ? getInitials(user.nombre, user.apellido) : "?";

  useEffect((): (() => void) => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return (): void =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className="relative flex items-center gap-3" ref={menuRef}>
      <div className="flex flex-col text-right leading-tight">
        <span
          className="font-semibold text-sm"
          style={{ color: theme.colors.text }}
        >
          {name}
        </span>
        <span className="text-xs" style={{ color: theme.colors.textSecondary }}>
          {t("user.role")}: {role}
        </span>
      </div>

      <div>
        <button
          onClick={(): void => setOpen((prev) => !prev)}
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm cursor-pointer transition-all"
          style={{
            background: theme.colors.primary,
            color: "#fff",
            boxShadow: theme.shadow.sm,
          }}
        >
          {initials}
        </button>

        {open && (
          <ul
            className="absolute right-0 mt-2 w-44 rounded-lg shadow-md p-2"
            style={{
              background: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
            }}
          >
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 w-full rounded-md transition-colors"
                style={{ color: theme.colors.error }}
                onMouseEnter={(
                  e: React.MouseEvent<HTMLButtonElement>,
                ): void => {
                  e.currentTarget.style.background = theme.colors.hover;
                }}
                onMouseLeave={(
                  e: React.MouseEvent<HTMLButtonElement>,
                ): void => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <FaSignOutAlt /> {t("login.logout")}
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default HeaderUserMenuComponent;
