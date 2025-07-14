import React, { useState } from 'react';
import {
    User,
    HelpCircle,
    Monitor,
    RefreshCw,
    Search,
    MessageCircle,
    X,
    Send,
    Bot
} from 'lucide-react';

const Support = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [chatbotOpen, setChatbotOpen] = useState(false);
    const [chatMessages, setChatMessages] = useState([
        {
            id: 1,
            type: 'bot',
            message: 'Hello! How can I help you today?',
            timestamp: new Date()
        }
    ]);
    const [messageInput, setMessageInput] = useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Search query:', searchQuery);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (messageInput.trim()) {
            const userMessage = {
                id: Date.now(),
                type: 'user',
                message: messageInput,
                timestamp: new Date()
            };

            setChatMessages(prev => [...prev, userMessage]);
            setMessageInput('');

            // Simulate bot response
            setTimeout(() => {
                const botResponse = {
                    id: Date.now() + 1,
                    type: 'bot',
                    message: "Thanks for your message! I'm here to help you with any questions you have.",
                    timestamp: new Date()
                };
                setChatMessages(prev => [...prev, botResponse]);
            }, 1000);
        }
    };

    const supportSections = [
        {
            icon: User,
            title: 'Account & Login',
            description: "I can't log into my account or I've forgotten my password",
            details: "If you're unable to log in, try resetting your password using the 'Forgot Password' option. If you continue to have issues, contact our support team for assistance."
        },
        {
            icon: HelpCircle,
            title: 'User Support',
            description: "I want to tell my experience or I don't know how to set up my store or list items properly",
            details: "Our user support team is here to help with any questions about using our platform. Contact us for guidance on setting up your store or listing items."
        },
        {
            icon: Monitor,
            title: 'Technical Help',
            description: "The website loads really slow - it won't upload pictures or some pages won't load properly",
            details: "For technical issues like slow loading, upload problems, or page errors, our technical support team can help resolve these issues quickly."
        },
        {
            icon: RefreshCw,
            title: 'Dispute & Returns',
            description: "I didn't get what I ordered or the seller isn't responding after I paid",
            details: "If you have issues with your order or seller communication, we can help mediate disputes and process returns according to our policies."
        },
        {
            icon: Search,
            title: 'FAQ Access',
            description: "I have basic questions but I can't find answers quickly - I don't want to ask for support",
            details: "Access our comprehensive FAQ section for quick answers to common questions about account setup, payments, shipping, and more."
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            {/* Hero Section */}
            <div
                className="relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop)',
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 px-10 lg:px-30 py-16 sm:py-24 lg:py-32">
                    <div className="max-w-4xl">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Support Center
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                            We're here to make your experience smooth and stress-free. Which of you have questions
                            about setting up your account, using our tools, having a dispute, or navigating the platform,
                            our dedicated support team is ready to assist you. Browse through our help sections below or
                            use the search bar to get quick solutions. If you still need help, our team is just a message
                            away!
                        </p>
                        <form onSubmit={handleSearchSubmit} className="max-w-md">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Find me help with..."
                                    className="w-full px-4 py-3 pr-12 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                                >
                                    <Search size={20} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Support Sections */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Need help? we are here for you
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Explore our support options below from just one click. We do more than
                        address questions that connect us through other solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {supportSections.map((section, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-red-50 dark:bg-red-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 dark:group-hover:bg-red-800 transition-colors">
                                    <section.icon className="w-8 h-8 text-red-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    {section.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                                    {section.description}
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                                    {section.details}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Chatbot Button */}
            <div className="fixed bottom-6 right-6 z-50">
                {!chatbotOpen && (
                    <button
                        onClick={() => setChatbotOpen(true)}
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                        aria-label="Open chatbot"
                    >
                        <MessageCircle size={24} />
                    </button>
                )}
            </div>

            {/* Chatbot Modal */}
            {chatbotOpen && (
                <div className="fixed inset-0 z-50 lg:inset-auto lg:bottom-6 lg:right-6 lg:w-96 lg:h-[500px]">
                    <div className="bg-white dark:bg-gray-900 h-full lg:rounded-lg lg:shadow-2xl flex flex-col">
                        {/* Chatbot Header */}
                        <div className="bg-blue-500 text-white p-4 lg:rounded-t-lg flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <Bot size={18} />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Support Assistant</h3>
                                    <p className="text-xs text-white/80">Online now</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setChatbotOpen(false)}
                                className="p-1 hover:bg-white/20 rounded"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {chatMessages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex items-start gap-2 ${message.type === 'user' ? 'flex-row-reverse' : ''
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.type === 'user'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                                        }`}>
                                        {message.type === 'user' ? (
                                            <User size={16} />
                                        ) : (
                                            <Bot size={16} />
                                        )}
                                    </div>
                                    <div className={`max-w-xs lg:max-w-sm ${message.type === 'user' ? 'text-right' : ''
                                        }`}>
                                        <div className={`inline-block px-3 py-2 rounded-lg ${message.type === 'user'
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                                            }`}>
                                            <p className="text-sm">{message.message}</p>
                                        </div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                            {message.timestamp.toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Chat Input */}
                        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                            <form onSubmit={handleSendMessage} className="flex gap-2">
                                <input
                                    type="text"
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                                />
                                <button
                                    type="submit"
                                    disabled={!messageInput.trim()}
                                    className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Chatbot Backdrop (mobile) */}
            {chatbotOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setChatbotOpen(false)}
                />
            )}
        </div>
    );

};

export default Support;