import React, { useState } from 'react';
import { ChevronDown, Plus, Trash2, Shield, Bell, Users, Cog } from 'lucide-react';

const PlatformSettings = () => {
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);
  const [suspiciousAlerts, setSuspiciousAlerts] = useState(true);
  const [sessionMonitoring, setSessionMonitoring] = useState(true);
  const [messageType, setMessageType] = useState('Email');
  const [template, setTemplate] = useState('Custom');
  const [subjectTitle, setSubjectTitle] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [targetAudience, setTargetAudience] = useState({
    allUsers: false,
    activeBuyers: false,
    activeSellers: false,
    inactiveUsers: false,
    premiumMembers: false,
    newUsers: false
  });

  const categories = [
    { name: 'Electronics', products: '2654 Products', active: true },
    { name: 'Vehicle', products: '2654 Products', active: true },
    { name: 'Fashion', products: '2654 Products', active: true }
  ];

  const announcements = [
    {
      title: 'System Maintenance Notice',
      description: 'Scheduled maintenance on June 20th, 2024',
      created: '2024-06-14',
      status: 'Active'
    },
    {
      title: 'System Maintenance Notice',
      description: 'Scheduled maintenance on June 20th, 2024',
      created: '2024-06-14',
      status: 'Active'
    }
  ];

  const adminActivity = [
    {
      action: 'Admin login',
      details: 'john.doe@admin.com from 192.168.1.100',
      time: '2 minutes ago',
      date: '2024-06-14',
      status: 'Success'
    },
    {
      action: 'User suspension',
      details: 'suspended helpdesk.com from 192.168.1.101',
      time: '2 minutes ago',
      date: '2024-06-13',
      status: 'Success'
    },
    {
      action: 'Failed login attempt',
      details: 'unknown@email.com from 45.123.45.67',
      time: '2 minutes ago',
      date: '2024-06-14',
      status: 'Blocked'
    }
  ];

  const handleTargetAudienceChange = (key) => {
    setTargetAudience(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Platform Settings</h1>
          <p className="text-gray-600 mt-1">Configure marketplace settings, categories, and system preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Product Categories */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Cog className="w-5 h-5 text-gray-400 mr-3" />
                    <h2 className="text-lg font-medium text-gray-900">Product Categories</h2>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Category
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">{category.name}</h3>
                        <p className="text-sm text-gray-500">{category.products}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          Active
                        </span>
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Site-Wide Announcement */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell className="w-5 h-5 text-gray-400 mr-3" />
                    <h2 className="text-lg font-medium text-gray-900">Site - Wide Announcement</h2>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                    Create Announcement
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {announcement.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{announcement.description}</p>
                        <p className="text-xs text-gray-400 mt-1">Created {announcement.created}</p>
                      </div>
                      <button className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-gray-400 mr-3" />
                  <h2 className="text-lg font-medium text-gray-900">Security Settings</h2>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-500">Require 2FA for all admin accounts</p>
                  </div>
                  <button
                    onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      twoFactorAuth ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">Suspicious Activity Alerts</h3>
                    <p className="text-sm text-gray-500">Get notified of unusual admin activity</p>
                  </div>
                  <button
                    onClick={() => setSuspiciousAlerts(!suspiciousAlerts)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      suspiciousAlerts ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        suspiciousAlerts ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">Session Monitoring</h3>
                    <p className="text-sm text-gray-500">Session Monitoring</p>
                  </div>
                  <button
                    onClick={() => setSessionMonitoring(!sessionMonitoring)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      sessionMonitoring ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        sessionMonitoring ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Admin Activity */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-gray-400 mr-3" />
                  <h2 className="text-lg font-medium text-gray-900">Recent Admin Activity</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {adminActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{activity.action}</h3>
                        <p className="text-sm text-gray-500">{activity.details}</p>
                        <p className="text-xs text-gray-400">{activity.date}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            activity.status === 'Success'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {activity.status}
                        </span>
                        <span className="text-xs text-gray-400">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Compose Message */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Compose Message</h2>
                <p className="text-sm text-gray-500 mt-1">Create and send targeted messages to users</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message Type</label>
                    <div className="relative">
                      <select
                        value={messageType}
                        onChange={(e) => setMessageType(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md bg-white appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option>Email</option>
                        <option>SMS</option>
                        <option>Push</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Template</label>
                    <div className="relative">
                      <select
                        value={template}
                        onChange={(e) => setTemplate(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md bg-white appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option>Custom</option>
                        <option>Welcome</option>
                        <option>Notification</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject title</label>
                  <input
                    type="text"
                    value={subjectTitle}
                    onChange={(e) => setSubjectTitle(e.target.value)}
                    placeholder="Enter message subject..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message Content</label>
                  <textarea
                    value={messageContent}
                    onChange={(e) => setMessageContent(e.target.value)}
                    placeholder="Enter your message here..."
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Target Audience */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Target Audience</h2>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { key: 'allUsers', label: 'All Users', count: '23,456 users' },
                  { key: 'activeBuyers', label: 'Active Buyers', count: '12,345 users' },
                  { key: 'activeSellers', label: 'Active Sellers', count: '3,456 users' },
                  { key: 'inactiveUsers', label: 'Inactive Users', count: '7,890 users' },
                  { key: 'premiumMembers', label: 'Premium Members', count: '1,234 users' },
                  { key: 'newUsers', label: 'New Users (last 30 days)', count: '890 users' }
                ].map((audience) => (
                  <div key={audience.key} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id={audience.key}
                      checked={targetAudience[audience.key]}
                      onChange={() => handleTargetAudienceChange(audience.key)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={audience.key} className="flex-1">
                      <span className="text-sm font-medium text-gray-900">{audience.label}</span>
                      <span className="block text-xs text-gray-500">{audience.count}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Send Now
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                  Schedule
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                  Save Draft
                </button>
              </div>
              <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSettings;