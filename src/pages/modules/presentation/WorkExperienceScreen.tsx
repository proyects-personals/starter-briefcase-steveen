import React from "react";
import Slider from "react-slick";
import { useTheme } from "../../../hook/theme";
import { useLanguage } from "../../../hook/lenguage";
import PageWrapperCustom from "../../../components/common/page/custom/PageWrapperCustom";
import amautaImg from "../../../assets/amauta-tech-logo.png";
import aterrizarImg from "../../../assets/aterrizar-global-logo.png";
import tocImg from "../../../assets/toc-systems-logo.png";
import { FiArrowRight } from 'react-icons/fi';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
      position: translations['experiences.toc_systems.position'],
      description: translations['experiences.toc_systems.description'],
      period: "07/2023 – 08/2023",
      location: "Quito",
      image: tocImg,
      pageUrl: "https://toc.com.ec/"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <PageWrapperCustom>
      <div
        className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ${
          isDarkTheme ? "bg-dark-primary text-white" : "bg-light-primary text-black"
        }`}
        style={{ fontFamily: "Times New Roman, Times, serif" }}
      >
        <Slider {...settings}>
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-4 py-10 ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              <div className="flex justify-center items-center w-48 h-48 mb-4">
                <img
                  src={experience.image}
                  alt={`${experience.company} logo`}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold mb-2">{experience.company}</h2>
                <p className="text-lg font-medium mb-2">{experience.position}</p>
                <p className="text-base mb-2">{experience.description}</p>
                <p className="text-sm mb-1">{experience.period}</p>
                <p className="text-sm">{experience.location}</p>
                <a
                  href={experience.pageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-sm text-primary mt-2"
                >
                  {translations['work.visit_page']} <FiArrowRight className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </PageWrapperCustom>
  );
};

export default WorkExperienceScreen;
