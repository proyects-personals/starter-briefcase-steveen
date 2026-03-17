import React, { useState, useRef, useEffect, useMemo, type JSX } from "react";
import { FaSun, FaMoon, FaLeaf, FaChevronDown } from "react-icons/fa";

import { useLanguage, useTheme } from "@application";
import { ThemeEnum, themeUtil, type IThemeSwitcher } from "@domain";

/**
 * @component ThemeSwitcherComponent
 * @description Selector de temas múltiple (Dropdown).
 * Permite elegir entre Light, Dark y Emerald con etiquetas traducidas.
 * @version 1.2.0
 * @author Steveen Cues
 */
const ThemeSwitcherComponent: React.FC<IThemeSwitcher> = ({
  className,
}): JSX.Element => {
  const { themeName, setTheme, theme } = useTheme();
  const { t } = useLanguage();

  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  /**
   * @description Cierra el menú al hacer clic fuera.
   */
  useEffect((): (() => void) => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        containerRef.current &&
        event.target instanceof Node &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /**
   * @description Mapeo de iconos por tema.
   */
  const ThemeIcon = useMemo(() => {
    switch (themeName) {
      case ThemeEnum.DARK:
        return FaMoon;
      case ThemeEnum.EMERALD:
        return FaLeaf;
      default:
        return FaSun;
    }
  }, [themeName]);

  const buttonStyle = useMemo(
    (): React.CSSProperties => ({
      backgroundColor: `color-mix(in oklch, ${theme.colors.surface} 70%, transparent)`,
      border: `1px solid ${theme.colors.border}`,
      color: theme.colors.text,
    }),
    [theme.colors.surface, theme.colors.border, theme.colors.text],
  );

  const menuStyle = useMemo(
    (): React.CSSProperties => ({
      backgroundColor: `color-mix(in oklch, ${theme.colors.surface} 95%, black)`,
      border: `1px solid ${theme.colors.border}`,
    }),
    [theme.colors.surface, theme.colors.border],
  );

  return (
    <div className={`relative ${className ?? ""}`} ref={containerRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center gap-2 p-2 sm:px-3 sm:py-1.5 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
        style={buttonStyle}
      >
        <ThemeIcon
          style={{ color: theme.colors.primary }}
          className="text-base animate-in zoom-in duration-300"
        />

        <span className="hidden sm:inline text-[11px] font-bold uppercase tracking-tighter">
          {t(themeUtil.getThemeLabelKey(themeName))}
        </span>

        <FaChevronDown
          className={`text-[9px] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          className="absolute right-0 mt-2 w-36 rounded-xl overflow-hidden backdrop-blur-2xl z-[110] p-1 animate-in fade-in slide-in-from-top-2 duration-200"
          style={menuStyle}
        >
          {Object.values(ThemeEnum).map((name) => {
            const isActive = themeName === name;
            return (
              <li key={name}>
                <button
                  onClick={() => {
                    setTheme(name);
                    setOpen(false);
                  }}
                  className="flex items-center w-full px-3 py-2 rounded-lg text-xs font-bold uppercase transition-colors"
                  style={{
                    backgroundColor: isActive
                      ? theme.colors.primary
                      : "transparent",
                    color: isActive
                      ? theme.colors.background
                      : theme.colors.text,
                  }}
                >
                  {t(themeUtil.getThemeLabelKey(name))}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default React.memo(ThemeSwitcherComponent);
