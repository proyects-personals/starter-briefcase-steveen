import React from "react";

import { useLanguage, useTheme } from "@application";
import { UrlEnum } from "@domain";

/**
 * @description
 * Footer dinámico, responsive y adaptado al theme activo.
 * - Soporta internacionalización (i18n)
 * - Colores y bordes del theme
 * - Transiciones suaves al cambiar de tema
 * - Enlaces legales profesionales
 */
const FooterComponent: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

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
