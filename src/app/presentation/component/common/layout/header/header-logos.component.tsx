import React from "react";
import { Link } from "react-router-dom";

import { useTheme, useLanguage } from "@application";
import { logoMadjs } from "@assets";
import {
  StringUtils,
  VideoUtils,
  YoutubeEmbedURL,
  type IHeaderLogos,
} from "@domain";

import { LanguageSwitcherComponent } from "../../lenguage";
import { ThemeSwitcherComponent } from "../../theme";

/**
 * Header con soporte de fondo: video local, YouTube o imagen.
 * - Overlay de blur con colores del theme
 * - Logos centrados y responsive
 * - Transiciones suaves al hacer scroll
 */
const HeaderLogosComponent: React.FC<IHeaderLogos> = ({
  scrolled,
  backgroundVideo,
  backgroundYoutube,
  backgroundImage,
}) => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div
      className={`relative w-full transition-all duration-500 ease-in-out ${
        scrolled
          ? "opacity-0 h-0 overflow-hidden"
          : "opacity-100 h-auto py-2 sm:py-3"
      }`}
      style={{
        color: theme.colors.text,
        borderBottom: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadow.sm,
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
            src={`${YoutubeEmbedURL.BASE}${VideoUtils.getYoutubeID(
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
      <div className="relative z-10 flex items-center justify-between h-full px-4 sm:px-14">
        <div className="flex items-center gap-4">
          <Link to="/" title={t("header.home")}>
            <img
              src={logoMadjs}
              alt={t("header.logo_ccm")}
              className="h-16 sm:h-20 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <Link to="/" title={t("header.home")} className="hidden sm:block">
            <img
              src={logoMadjs}
              alt={t("header.logo_ecuador")}
              className="h-16 sm:h-20 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
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
