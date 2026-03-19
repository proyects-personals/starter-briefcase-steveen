import React from "react";

import { useLanguage, useTheme, useAnalytics } from "@application";
import { UrlEnum } from "@domain";

/**
 * @description
 * Footer dinámico, responsive y adaptado al theme activo.
 *
 * Características:
 * - Soporta internacionalización (i18n)
 * - Estilos dinámicos según el theme
 * - Transiciones suaves
 * - Enlaces legales
 * - Integración con analytics para tracking de interacciones
 */
const FooterComponent: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { event } = useAnalytics();

  /**
   * Tracking: click en enlace de política / términos
   *
   * @description
   * Registra cuando el usuario interactúa con enlaces legales
   * del footer (ej. términos y condiciones o política de privacidad).
   *
   * @returns {void}
   */
  const handleLegalClick = (): void => {
    event("Footer", "Click - Terms & Privacy");
  };

  return (
    <footer
      className="w-full mt-auto py-4 transition-colors duration-500"
      style={{
        backgroundColor: theme.colors.backgroundGlass,
        color: theme.colors.text,
        borderColor: `${theme.colors.border}33`,
      }}
    >
      <div className="mx-auto max-w-7xl flex flex-col items-center space-y-4">
        <div className="text-center">
          <p
            className="text-sm sm:text-base font-medium"
            style={{ color: theme.colors.text }}
          >
            © {new Date().getFullYear()}{" "}
            <span style={{ color: theme.colors.primary }}>SteveenCues</span>{" "}
            Insights
          </p>

          <p
            className="text-xs sm:text-sm opacity-70 mt-1"
            style={{ color: theme.colors.textSecondary }}
          >
            {t("footer.rights")}
          </p>
        </div>

        <div
          className="h-px w-12 opacity-20"
          style={{ backgroundColor: theme.colors.textSecondary }}
        />

        <div className="flex flex-col items-center space-y-2">
          <p
            className="text-xs sm:text-sm text-center italic opacity-60"
            style={{ color: theme.colors.textSecondary }}
          >
            {t("footer.description")}
          </p>

          <nav className="flex items-center gap-4 mt-2">
            <a
              href={UrlEnum.TERMS_AND_CONDITIONS}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLegalClick}
              className="text-xs font-semibold uppercase tracking-wider hover:opacity-100 transition-opacity duration-300"
              style={{
                color: theme.colors.primary,
                opacity: 0.8,
              }}
            >
              {t("footer.privacyPolicy")}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
