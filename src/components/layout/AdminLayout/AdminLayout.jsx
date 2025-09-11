import React, { useState, useRef, useEffect } from "react";
import {
  Home,
  Users,
  Package,
  CreditCard,
  Settings,
  Gift,
  ChevronLeft,
  LogOut,
  MessageCircle,
  BarChart3,
  DollarSign,
  Scale,
  Search,
  UserCircle,
} from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAdminLayout } from "./AdminLayoutContext";
import NotificationButton from "../../../features/admin/modals/NotificationModal";

const AdminLayout = () => {
  const { sidebarExpanded, toggleSidebar } = useAdminLayout();
  const navigate = useNavigate();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };

    if (profileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileDropdownOpen]);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const handleGoToProfile = () => {
    setProfileDropdownOpen(false);
    navigate('/admin/profile');
  };

  const handleSignOut = () => {
    setProfileDropdownOpen(false);
    navigate('/login');
  };

  // Sidebar links
  const sidebarLinks = [
    { icon: Home, label: "Dashboard", path: "/admin" },
    { icon: Users, label: "User management", path: "/admin/users" },
    { icon: Package, label: "Product management", path: "/admin/products" },
    { icon: Gift, label: "Seller management", path: "/admin/sellers" },
    { icon: CreditCard, label: "Orders and Payment", path: "/admin/orders" },
    { icon: DollarSign, label: "Transaction", path: "/admin/transactions" },
    { icon: BarChart3, label: "Analytic & Reports", path: "/admin/analytics" },
    { icon: MessageCircle, label: "Communication", path: "/admin/communication" },
    { icon: Scale, label: "Dispute Resolution", path: "/admin/disputes" },
  ];

  const bottomLinks = [
    { icon: UserCircle, label: "Profile", path: "/admin/profile" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
    { icon: LogOut, label: "Log out", path: "/admin/logout" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen ${
          sidebarExpanded ? "w-80" : "w-16"
        } bg-[#009883] to-teal-600 shadow-xl transition-all duration-300 flex flex-col z-10`}
      >
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
              return (
                <NavLink
                  key={idx}
                  to={link.path}
                  end={link.path === "/admin"}
                  className={({ isActive }) =>
                    `w-full flex items-center px-4 py-4 rounded-xl transition-all duration-200 group ${
                      isActive
                        ? "bg-white/20 text-white backdrop-blur-sm shadow-lg border border-white/20"
                        : "text-white/80 hover:bg-white/10 hover:text-white hover:shadow-md"
                    } ${!sidebarExpanded ? "justify-center" : ""}`
                  }
                >
                  <Icon
                    className={`flex-shrink-0 ${
                      sidebarExpanded ? "w-5 h-5" : "w-6 h-6"
                    }`}
                  />
                  {sidebarExpanded && (
                    <span className="ml-4 font-medium text-sm text-left flex-1">
                      {link.label}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-teal-400/30 p-4 mt-auto">
          <div className="space-y-2">
            {bottomLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={idx}
                  to={link.path}
                  className={({ isActive }) =>
                    `w-full flex items-center px-4 py-4 rounded-xl transition-all duration-200 group ${
                      isActive
                        ? "bg-white/20 text-white backdrop-blur-sm shadow-lg border border-white/20"
                        : "text-white/80 hover:bg-white/10 hover:text-white hover:shadow-md"
                    } ${!sidebarExpanded ? "justify-center" : ""}`
                  }
                >
                  <Icon
                    className={`flex-shrink-0 ${
                      sidebarExpanded ? "w-5 h-5" : "w-6 h-6"
                    }`}
                  />
                  {sidebarExpanded && (
                    <span className="ml-4 font-medium text-sm text-left flex-1">
                      {link.label}
                    </span>
                  )}
                </NavLink>
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
            <ChevronLeft
              className={`w-4 h-4 transition-transform ${
                !sidebarExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Main Content Container */}
      <div
        className={`flex-1 flex flex-col ${
          sidebarExpanded ? "ml-80" : "ml-16"
        } transition-all duration-300`}
      >
        {/* Header */}
        <div
          className={`fixed top-0 ${
            sidebarExpanded ? "left-80" : "left-16"
          } right-0 px-6 py-4 bg-white  z-20 transition-all duration-300`}
        >
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
              <NotificationButton />
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center space-x-2 hover:bg-gray-100 rounded-lg p-2 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Sarah Johnson</div>
                    <div className="text-xs text-green-500">Online</div>
                  </div>
                </button>
                
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="py-1">
                      <button
                        onClick={handleGoToProfile}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <UserCircle className="w-4 h-4" />
                        <span>Go to profile</span>
                      </button>
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pt-16 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;