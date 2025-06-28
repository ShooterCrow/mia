import React, { useState } from 'react';

const Categories = ({
    categories = [],
    underline = true,
    onCategorySelect = () => { },
    selectedCategory = null,
    className = "",
    title,
    desc
}) => {
    const [selected, setSelected] = useState(selectedCategory || 0);

    const handleCategoryClick = (index, category) => {
        setSelected(index);
        onCategorySelect(category, index);
    };

    // Default categories for demo
    const defaultCategories = [
        { name: "All Products", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop&crop=center" },
        { name: "Home & Kitchen", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop&crop=center" },
        { name: "Cloth & Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=100&h=100&fit=crop&crop=center" },
        { name: "Accessories", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop&crop=center" },
        { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=100&h=100&fit=crop&crop=center" },
        { name: "Gadgets", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&h=100&fit=crop&crop=center" },
        { name: "Supermarket", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=100&h=100&fit=crop&crop=center" },
        { name: "Health & Beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop&crop=center" }
    ];

    const categoriesToUse = categories.length > 0 ? categories : defaultCategories;

    return (
        <section className={`py-5 bg-white dark:bg-gray-900 transition-colors duration-200 ${className}`}>
            <div className="w-[100%] mx-auto">
                {title &&
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{title}</h2>
                    </div>
                }
                {
                    desc &&
                    <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
                        <h2 className="text sm:text text-gray-900 dark:text-white mb-3 sm:mb-4">{desc}</h2>
                    </div>
                }
                {/* Horizontal scrollable container */}
                <div className="overflow-x-auto mx-auto pb-4 px-20">
                    <div className="flex gap-5 sm:gap-6 w-[100%] px-4 sm:px-0 justify-center">
                        {categoriesToUse.map((category, index) => (
                            <div
                                key={index}
                                className="text-center group py-2 lg:px-5 cursor-pointer flex-shrink-0"
                                onClick={() => handleCategoryClick(index, category)} >
                                {/* Circle with image and green ring */}
                                <div className="relative w-20 h-20 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-3">
                                    {/* Green ring - always visible, changes color on hover */}
                                    <div className="absolute inset-0 rounded-full ring-2 ring-green-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 group-hover:ring-red-500 transition-all duration-200">
                                        {/* Image circle */}
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Category name */}
                                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium leading-tight px-1 whitespace-nowrap">
                                    {category.name}
                                </p>

                                {/* Selection indicator line - RED for selected */}
                                {
                                    underline &&
                                    <div className={`h-0.5 mt-2 mx-auto transition-all duration-200 ${selected === index
                                        ? 'w-8 bg-red-500'
                                        : 'w-0 bg-transparent'
                                        }`}></div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Categories;