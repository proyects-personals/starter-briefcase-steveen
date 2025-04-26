import React from 'react';
import { useTheme } from '../../../hook/theme';
import LanguageController from '../../lenguageController/LenguageController';
import imageSteveen from '../../../assets/developer/steveen.jpg';
import ThemeController from '../../themeController/ThemeController';

const Header: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <header className="flex items-center justify-between px-4 py-2 w-full h-20 sm:h-24 sm:px-8">
      {/* Imagen de perfil */}
      <div className="flex-shrink-0">
        <img
          src={imageSteveen}
          alt="Steveen Ordoñez"
          className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover"
        />
      </div>

      {/* Iconos de redes sociales - visibles solo en sm o mayor */}
      <div className="hidden sm:flex flex-1 justify-center items-center gap-6">
        <a
          href="https://github.com/hscordonez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={`fab fa-github ${isDarkTheme ? 'text-dark-text' : 'text-light-text'} text-2xl`}
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/steveen-ordo%C3%B1ez-244b0a227/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={`fab fa-linkedin ${isDarkTheme ? 'text-dark-text' : 'text-light-text'} text-2xl`}
          ></i>
        </a>
        <a
          href="https://x.com/steveencues"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={`fab fa-twitter ${isDarkTheme ? 'text-dark-text' : 'text-light-text'} text-2xl`}
          ></i>
        </a>
      </div>

      {/* Controles de idioma y tema */}
      <div className="flex items-center gap-2 sm:gap-4">
        <LanguageController />
        <ThemeController />
      </div>
    </header>
  );
};

export default Header;
