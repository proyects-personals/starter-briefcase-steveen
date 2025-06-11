import React from 'react';
import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import TitleComponent from '../texts/TitleComponent';

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
      <TitleComponent title={title} />

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
