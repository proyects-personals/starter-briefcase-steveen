import React from 'react';
import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface CarouselProps {
  images: string[];
  title: string;
}

const ImageCarousel: React.FC<CarouselProps> = ({ images, title }) => {
  const AUTO_PLAY_INTERVAL_MS = 3000;

  const autoplay: KeenSliderPlugin = (slider) => {
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;

    const clearNextTimeout = () => {
      clearTimeout(timeout);
    };

    const nextTimeout = () => {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, AUTO_PLAY_INTERVAL_MS);
    };

    slider.on('created', () => {
      slider.container.addEventListener('mouseover', () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener('mouseout', () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });

    slider.on('dragStarted', clearNextTimeout);
    slider.on('animationEnded', nextTimeout);
    slider.on('updated', nextTimeout);
  };

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 15,
      },
      mode: 'snap',
      renderMode: 'performance',
      drag: true,
    },
    [autoplay]
  );

  return (
    <div className="overflow-hidden relative w-full sm:p-12">
      <div className="container mx-auto px-4 mb-16 relative z-10 space-y-4 sm:space-y-8">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
            {title}
          </span>
        </h2>
        <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
      </div>

      <div ref={sliderRef} className="keen-slider h-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="keen-slider__slide flex justify-center items-center transition-transform duration-1000 ease-in-out"
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-72 h-60 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
