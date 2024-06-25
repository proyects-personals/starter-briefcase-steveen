import React from "react";
import { useLanguage } from "../../../hook/lenguage";
import { useTheme } from "../../../hook/theme";
import PageWrapper from "../../../components/common/page/PageWrapper";

const Briefcase: React.FC = () => {
  const { translations } = useLanguage();
  const { isDarkTheme } = useTheme();
  return (
    <PageWrapper>
      <div>
        <h2
          className={`${
            isDarkTheme ? "text-dark-text" : "text-ligth-text"
          } text-xl font-bold`}
        >
          {translations["briefcase.title"]}
        </h2>
      </div>
    </PageWrapper>
  );
};

export default Briefcase;
