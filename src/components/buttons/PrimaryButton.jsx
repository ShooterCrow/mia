import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryButton = ({ text, link }) => {
    return (
        <div>
            <button className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white px-6 sm:px-8 py-2 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-200 w-fit sm:w-fit">
                <Link to={link}>
                    {text}
                </Link>
            </button>
        </div>
    )
}

export default PrimaryButton
