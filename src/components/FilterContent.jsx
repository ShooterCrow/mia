import { ChevronDown } from "lucide-react";


const FilterContent = ({
  slug,
  setSlug,
  categories,
  currentCategory,
  selectedSubcategories,
  setSelectedSubcategories,
  showMoreSubcategories,
  setShowMoreSubcategories,
  location,
  setLocation,
  priceRange,
  setPriceRange,
  loading,
  error,
  countries,
  handleRetry,
  handleCategoryChange,
  handleSubcategoryChange,
  verifiedFilter,
  setVerifiedFilter,
  discountFilter,
  setDiscountFilter,
  clearFilters,
  setIsMobileFilterOpen,
}) => {
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
          <ChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
            size={16}
          />
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
              <label
                key={subcategory}
                className="flex items-center space-x-2 cursor-pointer"
              >
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
            {currentCategory.subcategories.length > 5 && (
              <button
                onClick={() => setShowMoreSubcategories(!showMoreSubcategories)}
                className="text-red-600 dark:text-red-400 text-sm hover:text-red-700 dark:hover:text-red-300 transition-colors"
              >
                {showMoreSubcategories ? "Show less" : "Show more"}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Location */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Location
        </h3>
        {loading ? (
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Loading countries...
          </p>
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
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Price
        </h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || (Number(value) >= 0 && !isNaN(value))) {
                setPriceRange((prev) => ({
                  ...prev,
                  min: value,
                }));
              }
            }}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700"
            aria-label="Minimum price"
            min="0"
            step="0.01"
          />
          <input
            type="number"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || (Number(value) >= 0 && !isNaN(value))) {
                setPriceRange((prev) => ({
                  ...prev,
                  max: value,
                }));
              }
            }}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700"
            aria-label="Maximum price"
            min="0"
            step="0.01"
          />
        </div>
      </div>

      {/* Verified Sellers */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Verified Sellers
        </h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="verifiedFilter"
              checked={verifiedFilter === "all"}
              onChange={() => setVerifiedFilter("all")}
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Show all
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="verifiedFilter"
              checked={verifiedFilter === "verified"}
              onChange={() => setVerifiedFilter("verified")}
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Verified only
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="verifiedFilter"
              checked={verifiedFilter === "unverified"}
              onChange={() => setVerifiedFilter("unverified")}
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Unverified sellers
            </span>
          </label>
        </div>
      </div>

      {/* Discount */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Discount
        </h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="discountFilter"
              checked={discountFilter === "all"}
              onChange={() => setDiscountFilter("all")}
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Show all
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="discountFilter"
              checked={discountFilter === "withDiscount"}
              onChange={() => setDiscountFilter("withDiscount")}
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              With discount
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="discountFilter"
              checked={discountFilter === "withoutDiscount"}
              onChange={() => setDiscountFilter("withoutDiscount")}
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Without discount
            </span>
          </label>
        </div>
      </div>

      {/* Clear Filters Button */}
      <div className="flex justify-between pt-4">
        <button
          onClick={clearFilters}
          className="font-medium text-sm text-gray-600 dark:text-gray-400 hover:text-red-700 transition-colors"
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

export default FilterContent;