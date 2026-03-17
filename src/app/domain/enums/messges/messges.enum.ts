/**
 * @description
 * Enumeracion para los tipos de mensajes estandarizados en la aplicacion.
 * Se utiliza principalmente para definir el estado visual y el comportamiento
 * de los componentes de alerta y mensajes de retroalimentacion.
 *
 * @typeparam SUCCESS - Indica una operacion exitosa (ej. formulario enviado correctamente).
 * @typeparam ERROR - Indica una operacion fallida o un error de validacion.
 */
export enum MessagesEnum {
  SUCCESS = "success",
  ERROR = "error",
}
