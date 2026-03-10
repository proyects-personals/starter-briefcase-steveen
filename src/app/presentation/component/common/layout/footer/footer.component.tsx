import React from "react";

import { useLanguage, useTheme } from "@application";

const FooterComponent: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer
      className="w-full py-10 mt-auto"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
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
