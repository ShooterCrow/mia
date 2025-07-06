import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const PromoCards = () => {
    const [timers, setTimers] = useState({
        0: { hours: 12, minutes: 25, seconds: 12 },
        1: { hours: 0, minutes: 45, seconds: 19 },
        2: { hours: 11, minutes: 16, seconds: 12 },
        3: { hours: 12, minutes: 10, seconds: 15 }
    });

    // Update timers every second
    useEffect(() => {
        const interval = setInterval(() => {
            setTimers(prev => {
                const newTimers = { ...prev };
                Object.keys(newTimers).forEach(key => {
                    const timer = newTimers[key];
                    if (timer.seconds > 0) {
                        timer.seconds--;
                    } else if (timer.minutes > 0) {
                        timer.minutes--;
                        timer.seconds = 59;
                    } else if (timer.hours > 0) {
                        timer.hours--;
                        timer.minutes = 59;
                        timer.seconds = 59;
                    }
                });
                return newTimers;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const products = [
        {
            name: "Virtual Reality (VR) H60",
            rating: 4.5,
            reviews: 2.5,
            originalPrice: 1200,
            salePrice: null,
            discount: "-40%",
            image: "/api/placeholder/120/120"
        },
        {
            name: "Portable Mic Speaker",
            rating: 4.5,
            reviews: 1.2,
            originalPrice: null,
            salePrice: null,
            discount: "-30%",
            image: "/api/placeholder/120/120"
        },
        {
            name: "Wireless Bluetooth Headset",
            rating: 5.0,
            reviews: 30,
            originalPrice: 80,
            salePrice: 70,
            discount: "-10%",
            image: "/api/placeholder/120/120"
        },
        {
            name: "Electric Pressure Cooker",
            rating: 4.5,
            reviews: 2.1,
            originalPrice: 100,
            salePrice: null,
            discount: "-20%",
            image: "/api/placeholder/120/120"
        }
    ];

    const formatTime = (time) => {
        return time.toString().padStart(2, '0');
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />);
        }

        if (hasHalfStar) {
            stars.push(<Star key="half" className="w-3 h-3 fill-yellow-400 text-yellow-400 opacity-50" />);
        }

        const remainingStars = 5 - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<Star key={`empty-${i}`} className="w-3 h-3 text-gray-300" />);
        }

        return stars;
    };

    const formatReviews = (reviews) => {
        if (reviews >= 1000) {
            return `(${(reviews / 1000).toFixed(1)}k)`;
        }
        return `(${reviews}k)`;
    };

    return (
        <section
            className="lg:max-w-7xl mx-auto mb-2 py-6 px-6 relative sm"

        >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 sm:text-left">Promo Sales</h2>

            {/* Mobile: Horizontal scroll, Desktop: Grid */}
            <div className="md:grid md:grid-cols-4 md:gap-4 flex overflow-x-auto gap-4 pb-4 md:pb-0">
                {products.map((product, index) => (
                    <div
                        style={{
                            backgroundImage: `url('Rectangle13.png')`,
                            backgroundSize: '70%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }}
                        key={index}
                        className="bg-green-700 rounded-lg p-4 min-w-[280px] md:min-w-0 flex-shrink-0 relative"
                    >
                        {/* Countdown Timer */}
                        <div className="flex items-center gap-1 text-white text-sm mb-4">
                            <div className="flex items-center">
                                <span className="text-lg font-mono">{formatTime(timers[index].hours)}</span>
                                <span className="mx-1">:</span>
                                <span className="text-lg font-mono">{formatTime(timers[index].minutes)}</span>
                                <span className="mx-1">:</span>
                                <span className="text-lg font-mono">{formatTime(timers[index].seconds)}</span>
                            </div>
                        </div>

                        {/* Timer Labels */}
                        <div className="flex items-center gap-4 text-white text-xs mb-4 opacity-80">
                            <span>hour</span>
                            <span>min</span>
                            <span>sec</span>
                        </div>

                        {/* Product Image */}
                        <div className="flex justify-center mb-4">
                            <div className="w-20 h-20 md:w-24 md:h-24  flex items-center justify-center">
                               
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="text-white">
                            <h3 className="font-medium text-sm mb-2 leading-tight">{product.name}</h3>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-1">
                                    {renderStars(product.rating)}
                                </div>
                                <span className="text-xs opacity-80">{formatReviews(product.reviews)}</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    {product.salePrice && (
                                        <span className="text-lg font-bold">${product.salePrice}</span>
                                    )}
                                    {product.originalPrice && (
                                        <span className={`text-sm ${product.salePrice ? 'line-through opacity-60' : 'text-lg font-bold'}`}>
                                            ${product.originalPrice}
                                        </span>
                                    )}
                                </div>
                                <span className="text-sm font-medium bg-white bg-opacity-20 px-2 py-1 rounded">
                                    {product.discount}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PromoCards;