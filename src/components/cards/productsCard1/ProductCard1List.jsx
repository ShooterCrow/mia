// ProductCard1List.jsx
import React from 'react';
import ProductCard1 from './ProductCard1';

const ProductCard1List = ({ products, showTwoOnMobile = false }) => {
    const gridClasses = showTwoOnMobile
        ? 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'
        : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6';

    return (
        <div className={gridClasses}>
            {products.map((product) => (
                <ProductCard1
                    key={product.id}
                    product={product}
                    showTimestamp={!showTwoOnMobile}
                />
            ))}
        </div>
    );
};

export default ProductCard1List;
