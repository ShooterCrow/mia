import React from 'react';
import { Mail, Phone, MapPin, Calendar, Edit3 } from 'lucide-react';

const AdminProfile = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Profile Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-6">
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
                alt="Sarah Johnson"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Profile Info */}
            <div>
              <h1 className="text-4xl font-semibold text-gray-900 mb-3">Sarah Johnson</h1>
              <p className="text-gray-600 text-lg mb-6">SarahJohnson765@gmail.com</p>
              
              {/* Role Badges */}
              <div className="flex gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                  Admin
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                  Operations
                </span>
              </div>
            </div>
          </div>
          
          {/* Edit Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium">
            <Edit3 size={18} />
            Edit profile
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-6 mb-8">
        <div className="flex items-center gap-4 text-gray-700 text-lg">
          <Mail size={22} className="text-gray-500" />
          <span>SarahJohnson765@gmail.com</span>
        </div>
        
        <div className="flex items-center gap-4 text-gray-700 text-lg">
          <Phone size={22} className="text-gray-500" />
          <span>+1 (555) 123-4567</span>
        </div>
        
        <div className="flex items-center gap-4 text-gray-700 text-lg">
          <MapPin size={22} className="text-gray-500" />
          <span>123, main street ikoyi, main island lagos</span>
        </div>
        
        <div className="flex items-center gap-4 text-gray-700 text-lg">
          <Calendar size={22} className="text-gray-500" />
          <span>Joined 15/06/2024</span>
        </div>
      </div>

      {/* Access Permissions */}
      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Access Permissions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="font-medium text-gray-900 text-lg">User Management</span>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="font-medium text-gray-900 text-lg">Product Management</span>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="font-medium text-gray-900 text-lg">Analytics</span>
            </div>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span className="font-medium text-gray-500 text-lg">Settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;