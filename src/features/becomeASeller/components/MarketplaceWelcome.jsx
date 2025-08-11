import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketplaceWelcome = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Image */}
        <div
          className="absolute left-0 top-0 w-1/3 h-full bg-contain bg-no-repeat bg-left-top opacity-80"
          style={{
            backgroundImage: "url('leftimage.png')",
            backgroundSize: 'contain',
            backgroundPosition: 'left top'
          }}
        />

        {/* Right Image */}
        <div
          className="absolute right-0 top-0 w-1/3 h-full bg-contain bg-no-repeat bg-right-top opacity-80"
          style={{
            backgroundImage: "url('rightimage.png')",
            backgroundSize: 'contain',
            backgroundPosition: 'right top'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">

        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
        </div>

        {/* Welcome Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 text-center mb-4">
          Welcome to the Marketplace!
        </h1>

        {/* Congratulations Text */}
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-md">
          Congratulations, <span className="font-semibold text-gray-800 dark:text-gray-100">Sarah</span>! Your seller account for{' '}
          <span className="font-semibold text-gray-800 dark:text-gray-100">Sarah's Handmade Jewelry</span> is ready to go.
        </p>

        {/* What Happens Next Section */}
        <div className="w-full max-w-4xl mb-12">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
            What Happens Next?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Profile Step */}
            <div className="text-center">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Profile</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Personal info verified</p>
            </div>

            {/* Business Step */}
            <div className="text-center">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Business</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Store details configured</p>
            </div>

            {/* Categories Step */}
            <div className="text-center">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Categories</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">2 selected</p>
            </div>

            {/* Verification Step */}
            <div className="text-center">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Verification</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">ID verification done</p>
            </div>
          </div>
        </div>

        {/* Welcome Bonuses Section */}
        <div className="w-full max-w-4xl mb-12">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
            Welcome Bonuses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Sale Bonus */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">First Sale Bonus</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Get $5 credit on your first sale</p>
            </div>

            {/* Business Bonus */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-4">
                <Check className="w-4 h-4 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Business</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Free featured placement for your first product</p>
            </div>

            {/* Priority Support */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Priority Support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">30 days of priority customer support</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <Link to={"/seller-dashboard/profile"}>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg inline-flex items-center transition-colors">
              Go to your seller Dashboard
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </div>

        {/* Help Text */}
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          Need help? Our seller support team is available 24/7 to assist you
        </p>
      </div>

      {/* Mobile Responsive Background Images */}
      <style jsx>{`
        @media (max-width: 768px) {
          .absolute.left-0 {
            width: 40%;
            opacity: 0.4;
          }
          .absolute.right-0 {
            width: 40%;
            opacity: 0.4;
          }
        }
        
        @media (max-width: 480px) {
          .absolute.left-0 {
            width: 45%;
            opacity: 0.3;
          }
          .absolute.right-0 {
            width: 45%;
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default MarketplaceWelcome;