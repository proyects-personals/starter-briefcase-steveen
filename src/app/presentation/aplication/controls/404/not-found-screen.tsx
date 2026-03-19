import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAnalytics } from "@/app";
import { useLanguage, useTheme } from "@application";
import { APP_ROUTES } from "@domain";

/**
 * Pantalla de Error 404 (Recurso no encontrado).
 *
 * @description
 * Se muestra cuando el usuario navega a una ruta inexistente.
 *
 * Incluye:
 * - Soporte i18n (traducciones dinámicas)
 * - Adaptación visual según el tema activo
 * - Tracking analítico de visualización y acciones
 *
 * @component
 * @version 1.1.0
 *
 * @returns {JSX.Element}
 * Sección centrada con mensaje de error y botón de retorno.
 */
const NotFoundScreen: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { trackScreen, trackClick } = useAnalytics();

  /**
   * @effect track404Screen
   * @description
   * Registra la visualización de la pantalla 404.
   *
   * Permite analizar:
   * - Rutas inexistentes más visitadas
   * - Problemas de navegación
   * - Enlaces rotos dentro de la aplicación
   *
   * @analytics
   * Evento:
   * - Category: "Screen"
   * - Action: "404 Not Found"
   */
  useEffect(() => {
    trackScreen("404 Not Found");
  }, [trackScreen]);

  /**
   * @function handleBackHome
   * @description
   * Registra el click del usuario al volver al home desde la pantalla 404.
   *
   * @returns {void}
   *
   * @analytics
   * Evento:
   * - Category: "Click"
   * - Action: "404 Back Home"
   */
  const handleBackHome = (): void => {
    trackClick("404 Back Home");
  };

  /**
   * @description
   * Configuración de estilos dinámicos basados en el tema activo.
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
          onClick={handleBackHome}
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
