import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dropdown = ({mobile}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Categories');

    const options = ['Categories', 'Vehicles', 'Gadgets', 'Contact'];

    return (
        <div className="relative w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-2.5 py-1.5 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200 text-left flex items-center justify-between"
            >
                <span className="truncate">{selected}</span>
                <ChevronDown className={`w-4 h-4 transition-transform flex-shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50 max-h-60 overflow-auto">
                    {options.map((option) => (
                        <Link onClick={() => mobile && setShowMobileMenu(false)} to={`categories/${option.toLowerCase() !== "categories" ? option.toLowerCase() : ""}`}>
                            <button
                                key={option}
                                className="w-full px-2.5 py-2 text-left text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 truncate">
                                {option}
                            </button>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;