import React, { createContext, useState, ReactNode, useEffect } from 'react';

export type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storedTheme: string | null = localStorage.getItem('theme');
  const initialTheme: boolean = storedTheme === 'true';

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(initialTheme);

  useEffect((): void => {
    localStorage.setItem('theme', isDarkTheme.toString());
  }, [isDarkTheme]);

  const toggleTheme = (): void => {
    setIsDarkTheme((prevTheme: boolean) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
