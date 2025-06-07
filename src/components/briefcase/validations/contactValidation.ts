import * as Yup from 'yup';

export const initialValues = {
  name: '',
  email: '',
  message: '',
};

export const validationSchema = Yup.object({
  name: Yup.string().required('Nombre es requerido'),
  email: Yup.string().email('Correo no válido').required('Correo es requerido'),
  message: Yup.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .required('Mensaje es requerido'),
});
