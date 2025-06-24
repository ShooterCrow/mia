import React from 'react';
import { Search, User, ShoppingCart, Menu, Heart, MapPin } from 'lucide-react';

function Home() {
    const categories = [
        { name: 'Vehicles', image: '/api/placeholder/80/80' },
        { name: 'Properties', image: '/api/placeholder/80/80' },
        { name: 'Gadgets', image: '/api/placeholder/80/80' },
        { name: 'Electronics', image: '/api/placeholder/80/80' },
        { name: 'Home Appliance', image: '/api/placeholder/80/80' },
        { name: 'Fashion', image: '/api/placeholder/80/80' },
        { name: 'Babies & Kids', image: '/api/placeholder/80/80' },
        { name: 'Health & Beauty', image: '/api/placeholder/80/80' },
    ];

    const products = [
        { id: 1, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: false },
        { id: 2, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: true },
        { id: 3, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: false },
        { id: 4, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: true },
        { id: 5, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: true },
        { id: 6, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: false },
        { id: 7, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: false },
        { id: 8, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: true },
        { id: 9, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: false },
        { id: 10, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: true },
        { id: 11, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: false },
        { id: 12, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: true },
        { id: 13, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: true },
        { id: 14, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: false },
        { id: 15, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: true },
        { id: 16, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: true },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
                    {/* Mobile Layout */}
                    <div className="sm:hidden flex flex-col items-center text-center min-h-[80vh] justify-center">
                        <h1 className="text-4xl font-bold mb-6 leading-tight">
                            Discover Your Perfect Product Today
                        </h1>
                        <p className="text-base mb-8 text-gray-300 px-4 leading-relaxed">
                            Discover the latest styles with our featured products and exclusive promotions.
                        </p>
                        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-base transition-colors duration-200">
                            Shop now
                        </button>
                    </div>

                    {/* Desktop/Tablet Layout */}
                    <div className="hidden sm:flex flex-col lg:flex-row items-center min-h-[100vh] gap-8 lg:gap-12">
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                                Discover Your Perfect<br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>Product Today
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300 dark:text-gray-400 max-w-2xl lg:max-w-none">
                                Explore our latest styles with our featured<br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>products and exclusive promotions.
                            </p>
                            <button className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-200 w-full sm:w-auto">
                                Shop now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-12 sm:py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Categories</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed px-4 sm:px-0">
                            Explore our wide range of products, carefully curated to suit your lifestyle. Whether you're looking for fashion, electronics, the latest tech,
                            or home decor, we've got you covered. Discover your favorite products today!
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
                        {categories.map((category, index) => (
                            <div key={index} className="text-center group cursor-pointer">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center group-hover:bg-gray-300 dark:group-hover:bg-gray-600 transition-colors duration-200">
                                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium leading-tight px-1">{category.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Promotions Section */}
            <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center sm:text-left">Promotions Ad</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg dark:shadow-xl overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                <div className="relative">
                                    <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30"></div>
                                    {product.trending && (
                                        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gray-100 dark:bg-red-600 text-orange-400 px-2 py-1 rounded text-xs font-semibold">
                                            Trending
                                        </div>
                                    )}
                                </div>
                                <div className="p-3 sm:p-4">
                                    <div className='flex justify-between items-center'>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">{product.name}</h3>
                                        <p className="text-xl sm:text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">{product.price}</p>
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed line-clamp-3">
                                        By Ajara Inc. I found all my essentials without having to shop lots. The site is easy to use, and the checkout was smooth.
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 space-x-2">
                                        <div className='flex gap-1 justify-between items-center'>
                                            <MapPin color='red' size={15} />
                                            <span className="truncate flex-1"> Ajara, Lagos, Nigeria</span>
                                        </div>
                                        <span className="whitespace-nowrap">🕒 10 min ago</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;