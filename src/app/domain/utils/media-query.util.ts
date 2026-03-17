import { useState, useEffect } from "react";

/**
 * @description Hook para saber si el viewport cumple con un maxWidth.
 *
 * @param {number} maxWidth Ancho máximo en pixeles
 * @returns {boolean} true si el viewport es menor o igual a maxWidth
 */
export function useMediaQueryMaxWidth(maxWidth: number): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia(
      `(max-width: ${maxWidth}px)`,
    );

    const handler = (event: MediaQueryListEvent): void => {
      setMatches(event.matches);
    };

    setMatches(mediaQuery.matches);

    mediaQuery.addEventListener("change", handler);

    return (): void => mediaQuery.removeEventListener("change", handler);
  }, [maxWidth]);

  return matches;
}
