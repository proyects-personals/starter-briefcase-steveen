import React from "react";

interface Props {
  label: string;
}

const SidebarTooltipComponent: React.FC<Props> = ({ label }) => (
  <span
    className="
      absolute left-full ml-3
      bg-gray-900 text-white text-xs
      px-2 py-1 rounded shadow
      opacity-0 group-hover:opacity-100
      transition-opacity
      whitespace-nowrap
      pointer-events-none
    "
  >
    {label}
  </span>
);

export default SidebarTooltipComponent;
