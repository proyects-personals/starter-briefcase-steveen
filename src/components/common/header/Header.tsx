import React from 'react';
import { useTheme } from '../../../hook/theme';
import ThemeController from '../../themeController/ThemeController';
import { useLanguage } from '../../../hook/lenguage';
import LanguageController from '../../lenguageController/LenguageController';

const Header: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const { translations } = useLanguage();

  return (
    <header className={'flex items-center justify-between px-8 h-24 w-full'}>
      <div className="flex-2">
        <h1
          className={`hidden md:block ${isDarkTheme ? 'text-dark-text' : 'text-light-text'} text-xl font-bold`}
        >
          {translations['header.title']}
        </h1>
      </div>
      <div className="flex-1 flex justify-center items-center gap-4">
        <a
          href="https://github.com/hscordonez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={`fab fa-github ${isDarkTheme ? 'text-dark-text' : 'text-light-text'} text-xl`}
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/steveen-ordo%C3%B1ez-244b0a227/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={`fab fa-linkedin ${isDarkTheme ? 'text-dark-text' : 'text-light-text'} text-xl`}
          ></i>
        </a>
        <a
          href="https://x.com/steveencues"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={`fab fa-twitter ${isDarkTheme ? 'text-dark-text' : 'text-light-text'} text-xl`}
          ></i>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <LanguageController />
        <ThemeController />
      </div>
    </header>
  );
};

export default Header;
