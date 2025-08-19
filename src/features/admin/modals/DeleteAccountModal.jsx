import React, { useState } from 'react';

const DeleteAccountModal = ({ isOpen, onClose, userName, onConfirm }) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState('');

  const handleConfirm = () => {
    if (onConfirm && deleteConfirmation === 'DELETE') {
      onConfirm({
        userName: userName,
        timestamp: new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })
      });
    }
    handleClose();
  };

  const handleClose = () => {
    setDeleteConfirmation('');
    onClose();
  };

  if (!isOpen) return null;

  const isDeleteEnabled = deleteConfirmation === 'DELETE';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <h3 className="text-xl font-semibold text-red-500">
              Delete Account - {userName}
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
          {/* Warning Box */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Warning: This action cannot be undone!
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  Deleting this account will permanently remove all user data, orders, and associated information.
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type "DELETE" to confirm
            </label>
            <input
              type="text"
              value={deleteConfirmation}
              onChange={(e) => setDeleteConfirmation(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="DELETE"
            />
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-6 space-y-3">
          <button
            className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
              isDeleteEnabled
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-red-300 text-red-100 cursor-not-allowed'
            }`}
            onClick={handleConfirm}
            disabled={!isDeleteEnabled}
          >
            Delete Account
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

export default DeleteAccountModal;