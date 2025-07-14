// HorizontalScroll.jsx
import React from 'react';

const HorizontalScroll = ({ children, className = "", gridCols = "md:grid-cols-4" }) => {
    return (
        <div
            className={`md:grid ${gridCols} md:gap-4 flex overflow-x-auto gap-4 pb-4 md:pb-0 ${className}`} >
            {children}
        </div>
    );
};

export default HorizontalScroll;
