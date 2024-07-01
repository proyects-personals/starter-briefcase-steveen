import React from "react";
import { useLanguage } from "../../../hook/lenguage";
import { useTheme } from "../../../hook/theme";
import PageWrapper from "../../../components/common/page/PageWrapper";
import './styles.css';

const Briefcase: React.FC = () => {
  const { translations } = useLanguage();
  const { isDarkTheme } = useTheme();

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <p className="intro-id mt-4 text-2xl font-bold">{translations['briefcase.hello']}, {translations['briefcase.name']}</p>
        <p className="intro-id text-2xl font-bold">{translations['briefcase.title']}</p>
        <p className="intro-id mt-2 text-xl">{translations['briefcase.profession']}</p>
        <div className="mt-6 flex flex-col items-center">
          <button className="custom-button">
          {translations['briefcase.see_projects']}
          </button>
          <button className="custom-button mt-2">
          {translations['briefcase.learn_more']}
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Briefcase;
