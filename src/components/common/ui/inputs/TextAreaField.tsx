import React from 'react';

interface TextAreaFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
  touched?: boolean;
  isDarkTheme?: boolean;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  name,
  placeholder = '',
  rows = 4,
  value,
  onChange,
  onBlur,
  error,
  touched,
  isDarkTheme = false,
}) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className={`text-sm font-semibold mb-1 ${
          isDarkTheme ? 'text-white' : 'text-gray-800'
        }`}
      >
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows={rows}
        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
          isDarkTheme ? 'bg-dark-primary text-white' : 'bg-white text-gray-800'
        } ${
          touched && error
            ? 'border-red-500 focus:ring-red-400'
            : 'focus:ring-orange-500'
        }`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      {touched && error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextAreaField;
