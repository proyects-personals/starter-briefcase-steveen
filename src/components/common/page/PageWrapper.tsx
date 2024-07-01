import React from 'react';
import { useTheme } from '../../../hook/theme';
import './styles.css'; // Archivo CSS para definir las animaciones

type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const { isDarkTheme } = useTheme();

  const wrapperStyle = {
    position: 'relative' as const,
    minHeight: '100vh',
    padding: '0 8px',
    backgroundColor: isDarkTheme ? '#333' : '#f0f0f0',
    overflow: 'hidden',
  };

  return (
    <div className={`${isDarkTheme ? 'bg-dark-primary' : 'bg-light-primary'}`} style={wrapperStyle}>
      <div className="circle circle-top-left"></div>
      <div className="circle circle-top-center"></div>
      <div className="circle circle-top-right"></div>
      <div className="circle circle-bottom-left"></div>
      <div className="circle circle-bottom-center"></div>
      <div className="circle circle-bottom-right"></div>

      <div className="circle circle-center"></div>

      <main style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
