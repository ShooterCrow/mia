import React, { useState } from 'react';
import { 
  Car, 
  Headphones, 
  Home, 
  Smartphone, 
  Shirt, 
  Baby, 
  Zap,
  Heart,
  PawPrint,
  Wheat,
  Wrench,
  HardHat
} from 'lucide-react';

const ProductCategories = () => {
  const [selectedCategories, setSelectedCategories] = useState(['Electronics', 'Electronics', 'Electronics']);

  const categories = [
    { id: 'vehicles', name: 'Vehicles', icon: Car, color: 'text-red-500' },
    { id: 'gadgets', name: 'Gadgets', icon: Headphones, color: 'text-blue-500' },
    { id: 'properties', name: 'Properties', icon: Home, color: 'text-teal-500' },
    { id: 'electronic', name: 'Electronic', icon: Smartphone, color: 'text-orange-500' },
    { id: 'fashion', name: 'Fashion', icon: Shirt, color: 'text-yellow-500' },
    { id: 'babies', name: 'Babies and kids', icon: Baby, color: 'text-emerald-500' },
    { id: 'appliances', name: 'Home Appliances', icon: Zap, color: 'text-blue-600' },
    { id: 'health', name: 'Health & Beauty', icon: Heart, color: 'text-red-400' },
    { id: 'animals', name: 'Animals & Pets', icon: PawPrint, color: 'text-green-500' },
    { id: 'agriculture', name: 'Agriculture & Foods', icon: Wheat, color: 'text-amber-500' },
    { id: 'equipment', name: 'Equipment & Tools', icon: Wrench, color: 'text-purple-500' },
    { id: 'repair', name: 'Repair & Construction', icon: HardHat, color: 'text-yellow-600' }
  ];

  const toggleCategory = (categoryName) => {
    // This would handle the selection logic in a real application
    console.log('Toggled category:', categoryName);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Selected Categories Header */}
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
          Selected Categories (2/5)
        </h2>
        <div className="flex flex-wrap gap-2">
          {selectedCategories.map((category, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.id}
              className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
              onClick={() => toggleCategory(category.name)}
            >
              <input
                type="checkbox"
                className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                onChange={() => toggleCategory(category.name)}
              />
              <IconComponent className={`w-5 h-5 mr-3 ${category.color}`} />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {category.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Why Categories Matter Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
          Why Categories Matter
        </h3>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Help customers find your products easily
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Improve your store's search visibility
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Get category-specific selling tips and insights
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Connect with relevant customer segments
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCategories;