import AnimatedBackground from '../../../components/briefcase/AnimatedBackground';
import AnimatedText from '../../../components/briefcase/AnimatedText';
import { useLanguage } from '../../../hook/lenguage';
import { useTheme } from '../../../hook/theme';
import Carrusel from '../../../components/briefcase/Carrusel';
import Cards from '../../../components/briefcase/Cards';
import ImageCarousel from '../../../components/briefcase/ImageCarousel';
import unibeImage from '../../../assets/education/unibe.png';
import yaviracImage from '../../../assets/education/yavirac.png';
import { WorkExperience } from './workExperience';
import { WorkExperienceInterface } from '../../../interface/workExperience/workExperience.interface';
import { personalProjects } from './personalProjects';
import React from 'react';

const BriefcaseScreen: React.FC = () => {
  const { translations, languageState } = useLanguage();
  const { isDarkTheme } = useTheme();
  const experiences: WorkExperienceInterface[] = WorkExperience(translations);
  const projects = personalProjects(translations);
  const imagesEducacion = [unibeImage, yaviracImage];

  const downloadCv = () => {
    const fileName =
      languageState === 'en'
        ? 'Steveen-Ordoñez-en.pdf'
        : 'Steveen-Ordoñez-es.pdf';
    const filePath = `/cv/${fileName}`;

    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid grid-cols-1 space-y-8 p-2">
      <section className="relative p-12 h-96 overflow-hidden font-sans">
        <AnimatedBackground isDarkTheme={isDarkTheme} />

        {/* Contenido en Grid */}
        <div className="grid grid-cols-1 h-full relative z-10 text-center">
          <div className="space-y-8">
            <AnimatedText
              text={translations.briefcase.welcome}
              className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-500"
            />
            <p
              className={`text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-black'}`}
            >
              {translations.briefcase.hello}, {translations.briefcase.name}
            </p>
            <p className="text-gray-400 leading-relaxed text-justify">
              {translations.briefcase.presentation}
            </p>
            <button
              onClick={downloadCv}
              className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {languageState === 'en' ? 'Download CV' : 'Descargar CV'}
            </button>
          </div>
        </div>
      </section>
      <Carrusel
        projects={experiences}
        title={translations.workExperience.title}
        translate={translations}
      />
      <ImageCarousel images={imagesEducacion} title="Educación" />
      <div className="container">
        <Cards projects={projects} title="My Projects" />
      </div>
    </div>
  );
};

export default BriefcaseScreen;
