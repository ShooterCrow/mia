import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PropertyShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const properties = [
    {
      id: 1,
      title: "Single room and Parlour",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      alt: "Traditional wooden house with grass roof"
    },
    {
      id: 2,
      title: "Single room and Parlour",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&h=300&fit=crop",
      alt: "Modern brick house with landscaping"
    },
    {
      id: 3,
      title: "Single room and Parlour",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      alt: "Contemporary house with pool"
    },
    {
      id: 3,
      title: "Single room and Parlour",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      alt: "Contemporary house with pool"
    },
    {
      id: 3,
      title: "Single room and Parlour",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      alt: "Contemporary house with pool"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === properties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Desktop View - Vertical Stack */}
      <div className="hidden md:flex md:flex-col md:gap-4 md:h-[screen] md:max-h-[screen] md:overflow-hidden md:py-4">
        {properties.map((property) => (
          <div
            key={property.id}
            className="relative flex-1 min-h-0 rounded-2xl overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />
            <img
              src={property.image}
              alt={property.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-white text-xl font-semibold leading-tight">
                {property.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View - Horizontal Carousel */}
      <div className="md:hidden relative">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />
          <img
            src={properties[currentIndex].image}
            alt={properties[currentIndex].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-white text-xl font-semibold leading-tight">
              {properties[currentIndex].title}
            </h3>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous property"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next property"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {properties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-blue-500 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to property ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyShowcase;