import { useState, useCallback } from "react";

import type { IMessageState } from "@domain";

/**
 * @description
 * Interfaz que define el valor de retorno del hook useMessages.
 */
interface UseMessagesReturn {
  errorMessage: string | null;
  successMessage: string | null;
  handleError: (message: string) => void;
  handleSuccess: (message: string) => void;
  clearMessages: () => void;
  clearError: () => void;
  clearSuccess: () => void;
}

/**
 * useMessages Hook
 *
 * Hook personalizado para manejar mensajes de éxito y error
 * de forma centralizada en componentes React.
 *
 * Características:
 * - Agrupa el estado de error y éxito para evitar múltiples re-renders.
 * - Memoización de funciones con `useCallback` para optimizar el rendimiento.
 * - Funciones para establecer, limpiar y manejar mensajes individualmente.
 *
 * @returns Objeto con mensajes actuales y funciones para manipularlos.
 */
const useMessages = (): UseMessagesReturn => {
  const [messages, setMessages] = useState<IMessageState>({
    error: null,
    success: null,
  });

  /**
   * Establece un mensaje de error y limpia cualquier mensaje de éxito.
   *
   * @param message - Texto del mensaje de error
   */
  const handleError = useCallback((message: string): void => {
    setMessages({
      error: message,
      success: null,
    });
  }, []);

  /**
   * Establece un mensaje de error y limpia cualquier mensaje de éxito.
   *
   * @param message - Texto del mensaje de error
   */
  const handleSuccess = useCallback((message: string): void => {
    setMessages({
      success: message,
      error: null,
    });
  }, []);

  /**
   * @description
   * Limpia todos los mensajes (error y éxito)
   */
  const clearMessages = useCallback((): void => {
    setMessages({ error: null, success: null });
  }, []);

  /**
   * @description
   * Limpia todos los mensajes (error y éxito)
   */
  const clearError = useCallback((): void => {
    setMessages((prev) => ({ ...prev, error: null }));
  }, []);

  /**
   * @description
   * Limpia únicamente el mensaje de error
   */
  const clearSuccess = useCallback((): void => {
    setMessages((prev) => ({ ...prev, success: null }));
  }, []);

  return {
    errorMessage: messages.error,
    successMessage: messages.success,
    handleError,
    handleSuccess,
    clearMessages,
    clearError,
    clearSuccess,
  };
};

export default useMessages;
