import React, { useState, useRef, useEffect, useMemo, type JSX } from "react";
import { FaSun, FaMoon, FaLeaf, FaChevronDown } from "react-icons/fa";

import { useAnalytics } from "@/app";
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

  const { trackClick } = useAnalytics(); // ✅ hook

  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  /**
   * @effect handleClickOutside
   * @description
   * Efecto encargado de detectar clicks fuera del contenedor del menú
   * de selección de tema (`ThemeSwitcherComponent`).
   *
   * @listens document:mousedown
   *
   * @param {MouseEvent} event - Evento de clic global del documento.
   *
   * @returns {() => void}
   * Función de limpieza que elimina el event listener para prevenir
   * memory leaks al desmontar el componente.
   *
   * @analytics
   * Evento registrado:
   * - Category: "Click"
   * - Action: "Theme Menu Close (Outside)"
   *
   * @example
   * Usuario hace clic fuera del dropdown → menú se cierra automáticamente.
   */
  useEffect((): (() => void) => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        containerRef.current &&
        event.target instanceof Node &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
        trackClick("Theme Menu Close (Outside)");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return (): void =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [trackClick]);

  /**
   * @function handleToggle
   * @description
   * Alterna el estado de apertura/cierre del menú de selección de tema.
   *
   * Además, registra un evento analítico para identificar
   * la interacción del usuario con el dropdown.
   *
   * @returns {void}
   *
   * @analytics
   * Eventos registrados:
   * - "Theme Menu Open" → cuando el menú se abre
   * - "Theme Menu Close" → cuando el menú se cierra
   *
   * @example
   * handleToggle(); // Abre o cierra el menú según el estado actual
   */
  const handleToggle = (): void => {
    setOpen((prev) => {
      const next = !prev;

      trackClick(next ? "Theme Menu Open" : "Theme Menu Close");

      return next;
    });
  };

  /**
   * @function handleThemeChange
   * @description
   * Gestiona el cambio de tema de la aplicación.
   *
   * - Aplica el nuevo tema utilizando `setTheme`.
   * - Evita ejecuciones innecesarias si el tema seleccionado ya está activo.
   * - Cierra el menú después de la selección.
   * - Registra el cambio en analytics para análisis de preferencias de usuario.
   *
   * @param {ThemeEnum} name - Nombre del tema seleccionado.
   *
   * @returns {void}
   *
   * @analytics
   * Evento registrado:
   * - Category: "Click"
   * - Action: "Change Theme - {themeName}"
   *
   * @example
   * handleThemeChange(ThemeEnum.DARK);
   */
  const handleThemeChange = (name: ThemeEnum): void => {
    if (name !== themeName) {
      setTheme(name);
      trackClick(`Change Theme - ${name}`);
    }

    setOpen(false);
  };

  /**
   * @memo ThemeIcon
   * @description
   * Memoización del icono correspondiente al tema actual.
   *
   * Esto evita recalcular el icono en cada render y mejora el rendimiento.
   *
   * Mapeo:
   * - DARK → FaMoon
   * - EMERALD → FaLeaf
   * - DEFAULT → FaSun
   *
   * @returns {React.ComponentType} Icono correspondiente al tema activo.
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

  /**
   * @memo buttonStyle
   * @description
   * Estilos memorizados para el botón principal del selector de temas.
   *
   * Se utiliza `useMemo` para evitar recalcular estilos en cada render,
   * mejorando el rendimiento.
   *
   * @returns {React.CSSProperties}
   */
  const buttonStyle = useMemo(
    (): React.CSSProperties => ({
      backgroundColor: `color-mix(in oklch, ${theme.colors.surface} 70%, transparent)`,
      border: `1px solid ${theme.colors.border}`,
      color: theme.colors.text,
    }),
    [theme.colors.surface, theme.colors.border, theme.colors.text],
  );

  /**
   * @memo menuStyle
   * @description
   * Estilos memorizados para el contenedor del menú desplegable.
   *
   * Incluye:
   * - Fondo con mezcla de color (glass effect)
   * - Borde dinámico según el tema
   *
   * @returns {React.CSSProperties}
   */
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
        onClick={handleToggle}
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
          className={`text-[9px] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
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
                  onClick={() => handleThemeChange(name)}
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
