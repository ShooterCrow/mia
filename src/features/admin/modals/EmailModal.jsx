import React, { useState } from "react";
import { Mail } from "lucide-react";

const EmailModal = ({ isOpen, onClose, userName }) => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleSendEmail = () => {
    // Add email sending logic here (e.g., API call)
    console.log(`Sending email to ${userName}: Subject - ${subject}, Content - ${content}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2 text-gray-600" />
            <h2 className="text-lg font-semibold">Send Email - {userName}</h2>
          </div>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter email subject..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter your email content..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 h-32 resize-none"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            onClick={handleSendEmail}
          >
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;