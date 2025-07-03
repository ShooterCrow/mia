import React, { useState } from 'react';
import { Mail, Twitter, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router';

const Footer = () => {
  const [email, setEmail] = useState('');
  const location = useLocation()

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className={`${location.pathname.includes("dashboard") && "hidden"} relative bg-black text-white overflow-hidden pt-5`} >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&h=800&fit=crop')`
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-8 lg:pb-12">
          <div className="max-w-7xl mx-auto">
            {/* Desktop Newsletter Layout */}
            <div className="hidden lg:flex justify-between items-center">
              <div className="flex-1 max-w-md">
                <h2 className="text-3xl font-bold mb-2">
                  Stay in the know with our<br />
                  exclusive updates and offers.
                </h2>
              </div>
              <div className="flex-1 max-w-md ml-8">
                <div className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    onClick={handleSubscribe}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-3xl transition-colors duration-200"
                  >
                    Subscribe to Newsletter
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Newsletter Layout */}
            <div className="lg:hidden text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Stay in the know with our<br />
                exclusive updates and offers.
              </h2>
              <div className="max-w-md mx-auto space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-20">
          <div className="max-w-7xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-5 gap-12">
                {/* Brand Description */}
                <div className="col-span-1">
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    We have clothes that suits your style and which you're proud to wear. From women to men.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <Twitter className="w-4 h-4 text-black" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <Facebook className="w-4 h-4 text-black" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <Instagram className="w-4 h-4 text-black" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <ArrowRight className="w-4 h-4 text-black" />
                    </a>
                  </div>
                </div>

                {/* Company */}
                <div>
                  <h3 className="text-white font-semibold text-lg mb-6 tracking-wider">COMPANY</h3>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Features</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Works</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Career</a></li>
                  </ul>
                </div>

                {/* Help */}
                <div>
                  <h3 className="text-white font-semibold text-lg mb-6 tracking-wider">HELP</h3>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Customer Support</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Delivery Details</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Terms & Conditions</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                  </ul>
                </div>

                {/* FAQ */}
                <div>
                  <h3 className="text-white font-semibold text-lg mb-6 tracking-wider">FAQ</h3>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Account</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Manage Deliveries</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Orders</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Payments</a></li>
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="text-white font-semibold text-lg mb-6 tracking-wider">RESOURCES</h3>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Free eBooks</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Development Tutorial</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">How to - Blog</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Youtube Playlist</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
              {/* Brand Description */}
              <div className="text-center mb-8">
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  We have clothes that suits your style and which you're proud to wear. From women to men.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Twitter className="w-4 h-4 text-black" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Facebook className="w-4 h-4 text-black" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Instagram className="w-4 h-4 text-black" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <ArrowRight className="w-4 h-4 text-black" />
                  </a>
                </div>
              </div>

              {/* Links Grid */}
              <div className="grid grid-cols-2 gap-8">
                {/* Company & Help */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-white font-semibold text-base mb-4 tracking-wider">COMPANY</h3>
                    <ul className="space-y-3">
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Features</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Works</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Career</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-base mb-4 tracking-wider">HELP</h3>
                    <ul className="space-y-3">
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Customer Support</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Delivery Details</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Terms & Conditions</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>

                {/* FAQ & Resources */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-white font-semibold text-base mb-4 tracking-wider">FAQ</h3>
                    <ul className="space-y-3">
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Account</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Manage Deliveries</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Orders</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Payments</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-base mb-4 tracking-wider">RESOURCES</h3>
                    <ul className="space-y-3">
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Free eBooks</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Development Tutorial</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">How to - Blog</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Youtube Playlist</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">2025. All Rights Reserved</p>
            
            {/* Payment Methods */}
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded px-2 py-1 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs">VISA</span>
              </div>
              <div className="bg-white rounded px-2 py-1 flex items-center justify-center">
                <div className="flex space-x-1">
                  <div className="w-3 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              <div className="bg-white rounded px-2 py-1 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs">PayPal</span>
              </div>
              <div className="bg-white rounded px-2 py-1 flex items-center justify-center">
                <span className="text-black font-bold text-xs">ePay</span>
              </div>
              <div className="bg-white rounded px-2 py-1 flex items-center justify-center">
                <span className="text-black font-bold text-xs">G Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;