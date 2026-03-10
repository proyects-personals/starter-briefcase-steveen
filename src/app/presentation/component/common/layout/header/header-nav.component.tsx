import React from "react";

import { NAV_ITEMS } from "@domain";

import HeaderNavItemComponent from "./header-nav-item.component";

interface Props {
  isAutentificated?: boolean;
  scrolled: boolean;
}

const HeaderNavComponent: React.FC<Props> = ({
  isAutentificated = false,
  scrolled,
}) => {
  const filteredItems = NAV_ITEMS.filter((item) => {
    const auth = item.auth;

    if (auth === null) {
      return true;
    }
    if (auth && isAutentificated) {
      return true;
    }
    if (!auth && !isAutentificated) {
      return true;
    }

    return false;
  });

  return (
    <nav
      className={`w-full p-3 flex justify-center transition-colors duration-500 ${
        scrolled ? "bg-[#121212]" : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="flex space-x-4 sm:space-x-8 lg:space-x-12 items-center">
        {filteredItems.map((item) => (
          <HeaderNavItemComponent key={item.to} {...item} />
        ))}
      </div>
    </nav>
  );
};

export default HeaderNavComponent;
