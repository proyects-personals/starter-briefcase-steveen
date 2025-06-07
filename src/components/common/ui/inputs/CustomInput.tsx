import React from 'react';
import { useField } from 'formik';

interface CustomInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  isDarkTheme?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  label,
  placeholder,
  type = 'text',
  required = false,
  disabled = false,
  isDarkTheme = false,
}) => {
  const [field, meta] = useField(name);

  return (
    <div className="relative mb-4">
      {label && (
        <label
          htmlFor={name}
          className={`block mb-1 font-medium ${
            isDarkTheme ? 'text-white' : 'text-gray-800'
          }`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <input
        {...field}
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-3 ${
          isDarkTheme ? 'text-white' : 'text-gray-700'
        } bg-transparent border-b-2 focus:outline-none ${
          disabled
            ? 'border-gray-200 bg-gray-100 cursor-not-allowed'
            : meta.touched && meta.error
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 focus:border-orange-500'
        }`}
      />

      {meta.touched && meta.error && (
        <div className="text-sm text-red-600 mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default CustomInput;
