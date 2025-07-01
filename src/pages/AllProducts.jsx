import React from 'react'
import Categories from '../components/Categories'
import ProductCard1 from '../components/cards/ProductCard1'
import { products } from './Home'

export const defaultCategories = [
        { name: "Vehicles", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop&crop=center" },
        { name: "Properties", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop&crop=center" },
        { name: "Gadgets", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop&crop=center" },
        { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=100&h=100&fit=crop&crop=center" },
        { name: "Vehicles", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop&crop=center" },
        { name: "Home Appliances", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop&crop=center" },
        { name: "Clothing", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=100&h=100&fit=crop&crop=center" },
        { name: "Accessories", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop&crop=center" },
        { name: "Gadgets", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&h=100&fit=crop&crop=center" },
        { name: "Supermarket", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=100&h=100&fit=crop&crop=center" },
        { name: "Babies & Kids", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop&crop=center" },
        { name: "Health & Beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop&crop=center" },
        { name: "Agriculture", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop&crop=center" },
        { name: "Animals & Pets", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop&crop=center" },
        { name: "Equipment & Tool", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop&crop=center" }
    ];


const AllProducts = () => {
    return (
        <div className='mx-auto'>
            <div>
                <Categories categories={defaultCategories} title={"Explore All Products"} />
            </div>
            <div className='max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8'>
                <ProductCard1 products={products} showTwoOnMobile={true} />
            </div>

        </div>
    )
}

export default AllProducts
