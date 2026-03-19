import type { IConnectionConfig } from "@/app/domain";
/**
 * @description
 * Configuración centralizada de servicios externos.
 * Gracias a la definición en env.d.ts, TypeScript reconoce estos valores como strings.
 */
export const CONNECTION_CONFIG: IConnectionConfig = {
  ENVIRONMENT: {
    PROD: process.env.PROD ?? import.meta.env.VITE_PROD,
  },
  EMAILJS: {
    SERVICE_ID:
      process.env.EMAILJS_SERVICE_ID ?? import.meta.env.VITE_EMAILJS_SERVICE_ID,
    TEMPLATE_ID:
      process.env.EMAILJS_TEMPLATE_ID ??
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    PUBLIC_KEY:
      process.env.EMAILJS_PUBLIC_KEY ?? import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  },
  GITHUB: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN ?? import.meta.env.VITE_GITHUB_TOKEN,
  },
  ANALYTICS: {
    kEY: process.env.ANALYTICS_KEY ?? import.meta.env.VITE_ANALYTICS_KEY,
  },
};
