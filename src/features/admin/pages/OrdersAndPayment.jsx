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
  DollarSign,
  Package,
  X,
  MessageSquare,
  RefreshCw,
  XCircle,
  Truck,
  CreditCard,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Filter,
} from "lucide-react";

const OrdersAndPayment = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterOptions, setFilterOptions] = useState({
    status: '',
    payment: '',
    delivery: '',
    date: ''
  });

  const orders = [
    {
      id: "ORD-001",
      customer: {
        name: "Sarah Johnson",
        email: "SarahJohnson765@gmail.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, New York, NY 10001"
      },
      total: 1000,
      items: 156,
      orderStatus: "Completed",
      paymentStatus: "Paid",
      deliveryStatus: "Delivered",
      date: "15/01/2024",
      orderItems: [
        { name: "Wireless Headphones", quantity: 2, price: 299.99 },
        { name: "Smart Watch", quantity: 1, price: 399.99 },
      ]
    },
    {
      id: "ORD-002",
      customer: {
        name: "Sarah Johnson",
        email: "SarahJohnson765@gmail.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, New York, NY 10001"
      },
      total: 1000,
      items: 156,
      orderStatus: "Processing",
      paymentStatus: "Paid",
      deliveryStatus: "Shipped",
      date: "15/01/2024",
      orderItems: [
        { name: "Gaming Laptop", quantity: 1, price: 999.99 },
      ]
    },
    {
      id: "ORD-003",
      customer: {
        name: "Sarah Johnson",
        email: "SarahJohnson765@gmail.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, New York, NY 10001"
      },
      total: 1000,
      items: 156,
      orderStatus: "Pending",
      paymentStatus: "Pending",
      deliveryStatus: "Pending",
      date: "15/01/2024",
      orderItems: [
        { name: "Smartphone", quantity: 1, price: 799.99 },
        { name: "Phone Case", quantity: 2, price: 29.99 },
      ]
    },
    {
      id: "ORD-004",
      customer: {
        name: "Sarah Johnson",
        email: "SarahJohnson765@gmail.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, New York, NY 10001"
      },
      total: 1000,
      items: 156,
      orderStatus: "Completed",
      paymentStatus: "Paid",
      deliveryStatus: "Delivered",
      date: "15/01/2024",
      orderItems: [
        { name: "Tablet", quantity: 1, price: 599.99 },
        { name: "Keyboard", quantity: 1, price: 149.99 },
      ]
    },
    {
      id: "ORD-005",
      customer: {
        name: "Sarah Johnson",
        email: "SarahJohnson765@gmail.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, New York, NY 10001"
      },
      total: 1000,
      items: 156,
      orderStatus: "Cancelled",
      paymentStatus: "Refunded",
      deliveryStatus: "Cancelled",
      date: "15/01/2024",
      orderItems: [
        { name: "Monitor", quantity: 1, price: 399.99 },
      ]
    },
    {
      id: "ORD-006",
      customer: {
        name: "Sarah Johnson",
        email: "SarahJohnson765@gmail.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, New York, NY 10001"
      },
      total: 1000,
      items: 156,
      orderStatus: "Completed",
      paymentStatus: "Paid",
      deliveryStatus: "Delivered",
      date: "15/01/2024",
      orderItems: [
        { name: "Wireless Mouse", quantity: 3, price: 79.99 },
        { name: "Mousepad", quantity: 3, price: 19.99 },
      ]
    },
    {
      id: "ORD-007",
      customer: {
        name: "Sarah Johnson",
        email: "SarahJohnson765@gmail.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, New York, NY 10001"
      },
      total: 1000,
      items: 156,
      orderStatus: "Processing",
      paymentStatus: "Paid",
      deliveryStatus: "Shipped",
      date: "15/01/2024",
      orderItems: [
        { name: "Bluetooth Speaker", quantity: 1, price: 199.99 },
      ]
    },
  ];

  const getStatusIcon = (status, type) => {
    const iconClass = "w-3 h-3 mr-1";
    
    if (type === "order") {
      switch (status) {
        case "Completed":
          return <CheckCircle className={iconClass} />;
        case "Processing":
          return <RefreshCw className={iconClass} />;
        case "Pending":
          return <Clock className={iconClass} />;
        case "Cancelled":
          return <XCircle className={iconClass} />;
        default:
          return null;
      }
    } else if (type === "payment") {
      switch (status) {
        case "Paid":
          return <CheckCircle className={iconClass} />;
        case "Pending":
          return <Clock className={iconClass} />;
        case "Refunded":
          return <RefreshCw className={iconClass} />;
        default:
          return null;
      }
    } else if (type === "delivery") {
      switch (status) {
        case "Delivered":
          return <CheckCircle className={iconClass} />;
        case "Shipped":
          return <Truck className={iconClass} />;
        case "Pending":
          return <Clock className={iconClass} />;
        case "Cancelled":
          return <XCircle className={iconClass} />;
        default:
          return null;
      }
    }
  };

  const getStatusColor = (status, type) => {
    if (type === "order") {
      switch (status) {
        case "Completed":
          return "bg-green-100 text-green-800";
        case "Processing":
          return "bg-blue-100 text-blue-800";
        case "Pending":
          return "bg-yellow-100 text-yellow-800";
        case "Cancelled":
          return "bg-red-100 text-red-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    } else if (type === "payment") {
      switch (status) {
        case "Paid":
          return "bg-green-100 text-green-800";
        case "Pending":
          return "bg-yellow-100 text-yellow-800";
        case "Refunded":
          return "bg-red-100 text-red-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    } else if (type === "delivery") {
      switch (status) {
        case "Delivered":
          return "bg-green-100 text-green-800";
        case "Shipped":
          return "bg-blue-100 text-blue-800";
        case "Pending":
          return "bg-yellow-100 text-yellow-800";
        case "Cancelled":
          return "bg-red-100 text-red-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
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
      payment: '',
      delivery: '',
      date: ''
    });
  };

  const handleAction = (action, order) => {
    if (action === 'view') {
      setActiveModal('details');
      return;
    }
    
    setActiveModal(null);
    console.log(`Action: ${action} for order: ${order.id}`);
  };

  const openModal = (order) => {
    setSelectedOrder(order);
    setActiveModal('actions');
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedOrder(null);
  };

  return (
    <div className="p-6">
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Total Orders</div>
            <Users className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">3,000</div>
          <div className="flex items-center text-green-600 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            +12.5% from last month
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Revenue</div>
            <DollarSign className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-green-600 mb-2">$33,000</div>
          <div className="flex items-center text-green-600 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            +12.5% from last month
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Pending Orders</div>
            <Clock className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="text-2xl font-bold text-yellow-600 mb-2">23</div>
          <div className="flex items-center text-gray-600 text-sm">
            <span>Needs Attention</span>
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Refund Rate</div>
            <RefreshCw className="w-5 h-5 text-red-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">2.4%</div>
          <div className="flex items-center text-green-600 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            +12.5% from last month
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
              placeholder="Search for orders..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Orders</option>
              <option>Completed</option>
              <option>Processing</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
            <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Payment</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Refunded</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium">
              <Download className="w-4 h-4" />
              <span>Export data</span>
            </button>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Order ID</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Customer</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Total</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Items</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Order status</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Payment</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Delivery</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Date</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div 
                    className="text-blue-600 font-medium cursor-pointer hover:text-blue-800 hover:underline"
                    onClick={() => {
                      setSelectedOrder(order);
                      setActiveModal('details');
                    }}
                  >
                    #{order.id}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div>
                    <div className="font-medium text-gray-900">{order.customer.name}</div>
                    <div className="text-sm text-gray-500">{order.customer.email}</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="font-medium text-gray-900">${order.total}</div>
                </td>
                <td className="py-3 px-4">
                  <span className="text-gray-600">{order.items} items</span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs flex items-center w-fit ${getStatusColor(order.orderStatus, "order")}`}
                  >
                    {getStatusIcon(order.orderStatus, "order")}
                    {order.orderStatus}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs flex items-center w-fit ${getStatusColor(order.paymentStatus, "payment")}`}
                  >
                    {getStatusIcon(order.paymentStatus, "payment")}
                    {order.paymentStatus}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs flex items-center w-fit ${getStatusColor(order.deliveryStatus, "delivery")}`}
                  >
                    {getStatusIcon(order.deliveryStatus, "delivery")}
                    {order.deliveryStatus}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-gray-600">{order.date}</span>
                </td>
                <td className="py-3 px-4">
                  <div className="relative">
                    <button 
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => openModal(order)}
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

      {/* Order Details Modal */}
      {activeModal === 'details' && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Order Details – #{selectedOrder.id}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              {/* Order Status and Total */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm flex items-center ${getStatusColor(selectedOrder.deliveryStatus, "delivery")}`}
                >
                  {getStatusIcon(selectedOrder.deliveryStatus, "delivery")}
                  {selectedOrder.deliveryStatus}
                </span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">${selectedOrder.total}</div>
                  <div className="text-sm text-gray-600">{selectedOrder.orderItems.length} Items</div>
                </div>
              </div>

              {/* Customer Information */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Name: </span>
                    <span className="text-sm text-gray-900">{selectedOrder.customer.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{selectedOrder.customer.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{selectedOrder.customer.phone}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                    <span className="text-sm text-gray-600">{selectedOrder.customer.address}</span>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h4>
                <div className="space-y-4">
                  {selectedOrder.orderItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">{selectedOrder.customer.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">${item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Information */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Delivery Information</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Tracking Number: </span>
                    <span className="text-sm text-gray-500">1Z99999R345GH66</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Estimated Delivery: </span>
                    <span className="text-sm text-gray-500">June 12, 2025</span>
                  </div>
                </div>
              </div>

              {/* Contact Customer Button */}
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors">
                Contact Customer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order Actions Modal */}
      {activeModal === 'actions' && selectedOrder && (
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
                onClick={() => handleAction('view', selectedOrder)}
                className="w-full flex items-center space-x-3 p-4 text-left hover:bg-gray-50 rounded-xl transition-colors"
              >
                <Eye className="w-5 h-5 text-gray-700" />
                <span className="text-gray-800 font-medium">View Details</span>
              </button>

              {/* Update Status */}
              <button
                onClick={() => handleAction('update', selectedOrder)}
                className="w-full flex items-center space-x-3 p-4 text-left hover:bg-gray-50 rounded-xl transition-colors"
              >
                <RefreshCw className="w-5 h-5 text-blue-600" />
                <span className="text-gray-800 font-medium">Update Status</span>
              </button>

              {/* Send Message */}
              <button
                onClick={() => handleAction('message', selectedOrder)}
                className="w-full flex items-center space-x-3 p-4 text-left hover:bg-gray-50 rounded-xl transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-gray-700" />
                <span className="text-gray-800 font-medium">Message Customer</span>
              </button>

              {/* Process Refund */}
              <button
                onClick={() => handleAction('refund', selectedOrder)}
                className="w-full flex items-center space-x-3 p-4 text-left hover:bg-red-50 rounded-xl transition-colors"
              >
                <RefreshCw className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-medium">Process Refund</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersAndPayment;