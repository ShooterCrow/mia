import React, { useState } from "react";
import {
  Users,
  Search,
  Download,
  TrendingUp,
  MoreHorizontal,
  Plus,
  CheckCircle,
  Clock,
  AlertTriangle,
  Eye,
  UserCheck,
  UserX,
  Star,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Package,
  X,
  MessageSquare,
  Flag,
} from "lucide-react";

const SellerManagement = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [filterOptions, setFilterOptions] = useState({
    status: '',
    rating: '',
    sales: '',
    product: '',
    date: ''
  });

  const sellers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "SarahJohnson765@gmail.com",
      phone: "+1 (555) 123-4567",
      status: "Active",
      rating: 4.5,
      sales: 1000,
      products: 156,
      joinDate: "15/01/2024",
      image: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "SarahJohnson765@gmail.com",
      phone: "+1 (555) 123-4567",
      status: "Pending",
      rating: 4.2,
      sales: 1000,
      products: 156,
      joinDate: "15/01/2024",
      image: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      email: "SarahJohnson765@gmail.com",
      phone: "+1 (555) 123-4567",
      status: "Suspended",
      rating: 3.9,
      sales: 1000,
      products: 156,
      joinDate: "15/01/2024",
      image: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      email: "SarahJohnson765@gmail.com",
      phone: "+1 (555) 123-4567",
      status: "Active",
      rating: 4.4,
      sales: 1000,
      products: 156,
      joinDate: "15/01/2024",
      image: "https://i.pravatar.cc/40?img=4",
    },
    {
      id: 5,
      name: "Sarah Johnson",
      email: "SarahJohnson765@gmail.com",
      phone: "+1 (555) 123-4567",
      status: "Active",
      rating: 4.4,
      sales: 1000,
      products: 156,
      joinDate: "15/01/2024",
      image: "https://i.pravatar.cc/40?img=5",
    },
    {
      id: 6,
      name: "Sarah Johnson",
      email: "SarahJohnson765@gmail.com",
      phone: "+1 (555) 123-4567",
      status: "Pending",
      rating: 4.2,
      sales: 1000,
      products: 156,
      joinDate: "15/01/2024",
      image: "https://i.pravatar.cc/40?img=6",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Active":
        return <CheckCircle className="w-3 h-3 mr-1" />;
      case "Pending":
        return <Clock className="w-3 h-3 mr-1" />;
      case "Suspended":
        return <AlertTriangle className="w-3 h-3 mr-1" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const openFilterModal = () => {
    setActiveModal('filter');
  };

  const handleFilterChange = (filterType, value) => {
    setFilterOptions(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const applyFilters = () => {
    console.log('Applying filters:', filterOptions);
    setActiveModal(null);
  };

  const clearFilters = () => {
    setFilterOptions({
      status: '',
      rating: '',
      sales: '',
      product: '',
      date: ''
    });
  };

  const handleAction = (action, seller) => {
    if (action === 'view') {
      setActiveModal('details');
      return;
    }
    
    setActiveModal(null);
    console.log(`Action: ${action} for seller: ${seller.name}`);
    
    if (action === 'email') {
      console.log(`Sending email to ${seller.email}`);
    } else if (action === 'message') {
      console.log(`Sending message to ${seller.name}`);
    } else if (action === 'flag') {
      console.log(`Flagging seller: ${seller.name}`);
    }
  };

  const openModal = (seller) => {
    setSelectedSeller(seller);
    setActiveModal('actions');
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedSeller(null);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < fullStars
                ? "fill-yellow-400 text-yellow-400"
                : i === fullStars && hasHalfStar
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="p-6">
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Total Sellers</div>
            <Users className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">33,000</div>
          <div className="flex items-center text-green-600 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            +12.5% from last month
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Active Sellers</div>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-green-600 mb-2">279</div>
          <div className="flex items-center text-gray-600 text-sm">
            <span>76% of total</span>
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Pending Approval</div>
            <Clock className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="text-2xl font-bold text-yellow-600 mb-2">23</div>
          <div className="flex items-center text-gray-600 text-sm">
            <span>Needs Review</span>
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Avg. Rating</div>
            <Star className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">4.3</div>
          <div className="flex items-center text-gray-600 text-sm">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>Platform Average</span>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
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
            <button 
              onClick={openFilterModal}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Filter
            </button>
            <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Status</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Suspended</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium">
              <Plus className="w-4 h-4" />
              <span>Add Seller</span>
            </button>
          </div>
        </div>
      </div>

      {/* Seller Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Seller</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Contact</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Rating</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Sales</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Products</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Join Date</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller) => (
              <tr key={seller.id} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={seller.image}
                      alt={seller.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{seller.name}</div>
                      <div className="text-sm text-gray-500">ID: #{seller.id}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div>
                    <div className="text-sm text-gray-900">{seller.email}</div>
                    <div className="text-sm text-gray-500">{seller.phone}</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs flex items-center w-fit ${getStatusColor(seller.status)}`}
                  >
                    {getStatusIcon(seller.status)}
                    {seller.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  {renderStars(seller.rating)}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="font-medium text-gray-900">${seller.sales}</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="font-medium text-gray-900">{seller.products}</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-gray-600">{seller.joinDate}</span>
                </td>
                <td className="py-3 px-4">
                  <div className="relative">
                    <button 
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => openModal(seller)}
                    >
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Seller Details Modal */}
      {activeModal === 'details' && selectedSeller && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Seller Details - {selectedSeller.name}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              {/* Seller Header */}
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={selectedSeller.image}
                  alt={selectedSeller.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {selectedSeller.name}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Experienced seller with high customer satisfaction ratings and quality products.
                  </p>
                  <div className="flex items-center space-x-4">
                    {renderStars(selectedSeller.rating)}
                    <span
                      className={`px-2 py-1 rounded-full text-xs flex items-center ${getStatusColor(selectedSeller.status)}`}
                    >
                      {getStatusIcon(selectedSeller.status)}
                      {selectedSeller.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-900">{selectedSeller.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-900">{selectedSeller.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-900">Joined: {selectedSeller.joinDate}</span>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <div className="text-sm text-gray-600">Total Sales</div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">${selectedSeller.sales}</div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Package className="w-5 h-5 text-blue-600" />
                      <div className="text-sm text-gray-600">Products</div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{selectedSeller.products}</div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{selectedSeller.rating}/5</div>
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Business Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Business Type:</span>
                    <span className="text-sm text-gray-500 ml-2">Individual</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Tax ID:</span>
                    <span className="text-sm text-gray-500 ml-2">***-***-1234</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Address:</span>
                    <span className="text-sm text-gray-500 ml-2">123 Main St, City, State</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Bank Account:</span>
                    <span className="text-sm text-gray-500 ml-2">****1234 (Verified)</span>
                  </div>
                </div>
              </div>

              {/* Activity Timeline */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">Last Login</span>
                    <span className="text-sm font-medium text-gray-900">2 hours ago</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">Last Product Added</span>
                    <span className="text-sm font-medium text-gray-900">1 day ago</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">Last Sale</span>
                    <span className="text-sm font-medium text-gray-900">3 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Modal */}
      {activeModal === 'filter' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-xl w-80 p-6">
            <div className="space-y-4">
              {/* Status Filter */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Status</label>
                <select 
                  value={filterOptions.status}
                  onChange={(e) => handleFilterChange('status', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>

              {/* Ratings Filter */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Ratings</label>
                <select 
                  value={filterOptions.rating}
                  onChange={(e) => handleFilterChange('rating', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Ratings</option>
                  <option value="5">5 Stars</option>
                  <option value="4">4+ Stars</option>
                  <option value="3">3+ Stars</option>
                  <option value="2">2+ Stars</option>
                  <option value="1">1+ Stars</option>
                </select>
              </div>

              {/* Sales Filter */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Sales</label>
                <select 
                  value={filterOptions.sales}
                  onChange={(e) => handleFilterChange('sales', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Sales</option>
                  <option value="high">$1000+</option>
                  <option value="medium">$500-$999</option>
                  <option value="low">Below $500</option>
                </select>
              </div>

              {/* Product Filter */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Product</label>
                <select 
                  value={filterOptions.product}
                  onChange={(e) => handleFilterChange('product', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Products</option>
                  <option value="many">100+ Products</option>
                  <option value="some">50-99 Products</option>
                  <option value="few">Below 50 Products</option>
                </select>
              </div>

              {/* Date Filter */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Date</label>
                <select 
                  value={filterOptions.date}
                  onChange={(e) => handleFilterChange('date', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Time</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                  <option value="year">This Year</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={clearFilters}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Clear
                </button>
                <button
                  onClick={applyFilters}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Seller Actions Modal */}
      {activeModal === 'actions' && selectedSeller && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-xl w-80 p-4">
            <div className="space-y-2">
              {/* View Profile */}
              <button
                onClick={() => handleAction('view', selectedSeller)}
                className="w-full flex items-center space-x-3 p-4 text-left hover:bg-gray-50 rounded-xl transition-colors"
              >
                <Eye className="w-5 h-5 text-gray-700" />
                <span className="text-gray-800 font-medium">View Profile</span>
              </button>

              {/* Send Email */}
              <button
                onClick={() => handleAction('email', selectedSeller)}
                className="w-full flex items-center space-x-3 p-4 text-left hover:bg-gray-50 rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-700" />
                <span className="text-gray-800 font-medium">Send Email</span>
              </button>

              {/* Send Message */}
              <button
                onClick={() => handleAction('message', selectedSeller)}
                className="w-full flex items-center space-x-3 p-4 text-left hover:bg-gray-50 rounded-xl transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-gray-700" />
                <span className="text-gray-800 font-medium">Send Message</span>
              </button>

              {/* Flag Seller */}
              <button
                onClick={() => handleAction('flag', selectedSeller)}
                className="w-full flex items-center space-x-3 p-4 text-left hover:bg-red-50 rounded-xl transition-colors"
              >
                <Flag className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-medium">Flag Seller</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerManagement;