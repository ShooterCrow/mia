import React, { useState } from 'react';

const SuspendModal = ({ isOpen, onClose, userName, onConfirm }) => {
  const [suspensionReason, setSuspensionReason] = useState('');
  const [suspensionDuration, setSuspensionDuration] = useState('');

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm({
        reason: suspensionReason,
        duration: suspensionDuration,
        timestamp: new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })
      });
    }
    handleClose();
  };

  const handleClose = () => {
    setSuspensionReason('');
    setSuspensionDuration('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 14.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h3 className="text-xl font-semibold text-red-500">
              Suspend Account - {userName}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Reason for suspension */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reason for suspension
            </label>
            <textarea
              value={suspensionReason}
              onChange={(e) => setSuspensionReason(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter reason for suspending this account..."
              rows="4"
            />
          </div>

          {/* Suspension duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              suspension duration
            </label>
            <input
              type="text"
              value={suspensionDuration}
              onChange={(e) => setSuspensionDuration(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g. 7 days, 30 days, permanent"
            />
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-6 space-y-3">
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-medium transition-colors"
            onClick={handleConfirm}
            disabled={!suspensionReason.trim() || !suspensionDuration.trim()}
          >
            Suspend Account
          </button>
          <button
            className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuspendModal;