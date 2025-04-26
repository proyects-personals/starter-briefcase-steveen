import React, { useState, useEffect } from 'react';
import { Project } from '../../interface/types';
import CarouselItem from './CarouselItem';
import { Translations } from '../../interface/translations/translations.interface';

interface CarouselProps {
  projects: Project[];
  title: string;
  translate: Translations;
}

const Carousel: React.FC<CarouselProps> = ({
  projects,
  title,
  translate,
}: CarouselProps) => {
  const [currentSlides, setCurrentSlides] = useState<Project[]>(
    projects.slice(0, 3)
  );

  // Cambiar las diapositivas
  const handleNext = () => {
    setCurrentSlides(([first, second, third]) => [second, third, first]);
  };

  const handlePrev = () => {
    setCurrentSlides(([first, second, third]) => [third, first, second]);
  };

  // Rotación automática
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Cambia la diapositiva automáticamente
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <section className="relative overflow-hidden p-5 sm:p-12">
      {/* Fondo */}
      <div className="absolute inset-0 opacity-5 pattern-blue-500 pattern-size-4" />

      {/* Título */}
      <div className="container mx-auto px-4 mb-16 relative z-10 space-y-4 sm:space-y-8">
        <h2 className="text-center text-xl sm:text-6xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
            {title}
          </span>
        </h2>
        <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
      </div>

      {/* Carrusel */}
      <div className="container mx-auto px-4 relative z-10 flex justify-center items-center p-5 space-x-4">
        {/* Slides */}
        {currentSlides.map((project, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              index === 1 ? 'scale-110' : 'scale-90 opacity-70'
            }`}
          >
            <CarouselItem
              project={project}
              activeIndex={index}
              index={index}
              translate={translate}
            />
          </div>
        ))}

        {/* Controles */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button onClick={handlePrev} className="text-3xl">
            ⬅️
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button onClick={handleNext} className="text-3xl">
            ➡️
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
