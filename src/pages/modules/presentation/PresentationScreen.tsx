import React from "react";
import { useTheme } from "../../../hook/theme";
import personaImg from "../../../assets/dayana.jpeg";
import PageWrapperCustom from "../../../components/common/page/custom/PageWrapperCustom";
import { useLanguage } from "../../../hook/lenguage";

const PresentationScreen: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const { translations } = useLanguage();

  const handleDownloadCV = () => {
    console.log("doc");
  };

  return (
    <PageWrapperCustom>
      <div
        className={`flex flex-col md:flex-row mx-4 ${
          isDarkTheme
            ? "bg-dark-primary text-white"
            : "bg-light-primary text-black"
        }`}
        style={{ fontFamily: "Times New Roman, Times, serif" }}
      >
        <div className="flex-1 flex justify-center items-center order-1 md:order-2 mt-4 md:mt-3">
          <div
            className="relative w-full h-full max-h-screen overflow-hidden md:rounded-none rounded-3xl"
          >
            <img
              src={personaImg}
              className="w-full h-full object-cover"
              alt="Imagen de presentación"
              style={{
                filter: isDarkTheme ? "none" : "brightness(85%)",
              }}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center space-y-4 order-2 md:order-1 p-4">
          <h1 className="text-4xl font-bold">{translations['presentation.name']}</h1>
          <p className="text-lg">
          {translations['presentation.title']}
          </p>
          <p className="text-lg">
          {translations['presentation.first_stanza']}
          </p>
          <p className="text-lg">
          {translations['presentation.second_stanza']}
          </p>
          <div className="flex items-start">
            <button
              onClick={handleDownloadCV}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {translations['presentation.download_cv']}
            </button>
          </div>
        </div>
      </div>
    </PageWrapperCustom>
  );
};

export default PresentationScreen;
