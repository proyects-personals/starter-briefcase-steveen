import React from 'react';

interface CarouselProps {
  images: string[];
  title: string;
}

const ImageCarousel: React.FC<CarouselProps> = ({ images, title }) => {
  return (
    <div className="overflow-hidden relative w-full p-5 sm:p-12">
      <div className="container mx-auto px-4 mb-16 relative z-10 space-y-4 sm:space-y-8">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
            {title}
          </span>
        </h2>
        <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
      </div>
      <div className="relative w-full h-48 overflow-hidden">
        <div className="flex animate-marquee">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-none w-full sm:w-64 md:w-72 h-48 p-2"
            >
              <img
                src={image}
                alt={`Carousel item ${index}`}
                className="w-48 h-48 rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
