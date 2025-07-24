import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
    Home, 
    Search, 
    ShoppingCart, 
    Heart,
    User,
    Package,
    CreditCard,
    Settings,
    HelpCircle,
    Gift,
    MapPin,
    Clock,
    Menu,
    X,
    ChevronLeft,
    ChevronRight,
    LogOut,
    MessageCircle
} from 'lucide-react';
import { useSellerLayout } from './SellerLayoutContext';

const SellerLayout = () => {
    const location = useLocation();
    const { 
        bottomBarExpanded, 
        toggleBottomBar, 
        closeBottomBar, 
        isMobile,
        sidebarExpanded,
        toggleSidebar,
        isTablet
    } = useSellerLayout();
    
    const isActive = (path) => location.pathname === path;

    // Main bottom bar links (always visible on mobile)
    const mainBottomLinks = [
        { icon: User, label: 'Profile', path: '/seller-dashboard/profile' },
        { icon: Package, label: 'Orders', path: '/seller-dashboard/orders' },
        { icon: MessageCircle, label: 'Messages', path: '/seller-dashboard/messages' },
        { icon: ShoppingCart, label: 'Product Upload', path: '/seller-dashboard/product-upload' },
        { icon: Menu, label: 'More', action: 'toggle' }
    ];

    // All sidebar links (for desktop/tablet)
    const sidebarLinks = [
        { icon: User, label: 'Profile', path: '/seller-dashboard/profile' },
        { icon: Package, label: 'Orders', path: '/seller-dashboard/orders' },
        { icon: MessageCircle, label: 'Messages', path: '/seller-dashboard/messages' },
        { icon: ShoppingCart, label: 'Product Upload', path: '/seller-dashboard/product-upload' },
        { icon: CreditCard, label: 'Payment', path: '/seller-dashboard/payment-methods' },
        { icon: Clock, label: 'History', path: '/seller-dashboard/history' },
        { icon: LogOut, color:"red", label: 'Logout', path: '/seller-dashboard/logout' },
    ];

    // Additional links (shown when bottom bar expanded on mobile)
    const expandedLinks = [
        { icon: CreditCard, label: 'Payment', path: '/seller-dashboard/payment-methods' },
        { icon: Clock, label: 'History', path: '/seller-dashboard/history' },
        { icon: LogOut, color:"red", label: 'Logout', path: '/seller-dashboard/logout' },
    ];

    const handleLinkClick = (link) => {
        if (link.action === 'toggle') {
            toggleBottomBar();
        } else {
            closeBottomBar();
        }
    };

    // Tooltip component for collapsed sidebar
    const Tooltip = ({ children, text, show }) => (
        <div className="relative group">
            {children}
            {show && (
                <div className="absolute left-0 z-[0] ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 pointer-events-none">
                    {text}
                </div>
            )}
        </div>
    );

    return (
        <div className="flex bg-gray-50 dark:bg-gray-900">
            {/* Desktop/Tablet Sidebar */}
            {!isMobile && (
                <div className={`${
                    sidebarExpanded ? 'w-64' : 'w-16'
                } bg-white dark:bg-gray-900 shadow-lg border-r border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col z-30`}>
                    
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                        {sidebarExpanded && (
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Menu</h2>
                        )}
                        <button
                            onClick={toggleSidebar}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            aria-label={sidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
                        >
                            {sidebarExpanded ? (
                                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                            ) : (
                                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                            )}
                        </button>
                    </div>

                    {/* Sidebar Links */}
                    <nav className="flex-1 overflow-y-auto py-4">
                        <div className="space-y-1 px-3">
                            {sidebarLinks.map((link, idx) => {
                                const Icon = link.icon;
                                const isActiveLink = isActive(link.path);
                                
                                const linkContent = (
                                    <Link
                                        key={idx}
                                        to={link.path}
                                        className={`flex items-center px-3 py-3 rounded-lg transition-colors ${
                                            isActiveLink
                                                ? 'bg-blue-500 text-white'
                                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                        } ${!sidebarExpanded ? 'justify-center' : ''}`}
                                    >
                                        <Icon className="w-6 h-6 flex-shrink-0" />
                                        {sidebarExpanded && (
                                            <span className="ml-3 font-medium">{link.label}</span>
                                        )}
                                    </Link>
                                );

                                return sidebarExpanded ? linkContent : (
                                    <Tooltip key={idx} text={link.label} show={!sidebarExpanded}>
                                        {linkContent}
                                    </Tooltip>
                                );
                            })}
                        </div>
                    </nav>
                </div>
            )}

            {/* Main Content Container */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Main Content */}
                <main className={`flex-1 overflow-auto ${
                    isMobile ? (bottomBarExpanded ? 'pb-80' : 'pb-20') : 'p-0'
                } transition-all duration-300`}>
                    <Outlet />
                </main>

                {/* Mobile Bottom Bar Components */}
                {isMobile && (
                    <>
                        {/* Overlay for expanded bottom bar */}
                        {bottomBarExpanded && (
                            <div 
                                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                                onClick={closeBottomBar}
                            />
                        )}

                        {/* Expanded Options Panel */}
                        {bottomBarExpanded && (
                            <div className="fixed bottom-20 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 z-50 transition-all duration-300">
                                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">More Options</h3>
                                    <button
                                        onClick={closeBottomBar}
                                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    </button>
                                </div>
                                <div className="grid grid-cols-4 gap-4 p-4 max-h-60 overflow-y-auto">
                                    {expandedLinks.map((link) => {
                                        const Icon = link.icon;
                                        return (
                                            <Link
                                                key={link.path}
                                                to={link.path}
                                                onClick={() => handleLinkClick(link)}
                                                className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors ${
                                                    isActive(link.path)
                                                        ? 'bg-blue-500 text-white'
                                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                                }`}
                                            >
                                                <Icon className="w-6 h-6 mb-1" />
                                                <span className="text-xs font-medium text-center">{link.label}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Bottom Navigation Bar - Mobile Only - Fixed to bottom */}
                        <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 z-50">
                            <div className="flex justify-around items-center py-2 px-1">
                                {mainBottomLinks.map((link, index) => {
                                    const Icon = link.icon;
                                    const isMoreButton = link.action === 'toggle';
                                    const isActiveLink = !isMoreButton && isActive(link.path);
                                    
                                    if (isMoreButton) {
                                        return (
                                            <button
                                                key={index}
                                                onClick={() => handleLinkClick(link)}
                                                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${
                                                    bottomBarExpanded
                                                        ? 'bg-blue-500 text-white'
                                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                                }`}
                                                aria-label={bottomBarExpanded ? "Close menu" : "Open menu"}>
                                                {bottomBarExpanded ? (
                                                    <X className="w-6 h-6" />
                                                ) : (
                                                    <Icon className="w-6 h-6" />
                                                )}
                                                <span className="text-xs font-medium mt-1">
                                                    {bottomBarExpanded ? 'Close' : link.label}
                                                </span>
                                            </button>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            onClick={() => handleLinkClick(link)}
                                            className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${
                                                isActiveLink
                                                    ? 'bg-blue-500 text-white'
                                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                            }`}
                                        >
                                            <Icon className="w-6 h-6" />
                                            <span className="text-xs font-medium mt-1">{link.label}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </nav>
                    </>
                )}
            </div>
        </div>
    );
};

export default SellerLayout;