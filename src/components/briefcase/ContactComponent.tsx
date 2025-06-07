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
import { Translations } from '../../interface/translations/translations.interface';

type ContactComponentProps = {
  isDarkTheme: boolean;
  translations: Translations;
};

const ContactComponent: React.FC<ContactComponentProps> = ({
  isDarkTheme,
  translations,
}) => {
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

  const containerBg = isDarkTheme ? 'bg-dark-primary' : 'bg-white';
  const textPrimary = isDarkTheme ? 'text-white' : 'text-gray-800';
  const textSecondary = isDarkTheme ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Columna 1 */}
        <div className={`${containerBg} p-6 rounded-lg shadow-md`}>
          <h2 className={`text-xl font-bold ${textPrimary}`}>
            {translations.contactUs.title}
          </h2>
          <p className={`mt-2 ${textSecondary}`}>
            {translations.contactUs.description}
          </p>
        </div>

        {/* Columna 2 */}
        <div className={`${containerBg} p-6 rounded-lg shadow-md`}>
          <h2 className={`text-xl font-bold ${textPrimary}`}>
            {translations.contactMe.title}
          </h2>
          <p className={`mt-2 ${textSecondary}`}>
            <span className="font-bold">{translations.contactMe.email}:</span>{' '}
            zh31505@gmail.com
          </p>
          <p className={`mt-2 ${textSecondary}`}>
            <span className="font-bold">{translations.contactMe.phone}:</span>{' '}
            +593 096 263 9779
          </p>
          <p className={`mt-2 ${textSecondary}`}>
            <span className="font-bold">
              {translations.contactMe.linkedin}:
            </span>{' '}
            <a
              href="https://www.linkedin.com/in/steveen-ordoñez-244b0a227"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              steveen-ordoñez
            </a>
          </p>
        </div>

        {/* Columna 3: Formulario */}
        <div className={`${containerBg} p-6 rounded-lg shadow-md`}>
          <h2 className={`text-xl font-bold ${textPrimary} mb-6`}>
            {translations.form.title}
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
                  label={translations.form.name}
                  type="text"
                  placeholder={translations.form.namePlaceholder}
                  isDarkTheme={isDarkTheme}
                  required
                />
                <Field
                  name="email"
                  as={CustomInput}
                  label={translations.form.email}
                  type="email"
                  placeholder={translations.form.emailPlaceholder}
                  isDarkTheme={isDarkTheme}
                  required
                />

                <TextAreaField
                  label="Mensaje"
                  name={translations.form.message}
                  placeholder={translations.form.messagePlaceholder}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.message ? errors.message : ''}
                  touched={touched.message}
                  isDarkTheme={isDarkTheme}
                />

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-blue-950 transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? translations.form.send
                    : translations.form.sending}
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
