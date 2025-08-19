import React from 'react';
import { Mail, Phone, MapPin, Calendar, Edit3 } from 'lucide-react';

const AdminProfile = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Profile Header */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-6">
            {/* Profile Image */}
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
                alt="Sarah Johnson"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Profile Info */}
            <div>
              <h1 className="text-3xl font-semibold text-gray-900 mb-2">Sarah Johnson</h1>
              <p className="text-gray-600 text-lg mb-4">SarahJohnson765@gmail.com</p>
              
              {/* Role Badges */}
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Admin
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  Operations
                </span>
              </div>
            </div>
          </div>
          
          {/* Edit Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
            <Edit3 size={16} />
            Edit profile
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols gap-6 mb-8">
        <div className="flex items-center gap-3 text-gray-600">
          <Mail size={20} className="text-gray-400" />
          <span>SarahJohnson765@gmail.com</span>
        </div>
        
        <div className="flex items-center gap-3 text-gray-600">
          <Phone size={20} className="text-gray-400" />
          <span>+1 (555) 123-4567</span>
        </div>
        
        <div className="flex items-center gap-3 text-gray-600">
          <MapPin size={20} className="text-gray-400" />
          <span>123, main street ikoyi, main island lagos</span>
        </div>
        
        <div className="flex items-center gap-3 text-gray-600">
          <Calendar size={20} className="text-gray-400" />
          <span>Joined 15/06/2024</span>
        </div>
      </div>

      {/* Access Permissions */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Access Permissions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium text-gray-900">User Management</span>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium text-gray-900">Product Management</span>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium text-gray-900">Analytics</span>
            </div>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span className="font-medium text-gray-500">Settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;