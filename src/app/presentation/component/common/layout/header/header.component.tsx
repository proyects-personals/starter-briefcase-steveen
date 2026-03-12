import clsx from "clsx";
import React, { useEffect, useState, type JSX } from "react";

import { useTheme } from "@application";
import { type IHeader } from "@domain";

import HeaderAuthBarComponent from "./header-auth-bar.component";
import HeaderLogosComponent from "./header-logos.component";
import HeaderNavComponent from "./header-nav.component";

/**
 * Componente principal de la Cabecera (Header).
 * * @description
 * Actúa como contenedor y controlador de la navegación superior. Gestiona:
 * 1. El estado de desplazamiento (`scrolled`) para aplicar efectos visuales.
 * 2. La alternancia entre la barra de usuario autenticado y la navegación pública.
 * 3. La fijación del elemento en la parte superior de la ventana (`fixed top-0`).
 * 4. Mantiene el diseño original y responsive, aplicando colores y sombras del theme.
 * * @component
 * @param {IHeader} props - Propiedades del componente.
 * @param {() => void} props.onToggleSidebar - Función para controlar el estado del menú lateral.
 * @param {boolean} props.isAutentificated - Estado de sesión del usuario.
 * * @version 1.1.1
 * @returns {JSX.Element} La estructura del encabezado con z-index prioritario (z-50).
 */
const HeaderComponent: React.FC<IHeader> = ({
  onToggleSidebar,
  isAutentificated,
}): JSX.Element => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { theme } = useTheme();
  const HEADER_SCROLL_OFFSET = 40;

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > HEADER_SCROLL_OFFSET);
    };

    window.addEventListener("scroll", handleScroll);
    return (): void => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-500",
        isAutentificated ? "sticky" : "fixed",
      )}
      style={{
        backgroundColor: theme.colors.backgroundGlass,
        boxShadow: scrolled ? theme.shadow.md : "none",
        borderBottom: `1px solid ${theme.colors.border}`,
        color: theme.colors.text,
        fontFamily: theme.font.family,
      }}
    >
      {isAutentificated ? (
        <HeaderAuthBarComponent user={null} onToggleSidebar={onToggleSidebar} />
      ) : (
        <>
          <HeaderLogosComponent scrolled={scrolled} />
          <HeaderNavComponent
            isAutentificated={isAutentificated}
            scrolled={scrolled}
          />
        </>
      )}
    </header>
  );
};

export default HeaderComponent;
