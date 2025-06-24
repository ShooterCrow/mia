import React from 'react'

const PrimaryButton = ({text}) => {
    return (
        <div>
            <button className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-200 w-full sm:w-auto">
                {text}
            </button>
        </div>
    )
}

export default PrimaryButton
