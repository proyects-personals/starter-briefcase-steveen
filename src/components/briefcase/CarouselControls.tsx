import React from 'react';

interface CarouselControlsProps {
  isHovering: boolean;
  handlePrev: () => void;
  handleNext: () => void;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  isHovering,
  handleNext,
  handlePrev,
}) => {
  return (
    <>
      <div
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={handlePrev}
          className="text-3xl text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors w-12"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      </div>
      <div
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={handleNext}
          className="text-3xl text-white bg-gray-800 bg-opacity-50 p-2 w-12 rounded-full hover:bg-opacity-75 transition-colors"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
};

export default CarouselControls;
