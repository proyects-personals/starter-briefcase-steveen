/**
 * @description Enum con las expresiones regulares para detectar tipos de video.
 * Incluye detección de URLs de YouTube y archivos de video locales.
 * @type {RegexEnum}
 * @enum {string}
 */
export enum RegexEnum {
  YOUTUBE = "(?:youtube\\.com\\/.*v=|youtu\\.be\\/)",
  LOCAL_VIDEO = "\\.(mp4|webm|ogg)$",
}
