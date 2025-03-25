import React from 'react';
import { useTheme } from '../../../hook/theme';
import LanguageController from '../../lenguageController/LenguageController';
import imageSteveen from '../../../assets/developer/steveen.jpg';
import ThemeController from '../../themeController/ThemeController';

const Header: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <header className={'flex items-center justify-between px-8 h-24 w-full'}>
      <div className="flex-2">
        <img
          src={imageSteveen}
          alt=""
          className="h-16 w-16 rounded-full object-cover"
        />
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
