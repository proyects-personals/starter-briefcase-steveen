import React, { useEffect, useState, type JSX } from "react";

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
 * * @component
 * @param {IHeader} props - Propiedades del componente.
 * @param {() => void} props.onToggleSidebar - Función para controlar el estado del menú lateral.
 * @param {boolean} props.isAutentificated - Estado de sesión del usuario.
 * * @version 1.0.0
 * @returns {JSX.Element} La estructura del encabezado con z-index prioritario (z-50).
 */
const HeaderComponent: React.FC<IHeader> = ({
  onToggleSidebar,
  isAutentificated,
}): JSX.Element => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const SCROLL_THRESHOLD = 50;

  /**
   * Efecto para registrar y limpiar el evento de scroll global.
   * * @listens ScrollEvent - Escucha el desplazamiento en el objeto `window`.
   * @cleanup Elimina el listener al desmontar el componente para optimizar memoria.
   */
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
