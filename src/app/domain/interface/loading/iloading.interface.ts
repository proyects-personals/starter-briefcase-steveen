/**
 * Opciones de configuración para el componente de carga (Spinner/Loader).
 * * @description
 * Define las propiedades visuales que se pueden personalizar al disparar
 * un evento de carga, como la imagen de marca, el color del indicador y su escala.
 * * @interface ILoadingOptions
 * @property {string} [logo] - URL o path de la imagen/logo a mostrar.
 * @property {string} [color] - Color en formato CSS (hex, rgb, etc.) para el indicador.
 * @property {number} [size] - Tamaño numérico (normalmente en píxeles) para el componente.
 * @version 1.0.0
 */
export interface ILoadingOptions {
  logo?: string;
  color?: string;
  size?: number;
}

/**
 * Interfaz para el estado y métodos del contexto de carga.
 * * @description
 * Define el contrato para el manejo del indicador de carga global.
 * Incluye métodos para controlar la visibilidad y propiedades para
 * mantener el estado actual de la personalización.
 * * @interface ILoading
 * @property {Function} show - Función para activar el estado de carga. Recibe `ILoadingOptions` opcionales.
 * @property {Function} hide - Función para desactivar el estado de carga y limpiar la pantalla.
 * @property {string} [logo] - Logo actualmente activo en el estado de carga.
 * @property {string} [color] - Color actualmente aplicado al cargador.
 * @property {number} [size] - Tamaño actual del cargador.
 * @version 1.0.0
 */
export interface ILoading {
  show: (options?: ILoadingOptions) => void;
  hide: () => void;
  logo?: string;
  color?: string;
  size?: number;
}
