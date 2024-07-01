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
        <p className="intro-id mt-4 text-2xl font-bold">Hola, soy Dayana Carrera</p>
        <p className="intro-id text-2xl font-bold">PERO PUEDES LLAMARME Dayita</p>
        <p className="intro-id mt-2 text-xl">Soy Tecnologa en Desarrollo de software</p>
        <div className="mt-6 flex flex-col items-center">
          <button className="custom-button">
            → ver mis proyectos
          </button>
          <button className="custom-button mt-2">
            → aprender más
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Briefcase;
