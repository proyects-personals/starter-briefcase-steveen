import { useMemo } from "react";

import { NAV_ITEMS_BASE, type IHeaderNavItem } from "@domain"; // Importamos los elementos de navegación

import { useLanguage } from "../translate"; // Un hook que proporciona traducciones

/**
 * Hook que devuelve los elementos de navegación filtrados y traducidos
 * según el estado de autenticación y el idioma activo.
 *
 * @param {boolean} isAutentificated - Indica si el usuario está autenticado.
 * @returns {IHeaderNavItem[]} Array de objetos de navegación filtrados y con texto traducido.
 */
export const useNavItems = (isAutentificated: boolean): IHeaderNavItem[] => {
  const { t } = useLanguage();
  const navItems = useMemo(() => {
    return NAV_ITEMS_BASE.filter(
      (item) => item.auth === null || item.auth === isAutentificated,
    ).map((item) => ({
      ...item,
      text: t(item.text),
    }));
  }, [isAutentificated, t]);

  return navItems;
};
