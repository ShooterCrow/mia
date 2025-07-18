// ProductCard1.jsx
import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router';

const ProductCard1 = ({ product, showTimestamp = true }) => {
    return (
        <Link to={`/products/${product.id}`} key={product.id}>
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg hover:shadow-lg dark:shadow-xl overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                    <div
                        className="w-full sm:h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 bg-cover bg-center bg-no-repeat"
                        style={{ height: '240px', backgroundImage: `url(${product.image})` }}
                    />
                    {product.trending && (
                        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gray-100 dark:bg-red-600 text-orange-400 px-2 py-1 rounded text-xs font-semibold">
                            Trending
                        </div>
                    )}
                </div>
                <div className="p-3 sm:p-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1">
                            {product.name}
                        </h3>
                        <p className="text-xl sm:text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                            {product.price}
                        </p>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed line-clamp-3">
                        By Ajara Inc. I found all my essentials without having to shop lots. The site is easy to use, and the checkout was smooth.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 space-x-2">
                        <div className="flex gap-1 justify-between items-center">
                            <MapPin color="red" size={15} />
                            <span className="truncate flex-1">Ajara, Lagos, Nigeria</span>
                        </div>
                        {showTimestamp && <span className="whitespace-nowrap">🕒 10 min ago</span>}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard1;
