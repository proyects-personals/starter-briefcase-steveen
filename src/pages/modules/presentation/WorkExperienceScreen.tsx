import React from "react";
import { useTheme } from "../../../hook/theme";
import { useLanguage } from "../../../hook/lenguage";
import PageWrapperCustom from "../../../components/common/page/custom/PageWrapperCustom";
import amautaImg from "../../../assets/amauta-tech-logo.png";
import aterrizarImg from "../../../assets/aterrizar-global-logo.png";
import tocImg from "../../../assets/toc-systems-logo.png";
import { FiArrowRight } from 'react-icons/fi';

const WorkExperienceScreen: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const { translations } = useLanguage();

  const experiences = [
    {
      company: "AMAUTA TECH",
      position: translations['experiences.amauta_tech.position'],
      description: translations['experiences.amauta_tech.description'],
      period: "07/2023 – 08/2023",
      location: "Quito",
      image: amautaImg,
      pageUrl: "https://www.emis.com/php/company-profile/EC/Instituto_de_Capacitacion_y_Especializacion_Amauta_-_Tech_SAS_BIC_es_13291319.html"
    },
    {
      company: "ATERRIZAR GLOBAL",
      position: translations['experiences.aterrizar_global.position'],
      description: translations['experiences.aterrizar_global.description'],
      period: "05/2022 – 08/2022",
      location: "Quito",
      image: aterrizarImg,
      pageUrl: "https://aterrizarglobal.com/"
    },
    {
      company: "TOC SYSTEMS",
      position: translations['xperiences.toc_systems.position'],
      description: translations['experiences.toc_systems.description'],
      period: "07/2023 – 08/2023",
      location: "Quito",
      image: tocImg,
      pageUrl: "https://toc.com.ec/"
    },
  ];

  return (
    <PageWrapperCustom>
      <div
        className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8  ${
          isDarkTheme ? "bg-dark-primary text-white" : "bg-light-primary text-black"
        }`}
        style={{ fontFamily: "Times New Roman, Times, serif" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`bg-secondary rounded-lg shadow-md p-4 flex flex-col items-center my-10 gap-2 ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              <img
                src={experience.image}
                alt={`${experience.company} logo`}
                className="w-24 h-24 mb-4 object-contain"
              />
              <h2 className="text-xl font-bold mb-2">{experience.company}</h2>
              <p className="text-lg font-medium mb-2">{experience.position}</p>
              <p className="text-base mb-2">{experience.description}</p>
              <p className="text-sm mb-1">{experience.period}</p>
              <p className="text-sm">{experience.location}</p>
              {/* Enlace a la página de la empresa */}
              <a
                href={experience.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-primary mt-2"
              >
                {translations['work.visit_page']} <FiArrowRight className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </PageWrapperCustom>
  );
};

export default WorkExperienceScreen;
