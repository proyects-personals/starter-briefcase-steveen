import React from "react";
import { useTheme } from "../../../hook/theme";
import personaImg from "../../../assets/persona.png";
import PageWrapperCustom from "../../../components/common/page/custom/PageWrapperCustom";

const PresentationScreen: React.FC = () => {
  const { isDarkTheme } = useTheme();

  const handleDownloadCV = () => {
    console.log("doc");
  };

  return (
    <PageWrapperCustom>
      <div className={`flex flex-col-reverse md:flex-row mx-4 md:mx-32 h-screen ${isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        <div className="flex-1 flex justify-center md:justify-end items-center md:items-end order-2 md:order-1 p-4">
          <img src={personaImg} className="w-full max-w-xs h-auto rounded-bl-3xl md:rounded-bl-none" alt="Imagen de presentación" />
        </div>
        <div className="flex flex-1 flex-col justify-center space-y-4 order-1 md:order-2 p-4">
          <h1 className="text-4xl font-bold">Hola, soy Dayita</h1>
          <p className="text-lg">Una breve introducción sobre mí...</p>
          <div className="flex items-start">
            <button 
              onClick={handleDownloadCV} 
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Descargar CV
            </button>
          </div>
        </div>
      </div>
    </PageWrapperCustom>
  );
};

export default PresentationScreen;
