import * as Yup from 'yup';

const MIN_MESSAGE_LENGTH = 10;

export const initialValues = {
  name: '',
  email: '',
  message: '',
};

export const validationSchema = Yup.object({
  name: Yup.string().required('Nombre es requerido'),
  email: Yup.string().email('Correo no válido').required('Correo es requerido'),
  message: Yup.string()
    .min(MIN_MESSAGE_LENGTH, 'El mensaje debe tener al menos 10 caracteres')
    .required('Mensaje es requerido'),
});
