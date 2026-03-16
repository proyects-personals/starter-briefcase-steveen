import React from "react";

import { SkeletonBoxComponent } from "@/app";
import type { ISkeletonMetric } from "@domain";

/**
 * GitHubSkeletonComponent
 *
 * @description
 * Componente de carga (skeleton loader) utilizado mientras
 * se obtienen las métricas de GitHub desde la API.
 *
 * Este componente simula la estructura visual del dashboard
 * para evitar cambios bruscos de layout durante la carga
 * de datos.
 *
 * Secciones simuladas:
 *
 * 1. Grid de métricas principales
 *    - repositorios
 *    - estrellas
 *    - issues
 *    - commits
 *
 * 2. Bloque de lenguajes más usados
 *
 * 3. Lista de repositorios destacados
 *
 * Utiliza el componente `SkeletonBoxComponent` para
 * representar cada área con animación de carga.
 *
 * @component
 *
 * @param theme
 * Tema visual de la aplicación que contiene colores,
 * sombras, radios de borde y demás estilos globales.
 *
 * @returns React component
 */
const GitHubSkeletonComponent: React.FC<ISkeletonMetric> = ({ theme }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1rem",
        }}
      >
        <SkeletonBoxComponent height="80px" theme={theme} />
        <SkeletonBoxComponent height="80px" theme={theme} />
        <SkeletonBoxComponent height="80px" theme={theme} />
        <SkeletonBoxComponent height="80px" theme={theme} />
      </div>
      <SkeletonBoxComponent height="128px" theme={theme} />
      <SkeletonBoxComponent height="160px" theme={theme} />
    </div>
  );
};

export default GitHubSkeletonComponent;
