import clsx from "clsx";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import SidebarTooltipComponent from "./sidebar-tooltip.component";

interface Props {
  path: string;
  label: string;
  icon: React.ElementType;
  isCollapsed: boolean;
}

const SidebarItemComponent: React.FC<Props> = ({
  path,
  label,
  icon: Icon,
  isCollapsed,
}) => {
  const { pathname } = useLocation();
  const isActive = pathname === path;

  return (
    <li>
      <Link
        to={path}
        className={clsx(
          "group relative flex items-center gap-3 p-2 rounded-md transition-colors",
          isActive
            ? "bg-blue-100 text-blue-600"
            : "text-gray-700 hover:bg-gray-100",
          isCollapsed && "justify-center",
        )}
      >
        <Icon className="text-lg shrink-0" />

        {!isCollapsed && <span>{label}</span>}

        {isCollapsed && <SidebarTooltipComponent label={label} />}
      </Link>
    </li>
  );
};

export default SidebarItemComponent;
