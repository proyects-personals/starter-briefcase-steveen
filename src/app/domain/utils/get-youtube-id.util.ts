import {
  RegexEnum,
  VideoType,
  YoutubeEmbedParams,
  YoutubeEmbedURL,
} from "../enums";

/**
 * @description Class de utilidades para manejo de videos, especialmente YouTube.
 * Proporciona métodos para detectar URLs de YouTube, extraer IDs y generar URLs de embed.
 */
export class VideoUtils {
  /**
   * Detecta si la URL proporcionada corresponde a un video de YouTube.
   * @param {string} url - URL a verificar.
   * @returns {boolean} True si es un video de YouTube.
   */
  static isYoutube(url: string): boolean {
    return new RegExp(RegexEnum.YOUTUBE).test(url);
  }

  /**
   * Extrae el ID de un video de YouTube desde su URL.
   * @param {string} url - URL de YouTube.
   * @returns {string} ID del video, o cadena vacía si no se encuentra.
   */
  static getYoutubeID(url: string): string {
    const match = url.match(new RegExp(RegexEnum.YOUTUBE + "([^&?]+)"));
    return match ? match[1] : "";
  }

  /**
   * Detecta el tipo de video (YouTube, local, otro).
   * @param {string} url - URL o path del video.
   * @returns {VideoType} Tipo de video.
   */
  static getVideoType(url: string): VideoType {
    if (!url) {
      return VideoType.OTHER;
    }

    if (this.isYoutube(url)) {
      return VideoType.YOUTUBE;
    }
    if (new RegExp(RegexEnum.LOCAL_VIDEO).test(url)) {
      return VideoType.LOCAL;
    }

    return VideoType.OTHER;
  }

  /**
   * Genera la URL de embed de YouTube lista para un `<iframe>`.
   * Usa los enums `YoutubeEmbedURL` y `YoutubeEmbedParams`.
   * @param {string} url - URL original de YouTube.
   * @returns {string} URL de embed con autoplay, mute, loop y demás parámetros.
   */
  static getYoutubeEmbed(url: string): string {
    const id = this.getYoutubeID(url);
    if (!id) {
      return "";
    }

    const params = new URLSearchParams({
      autoplay: YoutubeEmbedParams.AUTOPLAY,
      mute: YoutubeEmbedParams.MUTE,
      loop: YoutubeEmbedParams.LOOP,
      playlist: id,
      controls: YoutubeEmbedParams.CONTROLS,
      modestbranding: YoutubeEmbedParams.MODESTBRANDING,
      showinfo: YoutubeEmbedParams.SHOWINFO,
    });

    return `${YoutubeEmbedURL.BASE}${id}?${params.toString()}`;
  }
}
