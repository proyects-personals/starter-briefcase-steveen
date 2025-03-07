import React from 'react';
import { useTheme } from '../../../../hook/theme';

type PageWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const PageWrapperCustom: React.FC<PageWrapperProps> = ({
  children,
  className,
}) => {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={`${isDarkTheme ? 'bg-dark-primary' : 'bg-light-primary'} ${className ?? ''} min-h-screen px-8`}
    >
      <main>{children}</main>
    </div>
  );
};

export default PageWrapperCustom;
