import React, { useState, useRef, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

import { useLanguage, useTheme } from "@application";

import type { ILanguageSwitcher, LanguageType } from "@domain";

/**
 * Selector de idioma usando completamente el theme.
 * - Responsive y moderno.
 * - Hover y opción activa con colores del theme.
 * - Cierra al hacer clic afuera.
 * - Transiciones suaves y blur.
 */
const LanguageSwitcherComponent: React.FC<ILanguageSwitcher> = ({
  className,
}) => {
  const { language, changeTranslate } = useLanguage();
  const { theme } = useTheme();

  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const languages: LanguageType[] = ["es", "en"];

  useEffect((): (() => void) => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target;

      if (
        containerRef.current &&
        target instanceof Node &&
        !containerRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return (): void => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const buttonStyle: React.CSSProperties = {
    backgroundColor: `color-mix(in oklch, ${theme.colors.surface} 70%, transparent)`,
    border: `1px solid ${theme.colors.border}`,
    color: theme.colors.text,
  };

  const menuStyle: React.CSSProperties = {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    boxShadow: theme.shadow.md,
  };

  const toggleMenu = (): void => {
    setOpen((prev) => !prev);
  };

  const handleLanguageChange = (lang: LanguageType): void => {
    changeTranslate(lang);
    setOpen(false);
  };

  return (
    <div className={`relative ${className ?? ""}`} ref={containerRef}>
      <button
        onClick={toggleMenu}
        className="
          flex items-center gap-2 px-3 py-1.5 rounded-xl
          backdrop-blur-md transition-all duration-300
          hover:scale-105 hover:shadow-md
          focus:outline-none focus:ring-2 focus:ring-offset-1
        "
        style={buttonStyle}
      >
        <FaGlobe className="opacity-80" />
        <span className="text-sm sm:text-base font-medium uppercase">
          {language}
        </span>
      </button>

      {open && (
        <ul
          className="
            absolute right-0 mt-2 w-28 sm:w-32 rounded-xl overflow-hidden
            backdrop-blur-xl z-50
            transition-all duration-300 ease-out origin-top-right
          "
          style={menuStyle}
        >
          {languages.map((lang: LanguageType) => {
            const isActive: boolean = language === lang;

            return (
              <li key={lang}>
                <button
                  onClick={(): void => handleLanguageChange(lang)}
                  className="
                    w-full px-3 py-2 text-left text-sm sm:text-base
                    rounded-lg transition-all duration-200
                    hover:scale-105 hover:bg-opacity-20
                  "
                  style={{
                    backgroundColor: isActive
                      ? theme.colors.primary
                      : theme.colors.surface,
                    color: isActive
                      ? theme.colors.background
                      : theme.colors.text,
                  }}
                >
                  {lang.toUpperCase()}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcherComponent;
