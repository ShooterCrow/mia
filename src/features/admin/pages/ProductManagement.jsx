import React, { useState } from "react";
import {
  Package,
  Search,
  Download,
  TrendingUp,
  MoreHorizontal,
  Plus,
  AlertTriangle,
  CheckCircle,
  Clock,
  Flag,
  Eye,
  EyeOff,
  Trash2,
  X,
  Star,
  TrendingUp as TrendingUpIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const ProductManagement = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibilitySettings, setVisibilitySettings] = useState({
    showToCustomers: true,
    featured: false,
    searchable: true,
  });

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: "$400",
      stock: 45,
      status: "Active",
      seller: "Sarah Johnson",
      dateAdded: "15/01/2024",
      image: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      name: "Iphone 16 pro max",
      category: "Gadget",
      price: "$1900",
      stock: 12,
      status: "Pending",
      seller: "Sarah cloth store",
      dateAdded: "15/01/2024",
      image: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      category: "Electronics",
      price: "$400",
      stock: 45,
      status: "Active",
      seller: "Sarah Johnson",
      dateAdded: "15/01/2024",
      image: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 4,
      name: "Wireless Headphones",
      category: "Electronics",
      price: "$400",
      stock: 45,
      status: "Active",
      seller: "Sarah Johnson",
      dateAdded: "15/01/2024",
      image: "https://i.pravatar.cc/40?img=4",
    },
    {
      id: 5,
      name: "Iphone 16 pro max",
      category: "Gadget",
      price: "$1900",
      stock: 12,
      status: "Pending",
      seller: "Sarah cloth store",
      dateAdded: "15/01/2024",
      image: "https://i.pravatar.cc/40?img=5",
    },
    {
      id: 6,
      name: "Vintage T - shirts",
      category: "Fashion",
      price: "$200",
      stock: 0,
      status: "Out of stock",
      seller: "Sarah Johnson",
      dateAdded: "15/01/2024",
      image: "https://i.pravatar.cc/40?img=6",
    },
    {
      id: 7,
      name: "Wireless Headphones",
      category: "Electronics",
      price: "$400",
      stock: 45,
      status: "Active",
      seller: "Sarah Johnson",
      dateAdded: "15/01/2024",
      image: "https://i.pravatar.cc/40?img=7",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Active":
        return <CheckCircle className="w-3 h-3 mr-1" />;
      case "Pending":
        return <Clock className="w-3 h-3 mr-1" />;
      case "Out of stock":
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
      case "Out of stock":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleAction = (action, product) => {
    if (action === 'view') {
      setActiveModal('details');
      return;
    } else if (action === 'visibility') {
      setActiveModal('visibility');
      return;
    }
    
    setActiveModal(null);
    console.log(`Action: ${action} for product: ${product.name}`);
    
    if (action === 'delete') {
      // Handle delete
      console.log(`Deleting ${product.name}`);
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setActiveModal('actions');
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedProduct(null);
  };

  const handleVisibilityToggle = (setting) => {
    setVisibilitySettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleVisibilityUpdate = () => {
    console.log(`Updating visibility for ${selectedProduct.name}:`, visibilitySettings);
    setActiveModal(null);
  };

  return (
    <div className="p-6">
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Total Products</div>
            <Package className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">33,000</div>
          <div className="flex items-center text-green-600 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            +12.5% from last month
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Active Products</div>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-green-600 mb-2">22,000</div>
          <div className="flex items-center text-green-600 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            +8.2% from last month
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Pending Approval</div>
            <Clock className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="text-2xl font-bold text-yellow-600 mb-2">23,000</div>
          <div className="flex items-center text-green-600 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            +5.1% from last month
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Flagged Items</div>
            <Flag className="w-5 h-5 text-red-500" />
          </div>
          <div className="text-2xl font-bold text-red-600 mb-2">250</div>
          <div className="flex items-center text-green-600 text-sm">
            <span className="text-gray-600">-2.3% from last month</span>
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Low Stock</div>
            <AlertTriangle className="w-5 h-5 text-orange-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">32</div>
          <div className="flex items-center text-green-600 text-sm">
            <span className="text-gray-600">+1.2% from last month</span>
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
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Status</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Out of Stock</option>
            </select>
            <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Gadgets</option>
            </select>
            <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Time</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium">
              <Plus className="w-4 h-4" />
              <span>Add Product</span>
            </button>
          </div>
        </div>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Product</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Price</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Stock</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Seller</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Date Added</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.category}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="font-medium text-gray-900">{product.price}</span>
                </td>
                <td className="py-3 px-4">
                  <span className={`font-medium ${product.stock === 0 ? 'text-red-600' : 'text-gray-900'}`}>
                    {product.stock}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs flex items-center w-fit ${getStatusColor(product.status)}`}
                  >
                    {getStatusIcon(product.status)}
                    {product.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-gray-900">{product.seller}</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-gray-600">{product.dateAdded}</span>
                </td>
                <td className="py-3 px-4">
                  <div className="relative">
                    <button 
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => openModal(product)}
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

      {/* Product Visibility Modal */}
      {activeModal === 'visibility' && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg">
            {/* Header */}
            <div className="flex items-center p-6 pb-4">
              <Eye className="w-6 h-6 text-gray-700 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">
                Product details - {selectedProduct.name}
              </h2>
            </div>

            <div className="px-6 pb-6">
              {/* Product visibilities */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Product visibilities</h3>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <div className="font-medium text-gray-900">Show this product to customers</div>
                    <div className="text-sm text-gray-500">Show this product to customers</div>
                  </div>
                  <button
                    onClick={() => handleVisibilityToggle('showToCustomers')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      visibilitySettings.showToCustomers ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        visibilitySettings.showToCustomers ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Featured Product */}
              <div className="mb-6">
                <div className="flex items-center justify-between py-3">
                  <div>
                    <div className="font-medium text-gray-900">Featured Product</div>
                    <div className="text-sm text-gray-500">Display in featured sections</div>
                  </div>
                  <button
                    onClick={() => handleVisibilityToggle('featured')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      visibilitySettings.featured ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        visibilitySettings.featured ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Searchable */}
              <div className="mb-6">
                <div className="flex items-center justify-between py-3">
                  <div>
                    <div className="font-medium text-gray-900">Searchable</div>
                    <div className="text-sm text-gray-500">Include in search results</div>
                  </div>
                  <button
                    onClick={() => handleVisibilityToggle('searchable')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      visibilitySettings.searchable ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        visibilitySettings.searchable ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Current Status */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Current Status</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Visibility:</span>
                    <span className="font-medium text-gray-900">
                      {visibilitySettings.showToCustomers ? 'Visible' : 'Hidden'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Featured:</span>
                    <span className="font-medium text-gray-900">
                      {visibilitySettings.featured ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Searchable:</span>
                    <span className="font-medium text-gray-900">
                      {visibilitySettings.searchable ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleVisibilityUpdate}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-xl transition-colors"
                >
                  Update Visibility
                </button>
                <button
                  onClick={closeModal}
                  className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Details Modal */}
      {activeModal === 'details' && selectedProduct && (
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
                Product details - {selectedProduct.name}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              {/* Product Header */}
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-32 h-32 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    High-quality product with premium features and excellent customer satisfaction ratings. SKU: CB-004
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                      <span className="text-sm text-gray-600 ml-2">(306)</span>
                    </div>
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                      Out of stock
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Information */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Product Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Category:</span>
                    <span className="text-sm text-gray-500 ml-2">{selectedProduct.category}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Price:</span>
                    <span className="text-sm text-gray-500 ml-2">{selectedProduct.price}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Stock:</span>
                    <span className="text-sm text-gray-500 ml-2">{selectedProduct.stock} units</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Seller:</span>
                    <span className="text-sm text-gray-500 ml-2">{selectedProduct.seller}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Weight:</span>
                    <span className="text-sm text-gray-500 ml-2">1.2lbs</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Dimensions:</span>
                    <span className="text-sm text-gray-500 ml-2">10×15 inches</span>
                  </div>
                </div>
              </div>

              {/* Performance */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUpIcon className="w-5 h-5 text-blue-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Performance</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Total orders</div>
                    <div className="text-2xl font-bold text-gray-900">456</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Reviews</div>
                    <div className="text-2xl font-bold text-gray-900">128</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Rating</div>
                    <div className="text-2xl font-bold text-gray-900">4.5/5</div>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Brand:</span>
                    <span className="text-sm text-gray-500 ml-2">Premium Brand</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Model:</span>
                    <span className="text-sm text-gray-500 ml-2">PB -2024</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Warranty:</span>
                    <span className="text-sm text-gray-500 ml-2">2 years</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Color:</span>
                    <span className="text-sm text-gray-500 ml-2">multiple</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Timeline</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Date Added</div>
                    <div className="text-sm font-medium text-gray-900">{selectedProduct.dateAdded}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Last updated</div>
                    <div className="text-sm font-medium text-gray-900">2024-03-2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Actions Modal */}
      {activeModal === 'actions' && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-xl w-80 p-4">
            <div className="space-y-2">
              {/* View Details */}
              <button
                onClick={() => handleAction('view', selectedProduct)}
                className="w-full flex items-center space-x-3 p-4 text-left hover:bg-gray-50 rounded-xl transition-colors"
              >
                <Eye className="w-5 h-5 text-gray-700" />
                <span className="text-gray-800 font-medium">View details</span>
              </button>

              {/* Manage Visibility */}
              <button
                onClick={() => handleAction('visibility', selectedProduct)}
                className="w-full flex items-center space-x-3 p-4 text-left hover:bg-gray-50 rounded-xl transition-colors"
              >
                <EyeOff className="w-5 h-5 text-gray-700" />
                <span className="text-gray-800 font-medium">Manage visibility</span>
              </button>

              {/* Delete Product */}
              <button
                onClick={() => handleAction('delete', selectedProduct)}
                className="w-full flex items-center space-x-3 p-4 text-left hover:bg-red-50 rounded-xl transition-colors"
              >
                <Trash2 className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-medium">Delete product</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;