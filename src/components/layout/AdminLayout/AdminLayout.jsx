import React, { useState } from "react";
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
} from "lucide-react";
import AdminDashboard from "../../../features/admin/pages/AdminDashboard"; 

const AdminLayout = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const isActive = (item) => activeItem === item;

  // Sidebar links for desktop/tablet
  const sidebarLinks = [
    { icon: Home, label: "Dashboard", path: "/admin", isActive: true },
    { icon: Users, label: "User management", path: "/admin/users" },
    { icon: Package, label: "Product management", path: "/admin/products" },
    { icon: Gift, label: "Seller management", path: "/admin/sellers" },
    { icon: CreditCard, label: "Orders and Payment", path: "/admin/orders" },
    { icon: DollarSign, label: "Transaction", path: "/admin/transactions" },
    { icon: BarChart3, label: "Analytic & Reports", path: "/admin/analytics" },
    { icon: MessageCircle, label: "Communication", path: "/admin/communication" },
    { icon: Scale, label: "Dispute Resolution", path: "/admin/disputes" },
  ];

  // Bottom section links
  const bottomLinks = [
    { icon: Settings, label: "Settings", path: "/admin/settings" },
    { icon: LogOut, label: "Log out", path: "/admin/logout" },
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
      <div
        className={`${
          sidebarExpanded ? "w-80" : "w-16"
        } bg-[#009883] to-teal-600 shadow-xl transition-all duration-300 flex flex-col z-30 relative`}
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
              const isActiveLink = link.isActive || isActive(link.label);

              return (
                <button
                  key={idx}
                  onClick={() => handleItemClick(link.label)}
                  className={`w-full flex items-center px-4 py-4 rounded-xl transition-all duration-200 group ${
                    isActiveLink
                      ? "bg-white/20 text-white backdrop-blur-sm shadow-lg border border-white/20"
                      : "text-white/80 hover:bg-white/10 hover:text-white hover:shadow-md"
                  } ${!sidebarExpanded ? "justify-center" : ""}`}
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
                      ? "bg-white/20 text-white backdrop-blur-sm shadow-lg border border-white/20"
                      : "text-white/80 hover:bg-white/10 hover:text-white hover:shadow-md"
                  } ${!sidebarExpanded ? "justify-center" : ""}`}
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
            <ChevronLeft
              className={`w-4 h-4 transition-transform ${
                !sidebarExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Show dashboard content when Dashboard is active */}
        {activeItem === "Dashboard" ? (
          <AdminDashboard />
        ) : (
          <main className="flex-1 overflow-auto p-8">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-2xl font-bold mb-4">{activeItem}</h1>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-lg font-semibold mb-2">Current Section: {activeItem}</h2>
                <p className="text-gray-600">
                  This is the {activeItem} section. Content for this section would be implemented here.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold mb-2">Feature 1</h3>
                  <p className="text-gray-600 text-sm">Content specific to {activeItem}</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold mb-2">Feature 2</h3>
                  <p className="text-gray-600 text-sm">Content specific to {activeItem}</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold mb-2">Feature 3</h3>
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

export default AdminLayout;