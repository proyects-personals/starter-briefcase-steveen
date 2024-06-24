import React from 'react';
import { useTheme } from '../../../hook/theme';
import ThemeController from '../../themeController/ThemeController';

const Header: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <header className={`flex items-center justify-between px-4 h-16 w-full ${isDarkTheme ? 'bg-dark' : 'bg-light'}`}>
      <div className="flex-1">
        <h1 className={`text-${isDarkTheme ? 'dark' : 'light'}-text text-xl font-bold`}>Header</h1>
      </div>
      <div>
        <ThemeController/>
      </div>
    </header>
  );
};

export default Header;
