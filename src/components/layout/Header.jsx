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
import Dropdown from '../Dropdown';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const { isDarkMode, toggleDarkMode, resetToSystem, hasUserPreference } = useTheme();
    const [showThemeMenu, setShowThemeMenu] = useState(false);
    const [showMobileThemeMenu, setShowMobileThemeMenu] = useState(false); // Separate state for mobile
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const location = useLocation()
    const locationSignIn = location.pathname.includes("/login")

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
        { code: 'sw', name: 'S', short: 'FR' },
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
            if (!event.target.closest('.mobile-theme-menu')) {
                setShowMobileThemeMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className='relative z-50 lg:py-10 md: py-5'>
            <div className="fixed top-0 left-0 right-0 z-50 flex flex-col bg-white dark:bg-gray-900 w-full mx-auto items-center shadow-sm">
                {/* Top Bar - Always visible */}
                <div className="hidden lg:block w-full bg-green-600 dark:bg-green-700">
                    <div className="max-w-[1378px] mx-auto px-4 lg:px-8 py-1.5">
                        <div className="flex items-center justify-between w-full">
                            {/* Logo */}
                            <div className="flex items-center">
                                <div className="h-6 w-20 sm:w-28 bg-white dark:bg-gray-100 rounded flex items-center justify-center">
                                    <Store className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 dark:text-green-700" />
                                    <span className="ml-1 text-green-600 dark:text-green-700 font-bold text-xs sm:text-sm">MIA</span>
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
                                <span className="text-xs sm:text-sm">Shop on MIA Stores</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Top Bar */}
                <div className="lg:hidden w-full bg-green-600 dark:bg-green-700">
                    <div className="px-4 py-3">
                        <div className="flex items-center justify-between w-full">
                            {/* Logo */}
                            <div className="flex items-center">
                                <div className="h-6 w-20 bg-white dark:bg-gray-100 rounded flex items-center justify-center">
                                    <Store className="h-3 w-3 text-green-600 dark:text-green-700" />
                                    <span className="ml-1 text-green-600 dark:text-green-700 font-bold text-xs">MIA</span>
                                </div>
                            </div>

                            {/* Shop Link */}
                            <div className="flex items-center gap-1 text-white dark:text-gray-100">
                                <ShoppingBag className="w-3 h-3" />
                                <span className="text-xs">Shop on MIA Stores</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Header - Only visible on desktop */}
                <div className="hidden lg:block w-full border-b border-gray-200 dark:border-gray-700">
                    <div className="max-w-[1378px] mx-auto px-4 lg:px-8 py-5">
                        <div className="flex items-center justify-between w-full">
                            {/* Desktop Navigation */}
                            <div className="flex items-center gap-6">
                                {/* Navigation Menu */}
                                <nav className="flex items-center gap-6">
                                    <Link to={"/"} className="text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">Home</Link>
                                </nav>
                                <div>
                                    <select
                                        className="px-2.5 py-1.5 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200 min-w-[180px] lg:min-w-[234px]"
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (value) {
                                                if (value === 'Categories') {
                                                    navigate('/categories');
                                                } else {
                                                    navigate(`/categories/${value.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`);
                                                }
                                            }
                                        }}
                                        defaultValue="Categories"
                                    >
                                        <option value="Categories">Categories</option>
                                        <option value="Vehicles">Vehicles</option>
                                        <option value="Cloth & Fashion">Cloth & Fashion</option>
                                        <option value="Accessories">Accessories</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Gadgets">Gadgets</option>
                                        <option value="Supermarket">Supermarket</option>
                                        <option value="Health & Beauty">Health & Beauty</option>
                                    </select>
                                </div>

                            </div>

                            {/* Search Bar */}
                            <div className="flex-1 max-w-[400px] lg:max-w-[657px] mx-4 lg:mx-6">
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
                                {/* Account Menu */}
                                <Link to={"/dashboard/profile"}>
                                    <div className="flex items-center gap-1 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
                                        <User className="w-4 h-4" />
                                        <span className="text-xs lg:text-sm hidden lg:inline">Account</span>
                                    </div>
                                </Link>

                                {/* Support Menu */}
                                <div className="flex items-center gap-1 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
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
                                            style={{ width: '20px', height: '15px' }}
                                        />
                                        <span className="text-xs lg:text-sm">{currentLanguage?.short}</span>
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
                                                    className={`w-full px-4 py-2 text-left text-sm flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700/50 ${selectedLanguage === language.code
                                                        ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                                                        : 'text-gray-700 dark:text-gray-200'
                                                        }`}
                                                >
                                                    <Flag
                                                        code={languageToCountry[language.code]}
                                                        style={{ width: '20px', height: '15px' }}
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
                                <Link to={locationSignIn ? "/signup" : "/login"}>
                                    <div className="flex items-center justify-center gap-2 px-2 sm:px-3 py-1.5 rounded-lg border border-gray-800 dark:border-gray-600 text-gray-800 dark:text-gray-200">
                                        <span className="text-xs sm:text-sm">{locationSignIn ? "Sign Up" : "Log In"}</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Mobile Menu Button - Only visible on mobile/tablet */}
                <div className="lg:hidden fixed top-20 right-4 z-50">
                    <button
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-200 hover:shadow-xl transition-shadow">
                        {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {showMobileMenu && (
                    <div className="w-full lg:hidden top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-40 shadow-lg w-100 max-h-[calc(100vh-theme(spacing.20))] overflow-y-auto">
                        <div className="px-4 py-4 space-y-5">
                            {/* Mobile Navigation Links */}
                            <nav className="flex items-center gap-6">
                                <Link to={"/"} className="text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">Home</Link>
                            </nav>
                            <Dropdown />

                            {/* Account & Support Section */}
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
                                <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Account & Support
                                </h3>

                                <div className="space-y-1">
                                    <Link to={"/dashboard/profile"}>
                                        <button className="flex items-center gap-3 w-full px-3 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                                            <User className="w-4 h-4" />
                                            <span>My Account</span>
                                        </button>
                                    </Link>

                                    <button className="flex items-center gap-3 w-full px-3 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                                        <Headset className="w-4 h-4" />
                                        <span>Help & Support</span>
                                    </button>

                                    <div className="flex items-center gap-3 px-3 py-3 text-sm text-gray-600 dark:text-gray-400">
                                        <Phone className="w-4 h-4" />
                                        <span>+234 813 975 3870</span>
                                    </div>
                                </div>
                            </div>

                            {/* Settings Section with Theme Control */}
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
                                <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Settings
                                </h3>

                                <div className="space-y-1">
                                    {/* Theme Toggle Section */}
                                    <div className="relative mobile-theme-menu">
                                        <button
                                            onClick={() => setShowMobileThemeMenu(!showMobileThemeMenu)}
                                            className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                                        >
                                            <div className="flex items-center gap-3">
                                                {isDarkMode ? (
                                                    <Moon className="w-4 h-4" />
                                                ) : (
                                                    <Sun className="w-4 h-4" />
                                                )}
                                                <span>
                                                    {!hasUserPreference
                                                        ? 'System Theme'
                                                        : isDarkMode
                                                            ? 'Dark Mode'
                                                            : 'Light Mode'
                                                    }
                                                </span>
                                            </div>
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showMobileThemeMenu ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Theme Menu Dropdown */}
                                        {showMobileThemeMenu && (
                                            <div className="mt-1 ml-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                                                <button
                                                    onClick={() => {
                                                        if (isDarkMode || !hasUserPreference) {
                                                            if (isDarkMode && hasUserPreference) {
                                                                toggleDarkMode();
                                                            } else if (!hasUserPreference) {
                                                                toggleDarkMode();
                                                                if (isDarkMode) {
                                                                    toggleDarkMode();
                                                                }
                                                            }
                                                        }
                                                        setShowMobileThemeMenu(false);
                                                    }}
                                                    className={`w-full px-4 py-3 text-left text-sm flex items-center gap-3 transition-colors duration-200 ${!isDarkMode && hasUserPreference
                                                        ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                                        }`} >
                                                    <Sun className="w-4 h-4" />
                                                    <span>Light Mode</span>
                                                    {!isDarkMode && hasUserPreference && (
                                                        <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                                                    )}
                                                </button>

                                                <button
                                                    onClick={() => {
                                                        if (!isDarkMode || !hasUserPreference) {
                                                            if (!isDarkMode && hasUserPreference) {
                                                                toggleDarkMode();
                                                            } else if (!hasUserPreference) {
                                                                toggleDarkMode();
                                                                if (!isDarkMode) {
                                                                    toggleDarkMode();
                                                                }
                                                            }
                                                        }
                                                        setShowMobileThemeMenu(false);
                                                    }}
                                                    className={`w-full px-4 py-3 text-left text-sm flex items-center gap-3 transition-colors duration-200 ${isDarkMode && hasUserPreference
                                                        ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                                        }`} >
                                                    <Moon className="w-4 h-4" />
                                                    <span>Dark Mode</span>
                                                    {isDarkMode && hasUserPreference && (
                                                        <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                                                    )}
                                                </button>

                                                <button
                                                    onClick={() => {
                                                        resetToSystem();
                                                        setShowMobileThemeMenu(false);
                                                    }}
                                                    className={`w-full px-4 py-3 text-left text-sm flex items-center gap-3 transition-colors duration-200 ${!hasUserPreference
                                                        ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                                        }`} >
                                                    <Monitor className="w-4 h-4" />
                                                    <span>Match System</span>
                                                    {!hasUserPreference && (
                                                        <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                                                    )}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;