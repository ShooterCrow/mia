import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ is open by default

  const faqs = [
    {
      id: 1,
      question: "Where do I make payments for my orders",
      answer: "Payments are made outside the website, directly between you and the seller. Always confirm payment details through the platform's messaging system to avoid fraud"
    },
    {
      id: 2,
      question: "How do I buy a product on this website",
      answer: "To buy a product, browse our catalog, select the item you want, and contact the seller directly through our messaging system. The seller will guide you through the payment and delivery process."
    }, 
    {
      id: 3,
      question: "Do you offer international shipping?",
      answer: "International shipping availability depends on the individual seller. When contacting a seller, please ask about their shipping options and whether they deliver to your location."
    },
    {
      id: 4,
      question: "What if I didn't receive my order after payment",
      answer: "If you haven't received your order after payment, first contact the seller directly through our messaging system. If the issue persists, reach out to our customer support team who will help mediate and resolve the situation."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to our FAQ section! Here, you'll find answers to common questions about shopping 
            with us. If you need further assistance, feel free to reach out to our customer support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className="dark:bg-gray-900 w-full shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 hover:shadow-md dark:hover:shadow-lg">
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset"
              >
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white pr-4 leading-relaxed">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 transition-transform duration-200" />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 dark:text-gray-500 transition-transform duration-200" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mt-3 sm:mt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Still have questions? 
            <Link to={"/contact"}
              className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 font-medium ml-1 transition-colors duration-200">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;