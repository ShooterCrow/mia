import React, { useState, useRef, useEffect } from 'react';
import { User, ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "Micheal Patrick",
      role: "Shop owner",
      text: "Customer service is top-notch. I had an issue with my payment, and the support team helped me sort it out within minutes. Super responsive and professional.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Judith Nathaniel",
      role: "Store owner",
      text: "UPAM Stores is a lifesaver! I ordered a smartwatch wand got it within 3 days. The packaging was neat, the product was genuine, and it works perfectly. I'll definitely be shopping again!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c371?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Stephen Daniels",
      role: "Business owner",
      text: "I was skeptical at first about paying off-site, but the seller was professional, and I got my order within two days. Will definitely shop here again.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Stephen Daniels",
      role: "Business owner",
      text: "Everything I needed in one place! From groceries to gadgets, I found all my essentials without having to step out. The site is easy to use, and the prices are amazing.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Micheal Patrick",
      role: "Shop owner",
      text: "Everything worked fine, and I found what I was looking for. I just wish I could complete payments directly on the website for extra convenience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Judith Nathaniel",
      role: "Store owner",
      text: "Found great deals I couldn't find anywhere else. Payment was simple, and I loved being able to speak directly to the seller before purchasing.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c371?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.offsetWidth || 320;
      const gap = 24;
      const scrollPosition = index * (cardWidth + gap);
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : reviews.length - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < reviews.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = container.children[0]?.offsetWidth || 320;
        const gap = 24;
        const scrollLeft = container.scrollLeft;
        const newIndex = Math.round(scrollLeft / (cardWidth + gap));
        setCurrentIndex(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('Rectangle6.webp')`
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-75" />

      {/* Content */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Reviews
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            See what our happy customers have to say! Real reviews from real people to help you make confident decisions
            before you buy. Trust us, your next favorite purchase is just a click away
          </p>
        </div>

        {/* Desktop Grid View (Hidden on mobile/tablet) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            // border border-white border-opacity-20 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl
            <div key={review.id} className="p-8 ">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-600 flex items-center justify-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <User className="w-6 h-6 text-gray-300" style={{ display: 'none' }} />
                </div>
              </div>
              <p className="text-gray-200 leading-relaxed">{review.text}</p>
              <div className='pt-5'>
                <h3 className="font-semibold text-white text-lg">{review.name}</h3>
                <p className="text-gray-300 text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Slider View */}
        <div className="lg:hidden relative max-w-7xl mx-auto">

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <div
                key={review.id}
                // bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl border border-white border-opacity-20
                className="p-6 sm:p-8 flex-shrink-0 w-80 sm:w-96 snap-center"> 
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-600 flex items-center justify-center">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <User className="w-6 h-6 text-gray-300" style={{ display: 'none' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">{review.name}</h3>
                    <p className="text-gray-300 text-sm">{review.role}</p>
                  </div>
                </div>
                <p className="text-gray-200 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  scrollToIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                  }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full p-3 border border-white border-opacity-30 text-white hover:bg-opacity-30 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full p-3 border border-white border-opacity-30 text-white hover:bg-opacity-30 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ReviewsSection;