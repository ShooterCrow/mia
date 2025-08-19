import React from "react";
import {
  Eye,
  Mail,
  MessageSquare,
  Ban,
} from "lucide-react";

const UserActionsModal = ({ isOpen, onClose, onAction }) => {
  if (!isOpen) return null;

  const handleAction = (action) => {
    onAction(action);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
        <ul className="py-1">
          <li
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center cursor-pointer"
            onClick={() => handleAction("view")}
          >
            <Eye className="w-4 h-4 mr-2" />
            View Profile
          </li>
          <li
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center cursor-pointer"
            onClick={() => handleAction("email")}
          >
            <Mail className="w-4 h-4 mr-2" />
            Send Email
          </li>
          <li
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center cursor-pointer"
            onClick={() => handleAction("message")}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Send Message
          </li>
          <li
            className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center cursor-pointer"
            onClick={() => handleAction("suspend")}
          >
            <Ban className="w-4 h-4 mr-2" />
            Suspend User
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserActionsModal;