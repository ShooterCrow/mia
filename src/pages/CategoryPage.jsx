import React, { useState, useEffect } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import ProductCard1 from "../components/cards/ProductCard1";
import { sampleCategoryData } from "../constant/sampleCategoryData"; 

const CategoryPage = () => {
  const [slug, setSlug] = useState("properties");
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [location, setLocation] = useState("All country");
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);
  const [showDiscountOnly, setShowDiscountOnly] = useState(false);
  const [showMoreSubcategories, setShowMoreSubcategories] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { value: "properties", label: "Properties" },
    { value: "vehicles", label: "Vehicles" },
    { value: "gadgets", label: "Gadgets" },
    { value: "electronics", label: "Electronics" },
    { value: "homeFurniture", label: "Home Furniture & Appliances" },
    { value: "healthBeauty", label: "Health & Beauty" },
    { value: "fashion", label: "Fashion" },
    { value: "sportsArts", label: "Sports, Arts & Outdoors" },
    { value: "babiesKids", label: "Babies & Kids" },
    { value: "animalsPets", label: "Animals & Pets" },
    { value: "agricultureFood", label: "Agriculture & Food" },
    { value: "equipmentTools", label: "Equipment & Tools" },
    { value: "repairConstruction", label: "Repair & Construction" },
  ];

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
    const matchesVerified = !showVerifiedOnly || product.isVerified;
    const matchesDiscount = !showDiscountOnly || product.price < 1000;
    const minPrice = parseFloat(priceRange.min);
    const maxPrice = parseFloat(priceRange.max);
    const matchesPrice =
      (!isNaN(minPrice) ? product.price >= minPrice : true) &&
      (!isNaN(maxPrice) ? product.price <= maxPrice : true);
    const matchesLocation =
      location === "All country" || product.location.includes(location);

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
    setPriceRange({ min: "", max: "" });
    setLocation("All country");
    setShowVerifiedOnly(false);
    setShowDiscountOnly(false);
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

  return (
    <div className="min-h-screen font-sans">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white border-2 rounded-xl shadow-sm p-6 sticky top-4">
              <div className="relative mb-6">
                <select
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 bg-red-600 text-white font-bold appearance-none"
                  aria-label="Select category"
                >
                  {categories.map((category) => (
                    <option
                      key={category.value}
                      value={category.value}
                      className="bg-white text-gray-900"
                    >
                      {category.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
              </div>

              {/* Subcategories */}
              {currentCategory.subcategories.length > 0 && (
                <div className="mb-6 border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    {currentCategory.name}
                  </h3>
                  <div className="space-y-2">
                    {(showMoreSubcategories
                      ? currentCategory.subcategories
                      : currentCategory.subcategories.slice(0, 5)
                    ).map((subcategory) => (
                      <label key={subcategory} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedSubcategories.includes(subcategory)}
                          onChange={() => handleSubcategoryChange(subcategory)}
                          className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {subcategory}
                        </span>
                      </label>
                    ))}
                  </div>
                  {currentCategory.subcategories.length > 5 && (
                    <button
                      onClick={() =>
                        setShowMoreSubcategories(!showMoreSubcategories)
                      }
                      className="text-red-600 text-sm hover:text-red-700 transition-colors mt-2"
                    >
                      {showMoreSubcategories ? "Show less" : "Show more"}
                    </button>
                  )}
                </div>
              )}

              {/* Location */}
              <div className="mb-6 border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-3">Location</h3>
                {loading ? (
                  <p className="text-gray-500">Loading countries...</p>
                ) : error ? (
                  <div>
                    <p className="text-red-500">{error}</p>
                    <button
                      onClick={handleRetry}
                      className="mt-2 text-red-600 text-sm hover:text-red-700"
                    >
                      Retry
                    </button>
                  </div>
                ) : (
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700"
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
              <div className="mb-6 border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-3">Price</h3>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700"
                    aria-label="Maximum price"
                  />
                </div>
              </div>

              {/* Verified Sellers */}
              <div className="mb-6 border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Verified Sellers
                </h3>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showVerifiedOnly}
                    onChange={(e) => setShowVerifiedOnly(e.target.checked)}
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Verified only
                  </span>
                </label>
              </div>

              {/* Discount */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Discount</h3>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showDiscountOnly}
                    onChange={(e) => setShowDiscountOnly(e.target.checked)}
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Discount only
                  </span>
                </label>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={clearFilters}
                  className="text-red-600 font-medium text-sm hover:text-red-700 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
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
                  price: `$${product.price.toFixed(2)}`,
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