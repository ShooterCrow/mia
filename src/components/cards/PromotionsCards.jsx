import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PromotionCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: '/Rectangle5.webp',
      title: 'Hot Picks of the Week!'
    },
    {
      id: 2,
      image: '/Rectangle11.webp',
      title: 'Grab the opportunity now'
    },
    {
      id: 3,
      image: '/Rectangle10.webp',
      title: 'Made In Premium'
    },
    {
      id: 4,
      image: '/Rectangle12.webp',
      title: 'Special Deals'
    },
    {
      id: 5,
      image: '/Rectangle11.webp',
      title: 'Limited Time Offer'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlide = slides.length - 3; // Show 3 items at once
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    const maxSlide = slides.length - 3;
    setCurrentSlide(Math.min(index, maxSlide));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    const maxSlide = slides.length - 3;
    setCurrentSlide((prev) => prev >= maxSlide ? 0 : prev + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    const maxSlide = slides.length - 3;
    setCurrentSlide((prev) => prev <= 0 ? maxSlide : prev - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const getVisibleSlides = () => {
    return window.innerWidth >= 768 ? 3 : 1;
  };

  const maxDots = Math.max(1, slides.length - 2);

  return (
    <div className="w-full mx-auto p-4 lg:p-10">
      {/* Main Slider Container */}
      <div className="relative overflow-hidden rounded-lg">
        {/* Slider Wrapper */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentSlide * (100 / (window.innerWidth >= 768 ? 4 : 1))}%)`,
            width: window.innerWidth >= 768 ? `${(slides.length / 3) * 100}%` : `${slides.length * 100}%`
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-shrink-0 w-full md:w-1/3"
              style={{ height: '240px' }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg mx-1"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Gradient Overlay - Fade from bottom to top */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-lg"></div>
                
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg md:text-xl font-bold leading-tight">
                    {slide.title}
                  </h3>
                  
                  {/* Arrow for specific slides */}
                  {index === 1 && (
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-white bg-opacity-20 rounded-full p-2">
                        <ChevronRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all z-10"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all z-10"
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button> */}
      </div>

      {/* Title and Dot Indicators Below */}
      <div className="mt-6 text-center">
        {/* Dot Indicators */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: maxDots }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-blue-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionCards;