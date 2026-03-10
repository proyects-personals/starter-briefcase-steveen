import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useTheme } from "@application";
import { logoMadjs } from "@assets";
import { type UserModel } from "@domain";

import HeaderUserMenuComponent from "./header-user-menu.component";

interface Props {
  user: UserModel | null;
  onToggleSidebar?: () => void;
}

const HeaderAuthBarComponent: React.FC<Props> = ({ user, onToggleSidebar }) => {
  const { theme } = useTheme();

  return (
    <div
      className="flex items-center justify-between px-4 py-2"
      style={{
        background: theme.colors.surface,
        borderBottom: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadow.sm,
      }}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-md transition-colors"
          style={{ color: theme.colors.text }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = theme.colors.hover)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          <FaBars size={18} />
        </button>

        <Link to="/">
          <img
            src={logoMadjs}
            alt="Logo"
            className="h-10 w-auto object-contain cursor-pointer"
          />
        </Link>
      </div>
      <HeaderUserMenuComponent user={user} />
    </div>
  );
};

export default HeaderAuthBarComponent;
