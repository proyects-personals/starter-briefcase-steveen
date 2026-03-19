/**
 * @description
 * Interfaz que define la estructura de las credenciales de conexión.
 */
export interface IConnectionConfig {
  ENVIRONMENT: {
    PROD: string;
  };
  EMAILJS: {
    SERVICE_ID: string;
    TEMPLATE_ID: string;
    PUBLIC_KEY: string;
  };
  GITHUB: {
    GITHUB_TOKEN: string;
  };
  ANALYTICS: {
    kEY: string;
  };
}
