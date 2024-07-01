import React from "react";
import { useTheme } from "../../../hook/theme";
import PageWrapper from "../../../components/common/page/PageWrapper";
import './styles.css';

const PresentationScreen: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <PageWrapper>
      <div className={`flex ${isDarkTheme ? 'dark-mode' : 'light-mode'}`}>
        {/* Contenedor de la imagen */}
        <div className="image-container">
          <img className="presentation-image" src="/path/to/your/image.jpg" alt="Presentation Image" />
        </div>
        {/* Contenedor del texto */}
        <div className="text-container">
          <p className="intro-text">Hola, soy Dayana Carrera</p>
          <p className="intro-text">PERO PUEDES LLAMARME Dayita</p>
          <p className="intro-text">Soy Tecnóloga en Desarrollo de Software</p>
          <div className="button-container">
            <button className="custom-button">→ ver mis proyectos</button>
            <button className="custom-button">→ aprender más</button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PresentationScreen;
