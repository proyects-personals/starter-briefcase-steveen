import React from 'react';
import { useLanguage } from '../../../hook/lenguage';
import usFlag from '../../../assets/flags/usa.png';
import ecFlag from '../../../assets/flags/ec.svg';
import { useTheme } from '../../../hook/theme';

const LanguageComponent: React.FC = () => {
  const { translations, languageState, setLanguage } = useLanguage();
  const { isDarkTheme } = useTheme();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setLanguage(event.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <select
          className={`appearance-none bg-no-repeat pr-10 h-8 text-sm pl-3 rounded ${isDarkTheme ? 'bg-dark-primary text-white' : 'bg-light-primary text-black'}`}
          value={languageState}
          onChange={handleLanguageChange}
          style={{
            backgroundImage: `url(${languageState === 'en' ? usFlag : ecFlag})`,
            backgroundSize: '20px',
            backgroundPosition: 'right 10px center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <option value="en">{translations.languages.english}</option>
          <option value="es">{translations.languages.spanish}</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageComponent;
