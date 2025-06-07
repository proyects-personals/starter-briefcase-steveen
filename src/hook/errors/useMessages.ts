import { useState } from 'react';

const useMessages = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleError = (message: string) => {
    setErrorMessage(message);
    setSuccessMessage(null);
  };

  const handleSuccess = (message: string) => {
    setSuccessMessage(message);
    setErrorMessage(null);
  };

  const clearMessages = () => {
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  return {
    handleError,
    handleSuccess,
    errorMessage,
    successMessage,
    clearMessages,
    clearError: () => setErrorMessage(null),
    clearSuccess: () => setSuccessMessage(null),
  };
};

export default useMessages;
