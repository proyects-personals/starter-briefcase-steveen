import { useField } from "formik";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { FieldWrapperComponent } from "@/app";

import type { ICustomInput } from "@domain";

/**
 * @description
 * Constantes para evitar numeros magicos en estilos y animaciones.
 */
const BORDER_WIDTH_PX = "2px";
const ANIMATION_DURATION_SEC = 0.3;
const TRANSITION_SPEED_SEC = "0.2s";
const FULL_WIDTH = "100%";
const INITIAL_WIDTH = "0%";

/**
 * @description
 * Componente de entrada de texto personalizado que integra Formik y Framer Motion.
 * Gestiona estados de enfoque, errores de validacion y estilos dinamicos segun el tema.
 *
 * @param props - Propiedades definidas en la interfaz ICustomInput.
 * @returns Un campo de entrada estilizado con soporte para mensajes de error y animaciones.
 */
const CustomInputComponent: React.FC<ICustomInput> = ({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
  theme,
  value,
  touched: extTouched,
  error: extError,
  onChange,
  onBlur,
}) => {
  const [field, meta] = useField(name);
  const [isFocused, setIsFocused] = useState(false);

  const hasError = Boolean(
    (extTouched ?? meta.touched) && (extError ?? meta.error),
  );
  const errorMessage = extError ?? meta.error;

  /** * @description
   * Determina el color del borde inferior basado en el estado del componente.
   * @returns Codigo de color hexadecimal del tema.
   */
  const getBorderColor = (): string => {
    if (disabled) {
      return theme.colors.disabled;
    }
    if (hasError) {
      return theme.colors.error;
    }
    return isFocused ? theme.colors.primary : theme.colors.border;
  };

  /**
   * @description
   * Manejador de cambio tipado para evitar 'unsafe-assignment' de any.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const changeHandler = onChange ?? field.onChange;
    changeHandler(e);
  };

  /**
   * @description
   * Manejador de desenfoque tipado para evitar 'unsafe-assignment' de any.
   */
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    const blurHandler = onBlur ?? field.onBlur;
    blurHandler(e);
    setIsFocused(false);
  };

  /**
   * @description
   * Manejador de enfoque para activar animaciones visuales.
   */
  const handleFocus = (): void => {
    setIsFocused(true);
  };

  /**
   * @description
   * Normaliza el valor asegurando que siempre sea un string.
   * Se envuelve la expresión directamente en String() para evitar
   * asignaciones intermedias de tipo 'any'.
   */
  const getInputValue = (): string => {
    return String(value ?? field.value ?? "");
  };

  return (
    <FieldWrapperComponent
      name={name}
      label={label}
      required={required}
      hasError={hasError}
      errorMessage={errorMessage}
      theme={theme}
    >
      <input
        name={field.name}
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={getInputValue()}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          width: FULL_WIDTH,
          padding: "0.75rem 0",
          backgroundColor: "transparent",
          border: "none",
          borderBottom: `${BORDER_WIDTH_PX} solid ${getBorderColor()}`,
          fontSize: theme.font.sizes.base,
          color: disabled ? theme.colors.textSecondary : theme.colors.text,
          outline: "none",
          transition: `border-color ${TRANSITION_SPEED_SEC} ease`,
        }}
      />

      {!disabled && !hasError && (
        <motion.div
          initial={false}
          animate={{ width: isFocused ? FULL_WIDTH : INITIAL_WIDTH }}
          transition={{ duration: ANIMATION_DURATION_SEC }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: BORDER_WIDTH_PX,
            backgroundColor: theme.colors.primary,
          }}
        />
      )}
    </FieldWrapperComponent>
  );
};

export default CustomInputComponent;
