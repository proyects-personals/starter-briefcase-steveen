import React from 'react';
import { useLanguage } from '../../hook/lenguage';
import usFlag from '../../assets/flags/usa.png';
import ecFlag from '../../assets/flags/ec.svg';
import { useTheme } from '../../hook/theme';

const LanguageController: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { isDarkTheme } = useTheme();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <select
          className={`appearance-none bg-no-repeat pr-10 h-8 text-sm pl-3 rounded ${isDarkTheme ? 'bg-dark text-white' : 'bg-light text-black'}`}
          value={language}
          onChange={handleLanguageChange}
          style={{
            backgroundImage: `url(${language === 'en' ? usFlag : ecFlag})`,
            backgroundSize: '20px',
            backgroundPosition: 'right 10px center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <option value="en">
            <span className="block md:hidden">
              <img
                src={usFlag}
                alt="English"
                className="w-4 h-4 inline-block"
              />
            </span>
            <span className="hidden md:inline-flex items-center gap-1">
              <img
                src={usFlag}
                alt="English"
                className="w-4 h-4 inline-block"
              />
              English
            </span>
          </option>
          <option value="es">
            <span className="block md:hidden">
              <img
                src={ecFlag}
                alt="Español"
                className="w-4 h-4 inline-block"
              />
            </span>
            <span className="hidden md:inline-flex items-center gap-1">
              <img
                src={ecFlag}
                alt="Español"
                className="w-4 h-4 inline-block"
              />
              Español
            </span>
          </option>
        </select>
      </div>
    </div>
  );
};

export default LanguageController;
