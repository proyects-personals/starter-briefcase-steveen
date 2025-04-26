import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Project } from '../../interface/types';
import CarouselItem from './CarouselItem';
import CarouselControls from './CarouselControls';
import { Translations } from '../../interface/translations/translations.interface';

interface CarruselProps {
  projects: Project[];
  title: string;
  translate: Translations;
}

const Carousel: React.FC<CarruselProps> = ({ projects, title, translate }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pattern-blue-500 pattern-size-4" />
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
            {title}
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
      </div>

      {/* Carrusel */}
      <div
        className="container mx-auto px-4 relative z-10"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index: number, className: string) => {
              return `<span class="${className} bg-gradient-to-r from-blue-400 to-purple-500"></span>`;
            },
          }}
          onSlideChange={handleSlideChange}
          className="py-10"
        >
          {projects.map((project, index: number) => (
            <SwiperSlide key={index}>
              <CarouselItem
                project={project}
                activeIndex={activeIndex}
                index={index}
                translate={translate}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controles personalizados */}
        <CarouselControls isHovering={isHovering} />
      </div>
    </section>
  );
};

export default Carousel;
