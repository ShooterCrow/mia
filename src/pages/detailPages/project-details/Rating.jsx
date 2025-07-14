import React, { useState } from 'react';
import { Star } from 'lucide-react';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (starIndex) => {
    setRating(starIndex);
  };

  const handleStarHover = (starIndex) => {
    setHoverRating(starIndex);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const handlePostComment = () => {
    if (rating > 0) {
      alert(`You rated this product ${rating} out of 5 stars!`);
    } else {
      alert('Please select a rating before posting your comment.');
    }
  };

  return (
    <div className="max-w-md pt-6">
      <h3 className="text-lg font-medium mb-4">
        Help leave a rating for this product
      </h3>
      
      {/* Star Rating */}
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => {
          const isActive = star <= (hoverRating || rating);
          return (
            <button
              key={star}
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => handleStarHover(star)}
              onMouseLeave={handleStarLeave}
              className="p-1 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 rounded"
              aria-label={`Rate ${star} out of 5 stars`}
            >
              <Star
                size={24}
                className={`transition-colors duration-200 ${
                  isActive
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-300 text-gray-300 hover:fill-yellow-200 hover:text-yellow-200'
                }`}
              />
            </button>
          );
        })}
      </div>      
      
      {/* Rating Display */}
      {rating > 0 && (
        <div className="mt-5 text-sm">
          Current rating: {rating} out of 5 stars
        </div>
      )}
    </div>
  );
};

export default Rating;