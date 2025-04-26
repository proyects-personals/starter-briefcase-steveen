import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Project } from '../../interface/types';
import CarouselItem from './CarouselItem';
import { Translations } from '../../interface/translations/translations.interface';
import CarouselControls from './CarouselControls';

const AUTO_ROTATE_INTERVAL_MS = 30000;
const SCALE_ACTIVE = 'scale-110';
const SCALE_INACTIVE = 'scale-90 opacity-70';
const TRANSITION_DURATION = 'duration-500';
const BREAKPOINT = 768;
const DEFAULT_PROJECTS_COUNT = 3;
const MOBILE_PROJECTS_COUNT = 1;

interface CarouselProps {
  projects: Project[];
  title: string;
  translate: Translations;
}

const Carousel: React.FC<CarouselProps> = ({ projects, title, translate }) => {
  const [projectsCount, setProjectsCount] = useState<number>(
    window.innerWidth < BREAKPOINT
      ? MOBILE_PROJECTS_COUNT
      : DEFAULT_PROJECTS_COUNT
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentSlides, setCurrentSlides] = useState<Project[]>(
    projects.slice(currentIndex, currentIndex + projectsCount)
  );

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isAnyExpanded, setIsAnyExpanded] = useState<boolean>(false);

  const lastSwitchTimeRef = useRef<number>(Date.now());
  const animationFrameRef = useRef<number | null>(null);

  const handleNext = useCallback((): void => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(nextIndex);
    lastSwitchTimeRef.current = Date.now();
  }, [currentIndex, projects.length]);

  const handlePrev = useCallback((): void => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(prevIndex);
    lastSwitchTimeRef.current = Date.now();
  }, [currentIndex, projects.length]);

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

  useEffect(() => {
    const handleResize = () => {
      const newProjectsCount =
        window.innerWidth < BREAKPOINT
          ? MOBILE_PROJECTS_COUNT
          : DEFAULT_PROJECTS_COUNT;
      setProjectsCount(newProjectsCount);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (projectsCount === MOBILE_PROJECTS_COUNT) {
      setCurrentSlides([projects[currentIndex]]);
    } else {
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      const nextIndex = (currentIndex + 1) % projects.length;
      setCurrentSlides([
        projects[prevIndex],
        projects[currentIndex],
        projects[nextIndex],
      ]);
    }
  }, [currentIndex, projects, projectsCount]);

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
      <div className="container mx-auto px-4 relative z-10 flex justify-center items-center p-0 sm:p-5 space-x-2">
        {currentSlides.map((project: Project, index: number) => (
          <div
            key={index}
            className={`transition-all ${TRANSITION_DURATION} ${
              index === 1
                ? SCALE_ACTIVE
                : window.innerWidth < BREAKPOINT
                  ? 'scale-100 opacity-100'
                  : SCALE_INACTIVE
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
          controlsClassName={`${
            isHovering || window.innerWidth < BREAKPOINT
              ? 'opacity-60'
              : 'opacity-0'
          } transition-opacity duration-500`}
        />
      </div>
    </section>
  );
};

export default Carousel;
