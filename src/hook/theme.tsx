import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../context/ThemeContext';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};
