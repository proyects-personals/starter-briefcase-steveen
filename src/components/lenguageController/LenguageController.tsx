import React from 'react';
import { useLanguage } from '../../hook/lenguage';

const LanguageController: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <select
        className="select theme-controller"
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageController;
