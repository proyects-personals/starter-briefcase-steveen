import React from "react";

import { useLanguage, useTheme } from "@application";

/**
 * Componente funcional para el pie de página (Footer) de la aplicación.
 * * @description
 * Renderiza la sección final de la página incluyendo el copyright dinámico,
 * derechos reservados y una descripción breve. Adapta sus colores
 * automáticamente según el tema activo y soporta internacionalización (i18n).
 * * @component
 * @version 1.0.0
 * @returns {JSX.Element} Footer con estilos dinámicos y textos traducidos.
 */
const FooterComponent: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer
      className="w-full py-10 mt-auto"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        borderColor: `${theme.colors.text}1A`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 text-center space-y-2">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} SteveenCues Insights ·{" "}
          {t("footer.rights")}
        </p>
        <p className="text-xs opacity-60">{t("footer.description")}</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
