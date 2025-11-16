import React, { useState } from "react";
import {
  Users,
  Package,
  ShoppingCart,
  Search,
  Download,
  TrendingUp,
  MoreHorizontal,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import UserActionsModal from "../modals/UserActionsModal";
import EmailModal from "../modals/EmailModal";
import SuspendModal from "../modals/SuspendModal";
import MessageCardModal from "../modals/MessageCardModal";
import { useGetUsersQuery } from "../../user/userApiSlice";
import { formatDate } from "../../../utilities/formatDate";

const UserManagement = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useGetUsersQuery();
  const usersData = data?.data;

  const separateByMonth = (items) => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const lastMonthDate = new Date(currentYear, currentMonth - 1, 1);
    const lastMonth = lastMonthDate.getMonth();
    const lastMonthYear = lastMonthDate.getFullYear();

    const result = {
      thisMonth: [],
      lastMonth: []
    };

    items?.forEach(item => {
      const itemDate = new Date(item.createdAt);
      const itemMonth = itemDate.getMonth();
      const itemYear = itemDate.getFullYear();

      if (itemMonth === currentMonth && itemYear === currentYear) {
        result.thisMonth.push(item);
      } else if (itemMonth === lastMonth && itemYear === lastMonthYear) {
        result.lastMonth.push(item);
      }
    });

    return result;
  };

  const monthlyProgressPercentage = (data) => {
    const lastMonth = data.lastMonth;
    const thisMonth = data.thisMonth;

    if (lastMonth.length === 0) {
      return { color: "green", value: "0% from last month" };
    }

    const monthlyProgress = ((thisMonth.length - lastMonth.length) / lastMonth.length) * 100;
    const color = monthlyProgress >= 0 ? "green" : "red";

    return { color, value: monthlyProgress.toFixed(2) + "% from last month" };
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#00A991] animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading users...</p>
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
              <h3 className="text-red-900 font-semibold mb-1">Error Loading Users</h3>
              <p className="text-red-700 text-sm">
                {error?.data?.message || error?.message || "Failed to load user data. Please try again."}
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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Total Users</div>
            <Users className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">{usersData?.totalUsers}</div>
          <div className="flex items-center text-[#00A991] text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            {monthlyProgressPercentage(separateByMonth(usersData?.users)).value}
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Active Users</div>
            <div className="w-5 h-5 rounded-full bg-gray-200"></div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">{usersData?.activeUsers?.length}</div>
          <div className="flex items-center text-[#00A991] text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            {monthlyProgressPercentage(separateByMonth(usersData?.activeUsers)).value}
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Verified Users</div>
            <ShoppingCart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">{usersData?.verifiedUsers?.length}</div>
          <div className="flex items-center text-red-500 text-sm">
            <TrendingUp className="w-4 h-4 mr-1 rotate-180" />
            {monthlyProgressPercentage(separateByMonth(usersData?.verifiedUsers)).value}
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">New this month</div>
            <Package className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">{separateByMonth(usersData?.users).thisMonth.length}</div>
          <div className="flex items-center text-[#00A991] text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            {monthlyProgressPercentage(separateByMonth(usersData?.users)).value}
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-gray-600 text-sm">Suspended</div>
            <Package className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">{usersData?.suspendedUsers?.length}</div>
          <div className="flex items-center text-[#00A991] text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            {monthlyProgressPercentage(separateByMonth(usersData?.suspendedUsers)).value}
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
              <option>All status</option>
              <option>Active</option>
              <option>Suspended</option>
              <option>Pending</option>
            </select>
            <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All roles</option>
              <option>Buyer</option>
              <option>Seller</option>
            </select>
            <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All time</option>
              <option>Today</option>
              <option>This week</option>
              <option>This month</option>
              <option>This Quarter</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium">
              <Download className="w-4 h-4" />
              <span>Export</span>
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
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">User</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">Role</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">Email Verification</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">Join date</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">Activity</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">Last seen</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600"></th>
            </tr>
          </thead>
          <tbody>
            {usersData?.users.map((user, index) => {

              const handleAction = (action) => {
                if (action === "view") {
                  navigate("/admin/analytics");
                } else if (action === "email") {
                  setIsEmailModalOpen(true);
                } else if (action === "suspend") {
                  setIsSuspendModalOpen(true);
                } else if (action === "message") {
                  setIsMessageModalOpen(true);
                }
                console.log(`Action: ${action} for ${user.firstName}`);
              };

              const handleSuspendConfirm = () => {
                console.log(`User ${user.firstName} suspended at ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })}`);
              };

              const handleMessageSend = (message) => {
                console.log(`Message sent to ${user.firstName}: ${message}`);
              };

              return (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <img
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                        alt={user.firstName}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <Link to={`/admin/users/${user.email}`} className="hover:text-blue-600">
                        <div className="font-medium text-gray-900">{user.firstName}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </Link>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-lg text-sm font-medium ${user.isActive
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                        }`}
                    >
                      {user.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-wrap gap-2">
                      {user.userRoles.map((role, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-lg text-sm font-medium ${user.emailVerified
                        ? "bg-blue-100 text-blue-800"
                        : "bg-orange-100 text-orange-800"
                        }`}
                    >
                      {user.emailVerified ? "Verified" : "Unverified"}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">
                    {formatDate(user.createdAt)}
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-gray-900 font-medium">{user?.activity?.split(' (')[0]}</div>
                    <div className="text-gray-500 text-sm">{user?.activity?.split(' (')[1]?.replace(')', '')}</div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{user.lastSeen}</td>
                  <td className="py-4 px-6 relative">
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => setIsUserMenuOpen(true)}
                    >
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                    <UserActionsModal
                      isOpen={isUserMenuOpen}
                      onClose={() => setIsUserMenuOpen(false)}
                      onAction={() => navigate(`/admin/analytics/${user.id}`)}
                    />
                    <EmailModal
                      isOpen={isEmailModalOpen}
                      onClose={() => setIsEmailModalOpen(false)}
                      userName={user.firstName}
                    />
                    <SuspendModal
                      isOpen={isSuspendModalOpen}
                      onClose={() => setIsSuspendModalOpen(false)}
                      userName={user.firstName}
                      onConfirm={handleSuspendConfirm}
                    />
                    <MessageCardModal
                      isOpen={isMessageModalOpen}
                      onClose={() => setIsMessageModalOpen(false)}
                      recipient={user.firstName}
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