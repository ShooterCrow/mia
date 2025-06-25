import React from 'react';
import { Search, User, ShoppingCart, Menu, Heart, MapPin, ArrowRightIcon } from 'lucide-react';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { Link } from 'react-router';
import ProductCard1 from '../../components/cards/ProductCard1';
import ReviewsSection from '../../components/ReviewsSection';
import FAQSection from '../../components/FAQSection';

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
        // { id: 8, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: true },
        // { id: 9, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: false },
        // { id: 10, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: true },
        // { id: 11, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: false },
        // { id: 12, name: 'Refrigerator', price: '$65', image: '/api/placeholder/280/200', trending: true },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
            {/* Hero Section */}
            <section className="pt-[50] bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 sm:py-60 md:py-20">
                    {/* Mobile Layout */}
                    <div className="sm:hidden flex flex-col items-center text-center min-h-[100vh] justify-center">
                        <h1 className="text-4xl font-bold mb-6 leading-tight">
                            Discover Your Perfect Product Today
                        </h1>
                        <p className="text-base mb-8 text-gray-300 px-4 leading-relaxed">
                            Discover the latest styles with our featured products and exclusive promotions.
                        </p>
                        <PrimaryButton text={"Shop Now"} />
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
                            <PrimaryButton text={"Shop Now"} />
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
            <section className="py-12 sm:py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center sm:text-left">Promotions Ad Test</h2>
                    <ProductCard1 products={products} />

                </div>
            </section>

            {/* Post Ad Section */}
            <section className='bg-white dark:bg-gray-900 max-w-7xl mx-auto py-10 px-4'>
                {/* Main Post Ad Box */}
                <div className="relative gap-4 rounded-lg flex flex-col h-[50vh] md:h-[80vh] justify-center items-center overflow-hidden bg-gradient-to-br from-red-400 to-red-600 dark:from-red-500 dark:to-red-700">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out"
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
                        }}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-60" />

                    {/* Content */}
                    <div className="relative z-10 text-center px-4">
                        <h2 className='text-2xl md:text-3xl lg:text-4xl text-center text-white font-bold leading-tight'>
                            Quickly post your ad and connect <br className="hidden sm:block" />
                            <span className="sm:hidden"> </span>with buyers or sellers through our <br className="hidden sm:block" />
                            <span className="sm:hidden"> </span>guest feature
                        </h2>
                        <div className="mt-6">
                            <PrimaryButton text={"Post Ad"} />
                        </div>
                    </div>
                </div>

                {/* Bottom Cards */}
                <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-5 pt-5">

                    {/* Discount Picks Card */}
                    <div className="relative px-6 md:px-10 flex flex-col justify-center gap-5 text-white rounded-lg w-full lg:w-[50%] h-[40vh] md:h-[50vh] overflow-hidden group">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-110"
                            style={{
                                backgroundImage: 'url("https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
                            }}
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-70" />

                        {/* Content */}
                        <div className="relative z-10">
                            <h2 className='text-2xl md:text-3xl font-bold text-white'>Discount Picks of the Week</h2>
                            <div className="flex flex-col mt-4">
                                <p className='text-xs md:text-sm opacity-90 text-gray-200 dark:text-gray-300'>Top Gadgets</p>
                                <h4 className='text-lg md:text-xl font-semibold mt-2 text-white'>
                                    Classic iPhone 16 <br /> Pro Max
                                </h4>
                                <div className="flex mt-3 gap-3 items-center">
                                    <span className="text-white text-xl md:text-2xl font-bold">$45</span>
                                    <span className="text-gray-300 dark:text-gray-400 line-through text-lg">$60</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Big Discount Card */}
                    <div className="relative text-white flex flex-col justify-center items-center text-center py-10 md:py-20 rounded-lg w-full lg:w-[50%] h-[40vh] md:h-[50vh] overflow-hidden group">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-110"
                            style={{
                                backgroundImage: 'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
                            }}
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-70" />

                        {/* Content */}
                        <div className="relative z-10 px-4">
                            <h2 className='text-2xl md:text-3xl font-bold leading-tight text-white'>
                                Big Discount, Bigger <br /> Savings
                            </h2>
                            <p className="text-xs md:text-sm mt-3 opacity-90 max-w-md mx-auto text-gray-200 dark:text-gray-300">
                                Up to 70% OFF on Fashion, Tech, Home Essentials & More – <br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>Shop Now Before It's Gone!
                            </p>
                        </div>

                        {/* Arrow Button */}
                        <Link to={"#"} className="inline-block mt-6 lg:mt-0 lg:absolute lg:bottom-10 lg:right-10 ">
                            <div className="border-2 border-white dark:border-gray-200 rounded-full p-3 hover:bg-white dark:hover:bg-gray-200 hover:text-blue-500 dark:hover:text-blue-600 transition-all duration-300 transform -rotate-45 hover:scale-110">
                                <ArrowRightIcon className="w-5 h-5" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>


            {/* Explore All Section */}
            <section className="py-12 sm:py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                    <div className="flex justify-between">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center sm:text-left">Explore All Products</h2>
                        <Link to={"#"}>
                            <p className='h-fit py-1 px-2 rounded-lg border dark:text-white dark:border-gray-200 border-gray-500'>See more</p>
                        </Link>
                    </div>
                    <ProductCard1 products={products} />
                </div>
            </section>
            <ReviewsSection />
            <FAQSection />
        </div>
    );
}

export default Home;