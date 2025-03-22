import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface Experience {
  title: string;
  description: string;
  image: string;
  website?: string;
  github?: string;
}

interface CardsProps {
  title: string;
  experiences: Experience[];
}

const Cards: React.FC<CardsProps> = ({ experiences, title }) => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on('slideChange', () => {
        setActiveIndex(swiperRef.current.swiper.realIndex);
      });
    }
  }, []);

  return (
    <section className="py-12">
      {/* Título con gradiente animado */}
      <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12">
        {title}
      </h1>

      {/* Carrusel con Swiper */}
      <div className="container mx-auto px-4 relative">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
          className="swiper-container"
        >
          {experiences.map((experience, index) => (
            <SwiperSlide key={experience.title}>
              <div
                className={`relative bg-gray-800 rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 ${
                  activeIndex === index
                    ? 'scale-100 opacity-100'
                    : 'scale-90 opacity-50'
                }`}
              >
                {/* Imagen */}
                <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden p-4 flex items-center justify-center">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {experience.title}
                  </h2>
                  <p className="mt-4 text-gray-300 text-sm sm:text-base">
                    {experience.description}
                  </p>
                  {/* Enlaces (website y GitHub) */}
                  <div className="mt-6 flex justify-start space-x-4">
                    {experience.website && (
                      <a
                        href={experience.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        <i
                          className="fa fa-globe text-2xl"
                          aria-hidden="true"
                        ></i>
                      </a>
                    )}
                    {experience.github && (
                      <a
                        href={experience.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
                      >
                        <i
                          className="fa fa-github text-2xl"
                          aria-hidden="true"
                        ></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botones de navegación */}
        <div className="swiper-button-prev text-blue-400 hover:text-blue-300 transition-colors duration-300"></div>
        <div className="swiper-button-next text-blue-400 hover:text-blue-300 transition-colors duration-300"></div>

        {/* Puntos indicadores */}
        <div className="swiper-pagination mt-6 flex justify-center space-x-2">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current.swiper.slideTo(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-blue-400' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
