/**
 * @description Enum con los parámetros para generar la URL de embed de YouTube.
 * Permite configurar autoplay, mute, loop, controles y branding de forma centralizada.
 * @type {YoutubeEmbedParams}
 * @enum {string}
 */
export enum YoutubeEmbedParams {
  AUTOPLAY = "1",
  MUTE = "1",
  LOOP = "1",
  CONTROLS = "0",
  MODESTBRANDING = "1",
  SHOWINFO = "0",
}

/**
 * @description Enum con la base de la URL de embed de YouTube.
 * Permite construir la URL completa para el iframe de fondo.
 * @type {YoutubeEmbedURL}
 * @enum {string}
 */
export enum YoutubeEmbedURL {
  BASE = "https://www.youtube.com/embed/",
}

/**
 * @description Enum que define los tipos de video soportados.
 * Permite categorizar entre videos locales, de YouTube u otros tipos.
 * @type {VideoType}
 * @enum {string}
 */
export enum VideoType {
  LOCAL = "local",
  YOUTUBE = "youtube",
  OTHER = "other",
}
