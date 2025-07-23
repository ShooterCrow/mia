// components/onboarding/BusinessDetailsForm.jsx
import { Briefcase, Info } from 'lucide-react';
import { useState } from 'react';

export default function BusinessDetailsForm({ formData, onInputChange, onContinue, onBack }) {
  const [charCount, setCharCount] = useState(formData.businessDescription?.length || 0);

  const handleChange = (field, value) => {
    onInputChange(field, value);
    
    if (field === 'businessDescription') {
      setCharCount(value.length);
    }
  };

  return (
    <form className="space-y-6">
      {/* Business Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Business name
        </label>
        <input
          type="text"
          value={formData.businessName}
          onChange={(e) => handleChange('businessName', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
          placeholder="Enter your business name"
        />
      </div>

      {/* Business Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Business type
        </label>
        <input
          type="text"
          value={formData.businessType}
          onChange={(e) => handleChange('businessType', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
          placeholder="Enter your business type"
        />
      </div>

      {/* Business Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Business Description
        </label>
        <textarea
          value={formData.businessDescription}
          onChange={(e) => handleChange('businessDescription', e.target.value)}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
          placeholder="Describe your business"
        />
        <div className={`text-sm mt-1 ${charCount < 50 ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
          Minimum 50 characters ({charCount}/50)
        </div>
      </div>

      {/* Selling Experience */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">Selling Experience</h3>
        <div className="space-y-4">
          {[
            { value: 'just_started', label: 'Just getting started', description: 'New to online selling' },
            { value: 'some_experience', label: 'Some experience', description: 'Sold online before' },
            { value: 'experienced', label: 'Experienced seller', description: 'Multiple platforms & years of experience' }
          ].map((option) => (
            <label key={option.value} className="flex items-start space-x-3 cursor-pointer">
              <input
                type="radio"
                name="sellingExperience"
                value={option.value}
                checked={formData.sellingExperience === option.value}
                onChange={(e) => handleChange('sellingExperience', e.target.value)}
                className="mt-1"
              />
              <div>
                <span className="block font-medium text-gray-800 dark:text-gray-200">{option.label}</span>
                <span className="block text-gray-600 dark:text-gray-400">{option.description}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Pro Tip */}
      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="flex items-start space-x-3">
          <Info className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <span className="font-semibold">Pro Tip:</span> A compelling business description helps customers trust your brand and understand what makes your products special. Be authentic and highlight your unique value proposition!
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}