import React from "react";

import {
  AnimatedBackgroundComponent,
  BannerComponent,
  CardComponent,
  CarouselComponent,
  GitHubMetricComponent,
  HeroSectionComponent,
  SectionComponent,
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
  /**
   * @description
   * Tema visual de la aplicación
   * (colores, bordes, sombras, etc).
   */
  const { theme } = useTheme();

  /**
   * @description
   * Función de traducción utilizada para
   * internacionalización (i18n).
   */
  const { t } = useLanguage();

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
        <CarouselComponent
          items={WORK_EXPERIENCE}
          height="500px"
          theme={theme}
          translate={t}
        />
      </SectionComponent>

      <SectionComponent title={t("welcome.my_projects")} theme={theme}>
        <CardComponent items={PROJECTS_PERSONAL} theme={theme} translate={t} />
      </SectionComponent>

      <SectionComponent title={t("welcome.my_studies")} theme={theme}>
        <BannerComponent theme={theme} items={BANNER_ITEM} translate={t} />
      </SectionComponent>

      <SectionComponent title={t("welcome.github_nuances")} theme={theme}>
        <GitHubMetricComponent theme={theme} translate={t} />
      </SectionComponent>
    </div>
  );
};

export default BriefcaseScreen;
