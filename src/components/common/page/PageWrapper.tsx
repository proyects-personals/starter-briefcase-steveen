import React from 'react';
import { useTheme } from '../../../hook/theme';

type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const { isDarkTheme } = useTheme();

  return (
    <div className={`${isDarkTheme ? 'bg-dark-primary' : 'bg-light-primary'} min-h-screen px-8`}>
      <main>
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
