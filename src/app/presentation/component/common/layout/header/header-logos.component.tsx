import React from "react";
import { Link } from "react-router-dom";

import { useTheme, useLanguage, useAnalytics } from "@application";
import { SteveenImage } from "@assets";
import { StringUtils, UrlEnum, VideoUtils, type IHeaderLogos } from "@domain";

import { LanguageSwitcherComponent } from "../../lenguage";
import { ThemeSwitcherComponent } from "../../theme";

/**
 * Header con soporte de fondo: video local, YouTube o imagen.
 *
 * @description
 * - Overlay de blur con colores del theme
 * - Logos centrados y responsive
 * - Transiciones suaves al hacer scroll
 * - Integración con analytics para tracking de interacciones
 */
const HeaderLogosComponent: React.FC<IHeaderLogos> = ({
  scrolled,
  backgroundVideo,
  backgroundYoutube,
  backgroundImage,
}) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { event } = useAnalytics();

  /**
   * Tracking: click en logo principal
   *
   * @description
   * Registra cuando el usuario navega al home
   * desde el logo del header visual.
   */
  const handleLogoClick = (): void => {
    event("Header", "Click Logo - Home (Hero)");
  };

  return (
    <div
      className={`relative w-full transition-all duration-500 ease-in-out ${
        scrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
      }`}
      style={{
        color: theme.colors.text,
        borderBottom: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadow.sm,
        backgroundColor: scrolled ? "bg-transparent" : theme.colors.black,
      }}
    >
      {StringUtils.hasValue(backgroundVideo) &&
        !StringUtils.hasValue(backgroundYoutube) && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover -z-10"
            src={backgroundVideo}
          />
        )}

      {StringUtils.hasValue(backgroundYoutube) && (
        <div className="absolute inset-0 w-full h-full -z-10">
          <iframe
            className="w-full h-full object-cover"
            src={`${UrlEnum.YOUTUBE_BASE}${VideoUtils.getYoutubeID(
              backgroundYoutube,
            )}?autoplay=1&mute=1&loop=1&playlist=${VideoUtils.getYoutubeID(
              backgroundYoutube,
            )}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="YouTube Background"
          />
        </div>
      )}

      {StringUtils.hasValue(backgroundImage) &&
        !StringUtils.hasValue(backgroundVideo) &&
        !StringUtils.hasValue(backgroundYoutube) && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}

      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `${theme.colors.surface}aa`,
          backdropFilter: "blur(6px)",
        }}
      />

      <div className="relative z-10 flex items-center justify-between px-4 sm:px-8 py-1">
        <div className="flex items-center gap-4 h-16">
          <Link to="/" title={t("header.home")} onClick={handleLogoClick}>
            <img
              src={SteveenImage}
              alt={t("header.logo_ccm")}
              className="h-12 w-12 object-contain rounded-full cursor-pointer transition-transform duration-300 hover:scale-105 bg-transparent"
            />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcherComponent />
          <ThemeSwitcherComponent />
        </div>
      </div>
    </div>
  );
};

export default HeaderLogosComponent;
