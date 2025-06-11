import AnimatedBackground from '../../../components/briefcase/AnimatedBackground';
import AnimatedText from '../../../components/common/ui/texts/AnimatedText';
import { useLanguage } from '../../../hook/lenguage';
import { useTheme } from '../../../hook/theme';
import Carousel from '../../../components/common/ui/carousel/Carousel';
import Cards from '../../../components/common/ui/cards/Cards';
import ImageCarousel from '../../../components/common/ui/carousel/ImageCarousel';
import unibeImage from '../../../assets/education/unibe.png';
import yaviracImage from '../../../assets/education/yavirac.png';
import { WorkExperience } from './workExperience';
import { WorkExperienceInterface } from '../../../interface/workExperience/workExperience.interface';
import { personalProjects } from './personalProjects';
import React from 'react';
import { ProjectsInterface } from '../../../interface/projects/projects.interface';
import ContactComponent from '../../../components/briefcase/ContactComponent';

const BriefcaseScreen: React.FC = () => {
  const { translations, languageState } = useLanguage();
  const { isDarkTheme } = useTheme();
  const experiences: WorkExperienceInterface[] = WorkExperience(translations);
  const projects: ProjectsInterface[] = personalProjects(translations);

  const imageEducation = [yaviracImage, unibeImage];

  const downloadCv = () => {
    const fileName =
      languageState === 'en'
        ? 'steveen-Ordoñez-en.pdf'
        : 'steveen-Ordoñez-es.pdf';
    const filePath = `/cv/${fileName}`;

    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid grid-cols-1 space-y-2 sm:space-y-8 sm:p-2">
      <section className="relative p-5 sm:p-12 h-full overflow-hidden font-sans ">
        <AnimatedBackground isDarkTheme={isDarkTheme} />
        <div className="grid grid-cols-1 h-full relative z-10 text-center p-2 sm:p-0  ">
          <div className="space-y-4 sm:space-y-8">
            <AnimatedText
              text={translations.briefcase.welcome}
              className="text-[38px] sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-500"
            />
            <p
              className={`text-xl sm:text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-black'}`}
            >
              {translations.briefcase.hello}, {translations.briefcase.name}
            </p>
            <p
              className={`text-sm sm:text-xl  leading-relaxed text-justify ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}
            >
              {translations.briefcase.presentation}
            </p>
            <button
              onClick={downloadCv}
              className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              {languageState === 'en' ? 'Download CV' : 'Descargar CV'}
            </button>
          </div>
        </div>
      </section>
      <Carousel
        projects={experiences}
        title={translations.workExperience.title}
      />
      <Cards projects={projects} title={translations.projects.title} />
      <ImageCarousel
        images={imageEducation}
        title={translations.education.title}
      />
      <ContactComponent isDarkTheme={isDarkTheme} translations={translations} />
    </div>
  );
};

export default BriefcaseScreen;
