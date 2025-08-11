import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, Package, ShoppingCart, FileText, Search, Download, TrendingUp } from 'lucide-react';

// Sample data for charts
const salesByCountryData = [
  { name: 'USA', sales: 30, flag: '🇺🇸', growth: '+28.8%', color: '#ef4444' },
  { name: 'Nigeria', sales: 30, flag: '🇳🇬', growth: '-15.8%', color: '#ef4444' },
  { name: 'Ghana', sales: 30, flag: '🇬🇭', growth: '-15.8%', color: '#ef4444' },
  { name: 'Kenya', sales: 25, flag: '🇰🇪', growth: '+35.8%', color: '#ef4444' },
];

const userSignupsData = [
  { month: 'Jan', signups: 800 },
  { month: 'Feb', signups: 1000 },
  { month: 'Mar', signups: 900 },
  { month: 'Apr', signups: 1100 },
  { month: 'May', signups: 1300 },
  { month: 'Jun', signups: 1000 },
  { month: 'Jul', signups: 900 },
  { month: 'Aug', signups: 1000 },
  { month: 'Sep', signups: 1200 },
  { month: 'Oct', signups: 800 },
  { month: 'Nov', signups: 900 },
  { month: 'Dec', signups: 700 },
];

const weeklyReportData = [
  { month: 'Jan', customers: 15 },
  { month: 'Feb', customers: 20 },
  { month: 'Mar', customers: 25 },
  { month: 'Apr', customers: 22 },
  { month: 'May', customers: 30 },
  { month: 'Jun', customers: 35 },
  { month: 'Jul', customers: 25 },
  { month: 'Aug', customers: 28 },
  { month: 'Sep', customers: 32 },
  { month: 'Oct', customers: 30 },
  { month: 'Nov', customers: 28 },
  { month: 'Dec', customers: 25 },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for all items..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">15</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div>
                <div className="text-sm font-medium text-gray-900">Micheal Adams</div>
                <div className="text-xs text-green-500">Online</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className="text-gray-600 text-sm">Total Users</div>
              <Users className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">15,000</div>
            <div className="flex items-center text-green-600 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12.5% from last month
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className="text-gray-600 text-sm">Total Sellers</div>
              <div className="w-5 h-5 rounded-full bg-gray-200"></div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">3,000</div>
            <div className="flex items-center text-green-600 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12.5% from last month
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className="text-gray-600 text-sm">Total Orders</div>
              <ShoppingCart className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">1,000</div>
            <div className="flex items-center text-green-600 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12.5% from last month
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className="text-gray-600 text-sm">Total Product Listed</div>
              <Package className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">6,400</div>
            <div className="flex items-center text-green-600 text-sm">
              <span className="text-gray-600">+12.5% from last month</span>
            </div>
          </div>
        </div>

        {/* Search and Export Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex justify-between items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search for users..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Orders</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>
              <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Payment</option>
                <option>Paid</option>
                <option>Unpaid</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium">
                <Download className="w-4 h-4" />
                <span>Export data</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Weekly Report */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Report for this week</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-lg">This week</button>
                <button className="px-3 py-1 text-sm text-gray-600 rounded-lg hover:bg-gray-100">Last week</button>
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">52K</div>
                <div className="text-gray-600 text-sm">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">3.5K</div>
                <div className="text-gray-600 text-sm">Total Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2.5K</div>
                <div className="text-gray-600 text-sm">Stock Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">0.5K</div>
                <div className="text-gray-600 text-sm">Out of Stock</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K</div>
                <div className="text-gray-600 text-sm">Orders</div>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyReportData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="customers" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    fill="#10b981"
                    fillOpacity={0.1}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Side Stats */}
          <div className="space-y-6">
            {/* Users Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="text-gray-600 text-sm mb-2">Users in last 30 minutes</div>
              <div className="text-2xl font-bold text-gray-900 mb-4">21.5K</div>
              <div className="text-gray-600 text-sm mb-4">Users per minute</div>
              <div className="flex items-end space-x-1 h-12">
                {[4, 6, 3, 8, 5, 7, 4, 9, 6, 8, 5, 7, 9, 6, 4].map((height, idx) => (
                  <div 
                    key={idx} 
                    className="bg-teal-500 rounded-sm flex-1" 
                    style={{ height: `${height * 6}px` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Sales by Country */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Sales by Country</h3>
                <div className="text-gray-600 text-sm">Sales</div>
              </div>
              <div className="space-y-4">
                {salesByCountryData.map((country, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{country.flag}</span>
                      <div>
                        <div className="font-medium text-gray-900">{country.sales}k</div>
                        <div className="text-sm text-gray-600">{country.name}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-red-500 rounded-full" 
                          style={{ width: `${(country.sales / 30) * 100}%` }}
                        ></div>
                      </div>
                      <span className={`text-xs ${country.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {country.growth}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Performing Products */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Product</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold text-gray-900">1</span>
                  <div>
                    <div className="font-semibold text-gray-900">Wireless Headphones</div>
                    <div className="text-gray-600 text-sm">© 243 Views • $300</div>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Bestseller
                </span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold text-gray-900">2</span>
                  <div>
                    <div className="font-semibold text-gray-900">Bluetooth Speaker</div>
                    <div className="text-gray-600 text-sm">© 200 Views • $300</div>
                  </div>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Trending
                </span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold text-gray-900">3</span>
                  <div>
                    <div className="font-semibold text-gray-900">Sleeveless Cotton Shirt</div>
                    <div className="text-gray-600 text-sm">© 184 Views • $300</div>
                  </div>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Trending
                </span>
              </div>
            </div>
          </div>

          {/* User Signups Over Time */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">User signups over time</h3>
              <select className="border border-gray-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userSignupsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="signups" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;