import React from "react";
import { useTheme } from "../../../hook/theme";
import PageWrapperCustom from "../../../components/common/page/custom/PageWrapper";

const PresentationScreen: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <PageWrapperCustom>
      <div className={`flex ${isDarkTheme ? "dark-mode" : "light-mode"}`}>
        <h1>jajja</h1>
      </div>
    </PageWrapperCustom>
  );
};

export default PresentationScreen;
