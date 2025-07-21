import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Filter, X } from "lucide-react";
import { sampleCategoryData } from "../constant/sampleCategoryData";
import FilterContent from "../components/FilterContent";
import ProductCard1List from "../components/cards/productsCard1/ProductCard1List";

const CategoryPage = () => {
  const { category: categoryName } = useParams();
  const [slug, setSlug] = useState("vehicles");
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [showMoreSubcategories, setShowMoreSubcategories] = useState(false);
  const [location, setLocation] = useState("All country");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [verifiedFilter, setVerifiedFilter] = useState("all");
  const [discountFilter, setDiscountFilter] = useState("all");

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

  const urlSlugToCategoryValue = (urlSlug) => {
    if (!urlSlug) return "properties";
    const categoryMap = {
      "home-furniture": "homeFurniture",
      "health-and-beauty": "healthBeauty",
      "cloth-and-fashion": "fashion",
      "sports-arts": "sportsArts",
      "babies-kids": "babiesKids",
      "animals-pets": "animalsPets",
      "agriculture-food": "agricultureFood",
      "equipment-tools": "equipmentTools",
      "repair-construction": "repairConstruction",
    };
    return categoryMap[urlSlug] || urlSlug;
  };

  const categoryValueToUrlSlug = (categoryValue) => {
    const reverseMap = {
      homeFurniture: "home-furniture",
      healthBeauty: "health-and-beauty",
      fashion: "cloth-and-fashion",
      sportsArts: "sports-arts",
      babiesKids: "babies-kids",
      animalsPets: "animals-pets",
      agricultureFood: "agriculture-food",
      equipmentTools: "equipment-tools",
      repairConstruction: "repair-construction",
    };
    return reverseMap[categoryValue] || categoryValue;
  };

  useEffect(() => {
    if (categoryName) {
      const mappedSlug = urlSlugToCategoryValue(categoryName);
      setSlug(mappedSlug);
      setSelectedSubcategories([]);
      setPriceRange({ min: "", max: "" });
      setLocation("All country");
      setVerifiedFilter("all");
      setDiscountFilter("all");
    }
  }, [categoryName]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://restcountries.com/v3.1/region/africa");
        if (!response.ok) throw new Error("Failed to fetch African countries");
        const data = await response.json();
        const countryNames = data.map((c) => c.name.common).sort();
        setCountries(countryNames);
        setError(null);
      } catch (err) {
        setError("Unable to load countries. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const handleRetry = () => {
    setError(null);
    fetchCountries();
  };

  const currentCategory = sampleCategoryData[slug] || {
    name: slug.replace(/-/g, " ").toUpperCase(),
    subcategories: [],
    products: [],
  };

  const filteredProducts = currentCategory.products.filter((product) => {
    const matchesSubcategory =
      selectedSubcategories.length === 0 ||
      selectedSubcategories.includes(product.subcategory);

    const matchesVerified =
      verifiedFilter === "all" ||
      (verifiedFilter === "verified" && product.isVerified) ||
      (verifiedFilter === "unverified" && !product.isVerified);

    const matchesDiscount =
      discountFilter === "all" ||
      (discountFilter === "withDiscount" && product.price < 1000) ||
      (discountFilter === "withoutDiscount" && product.price >= 1000);

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
    setVerifiedFilter("all");
    setDiscountFilter("all");
    setIsMobileFilterOpen(false);
  };

  const handleCategoryChange = (newCategoryValue) => {
    setSlug(newCategoryValue);
    const newUrlSlug = categoryValueToUrlSlug(newCategoryValue);
    window.history.pushState({}, "", `/category/${newUrlSlug}`);
    clearFilters();
  };

  return (
    <div className="min-h-screen font-sans">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {currentCategory.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
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
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
              <FilterContent
                slug={slug}
                setSlug={setSlug}
                categories={categories}
                currentCategory={currentCategory}
                selectedSubcategories={selectedSubcategories}
                setSelectedSubcategories={setSelectedSubcategories}
                showMoreSubcategories={showMoreSubcategories}
                setShowMoreSubcategories={setShowMoreSubcategories}
                location={location}
                setLocation={setLocation}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                loading={loading}
                error={error}
                countries={countries}
                handleRetry={handleRetry}
                handleCategoryChange={handleCategoryChange}
                handleSubcategoryChange={handleSubcategoryChange}
                verifiedFilter={verifiedFilter}
                setVerifiedFilter={setVerifiedFilter}
                discountFilter={discountFilter}
                setDiscountFilter={setDiscountFilter}
                clearFilters={clearFilters}
                setIsMobileFilterOpen={setIsMobileFilterOpen}
              />
            </div>
          </div>

          {/* Mobile Sidebar Overlay */}
          {isMobileFilterOpen && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              <div
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={() => setIsMobileFilterOpen(false)}
              />
              <div className="relative bg-white dark:bg-gray-800 w-full max-w-sm ml-auto h-full shadow-sm">
                <div className="p-6">
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
                  <FilterContent
                    slug={slug}
                    setSlug={setSlug}
                    categories={categories}
                    currentCategory={currentCategory}
                    selectedSubcategories={selectedSubcategories}
                    setSelectedSubcategories={setSelectedSubcategories}
                    showMoreSubcategories={showMoreSubcategories}
                    setShowMoreSubcategories={setShowMoreSubcategories}
                    location={location}
                    setLocation={setLocation}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    loading={loading}
                    error={error}
                    countries={countries}
                    handleRetry={handleRetry}
                    handleCategoryChange={handleCategoryChange}
                    handleSubcategoryChange={handleSubcategoryChange}
                    verifiedFilter={verifiedFilter}
                    setVerifiedFilter={setVerifiedFilter}
                    discountFilter={discountFilter}
                    setDiscountFilter={setDiscountFilter}
                    clearFilters={clearFilters}
                    setIsMobileFilterOpen={setIsMobileFilterOpen}
                  />
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
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <ProductCard1List
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