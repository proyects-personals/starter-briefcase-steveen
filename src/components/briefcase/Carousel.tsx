import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Project } from '../../interface/types';
import CarouselItem from './CarouselItem';
import { Translations } from '../../interface/translations/translations.interface';
import CarouselControls from './CarouselControls';

interface CarouselProps {
  projects: Project[];
  title: string;
  translate: Translations;
}

const AUTO_ROTATE_INTERVAL_MS = 30000;
const SCALE_ACTIVE = 'scale-110';
const SCALE_INACTIVE = 'scale-90 opacity-70';
const TRANSITION_DURATION = 'duration-500';
const INITIAL_PROJECTS_COUNT = 3;
const SLICE_START = 0;

const Carousel: React.FC<CarouselProps> = ({ projects, title, translate }) => {
  const [currentSlides, setCurrentSlides] = useState<Project[]>(
    projects.slice(SLICE_START, INITIAL_PROJECTS_COUNT)
  );
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isAnyExpanded, setIsAnyExpanded] = useState<boolean>(false);

  const lastSwitchTimeRef = useRef<number>(Date.now());
  const animationFrameRef = useRef<number | null>(null);

  const handleNext = useCallback((): void => {
    setCurrentSlides(([first, second, third]) => [second, third, first]);
    lastSwitchTimeRef.current = Date.now();
  }, []);

  const handlePrev = useCallback((): void => {
    setCurrentSlides(([first, second, third]) => [third, first, second]);
    lastSwitchTimeRef.current = Date.now();
  }, []);

  const animate = useCallback((): void => {
    const now = Date.now();

    if (
      !isAnyExpanded &&
      now - lastSwitchTimeRef.current > AUTO_ROTATE_INTERVAL_MS
    ) {
      handleNext();
      lastSwitchTimeRef.current = now;
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [handleNext, isAnyExpanded]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);

    return (): void => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const handleExpandChange = (expanded: boolean): void => {
    setIsAnyExpanded(expanded);
  };

  return (
    <section
      className="relative overflow-hidden p-5 sm:p-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 opacity-5 pattern-blue-500 pattern-size-4" />
      <div className="container mx-auto px-4 mb-16 relative z-10 space-y-4 sm:space-y-8">
        <h2 className="text-center text-xl sm:text-6xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
            {title}
          </span>
        </h2>
        <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
      </div>
      <div className="container mx-auto px-4 relative z-10 flex justify-center items-center p-5 space-x-4">
        {currentSlides.map((project: Project, index: number) => (
          <div
            key={index}
            className={`transition-all ${TRANSITION_DURATION} ${
              index === 1 ? SCALE_ACTIVE : SCALE_INACTIVE
            }`}
          >
            <CarouselItem
              project={project}
              activeIndex={index}
              index={index}
              translate={translate}
              onExpandChange={handleExpandChange}
            />
          </div>
        ))}

        <CarouselControls
          isHovering={isHovering}
          handleNext={(): void => {
            handleNext();
            setIsAnyExpanded(false);
          }}
          handlePrev={(): void => {
            handlePrev();
            setIsAnyExpanded(false);
          }}
        />
      </div>
    </section>
  );
};

export default Carousel;
