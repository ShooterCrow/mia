import React, { useState, useRef, useEffect } from 'react';
import { User, ChevronDown, Settings, Store, Package, MessageCircle, HelpCircle, Plus, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGetUserByIdQuery } from '../../../features/user/userApiSlice';
import { useAuth } from '../../../hooks/useAuth';

// Mobile Dropdown Component specifically for user menu
const MobileUserDropdown = ({ menuItems, onClose, username, full_name }) => {
    return (
        <div className="w-full">
            {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                    <Link key={index} to={item.path}>
                        <button
                            onClick={() => {
                                if (onClose) onClose();
                            }}
                            className={`w-full px-2.5 py-2 text-left text-sm ${item.color ? "text-" + item.color + "-500" : "text-gray-800"} dark:${item.color ? "text-" + item.color + "-200" : "text-gray-200"} hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center`}
                        >
                            <IconComponent className={`w-4 h-4 mr-2 ${item.color ? "text-" + item.color + "-500" : "text-gray-500"} `} />
                            {item.label}
                        </button>
                    </Link>
                );
            })}
        </div>
    );
};

const UserDropdown = ({ onMobileClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const {userId} = useAuth();
    const { data } = useGetUserByIdQuery(userId, {
        skip: !userId,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        retry: 3
    });

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document?.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuItems = [
        { icon: Settings, label: 'Account setting', path: '/dashboard' },
        { icon: Store, label: 'Become a seller', path: '/dashboard/seller' },
        { icon: Package, label: 'My orders', path: '/dashboard/orders' },
        { icon: MessageCircle, label: 'Messages', path: '/dashboard/messages' },
        { icon: HelpCircle, label: 'Support & Help', path: '/dashboard/support' },
        { icon: Plus, label: 'Guest product listing', path: '/dashboard/my-products' },
        { icon: LogOut, label: 'Logout', onclick: '/dashboard/my-products', color: "red" },
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Desktop Dropdown */}
            <div className="relative text-left hidden lg:inline-block" ref={dropdownRef}>
                <button
                    onClick={toggleDropdown}
                    className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors"
                >
                    <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </div>
                    <span className="hidden sm:block">{data?.username || data?.full_name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                        <div className="py-2">
                            {menuItems.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <Link onClick={toggleDropdown} to={item.path} key={index}>
                                        <button
                                            className={`w-full px-2.5 py-2 text-left text-sm ${item.color ? "text-" + item.color + "-500" : "text-gray-800"} dark:${item.color ? "text-" + item.color + "-200" : "text-gray-200"} hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center`}
                                        >
                                            <IconComponent className={`w-4 h-4 mr-2 ${item.color ? "text-" + item.color + "-500" : "text-gray-500"} `} />
                                            {item.label}
                                        </button>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Dropdown */}
            <div className="lg:hidden">
                <MobileUserDropdown
                    menuItems={menuItems}
                    onClose={onMobileClose}
                    username={data?.username}
                    full_name={data?.full_name}
                />
            </div>
        </>
    );
};

export default UserDropdown;