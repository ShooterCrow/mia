import React, { useState } from 'react';
import { Upload, Shield, FileText, Building2, Home } from 'lucide-react';

export default function IdVerification() {
  const [uploadedDocs, setUploadedDocs] = useState(0);
  const totalDocs = 3;
  const remainingDocs = totalDocs - uploadedDocs;

  const handleFileUpload = (docType) => {
    // Simulate file upload
    console.log(`Uploading ${docType} document`);
  };

  return (
    <div className="">
      <div className="">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Documents Uploaded: {uploadedDocs}/{totalDocs}
              </h2>
            </div>
            <p className="text-blue-600 dark:text-blue-400 text-sm">
              {remainingDocs} required documents remaining
            </p>
          </div>
        </div>

        {/* Benefits and Security Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Benefits of Verification */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Benefits of Verification
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-600 dark:bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  Verified seller badge on your profile
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-600 dark:bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  Higher customer trust and conversion
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-600 dark:bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  Access to premium seller tools
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-600 dark:bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  Priority customer support
                </span>
              </li>
            </ul>
          </div>

          {/* Security & Privacy */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Security & Privacy
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  Documents are encrypted and secure
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  Used only for identity verification
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  Processed within 24-48 hours
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  Compliant with data protection laws
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Upload Documents Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Upload Documents
          </h3>

          <div className="space-y-6">
            {/* Government ID */}
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                  <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <h4 className="text-base font-medium text-gray-900 dark:text-white mr-2">
                      Government ID
                    </h4>
                    <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-xs px-2 py-1 rounded">
                      Required
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Driver's license, passport, or national ID card
                  </p>
                </div>
              </div>

              <div 
                className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-gray-400 dark:hover:border-gray-500 transition-colors cursor-pointer"
                onClick={() => handleFileUpload('government-id')}
              >
                <Upload className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Drop your file here or{' '}
                  <span className="text-blue-600 dark:text-blue-400 underline">Browse</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  JPG, PNG or PDF (max 5MB)
                </p>
              </div>
            </div>

            {/* Business Registration */}
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                  <Building2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-medium text-gray-900 dark:text-white">
                    Business Registration
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Business license or registration certificate (if applicable)
                  </p>
                </div>
              </div>

              <div 
                className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-gray-400 dark:hover:border-gray-500 transition-colors cursor-pointer"
                onClick={() => handleFileUpload('business-registration')}
              >
                <Upload className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Drop your file here or{' '}
                  <span className="text-blue-600 dark:text-blue-400 underline">Browse</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  JPG, PNG or PDF (max 5MB)
                </p>
              </div>
            </div>

            {/* Address Verification */}
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-3">
                  <Home className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <h4 className="text-base font-medium text-gray-900 dark:text-white mr-2">
                      Address Verification
                    </h4>
                    <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-xs px-2 py-1 rounded">
                      Required
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Utility bill, bank statement, or lease agreement
                  </p>
                </div>
              </div>

              <div 
                className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-gray-400 dark:hover:border-gray-500 transition-colors cursor-pointer mb-6"
                onClick={() => handleFileUpload('address-verification')}
              >
                <Upload className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Drop your file here or{' '}
                  <span className="text-blue-600 dark:text-blue-400 underline">Browse</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  JPG, PNG or PDF (max 5MB)
                </p>
              </div>
            </div>

            {/* Important Guidelines */}
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
                Important Guidelines
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Ensure all documents are clear and readable
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    All four corners of the document must be visible
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Documents must be current and not expired
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Personal information must match across all documents
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    File formats: JPG, PNG, PDF (max 5MB each)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* What Happens Next Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mt-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-8 text-center">
            What Happens Next?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-semibold mx-auto mb-4">
                1
              </div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                Submit Documents
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Upload your verification documents
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-semibold mx-auto mb-4">
                2
              </div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                Review Process
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our team reviews within 24-48 hours
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-lg font-semibold mx-auto mb-4">
                3
              </div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                Get Verified
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Start selling with verified status
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}