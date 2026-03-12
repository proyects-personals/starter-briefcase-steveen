import React from "react";

import { useLanguage, useTheme } from "@application";

/**
 * Footer dinámico, responsive y adaptado al theme activo.
 * - Soporta internacionalización (i18n)
 * - Colores y bordes del theme
 * - Transiciones suaves al cambiar de tema
 * - Diseño moderno y centrado
 */
const FooterComponent: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer
      className="w-full mt-auto py-4 md:py-8 px-4 md:px-8 transition-colors duration-500"
      style={{
        backgroundColor: theme.colors.surface,
        color: theme.colors.text,
      }}
    >
      <div className="mx-auto max-w-7xl text-center space-y-2 sm:space-y-3">
        <p
          className="text-sm sm:text-base opacity-80"
          style={{ color: theme.colors.textSecondary }}
        >
          © {new Date().getFullYear()} SteveenCues Insights ·{" "}
          {t("footer.rights")}
        </p>
        <p
          className="text-xs sm:text-sm opacity-60"
          style={{ color: theme.colors.textSecondary }}
        >
          {t("footer.description")}
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
