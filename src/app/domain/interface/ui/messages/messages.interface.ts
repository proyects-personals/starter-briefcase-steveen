import type { IAppTheme, MessageType } from "@/app/domain";

/**
 * @description
 * Propiedades para el componente MessageErrorComponent.
 * Define el contenido, estilo visual y tema para proporcionar retroalimentacion al usuario.
 *
 * @typeparam text - El contenido del mensaje a mostrar. Puede ser null si no hay mensaje.
 * @typeparam type - La categoria del mensaje (ej. success, error), define el color e icono.
 * @typeparam theme - Tokens del sistema de diseño global para un estilo de alerta consistente.
 */
export interface IMessageError {
  text: string | null;
  type: MessageType;
  theme: IAppTheme;
}

/**
 * @description
 * Estructura de estado interna para el hook useMessages.
 * Gestiona la coexistencia o exclusion mutua de notificaciones de error y exito.
 *
 * @typeparam error - Cadena que contiene el mensaje de error o null si el estado esta limpio.
 * @typeparam success - Cadena que contiene el mensaje de exito o null si el estado esta limpio.
 */
export interface IMessageState {
  error: string | null;
  success: string | null;
}
