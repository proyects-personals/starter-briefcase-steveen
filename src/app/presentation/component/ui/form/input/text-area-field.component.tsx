import { useField } from "formik";
import React, { useState } from "react";

import { FieldWrapperComponent } from "@/app";

import type { ITextAreaField } from "@domain";

/**
 * @description
 * Constantes para evitar numeros magicos y asegurar consistencia en el diseño.
 */
const MIN_HEIGHT_TEXTAREA = "120px";
const BORDER_WIDTH = "2px";
const TRANSITION_TIME = "0.2s";
const FOCUS_SHADOW_OPACITY = "33";
const FULL_WIDTH = "100%";

/**
 * @description
 * Componente de area de texto personalizado para entradas extensas.
 * Gestiona automáticamente el estado de Formik y adapta su estilo según el tema global.
 *
 * @param props - Propiedades definidas en la interfaz ITextAreaField.
 * @returns Un elemento textarea envuelto con lógica de validación y estilos dinámicos.
 */
const TextAreaFieldComponent: React.FC<ITextAreaField> = ({
  name,
  label,
  placeholder,
  theme,
  value,
  required = false,
  onChange,
  onBlur,
  touched: extTouched,
  error: extError,
}) => {
  const [field, meta] = useField(name);
  const [isFocused, setIsFocused] = useState(false);

  const hasError = Boolean(
    (extTouched ?? meta.touched) && (extError ?? meta.error),
  );
  const errorMessage = extError ?? meta.error;

  /**
   * @description
   * Selecciona el color del borde basado en el estado de error, enfoque o reposo.
   */
  const borderColor = hasError
    ? theme.colors.error
    : isFocused
      ? theme.colors.primary
      : theme.colors.border;

  /**
   * @description
   * Manejador de cambio tipado para evitar 'any' de Formik.
   */
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const changeHandler = onChange ?? field.onChange;
    changeHandler(e);
  };

  /**
   * @description
   * Manejador de desenfoque tipado para evitar 'unsafe-assignment' de any.
   */
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>): void => {
    const blurHandler = onBlur ?? field.onBlur;
    blurHandler(e);
    setIsFocused(false);
  };

  /**
   * @description
   * Retorna el valor normalizado como string para evitar errores de tipado 'any'.
   */
  const getTextAreaValue = (): string => {
    return String(value ?? field.value ?? "");
  };

  return (
    <FieldWrapperComponent
      name={name}
      label={label}
      hasError={hasError}
      required={required}
      errorMessage={errorMessage}
      theme={theme}
    >
      <textarea
        name={field.name}
        id={name}
        placeholder={placeholder}
        value={getTextAreaValue()}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        style={{
          width: FULL_WIDTH,
          minHeight: MIN_HEIGHT_TEXTAREA,
          borderRadius: theme.borderRadius.md,
          backgroundColor: "transparent",
          border: `${BORDER_WIDTH} solid ${borderColor}`,
          padding: "0.75rem",
          fontSize: theme.font.sizes.base,
          fontFamily: theme.font.family,
          color: theme.colors.text,
          outline: "none",
          textAlign: "left",
          resize: "vertical",
          transition: `border-color ${TRANSITION_TIME} ease, box-shadow ${TRANSITION_TIME} ease`,
          boxShadow:
            isFocused && !hasError
              ? `0 0 0 1px ${theme.colors.primary}${FOCUS_SHADOW_OPACITY}`
              : "none",
        }}
      />
    </FieldWrapperComponent>
  );
};

export default TextAreaFieldComponent;
