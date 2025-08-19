import React, { useState } from "react";
import {
  Users,
  Package,
  ShoppingCart,
  Search,
  Download,
  TrendingUp,
  MoreHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";
import UserActionsModal from "../modals/UserActionsModal";
import EmailModal from "../modals/EmailModal";
import SuspendModal from "../modals/SuspendModal";
import MessageCardModal from "../modals/MessageCardModal";

const UserManagement = () => {
  const users = [
    {
      name: "Sarah Johnson",
      email: "SarahJohnson765@gmail.com",
      status: "active",
      role: "Buyer",
      verification: "Verified",
      joinDate: "15/01/2024",
      activity: "$2000 (12 orders)",
      lastSeen: "2 hours ago",
    },
    {
      name: "Sarah Johnson",
      email: "SarahJohnson765@gmail.com",
      status: "Suspended",
      role: "Buyer",
      verification: "Pending",
      joinDate: "15/01/2024",
      activity: "$2000 (12 orders)",
      lastSeen: "2 hours ago",
    },
    {
      name: "Sarah Johnson",
      email: "SarahJohnson765@gmail.com",
      status: "Pending",
      role: "Seller",
      verification: "Verified",
      joinDate: "15/01/2024",
      activity: "$2000 (12 orders)",
      lastSeen: "2 hours ago",
    },
    {
      name: "Sarah Johnson",
      email: "SarahJohnson765@gmail.com",
      status: "active",
      role: "Buyer",
      verification: "Verified",
      joinDate: "15/01/2024",
      activity: "$2000 (12 orders)",
      lastSeen: "2 hours ago",
    },
    {
      name: "Sarah Johnson",
      email: "SarahJohnson765@gmail.com",
      status: "Suspended",
      role: "Buyer",
      verification: "Pending",
      joinDate: "15/01/2024",
      activity: "$2000 (12 orders)",
      lastSeen: "2 hours ago",
    },
    {
      name: "Sarah Johnson",
      email: "SarahJohnson765@gmail.com",
      status: "active",
      role: "Buyer",
      verification: "Verified",
      joinDate: "15/01/2024",
      activity: "$2000 (12 orders)",
      lastSeen: "2 hours ago",
    },
    {
      name: "Sarah Johnson",
      email: "SarahJohnson765@gmail.com",
      status: "active",
      role: "Buyer",
      verification: "Verified",
      joinDate: "15/01/2024",
      activity: "$2000 (12 orders)",
      lastSeen: "2 hours ago",
    },
  ];

  return (
    <div className="p-6">
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="p-6 rounded-xl shadow-sm border border-gray-100">
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
        <div className="p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Active Users</div>
            <div className="w-5 h-5 rounded-full bg-gray-200"></div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">3,000</div>
          <div className="flex items-center text-green-600 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            +12.5% from last month
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Verified Users</div>
            <ShoppingCart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">1,000</div>
          <div className="flex items-center text-green-600 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            +12.5% from last month
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">New This Week</div>
            <Package className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">6,400</div>
          <div className="flex items-center text-green-600 text-sm">
            <span className="text-gray-600">+12.5% from last month</span>
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Suspended</div>
            <Package className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">6,400</div>
          <div className="flex items-center text-green-600 text-sm">
            <span className="text-gray-600">+12.5% from last month</span>
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium">
              <Download className="w-4 h-4" />
              <span>Add User</span>
            </button>
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">User</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Role</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Verification</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Join date</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Activity</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Last seen</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
              const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
              const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false);
              const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

              const handleAction = (action) => {
                if (action === "email") {
                  setIsEmailModalOpen(true);
                } else if (action === "suspend") {
                  setIsSuspendModalOpen(true);
                } else if (action === "message") {
                  setIsMessageModalOpen(true);
                }
                console.log(`Action: ${action} for ${user.name}`);
              };

              const handleSuspendConfirm = () => {
                console.log(`User ${user.name} suspended at ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })}`);
              };

              const handleMessageSend = (message) => {
                console.log(`Message sent to ${user.name}: ${message}`);
              };

              return (
                <tr key={index} className="border-t">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src={`https://i.pravatar.cc/40?img=${index + 1}`}
                        alt={user.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <Link to={`/admin/users/${user.email}`} className="hover:text-blue-600">
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </Link>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        user.status === "active"
                          ? "bg-green-100 text-green-800"
                          : user.status === "Suspended"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{user.role}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        user.verification === "Verified"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {user.verification}
                    </span>
                  </td>
                  <td className="py-3 px-4">{user.joinDate}</td>
                  <td className="py-3 px-4">{user.activity}</td>
                  <td className="py-3 px-4">{user.lastSeen}</td>
                  <td className="py-3 px-4 relative">
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => setIsUserMenuOpen(true)}
                    >
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                    <UserActionsModal
                      isOpen={isUserMenuOpen}
                      onClose={() => setIsUserMenuOpen(false)}
                      onAction={handleAction}
                    />
                    <EmailModal
                      isOpen={isEmailModalOpen}
                      onClose={() => setIsEmailModalOpen(false)}
                      userName={user.name}
                    />
                    <SuspendModal
                      isOpen={isSuspendModalOpen}
                      onClose={() => setIsSuspendModalOpen(false)}
                      userName={user.name}
                      onConfirm={handleSuspendConfirm}
                    />
                    <MessageCardModal
                      isOpen={isMessageModalOpen}
                      onClose={() => setIsMessageModalOpen(false)}
                      recipient={user.name}
                      onMessageSend={handleMessageSend}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;