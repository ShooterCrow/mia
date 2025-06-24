import React, { useState } from 'react';
import {
    Phone,
    ChevronDown,
    Search,
    User,
    HelpCircle,
    Globe,
    ShoppingBag,
    Menu,
    Store,
    Sun,
    Moon,
    Monitor,
    Headset,
    X
} from 'lucide-react';
import { useTheme } from '../ThemeProvider';
import Flag from 'react-world-flags';

const Header = () => {
    const { isDarkMode, toggleDarkMode, resetToSystem, hasUserPreference } = useTheme();
    const [showThemeMenu, setShowThemeMenu] = useState(false);
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const languageToCountry = {
        en: 'US',
        fr: 'FR',
        de: 'DE',
        es: 'ES',
        zh: 'CN',
        ja: 'JP',
    };

    const languages = [
        { code: 'en', name: 'English', short: 'ENG' },
        { code: 'fr', name: 'Français', short: 'FR' },
        { code: 'de', name: 'Deutsch', short: 'DE' },
        { code: 'es', name: 'Español', short: 'ES' },
        { code: 'zh', name: '中文', short: 'CN' },
        { code: 'ja', name: '日本語', short: 'JP' },
    ];

    const currentLanguage = languages.find(lang => lang.code === selectedLanguage);

    // Close dropdowns when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.theme-menu')) {
                setShowThemeMenu(false);
            }
            if (!event.target.closest('.language-menu')) {
                setShowLanguageMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="flex flex-col bg-white dark:bg-gray-900 w-full mx-auto items-center relative">
            {/* Top Bar - Hidden on mobile */}
            <div className="hidden sm:flex flex-col h-9 items-start gap-2.5 px-4 lg:px-8 py-1.5 w-full bg-green-600 dark:bg-green-700">
                <div className="flex items-center justify-between w-full">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="h-6 w-20 sm:w-28 bg-white dark:bg-gray-100 rounded flex items-center justify-center">
                            <Store className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 dark:text-green-700" />
                            <span className="ml-1 text-green-600 dark:text-green-700 font-bold text-xs sm:text-sm">UPAM</span>
                        </div>
                    </div>

                    {/* Phone Number - Hidden on small screens */}
                    <div className="hidden md:flex items-center gap-1 text-white dark:text-gray-100">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">+234 813 975 3870</span>
                    </div>

                    {/* Shop Link */}
                    <div className="flex items-center gap-1 text-white dark:text-gray-100">
                        <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">Shop on UPAM Stores</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="relative w-full max-w-[1378px] px-4 lg:px-8 pt-2 sm:pt-1 pb-4">
                <div className="flex items-center justify-between w-full h-full">
                    {/* Mobile Logo & Desktop Navigation */}
                    <div className="flex items-center gap-4">
                        {/* Mobile Logo - Only shown on mobile */}
                        <div className="sm:hidden flex items-center">
                            <div className="h-8 w-24 bg-green-600 dark:bg-green-700 rounded flex items-center justify-center">
                                <Store className="h-4 w-4 text-white" />
                                <span className="ml-1 text-white font-bold text-sm">UPAM</span>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6">
                            {/* Navigation Menu */}
                            <nav className="flex items-center gap-6">
                                <a href="#" className="text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">Home</a>
                            </nav>
                            <div>
                                <select className="px-2.5 py-1.5 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200 min-w-[180px] lg:min-w-[234px]">
                                    <option>Categories</option>
                                    <option>Products</option>
                                    <option>About</option>
                                    <option>Contact</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden sm:flex flex-1 max-w-[400px] lg:max-w-[657px] mx-4 lg:mx-6">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full px-4 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent text-sm"
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className="md:hidden p-2 rounded-full bg-white text-gray-700 shadow-md"
                        >
                            {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>

                        {/* Mobile Search Button */}
                        <button className="sm:hidden p-2 text-gray-700 dark:text-gray-300">
                            <Search className="w-5 h-5" />
                        </button>

                        {/* Account Menu - Hidden on mobile */}
                        <div className="hidden sm:flex items-center gap-1 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
                            <User className="w-4 h-4" />
                            <span className="text-xs lg:text-sm hidden lg:inline">Account</span>
                        </div>

                        {/* Support Menu - Hidden on mobile */}
                        <div className="hidden sm:flex items-center gap-1 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
                            <Headset className="w-4 h-4" />
                            <span className="text-xs lg:text-sm hidden lg:inline">Support</span>
                        </div>

                        {/* Language Selector */}
                        <div className="relative language-menu">
                            <button
                                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                                className="flex items-center gap-1 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 p-1"
                            >
                                <Flag 
                                    code={languageToCountry[selectedLanguage]} 
                                    style={{ width: '20px', height: 'auto' }} 
                                />
                                <span className="text-xs lg:text-sm hidden sm:inline">{currentLanguage?.short}</span>
                                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>

                            {/* Language Dropdown */}
                            {showLanguageMenu && (
                                <div className="absolute right-0 mt-2 w-40 sm:w-48 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 z-50">
                                    {languages.map((language) => (
                                        <button
                                            key={language.code}
                                            onClick={() => {
                                                setSelectedLanguage(language.code);
                                                setShowLanguageMenu(false);
                                            }}
                                            className={`w-full px-4 py-2 text-left text-sm flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700/50 ${
                                                selectedLanguage === language.code
                                                    ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                                                    : 'text-gray-700 dark:text-gray-200'
                                            }`}
                                        >
                                            <Flag 
                                                code={languageToCountry[language.code]} 
                                                style={{ width: '20px', height: 'auto' }} 
                                            />
                                            <span>{language.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Theme Toggle */}
                        <div className="relative theme-menu">
                            <button
                                onClick={() => setShowThemeMenu(!showThemeMenu)}
                                className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                            >
                                {isDarkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
                            </button>

                            {/* Theme Menu Dropdown */}
                            {showThemeMenu && (
                                <div className="absolute right-0 mt-2 w-40 sm:w-48 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 z-50">
                                    <button
                                        onClick={() => {
                                            toggleDarkMode();
                                            setShowThemeMenu(false);
                                        }}
                                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700/50"
                                    >
                                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                                    </button>
                                    <button
                                        onClick={() => {
                                            resetToSystem();
                                            setShowThemeMenu(false);
                                        }}
                                        className={`w-full px-4 py-2 text-left text-sm flex items-center justify-between
                                            ${!hasUserPreference
                                                ? 'text-blue-600 dark:text-blue-400'
                                                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                                            }`}
                                    >
                                        <span>Match System</span>
                                        {!hasUserPreference && <Monitor className="w-4 h-4" />}
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Sign In Button */}
                        <div className="flex items-center justify-center gap-2 px-2 sm:px-3 py-1.5 rounded-lg border border-gray-800 dark:border-gray-600 text-gray-800 dark:text-gray-200">
                            <span className="text-xs sm:text-sm">Sign In</span>
                        </div>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                <div className="sm:hidden mt-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full px-4 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent text-sm"
                        />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {showMobileMenu && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-40">
                    <div className="px-4 py-4 space-y-4">
                        {/* Mobile Navigation */}
                        <nav className="space-y-3">
                            <a href="#" className="block text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 py-2">Home</a>
                            <a href="#" className="block text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 py-2">Products</a>
                            <a href="#" className="block text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 py-2">About</a>
                            <a href="#" className="block text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 py-2">Contact</a>
                        </nav>

                        {/* Mobile Categories */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                            <select className="w-full px-3 py-2 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200">
                                <option>Categories</option>
                                <option>Products</option>
                                <option>About</option>
                                <option>Contact</option>
                            </select>
                        </div>

                        {/* Mobile Account & Support */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3">
                            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 py-2">
                                <User className="w-4 h-4" />
                                <span className="text-sm">Account</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 py-2">
                                <Headset className="w-4 h-4" />
                                <span className="text-sm">Support</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 py-2">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">+234 813 975 3870</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;