import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import ProductCard1 from "../components/cards/ProductCard1";
import { sampleCategoryData } from "../constant/sampleCategoryData";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [slug, setSlug] = useState("properties");
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [showMoreSubcategories, setShowMoreSubcategories] = useState(false);
  const [location, setLocation] = useState("All country");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [verifiedFilter, setVerifiedFilter] = useState('all'); // New state
  const [discountFilter, setDiscountFilter] = useState('all'); 

  const categories = [
    { value: "properties", label: "Properties" },
    { value: "vehicles", label: "Vehicles" },
    { value: "gadgets", label: "Gadgets" },
    { value: "electronics", label: "Electronics" },
    { value: "home-furniture", label: "Home Furniture & Appliances" },
    { value: "health-and-beauty", label: "Health & Beauty" },
    { value: "cloth-and-fashion", label: "Cloth & Fashion" },
    { value: "accessories", label: "Accessories" },
    { value: "supermarket", label: "Supermarket" },
    { value: "sports-arts", label: "Sports, Arts & Outdoors" },
    { value: "babies-kids", label: "Babies & Kids" },
    { value: "animals-pets", label: "Animals & Pets" },
    { value: "agriculture-food", label: "Agriculture & Food" },
    { value: "equipment-tools", label: "Equipment & Tools" },
    { value: "repair-construction", label: "Repair & Construction" },
  ];

  // Function to convert URL slug to category value
  const urlSlugToCategoryValue = (urlSlug) => {
    if (!urlSlug) return "properties";
    
    // Handle special cases for URL-friendly names
    const categoryMap = {
      "cloth-and-fashion": "fashion",
      "health-and-beauty": "healthBeauty",
      "home-furniture": "homeFurniture",
      "sports-arts": "sportsArts",
      "babies-kids": "babiesKids",
      "animals-pets": "animalsPets",
      "agriculture-food": "agricultureFood",
      "equipment-tools": "equipmentTools",
      "repair-construction": "repairConstruction",
    };

    // Check if it's a special case
    if (categoryMap[urlSlug]) {
      return categoryMap[urlSlug];
    }

    // For regular cases, just return the slug as is
    return urlSlug;
  };

  // Function to convert category value to URL slug
  const categoryValueToUrlSlug = (categoryValue) => {
    const reverseMap = {
      "fashion": "cloth-and-fashion",
      "healthBeauty": "health-and-beauty",
      "homeFurniture": "home-furniture",
      "sportsArts": "sports-arts",
      "babiesKids": "babies-kids",
      "animalsPets": "animals-pets",
      "agricultureFood": "agriculture-food",
      "equipmentTools": "equipment-tools",
      "repairConstruction": "repair-construction",
    };

    return reverseMap[categoryValue] || categoryValue;
  };

  // Update slug when URL parameter changes
  useEffect(() => {
    if (categoryName) {
      const mappedSlug = urlSlugToCategoryValue(categoryName);
      setSlug(mappedSlug);
      
      // Clear filters when category changes
      setSelectedSubcategories([]);
      setPriceRange({ min: "", max: "" });
      setLocation("All country");
       setVerifiedFilter('all');
      setDiscountFilter('all');
    }
  }, [categoryName]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://restcountries.com/v3.1/region/africa");
        if (!response.ok) throw new Error("Failed to fetch African countries");
        const data = await response.json();
        const countryNames = data.map((country) => country.name.common).sort();
        setCountries(countryNames);
      } catch (err) {
        setError("Unable to load countries. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const currentCategory = sampleCategoryData[slug] || {
    name: slug.replace("-", " ").toUpperCase(),
    subcategories: [],
    products: [],
  };

 const filteredProducts = currentCategory.products.filter((product) => {
  const matchesSubcategory =
    selectedSubcategories.length === 0 ||
    selectedSubcategories.includes(product.subcategory);
  
  // Updated logic for verified sellers
  const matchesVerified =
    verifiedFilter === 'all' ||
    (verifiedFilter === 'verified' && product.isVerified) ||
    (verifiedFilter === 'unverified' && !product.isVerified);
  
  // Updated logic for discount
  const matchesDiscount =
    discountFilter === 'all' ||
    (discountFilter === 'withDiscount' && product.price < 1000) ||
    (discountFilter === 'withoutDiscount' && product.price >= 1000);
  
  const minPrice = parseFloat(priceRange.min);
  const maxPrice = parseFloat(priceRange.max);
  const matchesPrice =
    (!isNaN(minPrice) ? product.price >= minPrice : true) &&
    (!isNaN(maxPrice) ? product.price <= maxPrice : true);
  const matchesLocation =
    location === 'All country' || product.location.includes(location);

  return (
    matchesSubcategory &&
    matchesVerified &&
    matchesDiscount &&
    matchesPrice &&
    matchesLocation
  );
});

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory)
        ? prev.filter((item) => item !== subcategory)
        : [...prev, subcategory]
    );
  };

  const clearFilters = () => {
  setSelectedSubcategories([]);
  setPriceRange({ min: '', max: '' });
  setLocation('All country');
  setVerifiedFilter('all');
  setDiscountFilter('all');
  setIsMobileFilterOpen(false);
};

  const handleCategoryChange = (newCategoryValue) => {
    setSlug(newCategoryValue);
    // Update URL to reflect the category change
    const newUrlSlug = categoryValueToUrlSlug(newCategoryValue);
    window.history.pushState({}, '', `/category/${newUrlSlug}`);
    
    // Clear filters when category changes
    clearFilters();
  };

  const handleRetry = () => {
    setError(null);
    setLoading(true);
    fetch("https://restcountries.com/v3.1/region/africa")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch African countries");
        return response.json();
      })
      .then((data) => {
        const countryNames = data.map((country) => country.name.common).sort();
        setCountries(countryNames);
        setLoading(false);
      })
      .catch((err) => {
        setError("Unable to load countries. Please try again later.");
        console.error(err);
        setLoading(false);
      });
  };

  const FilterContent = () => {
 
  const [verifiedFilter, setVerifiedFilter] = useState('all');
  const [discountFilter, setDiscountFilter] = useState('all'); 

  return (
    <div className="space-y-6">
      {/* Category Select */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Category
        </label>
        <div className="relative">
          <select
            value={slug}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 bg-red-600 text-white font-bold appearance-none dark:bg-red-700"
            aria-label="Select category"
          >
            {categories.map((category) => (
              <option
                key={category.value}
                value={category.value}
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              >
                {category.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" size={16} />
        </div>
      </div>

      {/* Subcategories */}
      {currentCategory.subcategories.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {currentCategory.name}
          </h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {(showMoreSubcategories
              ? currentCategory.subcategories
              : currentCategory.subcategories.slice(0, 5)
            ).map((subcategory) => (
              <label key={subcategory} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedSubcategories.includes(subcategory)}
                  onChange={() => handleSubcategoryChange(subcategory)}
                  className="w-4 h-4 text-red-600 border-gray-300 dark:border-gray-600 rounded focus:ring-red-500 dark:bg-gray-700"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 leading-tight">
                  {subcategory}
                </span>
              </label>
            ))}
          </div>
          {currentCategory.subcategories.length > 5 && (
            <button
              onClick={() => setShowMoreSubcategories(!showMoreSubcategories)}
              className="text-red-600 dark:text-red-400 text-sm hover:text-red-700 dark:hover:text-red-300 transition-colors"
            >
              {showMoreSubcategories ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      )}

      {/* Location */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Location</h3>
        {loading ? (
          <p className="text-gray-500 dark:text-gray-400 text-sm">Loading countries...</p>
        ) : error ? (
          <div className="space-y-2">
            <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>
            <button
              onClick={handleRetry}
              className="text-red-600 dark:text-red-400 text-sm hover:text-red-700 dark:hover:text-red-300"
            >
              Retry
            </button>
          </div>
        ) : (
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700"
            aria-label="Select location"
          >
            <option value="All country">All country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Price</h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange((prev) => ({
                ...prev,
                min: e.target.value,
              }))
            }
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700"
            aria-label="Minimum price"
          />
          <input
            type="number"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange((prev) => ({
                ...prev,
                max: e.target.value,
              }))
            }
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700"
            aria-label="Maximum price"
          />
        </div>
      </div>

      {/* Verified Sellers */}
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h3 className="font-semibold text-gray-800 mb-3">Verified Sellers</h3>
        <label className="flex items-center">
          <input
            type="radio"
            name="verifiedFilter"
            checked={verifiedFilter === 'all'}
            onChange={() => setVerifiedFilter('all')}
            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
          />
          <span className="ml-2 text-sm text-gray-700">Show all</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="verifiedFilter"
            checked={verifiedFilter === 'verified'}
            onChange={() => setVerifiedFilter('verified')}
            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
          />
          <span className="ml-2 text-sm text-gray-700">Verified only</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="verifiedFilter"
            checked={verifiedFilter === 'unverified'}
            onChange={() => setVerifiedFilter('unverified')}
            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
          />
          <span className="ml-2 text-sm text-gray-700">Unverified sellers</span>
        </label>
      </div>

      {/* Discount */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Discount</h3>
        <label className="flex items-center">
          <input
            type="radio"
            name="discountFilter"
            checked={discountFilter === 'all'}
            onChange={() => setDiscountFilter('all')}
            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
          />
          <span className="ml-2 text-sm text-gray-700">Show all</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="discountFilter"
            checked={discountFilter === 'withDiscount'}
            onChange={() => setDiscountFilter('withDiscount')}
            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
          />
          <span className="ml-2 text-sm text-gray-700">With discount</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="discountFilter"
            checked={discountFilter === 'withoutDiscount'}
            onChange={() => setDiscountFilter('withoutDiscount')}
            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
          />
          <span className="ml-2 text-sm text-gray-700">Without discount</span>
        </label>
      </div>

      {/* Clear Filters Button */}
      <div className="flex justify-between pt-4">
        <button
          onClick={() => {
            clearFilters();
            setVerifiedFilter('all');
            setDiscountFilter('all');
          }}
          className="font-medium text-sm hover:text-red-700 transition-colors"
        >
          Clear
        </button>
        <button
          onClick={() => setIsMobileFilterOpen(false)}
          className="text-red-600 font-medium text-sm hover:text-red-700 transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );
};

  // Show loading state while determining category from URL
  if (categoryName && !categories.find(cat => categoryValueToUrlSlug(cat.value) === categoryName)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Category Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The category "{categoryName}" does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            {categories.find(cat => cat.value === slug)?.label || currentCategory.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Filter size={16} />
              <span className="text-sm font-medium">Filters</span>
            </button>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
              <FilterContent />
            </div>
          </div>

          {/* Mobile Sidebar Overlay */}
          {isMobileFilterOpen && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={() => setIsMobileFilterOpen(false)}
              />
              
              {/* Sidebar */}
              <div className="relative bg-white dark:bg-gray-800 w-full max-w-sm ml-auto h-full overflow-y-auto">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Filters
                    </h2>
                    <button
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <X size={20} className="text-gray-500 dark:text-gray-400" />
                    </button>
                  </div>
                  
                  {/* Filter Content */}
                  <FilterContent />
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="lg:w-3/4 w-full">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No products found matching your criteria.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <ProductCard1
                products={filteredProducts.map((product) => ({
                  ...product,
                  price: `${product.price.toFixed(2)}`,
                }))}
                showTwoOnMobile={false}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;