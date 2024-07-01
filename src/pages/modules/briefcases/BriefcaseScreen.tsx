import React from "react";
import { useLanguage } from "../../../hook/lenguage";
import { useTheme } from "../../../hook/theme";
import { useNavigate } from "react-router-dom";

import './styles.css';
import PageWrapperAnimated from "../../../components/common/page/animated/PageWrapperAnimated";

interface BriefcaseScreenProps {}

const BriefcaseScreen: React.FC<BriefcaseScreenProps> = () => {
  const { translations } = useLanguage();
  const { isDarkTheme } = useTheme();

  const navigate = useNavigate();

  const handleNavigateToPresentation = () => {
    navigate("/presentacion");
  };

  return (
    <PageWrapperAnimated>
      <div className={`flex flex-col items-center justify-center h-screen text-center ${isDarkTheme ? 'dark-mode' : 'light-mode'}`}>
        <p className="intro-id mt-4 text-2xl font-bold">{translations['briefcase.hello']}, {translations['briefcase.name']}</p>
        <p className="intro-id text-2xl font-bold">{translations['briefcase.title']}</p>
        <p className="intro-id mt-2 text-xl">{translations['briefcase.profession']}</p>
        <div className="mt-6 flex flex-col items-center">
          <button className="custom-button">
            {translations['briefcase.see_projects']}
          </button>
          <button className="custom-button mt-2" onClick={handleNavigateToPresentation}>
            {translations['briefcase.learn_more']}
          </button>
        </div>
      </div>
    </PageWrapperAnimated>
  );
};

export default BriefcaseScreen;
