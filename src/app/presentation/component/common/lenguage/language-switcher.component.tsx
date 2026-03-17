import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { FaGlobe, FaChevronDown } from "react-icons/fa";

import { useLanguage, useTheme } from "@application";
import { languages, type ILanguageSwitcher, type LanguageType } from "@domain";

/**
 * @component LanguageSwitcherComponent
 * @description Componente selector de idiomas de alto rendimiento.
 * Ofrece una interfaz moderna con desenfoque de fondo (backdrop-blur),
 * soporte para temas dinámicos y animaciones fluidas.
 * @param {ILanguageSwitcher} props - Propiedades del componente.
 * @param {string} [props.className] - Clases adicionales de Tailwind para posicionamiento.
 * @returns {React.JSX.Element} Un selector de idiomas desplegable optimizado.
 * @version 1.2.2
 * @author Steveen Cues
 */
const LanguageSwitcherComponent: React.FC<ILanguageSwitcher> = ({
  className,
}): React.JSX.Element => {
  const { language, changeTranslate } = useLanguage();
  const { theme } = useTheme();

  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  /**
   * @method handleClickOutside
   * @description Cierra el menú desplegable si el usuario hace clic fuera del contenedor.
   * Se evita la aserción de tipo 'as Node' mediante validación directa de instancia.
   * @returns {void}
   */
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

  /**
   * @method handleLanguageChange
   * @description Gestiona el cambio de idioma y cierra el menú.
   * @param {LanguageType} lang - El código del idioma seleccionado (ISO 639-1).
   * @returns {void}
   */
  const handleLanguageChange = useCallback(
    (lang: LanguageType): void => {
      if (lang !== language) {
        changeTranslate(lang);
      }
      setOpen(false);
    },
    [language, changeTranslate],
  );

  /**
   * @description Estilos memorizados para el botón principal para evitar re-cálculos.
   */
  const buttonStyle = useMemo(
    (): React.CSSProperties => ({
      backgroundColor: `color-mix(in oklch, ${theme.colors.surface} 80%, transparent)`,
      border: `1px solid ${theme.colors.border}`,
      color: theme.colors.text,
    }),
    [theme.colors.surface, theme.colors.border, theme.colors.text],
  );

  /**
   * @description Estilos memorizados para el menú desplegable.
   */
  const menuStyle = useMemo(
    (): React.CSSProperties => ({
      backgroundColor: `color-mix(in oklch, ${theme.colors.surface} 95%, black)`,
      border: `1px solid ${theme.colors.border}`,
      boxShadow: theme.shadow.lg,
    }),
    [theme.colors.surface, theme.colors.border, theme.shadow.lg],
  );

  return (
    <div className={`relative ${className ?? ""}`} ref={containerRef}>
      <button
        onClick={(): void => setOpen((prev) => !prev)}
        className={`
          group flex items-center justify-center gap-1.5 
          p-2 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl 
          backdrop-blur-xl transition-all duration-300 
          hover:shadow-lg active:scale-95
        `}
        style={buttonStyle}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <FaGlobe
          className="text-base transition-transform duration-500 group-hover:rotate-180"
          style={{ color: theme.colors.primary }}
        />
        <span className="hidden sm:inline text-sm font-bold uppercase tracking-tighter">
          {language}
        </span>

        <FaChevronDown
          className={`text-[9px] opacity-50 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          className="absolute right-0 mt-3 w-40 sm:w-44 rounded-2xl overflow-hidden backdrop-blur-2xl z-[100] p-1.5 animate-in fade-in slide-in-from-top-2 duration-200"
          style={menuStyle}
          role="listbox"
        >
          {languages.map((item) => {
            const isActive = language === item.code;
            return (
              <li
                key={item.code}
                role="option"
                aria-selected={isActive}
                className="mb-1 last:mb-0"
              >
                <button
                  onClick={(): void => handleLanguageChange(item.code)}
                  className="flex items-center justify-between w-full px-3 py-2 sm:py-2.5 rounded-xl transition-all duration-200 group/item"
                  style={{
                    backgroundColor: isActive
                      ? theme.colors.primary
                      : "transparent",
                    color: isActive
                      ? theme.colors.background
                      : theme.colors.text,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base sm:text-lg group-hover/item:scale-110 transition-transform duration-200">
                      {item.flag}
                    </span>
                    <span
                      className={`text-xs sm:text-sm ${isActive ? "font-bold" : "font-medium opacity-80"}`}
                    >
                      {item.label}
                    </span>
                  </div>
                  {isActive && (
                    <span
                      className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full"
                      style={{ backgroundColor: theme.colors.background }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default React.memo(LanguageSwitcherComponent);
