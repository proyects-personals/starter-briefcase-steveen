import React, { useState, useEffect } from 'react';
import { Project } from '../../interface/types';
import { Translations } from '../../interface/translations/translations.interface';

const DESCRIPTION_LENGTH_THRESHOLD = 100;

interface CarouselItemProps {
  project: Project;
  activeIndex: number;
  index: number;
  translate: Translations;
  onExpandChange: (expanded: boolean) => void;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  project,
  activeIndex,
  index,
  translate,
  onExpandChange,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleDescription = () => {
    setExpanded((prev) => {
      const newState = !prev;
      onExpandChange(newState);
      return newState;
    });
  };

  useEffect(() => {
    return () => {
      if (expanded) {
        onExpandChange(false);
      }
    };
  }, [expanded, onExpandChange]);

  const scaleClass =
    activeIndex === index ? 'scale-100 z-10' : 'scale-90 opacity-90';
  const descriptionClass = expanded ? '' : 'line-clamp-3';

  return (
    <div
      className={`relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform ${scaleClass}`}
    >
      <div className="relative h-60 md:h-72 lg:h-80 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="p-4 sm:p-6 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500" />
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
          {project.title}
        </h3>

        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs sm:text-sm bg-gray-700/50 rounded-full text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p
          className={`text-gray-300 text-sm sm:text-base mb-4 ${descriptionClass}`}
        >
          {project.description}
        </p>

        {project.description.length > DESCRIPTION_LENGTH_THRESHOLD && (
          <button
            onClick={toggleDescription}
            className="text-blue-400 hover:underline text-sm sm:text-base"
          >
            {expanded ? translate.general.seeLess : translate.general.seeMore}
          </button>
        )}

        <div className="flex flex-wrap gap-3 mt-2">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all duration-300 text-sm sm:text-base"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              {translate.general.visit}
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-all duration-300 text-sm sm:text-base"
            >
              <i className="fab fa-github mr-2"></i>
              {translate.general.code}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
