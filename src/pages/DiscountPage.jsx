import React, { useState, useEffect } from "react";

const DiscountPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 20,
    minutes: 50,
    seconds: 40,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      name: "White Comfy Canvas",
      price: 100,
      originalPrice: 200,
      discount: 50,
      image: "👟",
      rating: 5,
      reviews: 504,
    },
    {
      name: "White Comfy Canvas",
      price: 100,
      originalPrice: 200,
      discount: 40,
      image: "🎧",
      rating: 5,
      reviews: 504,
    },
    {
      name: "White Comfy Canvas",
      price: 100,
      originalPrice: 200,
      discount: 40,
      image: "🎤",
      rating: 5,
      reviews: 504,
    },
    {
      name: "White Comfy Canvas",
      price: 100,
      originalPrice: 200,
      discount: 50,
      image: "👟",
      rating: 5,
      reviews: 504,
    },
    {
      name: "White Comfy Canvas",
      price: 100,
      originalPrice: 200,
      discount: 50,
      image: "👟",
      rating: 5,
      reviews: 504,
    },
    {
      name: "White Comfy Canvas",
      price: 100,
      originalPrice: 200,
      discount: 50,
      image: "👟",
      rating: 5,
      reviews: 504,
    },
    {
      name: "White Comfy Canvas",
      price: 100,
      originalPrice: 200,
      discount: 50,
      image: "👟",
      rating: 5,
      reviews: 504,
    },
    {
      name: "White Comfy Canvas",
      price: 100,
      originalPrice: 200,
      discount: 50,
      image: "👟",
      rating: 5,
      reviews: 504,
    },
    {
      name: "White Comfy Canvas",
      price: 100,
      originalPrice: 200,
      discount: 50,
      image: "👟",
      rating: 5,
      reviews: 504,
    },
    {
      name: "White Comfy Canvas",
      price: 100,
      originalPrice: 200,
      discount: 50,
      image: "👟",
      rating: 5,
      reviews: 504,
    },
  ];

  const GeometricShape = ({ type, className }) => {
    const shapes = {
      cylinder: (
        <div
          className={`bg-gradient-to-b from-orange-400 to-orange-600 ${className}`}
        >
          <div className="w-full h-4 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full"></div>
          <div className="flex-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
          <div className="w-full h-4 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full"></div>
        </div>
      ),
      ribbed: (
        <div
          className={`bg-gradient-to-b from-gray-600 to-gray-800 ${className} overflow-hidden`}
        >
          {[...Array(20)].map((_, i) => (
            <div key={i} className="h-1 bg-gray-700 mb-1"></div>
          ))}
        </div>
      ),
      sphere: (
        <div
          className={`bg-gradient-to-br from-orange-400 to-orange-600 rounded-full ${className} relative overflow-hidden`}
        >
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-orange-500 rounded-full"
              style={{
                transform: `scale(${1 - i * 0.1})`,
                opacity: 0.3,
              }}
            ></div>
          ))}
        </div>
      ),
    };
    return shapes[type];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          height: "70vh",
          backgroundImage: "url(/discount.png)",
        }}
      >
        {/* Main Title */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-6xl font-bold tracking-wide">Discount Product</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Shop your favorite items at unbeatable prices
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Shop your favorite items at unbeatable prices and enjoy massive
            savings across a wide range of products. From fashion and
            electronics to home essentials and more, these deals are live for a
            limited time only. No discount codes needed.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl font-bold text-gray-800">
                        ${product.price}
                      </span>
                      <span className="text-xl text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Countdown */}
                    <div className="flex gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">
                          {timeLeft.days}
                        </div>
                        <div className="text-xs text-gray-600">Days</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">
                          {timeLeft.hours}
                        </div>
                        <div className="text-xs text-gray-600">Hours</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">
                          {timeLeft.minutes}
                        </div>
                        <div className="text-xs text-gray-600">Minutes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">
                          {timeLeft.seconds}
                        </div>
                        <div className="text-xs text-gray-600">Seconds</div>
                      </div>
                    </div>
                  </div>

                  <div className="relative ml-6">
                    {/* Discount Badge */}
                    <div className="absolute -top-4 -right-4 z-10">
                      <div className="relative">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                          {product.discount}%
                        </div>
                        {/* Spikes */}
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-3 h-3 bg-red-500"
                            style={{
                              top: "50%",
                              left: "50%",
                              transform: `translate(-50%, -50%) rotate(${
                                i * 45
                              }deg) translateY(-24px)`,
                              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Product Image Placeholder */}
                    <div className="w-32 h-32 bg-gray-100 rounded-2xl flex items-center justify-center text-6xl">
                      {product.image}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscountPage;
