import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  type JSX,
} from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useLanguage, useTheme, useAnalytics } from "@application";
import { APP_ROUTES, NameUtil, type IHeaderUserMenu } from "@domain";

/**
 * Componente de menú de usuario para el encabezado.
 * @description
 * Muestra la información del usuario autenticado (nombre y rol) y un avatar
 * generado con sus iniciales. Incluye un menú desplegable (dropdown) para
 * realizar el cierre de sesión. Gestiona el cierre automático al hacer clic
 * fuera del componente mediante un `useRef`.
 * @component
 * @param {IHeaderUserMenu} props - Propiedades del componente.
 * @param {UserInterface} props.user - Objeto con los datos del usuario.
 * @version 1.0.2
 * @returns {JSX.Element | null} El menú de usuario o null si no hay sesión activa.
 */
const HeaderUserMenuComponent: React.FC<IHeaderUserMenu> = ({
  user,
}): JSX.Element | null => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { event } = useAnalytics();

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const name = user
    ? `${user.nombre} ${user.apellido}`.toUpperCase()
    : t("user.undefined");

  const role = user ? user.role.toUpperCase() : t("user.undefined");

  const initials = user
    ? NameUtil.getInitials(user.nombre, user.apellido)
    : "?";

  /**
   * @description
   * Tracking: toggle menú usuario
   *
   * Registra apertura y cierre con contexto del usuario.
   */
  const handleToggleMenu = (): void => {
    const nextState = !open;

    event("Header", `User Menu ${nextState ? "Open" : "Close"} - ${role}`);

    setOpen(nextState);
  };

  /**
   * Finaliza la sesión del usuario y redirige al login.
   * @description
   * 1. Limpia el almacenamiento local (`localStorage`).
   * Nota: Esto elimina tokens de sesión, pero también preferencias (tema/idioma).
   * 2. Utiliza `navigate` con `replace: true` para limpiar el historial de
   * navegación y evitar que el usuario regrese con el botón "atrás".
   * @returns {void}
   */
  const handleLogout = (): void => {
    event("Auth", `Logout - ${role}`);

    localStorage.clear();
    navigate(APP_ROUTES.LOGIN, { replace: true });
  };

  /**
   * Finaliza la sesión del usuario si se hace clic fuera del menú.
   * @description
   * Comprueba si el clic ocurrió fuera del menú y cierra el dropdown.
   * También registra un evento de tracking si el menú estaba abierto.
   */
  const handleClickOutside = useCallback(
    (eventClick: MouseEvent): void => {
      if (
        menuRef.current &&
        eventClick.target instanceof Node &&
        !menuRef.current.contains(eventClick.target)
      ) {
        if (open) {
          event("Header", `User Menu Close Outside - ${role}`);
        }
        setOpen(false);
      }
    },
    [open, event, role],
  );

  /**
   * @description
   * Listener global para detectar clicks fuera
   */
  useEffect((): (() => void) => {
    document.addEventListener("mousedown", handleClickOutside);

    return (): void => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  if (!user) {
    return null;
  }

  return (
    <div className="relative flex items-center gap-3" ref={menuRef}>
      <div className="flex flex-col text-right leading-tight">
        <span
          className="font-semibold text-sm"
          style={{ color: theme.colors.text }}
        >
          {name}
        </span>

        <span className="text-xs" style={{ color: theme.colors.textSecondary }}>
          {t("user.role")}: {role}
        </span>
      </div>

      <div>
        <button
          onClick={handleToggleMenu}
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm cursor-pointer transition-all"
          style={{
            background: theme.colors.primary,
            color: "#fff",
            boxShadow: theme.shadow.sm,
          }}
        >
          {initials}
        </button>

        {open && (
          <ul
            className="absolute right-0 mt-2 w-44 rounded-lg shadow-md p-2"
            style={{
              background: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
            }}
          >
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 w-full rounded-md transition-colors"
                style={{ color: theme.colors.error }}
                onMouseEnter={(e): void => {
                  e.currentTarget.style.background = theme.colors.hover;
                }}
                onMouseLeave={(e): void => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <FaSignOutAlt /> {t("login.logout")}
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default HeaderUserMenuComponent;
