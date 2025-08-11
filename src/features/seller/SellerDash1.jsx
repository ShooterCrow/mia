import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  DollarSign, 
  ShoppingCart, 
  Package, 
  Star, 
  Plus, 
  MessageCircle, 
  BarChart3, 
  TrendingUp,
  Clock,
  Gift,
  MessageSquare,
  Eye,
  ChevronDown
} from 'lucide-react';

const SellerDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showingData, setShowingData] = useState(true);

  const toggleData = () => {
    setShowingData(!showingData);
  };

  const stats = showingData ? {
    revenue: '$33,000',
    revenueChange: '+12.5% from last month',
    orders: '142',
    ordersChange: '+12.6% from last month',
    products: '28',
    rating: '4.3',
    ratingChange: '+12.5% from last month'
  } : {
    revenue: '0',
    revenueChange: '',
    orders: '0',
    ordersChange: '',
    products: '0',
    rating: '0',
    ratingChange: ''
  };

  const topProducts = [
    { rank: 1, name: 'Wireless Headphones', views: '293K Views', price: '$200', badge: 'Bestseller', badgeColor: 'bg-gray-100 text-gray-800' },
    { rank: 2, name: 'Bluetooth Speaker', views: '700 Views', price: '$300', badge: 'Trending', badgeColor: 'bg-yellow-100 text-yellow-800' },
    { rank: 3, name: 'Sleeveless Cotton Shirt', views: '384 Views', price: '$200', badge: 'Trending', badgeColor: 'bg-green-100 text-green-800' },
    { rank: 4, name: 'Apple Macbook Pro Max', views: '100 Views', price: '$500', badge: 'Trending', badgeColor: 'bg-blue-100 text-blue-800' }
  ];

  const recentActivities = [
    { type: 'message', icon: MessageSquare, text: 'New message about the Wireless Headphones', time: '24 hours ago', color: 'text-pink-500' },
    { type: 'view', icon: Eye, text: 'Your Product Received 12 Views', time: '24 hours ago', color: 'text-yellow-500' },
    { type: 'inquiry', icon: MessageCircle, text: 'New Inquiry for Bluetooth Speaker', time: '24 hours ago', color: 'text-blue-500' },
    { type: 'message', icon: MessageSquare, text: 'New message about the Wireless Headphones', time: '24 hours ago', color: 'text-pink-500' },
    { type: 'view', icon: Eye, text: 'Your Product Received 12 Views', time: '24 hours ago', color: 'text-yellow-500' }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.revenue}</p>
                {stats.revenueChange && (
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {stats.revenueChange}
                  </p>
                )}
              </div>
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.orders}</p>
                {stats.ordersChange && (
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {stats.ordersChange}
                  </p>
                )}
              </div>
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Product Listed</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.products}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Needs Review</p>
              </div>
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Rating</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.rating}</p>
                {stats.ratingChange && (
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {stats.ratingChange}
                  </p>
                )}
              </div>
              <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
                <Plus className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">Add products</p>
              </button>

              <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors relative">
                <MessageCircle className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">View Messages</p>
                {showingData && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    3
                  </span>
                )}
              </button>

              <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <Gift className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">Promote Product</p>
              </button>

              <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <BarChart3 className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">View Analytics</p>
              </button>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-gray-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
                </div>
                
                {!showingData ? (
                  <div className="text-center py-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-12 h-12 text-blue-500" />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Looks like you haven't done anything here yet. Once you start exploring, your top performing products will show up here for easy reference.
                    </p>
                    <button 
                      onClick={toggleData}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Load Sample Data
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-700`}>
                          <activity.icon className={`w-4 h-4 ${activity.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900 dark:text-white">{activity.text}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top Performing Products */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Top Performing Product</h3>
                
                {!showingData ? (
                  <div className="text-center py-8">
                    <div className="w-24 h-24 mx-auto mb-4">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 3h18v18H3zM9 9l6 6M15 9l-6 6'/%3E%3C/svg%3E" alt="No data" className="w-full h-full" />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Looks like you haven't done anything here yet. Once you start exploring, your top performing products will show up here for easy reference.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {topProducts.map((product) => (
                      <div key={product.rank} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <span className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded text-sm font-medium flex items-center justify-center text-gray-700 dark:text-gray-300">
                            {product.rank}
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">{product.name}</h4>
                            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                              <span>{product.views}</span>
                              <span>•</span>
                              <span>{product.price}</span>
                            </div>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${product.badgeColor}`}>
                          {product.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Views & Messages Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Views & Messages overtime</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">This Month</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                
                <div className="relative h-64">
                  {!showingData ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">No data available</p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-full">
                      {/* Chart Background */}
                      <div className="absolute inset-0 flex items-end justify-center space-x-4">
                        {/* Simulated chart bars */}
                        <div className="flex items-end space-x-2 h-full w-full">
                          <div className="flex-1 flex items-end">
                            <div className="w-full bg-red-400 rounded-t" style={{height: '20%'}}></div>
                          </div>
                          <div className="flex-1 flex items-end">
                            <div className="w-full bg-red-400 rounded-t" style={{height: '30%'}}></div>
                          </div>
                          <div className="flex-1 flex items-end">
                            <div className="w-full bg-red-400 rounded-t" style={{height: '25%'}}></div>
                          </div>
                          <div className="flex-1 flex items-end">
                            <div className="w-full bg-red-400 rounded-t" style={{height: '60%'}}></div>
                          </div>
                          <div className="flex-1 flex items-end">
                            <div className="w-full bg-red-500 rounded-t" style={{height: '80%'}}></div>
                          </div>
                          <div className="flex-1 flex items-end">
                            <div className="w-full bg-red-400 rounded-t" style={{height: '40%'}}></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Chart Labels */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                        <span>20</span>
                        <span>22</span>
                        <span>24</span>
                        <span>26</span>
                        <span>28</span>
                        <span>30</span>
                      </div>
                      
                      {/* Legend */}
                      <div className="absolute top-4 right-4 bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm border border-gray-200 dark:border-gray-600">
                        <div className="flex items-center space-x-2 text-xs">
                          <div className="w-3 h-3 bg-red-500 rounded"></div>
                          <span className="text-gray-700 dark:text-gray-300">May</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;