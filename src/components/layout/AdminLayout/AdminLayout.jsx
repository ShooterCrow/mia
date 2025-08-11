import React, { useState } from 'react';
import { 
    Home, 
    User,
    Package,
    CreditCard,
    Settings,
    Gift,
    Menu,
    X,
    ChevronLeft,
    LogOut,
    MessageCircle,
    Users,
    BarChart3,
    DollarSign,
    Scale,
    Search,
    Download,
    TrendingUp,
    ShoppingCart
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

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
      <div className="   px-6 py-4">
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
                <div className="text-sm font-medium ">Micheal Adams</div>
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
            <div className="text-2xl font-bold  mb-2">15,000</div>
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
            <div className="text-2xl font-bold  mb-2">3,000</div>
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
            <div className="text-2xl font-bold  mb-2">1,000</div>
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
            <div className="text-2xl font-bold  mb-2">6,400</div>
            <div className="flex items-center text-green-600 text-sm">
              <span className="text-gray-600">+12.5% from last month</span>
            </div>
          </div>
        </div>

        {/* Search and Export Section */}
        <div className=" p-6 mb-8">
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
              <select className=" px-4 py-2 text-sm focus:outline-none ">
                <option>All Orders</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>
              <select className=" px-4 py-2 text-sm focus:outline-none ">
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
          <div className="lg:col-span-2  rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold ">Report for this week</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-lg">This week</button>
                <button className="px-3 py-1 text-sm text-gray-600 rounded-lg hover:bg-gray-100">Last week</button>
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold ">52K</div>
                <div className="text-gray-600 text-sm text-[#CCCCCC66] ">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold ">3.5K</div>
                <div className="text-gray-600 text-sm">Total Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold ">2.5K</div>
                <div className="text-gray-600 text-sm">Stock Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold ">0.5K</div>
                <div className="text-gray-600 text-sm">Out of Stock</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold ">50K</div>
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
              <div className="text-2xl font-bold  mb-4">21.5K</div>
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
                <h3 className="text-lg font-semibold ">Sales by Country</h3>
                <div className="text-gray-600 text-sm">Sales</div>
              </div>
              <div className="space-y-4">
                {salesByCountryData.map((country, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{country.flag}</span>
                      <div>
                        <div className="font-medium ">{country.sales}k</div>
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
            <h3 className="text-lg font-semibold  mb-6">Top Performing Product</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold ">1</span>
                  <div>
                    <div className="font-semibold ">Wireless Headphones</div>
                    <div className="text-gray-600 text-sm">© 243 Views • $300</div>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Bestseller
                </span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold ">2</span>
                  <div>
                    <div className="font-semibold ">Bluetooth Speaker</div>
                    <div className="text-gray-600 text-sm">© 200 Views • $300</div>
                  </div>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Trending
                </span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold ">3</span>
                  <div>
                    <div className="font-semibold ">Sleeveless Cotton Shirt</div>
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
              <h3 className="text-lg font-semibold ">User signups over time</h3>
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

const CompleteAdminLayout = () => {
    const [activeItem, setActiveItem] = useState('Dashboard');
    const [sidebarExpanded, setSidebarExpanded] = useState(true);
    
    const isActive = (item) => activeItem === item;

    // All sidebar links (for desktop/tablet) - matching the image
    const sidebarLinks = [
        { icon: Home, label: 'Dashboard', path: '/admin', isActive: true },
        { icon: Users, label: 'User management', path: '/admin/users' },
        { icon: Package, label: 'Product management', path: '/admin/products' },
        { icon: Gift, label: 'Seller management', path: '/admin/sellers' },
        { icon: CreditCard, label: 'Orders and Payment', path: '/admin/orders' },
        { icon: DollarSign, label: 'Transaction', path: '/admin/transactions' },
        { icon: BarChart3, label: 'Analytic & Reports', path: '/admin/analytics' },
        { icon: MessageCircle, label: 'Communication', path: '/admin/communication' },
        { icon: Scale, label: 'Dispute Resolution', path: '/admin/disputes' },
    ];

    // Bottom section links
    const bottomLinks = [
        { icon: Settings, label: 'Settings', path: '/admin/settings' },
        { icon: LogOut, label: 'Log out', path: '/admin/logout' }
    ];

    const handleItemClick = (label) => {
        setActiveItem(label);
    };

    const toggleSidebar = () => {
        setSidebarExpanded(!sidebarExpanded);
    };

    return (
        <div className="flex bg-gray-50 min-h-screen">
            {/* Desktop/Tablet Sidebar */}
            <div className={`${
                sidebarExpanded ? 'w-80' : 'w-16'
            } bg-[#009883] to-teal-600 shadow-xl transition-all duration-300 flex flex-col z-30 relative`}>
                
                {/* Sidebar Header */}
                <div className="p-6 border-b border-teal-400/30">
                    {sidebarExpanded && (
                        <h2 className="text-3xl font-bold text-white tracking-wide">UPAM</h2>
                    )}
                </div>

                {/* Sidebar Links */}
                <nav className="flex-1 overflow-y-auto py-6">
                    <div className="space-y-2 px-4">
                        {sidebarLinks.map((link, idx) => {
                            const Icon = link.icon;
                            const isActiveLink = link.isActive || isActive(link.label);
                            
                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleItemClick(link.label)}
                                    className={`w-full flex items-center px-4 py-4 rounded-xl transition-all duration-200 group ${
                                        isActiveLink
                                            ? 'bg-white/20 text-white backdrop-blur-sm shadow-lg border border-white/20'
                                            : 'text-white/80 hover:bg-white/10 hover:text-white hover:shadow-md'
                                    } ${!sidebarExpanded ? 'justify-center' : ''}`}
                                >
                                    <Icon className={`flex-shrink-0 ${sidebarExpanded ? 'w-5 h-5' : 'w-6 h-6'}`} />
                                    {sidebarExpanded && (
                                        <span className="ml-4 font-medium text-sm text-left flex-1">{link.label}</span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </nav>

                {/* Bottom Section */}
                <div className="border-t border-teal-400/30 p-4 mt-auto">
                    <div className="space-y-2">
                        {bottomLinks.map((link, idx) => {
                            const Icon = link.icon;
                            const isActiveLink = isActive(link.label);
                            
                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleItemClick(link.label)}
                                    className={`w-full flex items-center px-4 py-4 rounded-xl transition-all duration-200 group ${
                                        isActiveLink
                                            ? 'bg-white/20 text-white backdrop-blur-sm shadow-lg border border-white/20'
                                            : 'text-white/80 hover:bg-white/10 hover:text-white hover:shadow-md'
                                    } ${!sidebarExpanded ? 'justify-center' : ''}`}
                                >
                                    <Icon className={`flex-shrink-0 ${sidebarExpanded ? 'w-5 h-5' : 'w-6 h-6'}`} />
                                    {sidebarExpanded && (
                                        <span className="ml-4 font-medium text-sm text-left flex-1">{link.label}</span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Collapse Button */}
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <button
                        onClick={toggleSidebar}
                        className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center text-teal-600 hover:bg-gray-50 transition-colors"
                        aria-label={sidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
                    >
                        <ChevronLeft className={`w-4 h-4 transition-transform ${!sidebarExpanded ? 'rotate-180' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Show dashboard content when Dashboard is active */}
                {activeItem === 'Dashboard' ? (
                    <AdminDashboard />
                ) : (
                    <main className="flex-1 overflow-auto p-8">
                        <div className="max-w-6xl mx-auto">
                            <h1 className="text-2xl font-bold  mb-4">
                                {activeItem}
                            </h1>
                            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                                <h2 className="text-lg font-semibold mb-2">Current Section: {activeItem}</h2>
                                <p className="text-gray-600">
                                    This is the {activeItem} section. Content for this section would be implemented here.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h3 className="font-semibold  mb-2">Feature 1</h3>
                                    <p className="text-gray-600 text-sm">Content specific to {activeItem}</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h3 className="font-semibold  mb-2">Feature 2</h3>
                                    <p className="text-gray-600 text-sm">Content specific to {activeItem}</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h3 className="font-semibold  mb-2">Feature 3</h3>
                                    <p className="text-gray-600 text-sm">Content specific to {activeItem}</p>
                                </div>
                            </div>
                        </div>
                    </main>
                )}
            </div>
        </div>
    );
};

export default CompleteAdminLayout;