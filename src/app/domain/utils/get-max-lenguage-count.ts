import type { LanguageStatType } from "@/app/domain";

/**
 * @description
 * Calcula el valor máximo de repositorios entre los lenguajes.
 */
export const getMaxLanguageCount = (languages: LanguageStatType[]): number => {
  if (languages.length === 0) return 0;

  return Math.max(...languages.map(([, count]) => count));
};
