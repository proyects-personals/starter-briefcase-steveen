import React from "react";
import { Link } from "react-router-dom";

import { useLanguage, useTheme } from "@application";
import { APP_ROUTES } from "@domain";

const NotFoundScreen: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section
      className="
        col-span-full
        flex
        flex-col
        items-center
        justify-center
        text-center
      "
    >
      <h1
        className="text-6xl font-extrabold mb-4"
        style={{ color: theme.colors.primary }}
      >
        {t("notFound.title")}
      </h1>

      <p className="text-lg mb-8 max-w-md" style={{ color: theme.colors.text }}>
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
            px-6
            py-3
            font-medium
            shadow-md
            transition
          "
          style={{
            backgroundColor: theme.colors.primary,
            color: theme.colors.background,
          }}
        >
          {t("notFound.back")}
        </Link>
      </div>
    </section>
  );
};

export default NotFoundScreen;
