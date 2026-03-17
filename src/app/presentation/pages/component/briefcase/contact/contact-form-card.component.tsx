import emailjs from "emailjs-com";
import { Formik, Form, type FormikHelpers } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";

import {
  CustomInputComponent,
  TextAreaFieldComponent,
  MessageErrorComponent,
  useMessages,
} from "@/app";
import {
  CONNECTION_CONFIG,
  contactValidationSchema,
  MessagesEnum,
  type IContactComponent,
  type IFormValues,
  type MessageType,
} from "@domain";

/**
 * @description
 * Constantes de configuracion visual y comportamiento del formulario.
 */
const ANIMATION_X_OFFSET = 20;
const DECORATIVE_BAR_WIDTH = "4px";
const BAR_OPACITY = 0.8;
const HOVER_SCALE = 1.02;
const TAP_SCALE = 0.98;
const BUTTON_SHADOW_OPACITY = "40";
const SPINNER_DURATION = 1;
const HTTP_STATUS_OK = 200;

/**
 * @description
 * Componente de tarjeta de formulario de contacto.
 * Gestiona el envio de correos electronicos via EmailJS, validaciones con Formik/Yup
 * y proporciona retroalimentacion visual animada al usuario.
 *
 * @param props - Propiedades definidas en la interfaz IContactComponent.
 * @returns Un contenedor con el formulario de contacto integrado y validado.
 */
const ContactFormCard: React.FC<IContactComponent> = ({ theme, translate }) => {
  const config = CONNECTION_CONFIG.EMAILJS;
  const [typeMessage, setTypeMessage] = useState<MessageType>(
    MessagesEnum.ERROR,
  );
  const { handleError, handleSuccess, errorMessage, successMessage } =
    useMessages();
  const validationSchema = contactValidationSchema(translate);

  /**
   * @description
   * Manejador de envio del formulario.
   */
  const handleSubmit = async (
    values: IFormValues,
    { resetForm }: FormikHelpers<IFormValues>,
  ): Promise<void> => {
    try {
      const templateParams: Record<string, string> = {
        name: values.name,
        email: values.email,
        message: values.message,
      };

      const response = await emailjs.send(
        config.SERVICE_ID,
        config.TEMPLATE_ID,
        templateParams,
        config.PUBLIC_KEY,
      );

      if (response.status === HTTP_STATUS_OK) {
        setTypeMessage(MessagesEnum.SUCCESS);
        handleSuccess(translate("form.success_msg"));
        resetForm();
      }
    } catch (_error) {
      setTypeMessage(MessagesEnum.ERROR);
      handleError(translate("form.error_msg"));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: ANIMATION_X_OFFSET }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      style={{
        padding: "2.5rem",
        borderRadius: theme.borderRadius.lg,
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadow.md,
        position: "relative",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: DECORATIVE_BAR_WIDTH,
          height: "100%",
          backgroundColor: theme.colors.primary,
          opacity: BAR_OPACITY,
        }}
      />

      <h2
        style={{
          fontSize: theme.font.sizes.xl,
          fontWeight: theme.font.weights.bold,
          color: theme.colors.text,
          textAlign: "left",
          marginBottom: "0.5rem",
        }}
      >
        {translate("form.title")}
      </h2>

      <p
        style={{
          color: theme.colors.textSecondary,
          fontSize: theme.font.sizes.sm,
          marginBottom: "1.5rem",
          textAlign: "left",
        }}
      >
        {translate("form.subtitle")}
      </p>

      <AnimatePresence>
        {(errorMessage !== null || successMessage !== null) && (
          <MessageErrorComponent
            text={errorMessage ?? successMessage ?? ""}
            type={typeMessage}
            theme={theme}
          />
        )}
      </AnimatePresence>

      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => {
          const isBtnDisabled = isSubmitting || !isValid || !dirty;

          return (
            <Form
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <CustomInputComponent
                name="name"
                label={translate("form.name")}
                placeholder={translate("form.namePlaceholder")}
                theme={theme}
                required
              />

              <CustomInputComponent
                name="email"
                type="email"
                label={translate("form.email")}
                placeholder={translate("form.emailPlaceholder")}
                theme={theme}
                required
              />

              <TextAreaFieldComponent
                name="message"
                label={translate("form.message")}
                placeholder={translate("form.messagePlaceholder")}
                theme={theme}
              />

              <motion.button
                type="submit"
                disabled={isBtnDisabled}
                whileHover={!isBtnDisabled ? { scale: HOVER_SCALE } : {}}
                whileTap={!isBtnDisabled ? { scale: TAP_SCALE } : {}}
                style={{
                  width: "100%",
                  backgroundColor: isBtnDisabled
                    ? theme.colors.disabled
                    : theme.colors.primary,
                  color: theme.colors.white,
                  padding: "1rem",
                  borderRadius: theme.borderRadius.md,
                  border: "none",
                  cursor: isBtnDisabled ? "not-allowed" : "pointer",
                  fontSize: theme.font.sizes.base,
                  fontWeight: theme.font.weights.bold,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: isBtnDisabled
                    ? "none"
                    : `0 4px 14px ${theme.colors.primary}${BUTTON_SHADOW_OPACITY}`,
                  transition: "all 0.3s ease",
                  marginTop: "1rem",
                }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: SPINNER_DURATION,
                      ease: "linear",
                    }}
                    style={{ display: "flex" }}
                  >
                    <FaSpinner />
                  </motion.div>
                ) : (
                  <FaPaperPlane style={{ fontSize: "0.9rem" }} />
                )}

                {isSubmitting
                  ? translate("form.sending")
                  : translate("form.send")}
              </motion.button>
            </Form>
          );
        }}
      </Formik>
    </motion.div>
  );
};

export default ContactFormCard;
