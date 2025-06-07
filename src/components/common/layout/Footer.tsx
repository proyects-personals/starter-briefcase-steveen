import React from 'react';
import { useTheme } from '../../../hook/theme';
import { useLanguage } from '../../../hook/lenguage';

const Footer: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const { translations } = useLanguage();

  return (
    <footer
      className={`py-6 mt-12 ${
        isDarkTheme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
        <p className="text-sm">
          © {new Date().getFullYear()} {translations.footer.title} {''}
          <strong>{translations.footer.description}</strong>.
        </p>

        <a
          href="https://www.termsfeed.com/live/d2d4dcfd-2e6a-4888-8679-131e1f48afb2"
          target="_blank"
          rel="noopener noreferrer"
          className={
            'text-sm transition-colors duration-300 text-blue-600 hover:text-blue-800'
          }
        >
          {translations.footer.view}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
