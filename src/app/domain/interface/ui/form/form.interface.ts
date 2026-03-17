import type { IAppTheme } from "@/app/domain";
import type React from "react";
import type { IconType } from "react-icons";

/**
 * @description
 * Propiedades de configuracion para el componente CustomInput.
 * Se utiliza para campos de texto estandar, correo o contraseñas con soporte de tema.
 *
 * @typeparam name - Identificador unico del campo, usado por Formik para el mapeo de estado.
 * @typeparam label - Texto descriptivo opcional que se muestra sobre el campo.
 * @typeparam placeholder - Texto de sugerencia cuando el campo esta vacio.
 * @typeparam type - Tipo de entrada HTML (ej. text, email, password).
 * @typeparam required - Indica si el campo es obligatorio.
 * @typeparam disabled - Indica si el campo esta deshabilitado para interaccion.
 * @typeparam theme - Tokens del sistema de diseño global para estilos consistentes.
 * @typeparam value - Valor actual del campo de entrada.
 * @typeparam touched - Estado de Formik que indica si el usuario interactuo con el campo.
 * @typeparam error - Mensaje de validacion a mostrar en caso de error.
 * @typeparam onChange - Manejador para los eventos de cambio de valor.
 * @typeparam onBlur - Manejador para el evento de perdida de foco.
 */
export interface ICustomInput {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  theme: IAppTheme;
  value?: string;
  touched?: boolean;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

/**
 * @description
 * Propiedades de configuracion para el componente TextAreaField.
 * Especializado para entradas de texto de multiples lineas con soporte de tema.
 *
 * @typeparam name - Identificador unico para el campo de area de texto.
 * @typeparam label - Texto descriptivo obligatorio para el campo.
 * @typeparam placeholder - Texto de sugerencia para el contenido esperado.
 * @typeparam theme - Tokens de diseño para bordes, colores y espaciado.
 * @typeparam required - Indica si el campo debe ser completado obligatoriamente.
 * @typeparam value - Contenido actual de texto del area.
 * @typeparam touched - Rastrea si el campo ha sido visitado para mostrar validaciones.
 * @typeparam error - Mensaje de retroalimentacion en caso de fallo de validacion.
 * @typeparam onChange - Manejador para capturar la entrada de texto.
 * @typeparam onBlur - Manejador para cuando el campo pierde el foco.
 */
export interface ITextAreaField {
  name: string;
  label: string;
  placeholder?: string;
  theme: IAppTheme;
  required?: boolean;
  value?: string;
  touched?: boolean;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

/**
 * @description
 * Propiedades para el componente ContactItem.
 * Representa una fila individual de informacion de contacto con icono y enlace opcional.
 *
 * @typeparam icon - Componente de icono (ej. de react-icons).
 * @typeparam label - Titulo del metodo de contacto (ej. Email, LinkedIn).
 * @typeparam value - El dato de contacto real (ej. correo o telefono).
 * @typeparam href - URL opcional o accion (ej. mailto: o enlace externo).
 * @typeparam theme - Tokens de diseño para colores de iconos y texto.
 */
export interface IContactItem {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
  theme: IAppTheme;
}

/**
 * @description
 * Interfaz que define la estructura de los valores del formulario de contacto.
 * Se utiliza para asegurar el tipado fuerte en Formik y el envio de datos.
 *
 * @typeparam name - Nombre completo del remitente que inicia el contacto.
 * @typeparam email - Direccion de correo electronico para responder al mensaje.
 * @typeparam message - Contenido detallado del mensaje o consulta enviada.
 */
export interface IFormValues {
  name: string;
  email: string;
  message: string;
}
