import React, { useEffect, useState, type JSX } from "react";

import { type HeaderInterface } from "@domain";

import HeaderAuthBarComponent from "./header-auth-bar.component";
import HeaderLogosComponent from "./header-logos.component";
import HeaderNavComponent from "./header-nav.component";

const HeaderComponent: React.FC<HeaderInterface> = ({
  onToggleSidebar,
  isAutentificated,
}): JSX.Element => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const SCROLL_THRESHOLD = 50;

  // Manejo del scroll
  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);

    return (): void => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      {isAutentificated ? (
        <HeaderAuthBarComponent user={null} onToggleSidebar={onToggleSidebar} />
      ) : (
        <>
          <HeaderLogosComponent scrolled={scrolled} />

          <HeaderNavComponent
            scrolled={scrolled}
            isAutentificated={isAutentificated}
          />
        </>
      )}
    </header>
  );
};

export default HeaderComponent;
