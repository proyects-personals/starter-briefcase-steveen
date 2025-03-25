import React from 'react';

interface CarouselProps {
  images: string[];
  title: string;
}

const ImageCarousel: React.FC<CarouselProps> = ({ images, title }) => {
  return (
    <div className="overflow-hidden relative w-full">
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
            {title}
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
      </div>
      <div className="flex animate-marquee gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex-none w-full h-full p-2">
            <img
              src={image}
              alt={`Carousel item ${index}`}
              className="w-62 h-48 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
