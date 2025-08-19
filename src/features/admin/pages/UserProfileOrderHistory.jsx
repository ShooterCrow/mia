import React, { useState } from 'react';
import SuspendModal from "../modals/SuspendModal";
import NotificationCard from "../modals/NotificationCard";
import ResetPasswordModal from "../modals/ResetPasswordModal";
import DeleteAccountModal from "../modals/DeleteAccountModal";

const UserProfileOrderHistory = () => {
  // Mock user data
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
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
    { id: 'ORD-002', date: '15/01/2024', amount: '$200.99', items: 5, status: 'shipped' },
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
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);

  // Handle suspend account click
  const handleSuspendAccountClick = () => {
    setIsSuspendModalOpen(true);
  };

  // Handle send notification click
  const handleSendNotificationClick = () => {
    setIsNotificationModalOpen(true);
  };

  // Handle reset password click
  const handleResetPasswordClick = () => {
    setIsResetPasswordModalOpen(true);
  };

  // Handle delete account click
  const handleDeleteAccountClick = () => {
    setIsDeleteAccountModalOpen(true);
  };

  // Handle action for suspend and email
  const handleAction = (action) => {
    if (action === "email") {
      setIsEmailModalOpen(true);
    } else if (action === "suspend") {
      setIsSuspendModalOpen(true);
    }
    console.log(`Action: ${action} for ${user.name}`);
  };

  // Handle modal actions
  const handleEmailAction = () => {
    setIsEmailModalOpen(true);
    console.log(`Email action triggered for ${user.name}`);
  };

  const handleSuspendConfirm = (suspensionData) => {
    console.log(`User ${user.name} suspended:`, suspensionData);
    setIsSuspendModalOpen(false); // Close modal after confirm
    // Update user status in a real app (e.g., via API)
  };

  const handleNotificationConfirm = (notificationData) => {
    console.log(`Notification sent to ${user.name}:`, notificationData);
    setIsNotificationModalOpen(false); // Close modal after confirm
    // Send notification in a real app (e.g., via API)
  };

  const handleResetPasswordConfirm = (resetData) => {
    console.log(`Password reset initiated for ${user.name}:`, resetData);
    setIsResetPasswordModalOpen(false); // Close modal after confirm
    // Initiate password reset in a real app (e.g., via API)
  };

  const handleDeleteAccountConfirm = (deleteData) => {
    console.log(`Account deleted for ${user.name}:`, deleteData);
    setIsDeleteAccountModalOpen(false); // Close modal after confirm
    // Delete account in a real app (e.g., via API)
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Back to User Management Link */}
      <button className="text-blue-500 hover:text-blue-600 mb-4 inline-block">
        ← Back to User Management
      </button>

      {/* Profile Header */}
      <div className="flex items-start gap-6 mb-8">
        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1494790108755-2616c6089344?w=80&h=80&fit=crop&crop=face" 
            alt={user.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-semibold text-gray-900">{user.name}</h1>
            <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded">{user.status}</span>
            <span className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded">{user.role}</span>
          </div>
          <p className="text-gray-600 mb-4">{user.email}</p>
          
          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{user.email}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{user.phone}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{user.address}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <span>Total Spent {user.totalSpent}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13l4-4 4 4m-4-4v9" />
              </svg>
              <span>Joined {user.joinDate}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L4 3H2m5 10v4a2 2 0 002 2h10a2 2 0 002-2v-4m-10 0V9a2 2 0 012-2h6a2 2 0 012 2v4m-10 0H7m8 0h2" />
              </svg>
              <span>{user.ordersPlaced} Orders Placed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border  border-gray-200 mb-6 rounded-[10px]">
        <div className="flex justify-between ">
          <button
            className={`pb-3 px-1 border-b-2 font-medium ${
              activeTab === 'orderHistory' ? 'border-red-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('orderHistory')}
          >
            Order History
          </button>
          <button
            className={`pb-3 px-1 border-b-2 font-medium ${
              activeTab === 'activityLog' ? 'border-red-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('activityLog')}
          >
            Activity Log
          </button>
          <button
            className={`pb-3 px-1 border-b-2 font-medium ${
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
        <div className="bg-white rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orderData.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-blue-500 hover:text-blue-600 font-medium cursor-pointer">
                      {order.id}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.items}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span 
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
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
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Activity Timeline</h2>
          
          <div className="space-y-4">
            {activityLogData.map((activity, index) => (
              <div key={activity.id} className="flex items-start space-x-4">
                <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                  activity.color === 'blue' ? 'bg-blue-500' :
                  activity.color === 'yellow' ? 'bg-yellow-500' :
                  activity.color === 'red' ? 'bg-red-500' :
                  activity.color === 'green' ? 'bg-green-500' :
                  'bg-gray-500'
                }`}></div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">
                    {activity.date} {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'adminAction' && (
        <div className="bg-white rounded-lg p-6">
          {/* Account Status Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Account Status</h2>
            <div className="space-y-4">
              {/* Suspend Account */}
              <div 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
                onClick={handleSuspendAccountClick}
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 14.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Suspend Account</span>
                </div>
               
              </div>

              {/* Send Notification */}
              <div 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
                onClick={handleSendNotificationClick}
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Send Notification</span>
                </div>
               
              </div>

              {/* Reset Password */}
              <div 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
                onClick={handleResetPasswordClick}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-gray-700 font-medium">Reset Password</span>
                </div>
               
              </div>
            </div>
          </div>

          {/* Data Management Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Data Management</h2>
            <div className="space-y-4">
              {/* Export User Data */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Export User Data</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Export
                </button>
              </div>

              {/* View Login History */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">View Login History</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  View
                </button>
              </div>

              {/* Delete Account */}
              <div 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
                onClick={handleDeleteAccountClick}
              >
                <span className="text-red-600 font-medium">Delete Account</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Email Modal */}
      {isEmailModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Send Email to {user.name}</h3>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter email message..."
              rows="4"
            />
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                onClick={() => setIsEmailModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                onClick={() => {
                  console.log(`Email sent to ${user.email}`);
                  setIsEmailModalOpen(false);
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Suspend Modal */}
      <SuspendModal
        isOpen={isSuspendModalOpen}
        onClose={() => setIsSuspendModalOpen(false)}
        userName={user.name}
        onConfirm={handleSuspendConfirm}
      />

      {/* Notification Modal */}
      <NotificationCard
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
        userName={user.name}
        onConfirm={handleNotificationConfirm}
      />

      {/* Reset Password Modal */}
      <ResetPasswordModal
        isOpen={isResetPasswordModalOpen}
        onClose={() => setIsResetPasswordModalOpen(false)}
        userName={user.name}
        onConfirm={handleResetPasswordConfirm}
      />

      {/* Delete Account Modal */}
      <DeleteAccountModal
        isOpen={isDeleteAccountModalOpen}
        onClose={() => setIsDeleteAccountModalOpen(false)}
        userName={user.name}
        onConfirm={handleDeleteAccountConfirm}
      />
    </div>
  );
};

export default UserProfileOrderHistory;