import React from "react";
import Slider from "react-slick";
import { useTheme } from "../../../hook/theme";
import { useLanguage } from "../../../hook/lenguage";
import PageWrapperCustom from "../../../components/common/page/custom/PageWrapperCustom";
import yaviracImg from "../../../assets/yavirac-logo.png"; // Asegúrate de tener una imagen representativa
import pomasquiImg from "../../../assets/pomasqui-logo.jpeg"; // Asegúrate de tener una imagen representativa
import { FiArrowRight } from 'react-icons/fi';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MyStudiesScreen: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const { translations } = useLanguage();

  const studies = [
    {
      institution: translations['studies.yavirac.institution'],
      degree: translations['studies.yavirac.degree'],
      description: translations['studies.yavirac.description'],
      year: "2024",
      location: "Quito, Ecuador",
      image: yaviracImg,
      pageUrl: "https://yavirac.edu.ec/"
    },
    {
      institution: translations['studies.pomasqui.institution'],
      degree: translations['studies.pomasqui.degree'],
      description: translations['studies.pomasqui.description'],
      year: "2020",
      location: "Pomasqui, Quito",
      image: pomasquiImg,
      pageUrl: "https://iepomasqui.com/" // Cambia esto por la URL real de la institución si está disponible
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
          {studies.map((study, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-4 py-10 ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              <div className="flex justify-center items-center w-48 h-48 mb-4">
                <img
                  src={study.image}
                  alt={`${study.institution} logo`}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold mb-2">{study.institution}</h2>
                <p className="text-lg font-medium mb-2">{study.degree}</p>
                {study.description && (
                  <p className="text-base mb-2">{study.description}</p>
                )}
                <p className="text-sm mb-1">{study.year}</p>
                <p className="text-sm">{study.location}</p>
                <a
                  href={study.pageUrl}
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

export default MyStudiesScreen;
