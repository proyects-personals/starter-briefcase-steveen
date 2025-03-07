import React, { createContext, useState, ReactNode, useEffect } from 'react';
import en from '../i18n/en.json';
import es from '../i18n/es.json';

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en,
  es,
};

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  translations: {
    [key: string]: string;
  };
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const initialLanguage = localStorage.getItem('language') || 'en';
  const [language, setLanguageState] = useState(initialLanguage);

  const setLanguage = (lang: string) => {
    localStorage.setItem('language', lang);
    setLanguageState(lang);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage && storedLanguage !== language) {
      setLanguageState(storedLanguage);
    }
  }, [language]);

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    translations: translations[language] || {},
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
