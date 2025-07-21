import React, { useState } from 'react';

const ProductUpload = () => {
  const [currentStep, setCurrentStep] = useState('check-first-time');
  const [isFirstTime, setIsFirstTime] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    subCategory: '',
    condition: 'New',
    price: '',
    specification: '',
    location: '',
    phoneNumber: '',
    email: '',
    selectedStores: [],
    isFeatured: false
  });

  const categories = [
    { id: 'vehicle', label: 'Vehicle', image: '🚗' },
    { id: 'properties', label: 'Properties', image: '🏠' },
    { id: 'gadgets', label: 'Gadgets', image: '📱' },
    { id: 'electronics', label: 'Electronics', image: '💻' },
    { id: 'home-appliances', label: 'Home Appliances', image: '🏠' },
    { id: 'health-beauty', label: 'Health & Beauty', image: '💄' },
    { id: 'fashion', label: 'Fashion', image: '👔' },
    { id: 'sports-outdoors', label: 'Sports & Outdoors', image: '⚽' },
    { id: 'animals-pets', label: 'Animals & Pets', image: '🐕' },
    { id: 'agriculture-food', label: 'Agriculture & Food', image: '🌾' },
    { id: 'equipments-tools', label: 'Equipments & Tools', image: '🔧' },
    { id: 'repair-construction', label: 'Repair & Construction', image: '🏗️' }
  ];

  const subCategories = {
    vehicle: ['Cars', 'Buses & Micro buses', 'Heavy Equipment', 'Motorcycles & Scooters', 'Truck & Trailers', 'Automotive', 'Watercraft & Boats', 'Vehicle Parts & Accessories'],
    properties: ['Houses', 'Apartments', 'Land', 'Commercial Properties', 'Vacation Rentals'],
    gadgets: ['Smartphones', 'Tablets', 'Smartwatches', 'Accessories', 'Gaming Devices'],
    electronics: ['Laptops', 'Desktop Computers', 'TVs', 'Audio Systems', 'Cameras'],
    'home-appliances': ['Kitchen Appliances', 'Cleaning Equipment', 'HVAC', 'Lighting'],
    'health-beauty': ['Skincare', 'Makeup', 'Hair Care', 'Health Supplements', 'Fitness Equipment'],
    fashion: ['Clothing', 'Shoes', 'Accessories', 'Bags', 'Jewelry'],
    'sports-outdoors': ['Exercise Equipment', 'Outdoor Gear', 'Sports Equipment', 'Bicycles'],
    'animals-pets': ['Pet Food', 'Pet Accessories', 'Pet Care', 'Live Animals'],
    'agriculture-food': ['Fresh Produce', 'Farm Equipment', 'Seeds', 'Food Products'],
    'equipments-tools': ['Power Tools', 'Hand Tools', 'Industrial Equipment', 'Machinery'],
    'repair-construction': ['Building Materials', 'Construction Tools', 'Repair Services', 'Hardware']
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCategorySelect = (categoryId) => {
    setFormData(prev => ({
      ...prev,
      category: categoryId,
      subCategory: [] // Reset subcategory when category changes
    }));
  };

  const handleSubCategorySelect = (subCat) => {
    const currentSubs = Array.isArray(formData.subCategory) ? formData.subCategory : [];
    if (currentSubs.includes(subCat)) {
      setFormData(prev => ({
        ...prev,
        subCategory: currentSubs.filter(sub => sub !== subCat)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        subCategory: [...currentSubs, subCat]
      }));
    }
  };

  const renderFirstTimeCheck = () => (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to MIA Stores
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Hi Maxwell! Is this your first time adding a product or listing an item? Let us know if you need any help getting started
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => {
              setIsFirstTime(false);
              setCurrentStep('product-form');
            }}
            className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-w-[120px]"
          >
            No
          </button>
          <button
            onClick={() => {
              setIsFirstTime(true);
              setCurrentStep('welcome-1');
            }}
            className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors min-w-[120px]"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );

  const renderWelcomeScreen1 = () => (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to MIA Stores
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Great then follow these steps to upload your product successfully
        </p>
        
        <div className="text-left max-w-md mx-auto mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Steps</h2>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">Select Category of your preferred item/listing</p>
            <p className="text-gray-700 dark:text-gray-300">Select sub category of your preferred item/listing</p>
            <p className="text-gray-700 dark:text-gray-300">Proceed to the next page and provide the required informations needed</p>
            <p className="text-gray-700 dark:text-gray-300">Choose to create a promotional Ad for your item/listing</p>
            <p className="text-gray-700 dark:text-gray-300">Proceed to making sure all details are filled</p>
            <p className="text-gray-700 dark:text-gray-300">Upload your Product to the public</p>
          </div>
        </div>

        <button
          onClick={() => setCurrentStep('product-form')}
          className="w-full max-w-sm bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors text-lg font-medium"
        >
          Proceed
        </button>
      </div>
    </div>
  );

  const renderProductForm = () => (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Add New Product</h1>
            <p className="text-gray-600 dark:text-gray-400">Create a new listing for your product</p>
          </div>

          <div className="space-y-8">
            {/* Product Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Product Details</h2>
              
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Enter product title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                <textarea
                  placeholder="Describe your product in detail..."
                  rows="4"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
            </div>

            {/* Category Selection */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`relative cursor-pointer rounded-lg overflow-hidden aspect-square flex flex-col items-center justify-center p-4 border-2 transition-all ${
                      formData.category === cat.id
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    } bg-gray-100 dark:bg-gray-700`}
                  >
                    <div className="text-2xl mb-2">{cat.image}</div>
                    <span className="text-xs font-medium text-center text-gray-700 dark:text-gray-300 leading-tight">
                      {cat.label}
                    </span>
                    <input
                      type="radio"
                      name="category"
                      checked={formData.category === cat.id}
                      onChange={() => handleCategorySelect(cat.id)}
                      className="absolute top-2 left-2 w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sub Category */}
            {formData.category && subCategories[formData.category] && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Select Sub Category</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {subCategories[formData.category].map((subCat) => (
                    <label key={subCat} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <input
                        type="checkbox"
                        name="subCategory"
                        value={subCat}
                        checked={formData.subCategory.includes(subCat)}
                        onChange={(e) => {
                          const value = e.target.value;
                          const currentSubs = Array.isArray(formData.subCategory) ? formData.subCategory : [];
                          if (e.target.checked) {
                            handleInputChange('subCategory', [...currentSubs, value]);
                          } else {
                            handleInputChange('subCategory', currentSubs.filter(sub => sub !== value));
                          }
                        }}
                        className="w-4 h-4 text-red-600 border-gray-300 dark:border-gray-500 rounded focus:ring-red-500 focus:ring-2"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{subCat}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Condition */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Condition</h2>
              <select
                value={formData.condition}
                onChange={(e) => handleInputChange('condition', e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="New">New</option>
                <option value="Like New">Like New</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Price</h2>
              <input
                type="number"
                placeholder="0.00"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={(e) => handleInputChange('price', e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            {/* Specification */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Specification</h2>
              <textarea
                placeholder="Example product Brand, type, colour, grade..."
                rows="3"
                value={formData.specification}
                onChange={(e) => handleInputChange('specification', e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
              
              <div className="space-y-4">
                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="City, State, Country"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4456-754"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="sarahjohn77@gmail.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Select Store */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Select Store</h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">/Optional</span>
              </div>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.selectedStores.includes('shoes-wholesale')}
                    onChange={(e) => {
                      const storeId = 'shoes-wholesale';
                      const currentStores = formData.selectedStores || [];
                      if (e.target.checked) {
                        handleInputChange('selectedStores', [...currentStores, storeId]);
                      } else {
                        handleInputChange('selectedStores', currentStores.filter(id => id !== storeId));
                      }
                    }}
                    className="w-4 h-4 text-red-600 border-gray-300 dark:border-gray-500 rounded focus:ring-red-500 focus:ring-2"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Shoes Wholesale distribution</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.selectedStores.includes('malikka-fashion')}
                    onChange={(e) => {
                      const storeId = 'malikka-fashion';
                      const currentStores = formData.selectedStores || [];
                      if (e.target.checked) {
                        handleInputChange('selectedStores', [...currentStores, storeId]);
                      } else {
                        handleInputChange('selectedStores', currentStores.filter(id => id !== storeId));
                      }
                    }}
                    className="w-4 h-4 text-red-600 border-gray-300 dark:border-gray-500 rounded focus:ring-red-500 focus:ring-2"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Malikka Fashion Accessories Store</span>
                </label>
              </div>
            </div>

            {/* Promotion Option */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Promotion Option</h2>
              
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isFeatured}
                  onChange={(e) => handleInputChange('isFeatured', e.target.checked)}
                  className="w-4 h-4 text-red-600 border-gray-300 dark:border-gray-500 rounded focus:ring-red-500 focus:ring-2 mt-1"
                />
                <div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Make this a featured listing (+$5)</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">featured listing appear at the top of the search result</p>
                </div>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Form submitted:', formData);
                }}
                className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render appropriate screen based on current step
  switch (currentStep) {
    case 'check-first-time':
      return renderFirstTimeCheck();
    case 'welcome-1':
      return renderWelcomeScreen1();
    case 'product-form':
    default:
      return renderProductForm();
  }
};

export default ProductUpload;