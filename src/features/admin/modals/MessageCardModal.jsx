import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';

const MessageCardModal = ({ isOpen = true, onClose, recipient = "Sarah Johnson" }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message to:', recipient);
      console.log('Message:', message);
      // Here you would typically handle the actual message sending
      setMessage('');
      if (onClose) onClose();
    }
  };

  const handleCancel = () => {
    setMessage('');
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md mx-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-800">
              Send Message - {recipient}
            </h2>
          </div>
          <button
            onClick={handleCancel}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message..."
              className="w-full h-32 p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              autoFocus
            />
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-xl transition-colors"
            >
              Send Message
            </button>
            <button
              onClick={handleCancel}
              className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-4 px-6 rounded-xl border border-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCardModal;