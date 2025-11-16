import React from "react";
import {
  Users,
  Package,
  ShoppingCart,
  Search,
  Download,
  TrendingUp,
  TrendingDown,
  Loader2,
  AlertCircle,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { useGetAdminDashboardQuery } from "../adminApiSlice";

// Sample data for charts (unchanged)
const salesByCountryData = [
  { name: "Nigeria", sales: 30, flag: "🇺🇸", growth: "+28.8%", color: "#ef4444" },
  { name: "Ghana", sales: 30, flag: "🇧🇷", growth: "-15.8%", color: "#ef4444" },
  { name: "Kenya", sales: 25, flag: "🇦🇺", growth: "+35.8%", color: "#ef4444" },
];

const AdminDashboard = () => {
  const { data, isLoading, isError, error } = useGetAdminDashboardQuery();
  const topStatistics = data?.data.topStatistics;
  const weeklyReportAnalytics = data?.data.weeklyReportAndAnalytics;
  const topProductsAndSignups = data?.data.topProductsAndSignups;

  const trenDir = (data) => {
    let direction;
    data === "up" ? direction = true : data === "down" ? direction = false : null;
    return direction;
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#00A991] animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-red-900 font-semibold mb-1">Error Loading Dashboard</h3>
              <p className="text-red-700 text-sm">
                {error?.data?.message || error?.message || "Failed to load dashboard data. Please try again."}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Total Users</div>
            <Users className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">{topStatistics?.totalUsers.count}</div>
          <div className={`flex items-center ${trenDir(topStatistics?.totalUsers.trend) ? "text-[#00A991]" : "text-[red]"} text-sm`}>
            {trenDir(topStatistics?.totalUsers.trend) ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            +{topStatistics?.totalUsers.growthPercentage}% from last month
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Total Sellers</div>
            <div className="w-5 h-5 rounded-full bg-gray-200"></div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">{topStatistics?.totalSellers.count}</div>
          <div className={`flex items-center ${trenDir(topStatistics?.totalSellers.trend) ? "text-[#00A991]" : "text-[red]"} text-sm`}>
            {trenDir(topStatistics?.totalSellers.trend) ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            +{topStatistics?.totalSellers.growthPercentage}% from last month
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Total Orders</div>
            <ShoppingCart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">{topStatistics?.totalOrders.count}</div>
          <div className={`flex items-center ${trenDir(topStatistics?.totalOrders.trend) ? "text-[#00A991]" : "text-[red]"} text-sm`}>
            {trenDir(topStatistics?.totalOrders.trend) ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            +{topStatistics?.totalOrders.growthPercentage}% from last month
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Total Product Listed</div>
            <Package className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">{topStatistics?.totalProductsListed.count}</div>
          <div className={`flex items-center ${trenDir(topStatistics?.totalProductsListed.trend) ? "text-[#00A991]" : "text-[red]"} text-sm`}>
            {trenDir(topStatistics?.totalProductsListed.trend) ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            +{topStatistics?.totalProductsListed.growthPercentage}% from last month
          </div>
        </div>
      </div>

      {/* Search and Export Section */}
      <div className="p-4 mb-4">
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

      {/* Weekly Report and other sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Report for this week</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-lg">This week</button>
              <button className="px-3 py-1 text-sm text-gray-600 rounded-lg hover:bg-gray-100">Last week</button>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{weeklyReportAnalytics?.weeklyReport.thisWeek.customers}</div>
              <div className="text-gray-600 text-sm">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{weeklyReportAnalytics?.weeklyReport.thisWeek.totalProducts}</div>
              <div className="text-gray-600 text-sm">Total Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{weeklyReportAnalytics?.weeklyReport.thisWeek.stockProducts}</div>
              <div className="text-gray-600 text-sm">Stock Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{weeklyReportAnalytics?.weeklyReport.thisWeek.outOfStock}</div>
              <div className="text-gray-600 text-sm">Out of Stock</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{weeklyReportAnalytics?.weeklyReport.thisWeek.orders}</div>
              <div className="text-gray-600 text-sm">Orders</div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyReportAnalytics?.monthlyTrend} style={{ outline: 'none' }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="#00A991"
                  strokeWidth={2}
                  fill="#00A991"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="text-gray-600 text-sm mb-2">Users in last 30 minutes</div>
            <div className="text-2xl font-bold text-gray-900 mb-4">21.5K</div>
            <div className="text-gray-600 text-sm mb-4">Users per minute</div>
            <div className="flex items-end space-x-1 h-12">
              {[4, 6, 3, 8, 5, 7, 4, 9, 6, 8, 5, 7, 9, 6, 4].map((height, idx) => (
                <div
                  key={idx}
                  className="bg-[#009883] rounded-sm flex-1"
                  style={{ height: `${height * 6}px` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="rounded-xl shadow-sm border border-gray-100 p-6">
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
                        className="h-2 rounded-full"
                        style={{ width: `${(country.sales / 30) * 100}%`, backgroundColor: '#00A991' }}
                      ></div>
                    </div>
                    <span
                      className={`text-xs ${country.growth.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                    >
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
        <div className="rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Product</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
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
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-100">
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
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center space-x-4">
                <span className="text-lg font-bold text-gray-900">3</span>
                <div>
                  <div className="font-semibold text-gray-900">Sleeveless Cotton Shirt</div>
                  <div className="text-gray-600 text-sm">© 184 Views • $300</div>
                </div>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Trending
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">User signups over time</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topProductsAndSignups?.userSignupsOverTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="signups" fill="#00A991" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;