import { type JSX } from "react";

import { useLoading } from "@application";

/**
 * @description Componente de loading de la app.
 * Muestra un spinner clásico o un logo palpitante usando solo Tailwind.
 * @version 1.3.1
 */
const LoadingAppComponent = (): JSX.Element => {
  const { logo, color = "#fff", size = 64 } = useLoading();
  const hasLogo = typeof logo === "string" && logo.trim() !== "";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      {hasLogo ? (
        <img
          src={logo}
          alt="Cargando..."
          className="object-contain animate-pulse"
          style={{ width: size, height: size }}
        />
      ) : (
        <div
          className="rounded-full border-4 border-t-transparent animate-spin"
          style={{
            width: size,
            height: size,
            borderColor: color,
            borderTopColor: "transparent",
          }}
        />
      )}
    </div>
  );
};

export default LoadingAppComponent;
