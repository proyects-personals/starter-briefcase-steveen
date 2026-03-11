import type { RoleEnum } from "../../enums";

/**
 * @interface UserModel
 * @description Representa un usuario de la aplicación con toda la información básica
 *              necesaria para autenticación, autorización y perfil.
 *
 * @property {string} email - Correo electrónico del usuario.
 * @property {boolean} emailVerified - Indica si el correo electrónico ha sido verificado.
 * @property {string} nombre - Nombre(s) del usuario.
 * @property {string} apellido - Apellido(s) del usuario.
 * @property {RoleEnum} role - Rol del usuario, usado para control de acceso.
 * @property {string} telefono - Número de teléfono del usuario.
 * @property {string} sub - Identificador único del usuario (por ejemplo, Cognito sub o UUID).
 */
export interface UserModel {
  email: string;
  emailVerified: boolean;
  nombre: string;
  apellido: string;
  role: RoleEnum;
  telefono: string;
  sub: string;
}
