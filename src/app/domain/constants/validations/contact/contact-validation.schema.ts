import * as Yup from "yup";

/**
 * @description
 * Constantes para validaciones de longitud.
 */
const MIN_NAME_LENGTH = 3;
const MIN_MESSAGE_LENGTH = 10;

/**
 * @description
 * Genera el esquema de validacion para el formulario de contacto usando Yup.
 * Este esquema valida tres campos principales:
 * - name: Obligatorio, minimo 3 caracteres.
 * - email: Obligatorio, debe ser un formato de correo valido.
 * - message: Obligatorio, minimo 10 caracteres.
 * * @param translate - Funcion de traduccion para proporcionar mensajes de error localizados.
 * @returns Un objeto de esquema de validacion de Yup para Formik.
 */
export const contactValidationSchema = (
  translate: (key: string) => string,
): Yup.ObjectSchema<Yup.AnyObject> => {
  const getTranslation = (key: string, fallback: string): string => {
    const translated = translate(key);
    return translated !== "" ? translated : fallback;
  };

  return Yup.object().shape({
    name: Yup.string()
      .min(
        MIN_NAME_LENGTH,
        getTranslation("form.errors.name_min", "Mínimo 3 caracteres"),
      )
      .required(
        getTranslation("form.errors.name_required", "El nombre es obligatorio"),
      ),
    email: Yup.string()
      .email(
        getTranslation(
          "form.errors.email_invalid",
          "Correo electrónico inválido",
        ),
      )
      .required(
        getTranslation(
          "form.errors.email_required",
          "El correo es obligatorio",
        ),
      ),
    message: Yup.string()
      .min(
        MIN_MESSAGE_LENGTH,
        getTranslation(
          "form.errors.message_min",
          "El mensaje debe tener al menos 10 caracteres",
        ),
      )
      .required(
        getTranslation(
          "form.errors.message_required",
          "El mensaje es obligatorio",
        ),
      ),
  });
};
