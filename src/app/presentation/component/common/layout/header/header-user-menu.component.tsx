import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useLanguage } from "@application";
import { APP_ROUTES, getInitials, type UserModel } from "@domain";

interface HeaderUserMenuProps {
  user: UserModel;
}

const HeaderUserMenuComponent: React.FC<HeaderUserMenuProps> = ({ user }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleLogout = (): void => {
    localStorage.clear();
    navigate(APP_ROUTES.LOGIN, { replace: true });
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col text-right leading-none">
        <span className="font-medium">
          {`${user.nombre} ${user.apellido}`.toUpperCase()}
        </span>
        <span className="text-xs text-gray-500">
          Rol: {user.role.toUpperCase()}
        </span>
      </div>

      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm cursor-pointer"
        >
          {getInitials(user.nombre, user.apellido)}
        </label>

        <ul className="dropdown-content menu p-2 shadow bg-white rounded-box w-36 mt-2 right-0">
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 justify-center w-full"
            >
              <FaSignOutAlt /> {t("login.logout")}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderUserMenuComponent;
