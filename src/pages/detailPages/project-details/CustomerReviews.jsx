import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      image: "/api/placeholder/150/150",
      imageAlt: "Clothing hangers with green garments",
      rating: 4,
      name: "Sarah Gideon",
      date: "17th February 2025",
      text: "Customer service is top-notch.* I had an issue with my payment, and the support team helped me sort it out within minutes. Super responsive and professional.",
      recommends: true
    },
    {
      id: 2,
      image: "/api/placeholder/150/150",
      imageAlt: "Blue BMW car on road",
      rating: 4,
      name: "Sarah Gideon",
      date: "17th February 2025",
      text: "Customer service is top-notch.* I had an issue with my payment, and the support team helped me sort it out within minutes. Super responsive and professional.",
      recommends: true
    },
    {
      id: 3,
      image: "/api/placeholder/150/150",
      imageAlt: "Gold iPhone",
      rating: 4,
      name: "Sarah Gideon",
      date: "12th February 2025",
      text: "Customer service is top-notch.* I had an issue with my payment, and the support team helped me sort it out within minutes. Super responsive and professional.",
      recommends: true
    },
    {
      id: 4,
      image: "/api/placeholder/150/150",
      imageAlt: "iMac computer setup",
      rating: 4,
      name: "Sarah Gideon",
      date: "12th February 2025",
      text: "Customer service is top-notch.* I had an issue with my payment, and the support team helped me sort it out within minutes. Super responsive and professional.",
      recommends: true
    },
    {
      id: 5,
      image: "/api/placeholder/150/150",
      imageAlt: "iMac computer setup",
      rating: 4,
      name: "Sarah Gideon",
      date: "17th February 2025",
      text: "Customer service is top-notch.* I had an issue with my payment, and the support team helped me sort it out within minutes. Super responsive and professional.",
      recommends: true
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={`${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
  <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-900">
    <h2 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-6">
      Reviews from customers
    </h2>

    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="flex gap-4 pb-6 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 flex items-center justify-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">Image</span>
              </div>
            </div>
          </div>

          {/* Review Content */}
          <div className="flex-1 min-w-0">
            {/* Rating and Recommendation */}
            <div className="flex items-center gap-3 mb-3">
              <StarRating rating={review.rating} />
              {review.recommends && (
                <div className="flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400">
                  <ThumbsUp size={14} />
                  <span>Recommends this product</span>
                </div>
              )}
            </div>

            {/* User Info */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-white">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span className="font-medium text-gray-800 dark:text-gray-100 text-sm">
                {review.name}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-xs">
                {review.date}
              </span>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {review.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

};

export default CustomerReviews;