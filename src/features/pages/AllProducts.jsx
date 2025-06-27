import React from 'react'
import Categories from '../../components/Categories'
import ProductCard1 from '../../components/cards/ProductCard1'
import { products } from './Home'

const AllProducts = () => {
    return (
        <div className='mx-auto'>
            <div>
                <Categories title={"Explore All Products"} />
            </div>
            <div className='max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8'>
                <ProductCard1 products={products} showTwoOnMobile={true} />
            </div>

        </div>
    )
}

export default AllProducts
