import React, { useEffect } from "react";

import {
  AnimatedBackgroundComponent,
  BannerComponent,
  CardComponent,
  CarouselComponent,
  ContactComponent,
  GitHubMetricComponent,
  HeroSectionComponent,
  SectionComponent,
  TrackSectionWrapperComponent,
  useAnalytics,
} from "@/app";
import { useTheme, useLanguage } from "@/app/application";
import { BANNER_ITEM, PROJECTS_PERSONAL, WORK_EXPERIENCE } from "@domain";

/**
 * BriefcaseScreen
 *
 * @description
 * Pantalla principal del portafolio que muestra información
 * profesional organizada en diferentes secciones.
 *
 * Esta pantalla funciona como contenedor de múltiples
 * componentes reutilizables que representan diferentes
 * áreas del portafolio.
 *
 * Secciones incluidas:
 *
 * - Hero principal con introducción
 * - Experiencia laboral
 * - Proyectos personales
 * - Estudios / formación
 * - Métricas de GitHub
 *
 * Además, incluye un fondo animado utilizando
 * `AnimatedBackgroundComponent` para mejorar la
 * experiencia visual del usuario.
 *
 * Hooks utilizados:
 *
 * - `useTheme` para obtener el tema actual de la aplicación
 * - `useLanguage` para gestionar las traducciones
 *
 * @component
 *
 * @returns React.JSX.Element
 * Pantalla completa del portafolio con todas sus secciones.
 */
const BriefcaseScreen: React.FC = (): React.JSX.Element => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { trackScreen } = useAnalytics();

  /**
   * @effect trackScreen
   * @description
   * Registra la visualización de la pantalla principal del portafolio
   * en el sistema de analítica.
   *
   * @listens trackScreen - Función memoizada del hook `useAnalytics`.
   * @returns {void}
   * @example
   * trackScreen("Portafolio");
   */
  useEffect(() => {
    trackScreen("Portafolio");
  }, [trackScreen]);

  return (
    <div className="col-span-full w-full relative flex flex-col items-center justify-center pt-0 md:pt-22">
      <AnimatedBackgroundComponent
        theme={theme}
        width="100%"
        height="100%"
        opacity={0.1}
      />

      <HeroSectionComponent theme={theme} translate={t} />

      <SectionComponent title={t("welcome.work_experience")} theme={theme}>
        <TrackSectionWrapperComponent name="Experiencia">
          <CarouselComponent
            items={WORK_EXPERIENCE}
            height="500px"
            theme={theme}
            translate={t}
          />
        </TrackSectionWrapperComponent>
      </SectionComponent>

      <SectionComponent title={t("welcome.my_projects")} theme={theme}>
        <TrackSectionWrapperComponent name="Proyectos">
          <CardComponent
            items={PROJECTS_PERSONAL}
            theme={theme}
            translate={t}
          />
        </TrackSectionWrapperComponent>
      </SectionComponent>

      <SectionComponent title={t("welcome.my_studies")} theme={theme}>
        <TrackSectionWrapperComponent name="Estudios">
          <BannerComponent theme={theme} items={BANNER_ITEM} translate={t} />
        </TrackSectionWrapperComponent>
      </SectionComponent>

      <SectionComponent title={t("welcome.github_nuances")} theme={theme}>
        <TrackSectionWrapperComponent name="GitHub">
          <GitHubMetricComponent theme={theme} translate={t} />
        </TrackSectionWrapperComponent>
      </SectionComponent>

      <SectionComponent title={t("welcome.contact_me")} theme={theme}>
        <TrackSectionWrapperComponent name="Contacto">
          <ContactComponent theme={theme} translate={t} />
        </TrackSectionWrapperComponent>
      </SectionComponent>
    </div>
  );
};

export default BriefcaseScreen;
