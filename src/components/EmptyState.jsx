import React from 'react'
import PrimaryButton from './buttons/PrimaryButton';
import { Package } from 'lucide-react';

const EmptyState = ({text, title}) => {
    return (
        <div className="flex flex-col h-100vh items-center justify-center py-16 px-4 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No {title} found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                {text || "Nothing to see here."} 
            </p>
            <div className="mt-6">
                <PrimaryButton link={"/products"} text="Start Ordering" />
            </div>
        </div>
    );
}

export default EmptyState
