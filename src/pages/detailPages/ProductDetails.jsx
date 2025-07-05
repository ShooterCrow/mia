import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Share2, Star, MapPin, Clock, User, MessageCircle } from 'lucide-react';

function ProductDetails() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const images = [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'
  ];

  const relatedProperties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      title: 'Single room and Parlour',
      price: '$25000'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop',
      title: 'Single room and Parlour',
      price: '$28000'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
      title: 'Single room and Parlour',
      price: '$30000'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
      title: 'Single room and Parlour',
      price: '$32000'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300 cursor-pointer" />
              <span className="ml-2 text-lg font-semibold text-gray-800 dark:text-gray-100">Property Details</span>
            </div>
            <div className="flex items-center space-x-4">
              <Share2 className="h-5 w-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
              <Heart 
                className={`h-5 w-5 cursor-pointer ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => setIsLiked(!isLiked)}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2">
            {/* Main Image Gallery */}
            <div className="relative mb-6">
              <div className="aspect-w-16 aspect-h-10 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={images[currentImageIndex]} 
                  alt="Property main view"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-8">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={`aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer ${
                    index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`Property view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Property Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              2 Bedroom self contain at ikoyi Alaba Lagos, Nigeria
            </h1>

            {/* Description */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Description</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                This is a well-fitted and spacious two-bedroom self-contained apartment in Ikoyi, Lagos, Nigeria. The property is well-positioned in a residential area with good access to amenities such as schools, hospitals, and shopping centers. The apartment features modern fittings, adequate parking space, and a peaceful environment suitable for families and young professionals. The property offers great value for money with its strategic location and proximity to major business districts in Lagos.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                Located in the heart of Ikoyi, this property provides easy access to Victoria Island, Lagos Island, and other key areas of Lagos. The neighborhood is known for its security, infrastructure, and proximity to recreational facilities. This is an ideal choice for those seeking comfortable living in one of Lagos' most prestigious areas.
              </p>
            </div>

            {/* Property Details */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Property Details</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Condition</span>
                  <p className="font-medium text-gray-900 dark:text-gray-100">New</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Size</span>
                  <p className="font-medium text-gray-900 dark:text-gray-100">1000 sq ft (93 m²)</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Gross Area</span>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Fully fitted</p>
                </div>
              </div>
            </div>

            {/* Agent Information */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Agent Information</h2>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Milan Store</span>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Agent Name</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Opening Hours</span>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Mon-Fri: 9AM-6PM</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Contact</span>
                  <p className="font-medium text-gray-900 dark:text-gray-100">+234 123 456 7890</p>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Leave a comment</h2>
              <textarea 
                placeholder="Your comment here..."
                className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows="4"
              />
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                Post comment
              </button>
            </div>
          </div>

          {/* Right Column - Price and Related Properties */}
          <div className="lg:col-span-1">
            {/* Price Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">$35000</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">Listed Price $35k / 1yr</div>
              
              {/* Agent Profile */}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mr-3">
                  <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-gray-100">Sanju Mukhtar</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Agent</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">5.0 (12 reviews)</span>
              </div>

              {/* Contact Button */}
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium transition-colors mb-4">
                Contact Agent
              </button>

              {/* Safety Tips */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Safety Tips</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Always verify property ownership</li>
                  <li>• Meet in person before making payments</li>
                  <li>• Use secure payment methods</li>
                  <li>• Trust your instincts about the property</li>
                </ul>
              </div>
            </div>

            {/* Related Properties */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Related Properties</h2>
              <div className="space-y-4">
                {relatedProperties.map((property) => (
                  <div key={property.id} className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer">
                    <div className="w-20 h-16 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={property.image} 
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm truncate">{property.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{property.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails