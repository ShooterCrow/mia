    import { useState, useRef, useEffect } from "react";
    import { Bell, AlertTriangle, User, CheckCircle, Check, Trash2 } from "lucide-react";

    // Mock notification data (unchanged)
    const notificationData = [
    {
        id: 1,
        type: "warning",
        title: "High value transaction detected",
        description: "A transparency of $2,766 requires urgent review",
        priority: "high priority",
        date: "15/01/2024",
        time: "10:30:23",
        isRead: false,
        icon: AlertTriangle,
        iconColor: "text-red-500",
    },
    {
        id: 2,
        type: "info",
        title: "New User Registration",
        description: "Chidinma Chinedu Mbasi has created a new account",
        priority: "Medium Priority",
        date: "15/01/2024",
        time: "10:30:23",
        isRead: false,
        icon: User,
        iconColor: "text-blue-500",
    },
    {
        id: 3,
        type: "success",
        title: "Dispute Resolved",
        description: "Order #55463 has been successfully resolved",
        priority: "Low Priority",
        date: "15/01/2024",
        time: "10:30:23",
        isRead: true,
        icon: CheckCircle,
        iconColor: "text-green-500",
    },
    ];

    const NotificationDropdown = ({ isOpen, onClose, notifications = notificationData }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            onClose();
        }
        };

        if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    const getPriorityColor = (priority) => {
        switch (priority.toLowerCase()) {
        case "high priority":
            return "text-red-500";
        case "medium priority":
            return "text-orange-500";
        case "low priority":
            return "text-blue-500";
        default:
            return "text-gray-500";
        }
    };

    const unreadCount = notifications.filter((n) => !n.isRead).length;

    if (!isOpen) return null;

    return (
        <div
        ref={dropdownRef}
        className="absolute right-0  w-[626px] h-[460px] mt-2  gap-[23px] bg-white  rounded-xl shadow-2xl border gap-[23px]  "
        
        >
        {/* Header */}
        <div className="p-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
            <p className="text-sm text-gray-500 mt-1">{unreadCount} Unread notifications</p>
        </div>
            <div className=" ">
                    {/* Recent Notification Label */}
        <div className="px-4 py-2   border-b border-gray-100  ">
            <div className="flex items-center space-x-2">
            <Bell className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Recent Notification</span>
            </div>
        </div>

            {/* Notifications List */}
        <div className="max-h-80 overflow-y-auto">
            {notifications.map((notification) => {
            const IconComponent = notification.icon;
            return (
                <div
                key={notification.id}
                className={`p-2 border-b border-gray-50 hover:bg-gray-50 rounded-xl transition-colors ${
                    !notification.isRead ? "bg-blue-50/50" : ""
                }`}
                >
                <div className="flex border-b border-gray-200 pb-2 items-start space-x-3">
                    {/* Icon */}
                    <div className="flex-shrink-0 mt-1">
                    <IconComponent className={`w-5 h-5 ${notification.iconColor}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1  min-w-0">
                    <div className="flex items-start  justify-between">
                        <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                            <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                            {!notification.isRead && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true"></div>
                            )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{notification.description}</p>
                        <div className="flex items-center space-x-3 text-xs">
                            <span className={`font-medium ${getPriorityColor(notification.priority)}`}>
                            {notification.priority}
                            </span>
                            <span className="text-gray-400">{notification.date}</span>
                            <span className="text-gray-400">{notification.time}</span>
                        </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-8 ml-2">
                        <button
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                            aria-label="Mark notification as read"
                        >
                            <Check className="w-4 h-4 text-gray-400 hover:text-green-500" />
                        </button>
                        <button
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                            aria-label="Delete notification"
                        >
                            <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            );
            })}
        </div>
            </div>
        

        

        {/* Footer */}
        <div className="p-3 ">
            <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All Notifications
            </button>
        </div>
        </div>
    );
    };

    export default function NotificationButton() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const unreadCount = notificationData.filter((n) => !n.isRead).length;

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative">
        <button
            className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
            onClick={toggleDropdown}
            aria-label={`View notifications (${unreadCount} unread)`}
        >
            <Bell className="w-6 h-6 text-gray-600" />
            {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">{unreadCount}</span>
            </div>
            )}
        </button>

        <NotificationDropdown isOpen={isDropdownOpen} onClose={closeDropdown} notifications={notificationData} />
        </div>
    );
    }