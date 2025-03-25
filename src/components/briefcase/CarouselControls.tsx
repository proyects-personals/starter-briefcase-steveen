import React from 'react';

interface CarouselControlsProps {
  isHovering: boolean;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({ isHovering }) => {
  return (
    <div
      className={`flex items-center p-10 justify-center mt-8 space-x-4 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
    >
      <button
        className="swiper-button-prev w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Previous project"
      ></button>

      <div className="swiper-pagination !relative !w-auto !mx-4" />

      <button
        className="swiper-button-next w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Next project"
      ></button>
    </div>
  );
};

export default CarouselControls;
