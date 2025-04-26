import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from 'react';
import en from '../i18n/en.json';
import es from '../i18n/es.json';
import { Translations } from '../interface/translations/translations.interface';

const translations: Record<string, Translations> = { es, en };

type LanguageContextType = {
  languageState: string;
  setLanguage: (lang: string) => void;
  translations: Translations;
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
  const initialLanguage: string = localStorage.getItem('language') ?? 'en';
  const [languageState, setLanguageState] = useState(initialLanguage);

  const setLanguage = (lang: string): void => {
    localStorage.setItem('language', lang);
    setLanguageState(lang);
  };

  useEffect(() => {
    const storedLanguage: string | null = localStorage.getItem('language');
    if (storedLanguage && storedLanguage !== languageState) {
      setLanguageState(storedLanguage);
    }
  }, [languageState]);

  const contextValue = useMemo(
    () => ({
      languageState,
      setLanguage,
      translations: translations[languageState] || ({} as Translations),
    }),
    [languageState]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
