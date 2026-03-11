import React, { memo } from "react";
import { Link } from "react-router-dom";

import { useLanguage, useTheme } from "@application";
import { APP_ROUTES } from "@domain";

/**
 * Pantalla de Error 404 (Recurso no encontrado).
 * * @description
 * Se muestra cuando el usuario navega a una ruta inexistente. Utiliza hooks globales
 * para adaptar el mensaje al idioma del usuario y los colores al tema activo
 * (Light/Dark).
 * * @component
 * @version 1.0.0
 * @returns {JSX.Element} Sección centrada con mensaje de error y botón de retorno.
 */
const NotFoundScreen: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  /**
   * Configuración de estilos dinámicos basados en el tema activo.
   * * @description
   * Objeto que mapea propiedades CSS personalizadas a elementos específicos
   * de la interfaz.
   * @property {Object} title - Estilos para el encabezado principal; utiliza el color primario de la marca.
   * @property {Object} message - Estilos para el cuerpo de texto; asegura legibilidad con el color de fuente del tema.
   * @property {Object} button - Estilos para el botón de acción principal (CTA), definiendo fondo y contraste de texto.
   * * @version 1.0.0
   * @see {@link ThemeContext} para la estructura de `theme.colors`.
   */
  const styles = {
    title: {
      color: theme.colors.primary,
    },
    message: {
      color: theme.colors.text,
    },
    button: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.background,
    },
  };

  return (
    <section
      className="col-span-full flex flex-col items-center justify-center text-center min-h-[60vh] px-4"
      aria-labelledby="404-title"
    >
      <h1
        id="404-title"
        className="text-6xl md:text-8xl font-extrabold mb-4 transition-colors duration-300"
        style={styles.title}
      >
        {t("notFound.title")}
      </h1>

      <p
        className="text-lg md:text-xl mb-8 max-w-md opacity-90"
        style={styles.message}
      >
        {t("notFound.message")}
      </p>

      <div className="flex gap-4">
        <Link
          to={APP_ROUTES.ROOT}
          className="
            inline-flex
            items-center
            justify-center
            rounded-lg
            px-8
            py-3
            font-bold
            shadow-lg
            hover:opacity-90
            active:scale-95
            transition-all
            duration-200
          "
          style={styles.button}
        >
          {t("notFound.back")}
        </Link>
      </div>
    </section>
  );
};

export default memo(NotFoundScreen);
