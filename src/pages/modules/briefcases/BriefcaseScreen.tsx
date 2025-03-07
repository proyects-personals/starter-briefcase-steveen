import React from 'react';
import { useLanguage } from '../../../hook/lenguage';
import { useTheme } from '../../../hook/theme';
import PageWrapperCustom from '../../../components/common/page/custom/PageWrapperCustom';

const BriefcaseScreen: React.FC = () => {
  const { translations } = useLanguage();
  const { isDarkTheme } = useTheme();

  return (
    <PageWrapperCustom>
      <div
        className={
          'flex flex-col items-center justify-center h-screen text-center'
        }
      >
        <p
          className={`intro-id mt-4 text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-black'}`}
        >
          {translations['briefcase.hello']}, {translations['briefcase.name']}
        </p>
      </div>
    </PageWrapperCustom>
  );
};

export default BriefcaseScreen;
