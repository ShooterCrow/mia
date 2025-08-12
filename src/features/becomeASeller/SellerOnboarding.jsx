import { useState } from 'react';
import { TrendingUp, Shield, Clock, Zap, Headphones, User, Briefcase, IdCard } from 'lucide-react';
import SellerOnboardingLayout from '../../components/layout/UserLayout/SellerOnboardingLayout';
import PersonalInfoForm from './components/PersonalForm';
import BusinessDetailsForm from './components/BusinessDetailsForm';
import ProductCategories from './components/ProductCategories';
import MarketplaceWelcome from './components/MarketplaceWelcome';
import IdVerification from './components/IdVerification';

export default function SellerOnboarding() {
    const [currentStep, setCurrentStep] = useState('landing');
    const [formData, setFormData] = useState({
        // Personal Info
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',

        // Business Details
        businessName: '',
        businessType: '',
        businessDescription: '',
        sellingExperience: ''
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleStartJourney = () => {
        setCurrentStep('personal-info');
    };

    const handleBack = (step) => {
        setCurrentStep(step);
    };

    const handleContinue = (step) => {
        setCurrentStep(step);
    };

    if (currentStep === 'personal-info') {
        return (
            <SellerOnboardingLayout
                title="Personal Information"
                description="Tell us about yourself so we can personalize your seller experience"
                icon={User}
                onBack={handleBack}
                onContinue={() => handleContinue("business-details")}
            >
                <PersonalInfoForm
                    formData={formData}
                    onInputChange={handleInputChange}
                />
            </SellerOnboardingLayout>
        );
    }

    if (currentStep === 'business-details') {
        return (
            <SellerOnboardingLayout
                title="Business Details"
                description="Help us understand your business so we can provide the best selling experience"
                icon={Briefcase}
                onBack={() => handleBack("personal-info")}
                onContinue={() => handleContinue("product-categories")}
            >
                <BusinessDetailsForm
                    formData={formData}
                    onInputChange={handleInputChange}
                />
            </SellerOnboardingLayout>
        );
    }

    if (currentStep === 'product-categories') {
        return (
            <SellerOnboardingLayout
                title="Product Categories"
                description="Select the categories that best match what you plan to sell (up to 5)"
                icon={Briefcase}
                onBack={() => handleBack("business-details")}
                onContinue={() => handleContinue("id-verification")}
            >
                <ProductCategories />
            </SellerOnboardingLayout>
        );
    }

    if (currentStep === 'id-verification') {
        return (
            <SellerOnboardingLayout
                title="Id Verification"
                description="Verify your identity to build trust with customers and unlock all seller features"
                icon={IdCard}
                onBack={() => handleBack("product-categories")}
                onContinue={() => handleContinue("welcome")}
            >
                <IdVerification />
            </SellerOnboardingLayout>
        );
    }


    if (currentStep === 'welcome') {
        return (
            <MarketplaceWelcome />
        );
    }

    return (

        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/asset/home-image.png"
                        alt="Modern interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>

                <div className="relative z-10 px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Welcome to Your
                            <br />
                            Seller Journey
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            Transform your passion into profit with our
                            <br />
                            powerful marketplace platform
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Grow Business Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mr-4">
                                    <TrendingUp className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Grow your business
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Reach millions of customers worldwide
                            </p>
                        </div>

                        {/* Security Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                                    <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Secure & Protected
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Advanced fraud protection for all transactions
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* What to Expect Section */}
            <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
                        What to Expect
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                        {/* Quick Setup */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Zap className="w-8 h-8 text-green-600 dark:text-green-400" />
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                                5 minutes
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                Quick Setup
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Complete onboarding in just a few steps
                            </p>
                        </div>

                        {/* Fast Approval */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                                24 Hours
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                Fast Approval
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Get verified and start selling quickly
                            </p>
                        </div>

                        {/* Dedicated Support */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Headphones className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                                Ongoing
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                Dedicated Support
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                24/7 seller support when you need it
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <button
                        onClick={handleStartJourney}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
                    >
                        Start your seller journey →
                    </button>
                </div>
            </div>
        </div>
    );
}