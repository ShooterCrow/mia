import React from 'react';
import { Mail, Phone, MapPin, DollarSign, Calendar, ShoppingCart, AlertTriangle, Send, Key, Download, Eye, Trash2 } from 'lucide-react';
import { useState } from 'react';
import SuspendModal from "../modals/SuspendModal";
import NotificationCard from "../modals/NotificationCard";
import ResetPasswordModal from "../modals/ResetPasswordModal";
import DeleteAccountModal from "../modals/DeleteAccountModal";

const AnalyticAndReports = () => {
  // Mock user data
  const user = {
    name: "Sarah Johnson",
    email: "SarahJohnson765@gmail.com",
    status: "active",
    role: "Buyer",
    phone: "+1 (555) 123-4567",
    address: "123, main street ikoyi, main island lagos",
    totalSpent: "$1200",
    joinDate: "15/06/2024",
    ordersPlaced: 23,
  };

  const orderData = [
    { id: 'ORD-001', date: '15/01/2024', amount: '$200.99', items: 5, status: 'delivered' },
    { id: 'ORD-001', date: '15/01/2024', amount: '$200.99', items: 5, status: 'Shipped' },
    { id: 'ORD-001', date: '15/01/2024', amount: '$200.99', items: 5, status: 'delivered' },
    { id: 'ORD-001', date: '15/01/2024', amount: '$200.99', items: 5, status: 'Shipped' },
    { id: 'ORD-001', date: '15/01/2024', amount: '$200.99', items: 5, status: 'delivered' },
    { id: 'ORD-001', date: '15/01/2024', amount: '$200.99', items: 5, status: 'Shipped' },
    { id: 'ORD-001', date: '15/01/2024', amount: '$200.99', items: 5, status: 'delivered' },
    { id: 'ORD-001', date: '15/01/2024', amount: '$200.99', items: 5, status: 'Shipped' },
  ];

  // Mock activity log data
  const activityLogData = [
    { 
      id: 1, 
      action: 'Placed Order ORD-002- Wireless Headphone-3hours long lasting battery for everyday use', 
      date: '15/01/2024', 
      time: '14:30:00',
      type: 'order',
      color: 'blue'
    },
    { 
      id: 2, 
      action: 'Updated profile information- name-Aisha to-Aishatu Ibrahim', 
      date: '15/01/2024', 
      time: '14:30:00',
      type: 'profile',
      color: 'yellow'
    },
    { 
      id: 3, 
      action: 'Placed Order ORD-002- Wireless Headphone-3hours long lasting battery for everyday use', 
      date: '15/01/2024', 
      time: '14:30:00',
      type: 'order',
      color: 'blue'
    },
    { 
      id: 4, 
      action: 'Updated profile information- name-Aisha to-Aishatu Ibrahim', 
      date: '15/01/2024', 
      time: '14:30:00',
      type: 'profile',
      color: 'red'
    },
    { 
      id: 5, 
      action: 'Placed Order ORD-002- Wireless Headphone-3hours long lasting battery for everyday use', 
      date: '15/01/2024', 
      time: '14:30:00',
      type: 'order',
      color: 'green'
    },
  ];

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('orderHistory');

  // State to manage modals
  const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);

  // Handle click functions for each action
  const handleSuspendAccountClick = () => {
    setIsSuspendModalOpen(true);
  };

  const handleSendNotificationClick = () => {
    setIsNotificationModalOpen(true);
  };

  const handleResetPasswordClick = () => {
    setIsResetPasswordModalOpen(true);
  };

  const handleDeleteAccountClick = () => {
    setIsDeleteAccountModalOpen(true);
  };

  // Handle modal confirmation actions
  const handleSuspendConfirm = (suspensionData) => {
    console.log(`User ${user.name} suspended:`, suspensionData);
    setIsSuspendModalOpen(false);
  };

  const handleNotificationConfirm = (notificationData) => {
    console.log(`Notification sent to ${user.name}:`, notificationData);
    setIsNotificationModalOpen(false);
  };

  const handleResetPasswordConfirm = (resetData) => {
    console.log(`Password reset initiated for ${user.name}:`, resetData);
    setIsResetPasswordModalOpen(false);
  };

  const handleDeleteAccountConfirm = (deleteData) => {
    console.log(`Account deleted for ${user.name}:`, deleteData);
    setIsDeleteAccountModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white">
      {/* Profile Header */}
      <div className="flex items-start gap-8 mb-12 bg-white border border-gray-200 rounded-xl p-8">
        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
            alt={user.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-3">
            <h1 className="text-3xl font-semibold text-gray-900">{user.name}</h1>
            <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-lg">{user.status}</span>
            <span className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg">{user.role}</span>
          </div>
          <p className="text-gray-600 text-lg mb-8">{user.email}</p>
          
          {/* Contact Info */}
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <span className="text-base">{user.email}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-500" />
              <span className="text-base">{user.phone}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span className="text-base">{user.address}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-gray-500" />
              <span className="text-base">Total Spent {user.totalSpent}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-500" />
              <span className="text-base">Joined {user.joinDate}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-5 h-5 text-gray-500" />
              <span className="text-base">{user.ordersPlaced} Orders Placed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="flex space-x-8 border-b border-gray-200">
          <button
            className={`pb-4 px-1 border-b-2 font-medium text-lg transition-colors ${
              activeTab === 'orderHistory' ? 'border-red-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('orderHistory')}
          >
            Order History
          </button>
          <button
            className={`pb-4 px-1 border-b-2 font-medium text-lg transition-colors ${
              activeTab === 'activityLog' ? 'border-red-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('activityLog')}
          >
            Activity Log
          </button>
          <button
            className={`pb-4 px-1 border-b-2 font-medium text-lg transition-colors ${
              activeTab === 'adminAction' ? 'border-red-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('adminAction')}
          >
            Admin Action
          </button>
        </div>
      </div>

      {/* Conditional Content Based on Active Tab */}
      {activeTab === 'orderHistory' && (
        <div className="bg-white">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Order ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Items
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-5">
                    <span className="text-blue-500 hover:text-blue-600 font-medium cursor-pointer">
                      {order.id}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-gray-700">
                    {order.date}
                  </td>
                  <td className="px-6 py-5 text-gray-700">
                    {order.amount}
                  </td>
                  <td className="px-6 py-5 text-gray-700">
                    {order.items}
                  </td>
                  <td className="px-6 py-5">
                    <span 
                      className={`inline-flex px-3 py-1 text-sm font-medium rounded-lg ${
                        order.status === 'delivered' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'activityLog' && (
        <div className="bg-white">
          <h2 className="text-xl font-semibold text-gray-900 mb-8">Activity Timeline</h2>
          
          <div className="space-y-6">
            {activityLogData.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4">
                <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                  activity.color === 'blue' ? 'bg-blue-500' :
                  activity.color === 'yellow' ? 'bg-yellow-500' :
                  activity.color === 'red' ? 'bg-red-500' :
                  activity.color === 'green' ? 'bg-green-500' :
                  'bg-gray-500'
                }`}></div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-base font-medium text-gray-900 mb-2">
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-500">
                    {activity.date} {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'adminAction' && (
        <div className="bg-white">
          {/* Account Status Section */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-8">Account Status</h2>
            <div className="space-y-4">
              {/* Suspend Account */}
              <div 
                className="flex items-center justify-between p-6 bg-gray-50 rounded-xl border cursor-pointer hover:bg-gray-100"
                onClick={handleSuspendAccountClick}
              >
                <div className="flex items-center space-x-4">
                  <AlertTriangle className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-900 font-medium text-lg">Suspend Account</span>
                </div>
                <button className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </button>
              </div>

              {/* Send Notification */}
              <div 
                className="flex items-center justify-between p-6 bg-gray-50 rounded-xl border cursor-pointer hover:bg-gray-100"
                onClick={handleSendNotificationClick}
              >
                <div className="flex items-center space-x-4">
                  <Send className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-900 font-medium text-lg">Send Notification</span>
                </div>
                <button className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </button>
              </div>

              {/* Reset Password */}
              <div 
                className="flex items-center justify-between p-6 bg-gray-50 rounded-xl border cursor-pointer hover:bg-gray-100"
                onClick={handleResetPasswordClick}
              >
                <div className="flex items-center space-x-4">
                  <Key className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-900 font-medium text-lg">Reset Password</span>
                </div>
                <button className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Data Management Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-8">Data Management</h2>
            <div className="space-y-4">
              {/* Export User Data */}
              <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl border">
                <div className="flex items-center space-x-4">
                  <Download className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-900 font-medium text-lg">Export User Data</span>
                </div>
              </div>

              {/* View Login History */}
              <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl border">
                <div className="flex items-center space-x-4">
                  <Eye className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-900 font-medium text-lg">View Login History</span>
                </div>
              </div>

              {/* Delete Account */}
              <div 
                className="flex items-center justify-between p-6 bg-gray-50 rounded-xl border cursor-pointer hover:bg-gray-100"
                onClick={handleDeleteAccountClick}
              >
                <div className="flex items-center space-x-4">
                  <Trash2 className="w-5 h-5 text-gray-500" />
                  <span className="text-red-600 font-medium text-lg">Delete Account</span>
                </div>
                <button className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Components */}
      <SuspendModal
        isOpen={isSuspendModalOpen}
        onClose={() => setIsSuspendModalOpen(false)}
        userName={user.name}
        onConfirm={handleSuspendConfirm}
      />

      <NotificationCard
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
        userName={user.name}
        onConfirm={handleNotificationConfirm}
      />

      <ResetPasswordModal
        isOpen={isResetPasswordModalOpen}
        onClose={() => setIsResetPasswordModalOpen(false)}
        userName={user.name}
        onConfirm={handleResetPasswordConfirm}
      />

      <DeleteAccountModal
        isOpen={isDeleteAccountModalOpen}
        onClose={() => setIsDeleteAccountModalOpen(false)}
        userName={user.name}
        onConfirm={handleDeleteAccountConfirm}
      />
    </div>
  );
};

export default AnalyticAndReports;