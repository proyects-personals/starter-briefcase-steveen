import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import emailjs from 'emailjs-com';
import {
  initialValues,
  validationSchema,
} from './validations/contactValidation';
import CustomInput from '../common/ui/inputs/CustomInput';
import TextAreaField from '../common/ui/inputs/TextAreaField';
import MessageError from '../common/ui/messages/MessageError';
import useMessages from '../../hook/errors/useMessages';
import { MessageType } from '../../types/MessageType';

const ContactComponent: React.FC = () => {
  const [typeMessage, setTypeMessage] = useState<MessageType>('error');
  const { handleError, handleSuccess, errorMessage, successMessage } =
    useMessages();

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      await emailjs.send(
        'service_8wwzfbd',
        'template_ie85ywa',
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        '5VFpkwnxhE5zWdL0C'
      );
      setTypeMessage('success');
      handleSuccess('Mensaje enviado correctamente');
      resetForm();
    } catch (error) {
      setTypeMessage('error');
      handleError('Ocurrió un error al enviar el mensaje');
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Columna 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800">¡Conectemos!</h2>
          <p className="mt-2 text-gray-600">
            Soy una profesional apasionada por el desarrollo de software, con un
            fuerte compromiso hacia la creación de soluciones innovadoras y
            eficientes. Me motiva aprender constantemente, experimentar con
            nuevas tecnologías y superar desafíos que impulsen el crecimiento de
            productos digitales. Si buscas una mente creativa y con visión,
            ¡hablemos!
          </p>
        </div>

        {/* Columna 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800">Contáctame</h2>
          <p className="mt-2 text-gray-600">
            <span className="font-bold">Correo:</span> zh31505@gmail.com
          </p>
          <p className="mt-2 text-gray-600">
            <span className="font-bold">Teléfono:</span> +593 096 263 9779
          </p>
          <p className="mt-2 text-gray-600">
            <span className="font-bold">LinkedIn:</span>{' '}
            <a
              href="https://www.linkedin.com/in/steveen-ordoñez-244b0a227"
              className="text-orange-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              steveen-ordoñez
            </a>
          </p>
        </div>

        {/* Columna 3: Formulario */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            ¿Tienes alguna consulta?
          </h2>

          {(errorMessage || successMessage) && (
            <MessageError
              text={errorMessage || successMessage}
              type={typeMessage}
            />
          )}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
              isSubmitting,
            }) => (
              <Form className="space-y-4 text-start mt-4">
                <Field
                  name="name"
                  as={CustomInput}
                  label="Nombres completos"
                  type="text"
                  placeholder="Escribe tu nombre"
                  required
                />
                <Field
                  name="email"
                  as={CustomInput}
                  label="Correo electrónico"
                  type="email"
                  placeholder="ejemplo@email.com"
                  required
                />

                <TextAreaField
                  label="Mensaje"
                  name="message"
                  placeholder="Escribe tu mensaje..."
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.message ? errors.message : ''}
                  touched={touched.message}
                />

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
