import React from 'react';

const ResetPasswordModal = ({ isOpen, onClose, userName, onConfirm }) => {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm({
        userName: userName,
        timestamp: new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })
      });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800">
              Reset Password - {userName}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Description Text */}
          <p className="text-gray-600 text-base leading-relaxed">
            This will send a password reset email to the user's registered email address. The user will be able to create a new password using the reset link.
          </p>

          {/* Note Box */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-yellow-800">
                  <span className="font-semibold">Note:</span> The user will be notified of this action and their current sessions will be invalidated.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-6 space-y-3">
          <button
            className="w-full bg-red-400 hover:bg-red-500 text-white py-3 px-4 rounded-lg font-medium transition-colors"
            onClick={handleConfirm}
          >
            Send Notification
          </button>
          <button
            className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;