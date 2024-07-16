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

  const handleNavigateToGamePresentation = () => {
    navigate("/game");
  };

  const handleNavigateToWorkExperience = () => {
    navigate("/experience");
  };

  return (
    <PageWrapperAnimated>
      <div className={`flex flex-col items-center justify-center h-screen text-center`}>
        <p className={`intro-id mt-4 text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-black'}`}>
          {translations['briefcase.hello']}, {translations['briefcase.name']}
        </p>
        <p className={`intro-id text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-black'}`}>
          {translations['briefcase.title']}
        </p>
        <p className={`intro-id mt-2 text-xl ${isDarkTheme ? 'text-white' : 'text-black'}`}>
          {translations['briefcase.profession']}
        </p>
        <div className="mt-6 flex flex-col items-center">
        {/* <button className="custom-button mt-2" onClick={handleNavigateToGamePresentation}>
          game presentation
          </button> */}
        <button className="custom-button mt-2" onClick={handleNavigateToPresentation}>
            {translations['briefcase.learn_more']}
          </button>
          <button className="custom-button mt-2" onClick={handleNavigateToWorkExperience}>
            {translations['briefcase.work_experience']}
          </button>
          <button className="custom-button mt-2" onClick={handleNavigateToPresentation}>
            {translations['briefcase.see_projects']}
          </button>
          <button className="custom-button mt-2" onClick={handleNavigateToPresentation}>
            {translations['briefcase.studies']}
          </button>
        </div>
      </div>
    </PageWrapperAnimated>
  );
};

export default BriefcaseScreen;
