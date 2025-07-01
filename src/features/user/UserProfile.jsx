import { User, Bell, Shield } from "lucide-react";
import { useState } from "react";

function UserProfile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    telephone: "+234",
    email: "",
    city: "",
    username: "",
    country: "",
    occupation: "",
    gender: "Male"
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", profileData);
  };

  const handleDeleteAccount = () => {
    console.log("Delete account requested");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  value={profileData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  value={profileData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              {/* Telephone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Telephone
                </label>
                <input
                  type="tel"
                  value={profileData.telephone}
                  onChange={(e) => handleInputChange('telephone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  City
                </label>
                <input
                  type="text"
                  value={profileData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={profileData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  value={profileData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              {/* Occupation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Occupation
                </label>
                <input
                  type="text"
                  value={profileData.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            {/* Gender Section */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Gender:
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={profileData.gender === 'Male'}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-4 h-4 text-red-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-red-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={profileData.gender === 'Female'}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-4 h-4 text-red-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-red-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Female</span>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={handleSaveChanges}
                className="flex-1 px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
              >
                Save changes
              </button>
              <button
                onClick={handleDeleteAccount}
                className="flex-1 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
              >
                Delete Account
              </button>
            </div>
          </div>
        );

      case 'notification':
        return (
          <div className="p-6">
            <div className="text-center py-12">
              <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Notification Settings
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Manage your notification preferences
              </p>
              
              <div className="space-y-4 max-w-md mx-auto">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-left">
                    <p className="font-medium text-gray-900 dark:text-white">Email Notifications</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Receive updates via email</p>
                  </div>
                  <input type="checkbox" className="w-4 h-4 text-red-600 rounded focus:ring-red-500" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-left">
                    <p className="font-medium text-gray-900 dark:text-white">Push Notifications</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Get notified on your device</p>
                  </div>
                  <input type="checkbox" className="w-4 h-4 text-red-600 rounded focus:ring-red-500" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-left">
                    <p className="font-medium text-gray-900 dark:text-white">SMS Notifications</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Receive text messages</p>
                  </div>
                  <input type="checkbox" className="w-4 h-4 text-red-600 rounded focus:ring-red-500" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="p-6">
            <div className="text-center py-12">
              <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Security Settings
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Manage your account security
              </p>
              
              <div className="space-y-4 max-w-md mx-auto">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-left">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Change Password</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Update your password to keep your account secure
                  </p>
                  <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                    Update Password
                  </button>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-left">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Two-Factor Authentication</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Add an extra layer of security to your account
                  </p>
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                    Enable 2FA
                  </button>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-left">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Login Sessions</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Manage your active login sessions
                  </p>
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                    View Sessions
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-8 px-4">
      <div className="max-w-2xl mx-auto rounded-lg shadow-sm">
        {/* Header Section */}
        <div className="text-center pt-8 pb-6 px-6">
          <div className="relative inline-block mb-4">
            <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <User className="w-10 h-10 text-gray-400 dark:text-gray-500" />
            </div>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
            Maxwell Gordon
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            National representative of foreign Affairs South African
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 px-6">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-3 text-sm font-medium focus:outline-none ${
              activeTab === 'profile' 
                ? 'text-red-600 border-b-2 border-red-600' 
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Profile
          </button>
          <button 
            onClick={() => setActiveTab('notification')}
            className={`px-6 py-3 text-sm font-medium focus:outline-none ${
              activeTab === 'notification' 
                ? 'text-red-600 border-b-2 border-red-600' 
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Notification
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={`px-6 py-3 text-sm font-medium focus:outline-none ${
              activeTab === 'security' 
                ? 'text-red-600 border-b-2 border-red-600' 
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Security
          </button>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
}

export default UserProfile