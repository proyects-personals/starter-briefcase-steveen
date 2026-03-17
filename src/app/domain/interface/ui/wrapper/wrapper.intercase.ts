import type { IAppTheme } from "@/app/domain";
import type React from "react";

/**
 * @description
 * Propiedades de configuracion para el componente FieldWrapper.
 * Proporciona un diseño estandarizado para campos de formulario, incluyendo etiquetas,
 * estados de error y caracteristicas de accesibilidad.
 *
 * @typeparam label - Texto opcional para identificar el campo ante el usuario.
 * @typeparam name - Identificador unico del campo, usado para accesibilidad (htmlFor).
 * @typeparam required - Bandera booleana que añade un indicador visual para campos obligatorios.
 * @typeparam hasError - Bandera booleana para activar el estado visual de error en el contenedor.
 * @typeparam errorMessage - Mensaje de validacion especifico a mostrar cuando hasError es verdadero.
 * @typeparam theme - Tokens del sistema de diseño global para espaciado, colores y tipografia.
 * @typeparam children - El elemento de entrada (CustomInput, TextArea, etc.) que sera envuelto.
 */
export interface IFieldWrapper {
  label?: string;
  name: string;
  required?: boolean;
  hasError: boolean;
  errorMessage?: string;
  theme: IAppTheme;
  children: React.ReactNode;
}
