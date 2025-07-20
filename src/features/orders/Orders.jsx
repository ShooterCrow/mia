import React, { useState } from 'react';
import { ShoppingBag, Package } from 'lucide-react';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import EmptyState from '../../components/EmptyState';

const Orders = () => {
    const [orders] = useState([
        {
            id: 'ORD-235647',
            product: 'Wireless Headphones',
            buyer: 'John Smith',
            price: '$89.99',
            date: '05-14-2025',
            image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop&auto=format'
        },
        {
            id: 'ORD-235647',
            product: '2K Mouse',
            buyer: 'John Smith',
            price: '$89.99',
            date: '05-14-2025',
            image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=200&fit=crop&auto=format'
        },
        {
            id: 'ORD-235647',
            product: 'Wireless Headphones',
            buyer: 'John Smith',
            price: '$89.99',
            date: '05-14-2025',
            image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop&auto=format'
        },
        {
            id: 'ORD-235647',
            product: '2K Mouse',
            buyer: 'John Smith',
            price: '$89.99',
            date: '05-14-2025',
            image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=200&fit=crop&auto=format'
        },
        {
            id: 'ORD-235647',
            product: 'Wireless Headphones',
            buyer: 'John Smith',
            price: '$89.99',
            date: '05-14-2025',
            image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop&auto=format'
        },
        {
            id: 'ORD-235647',
            product: '2K Mouse',
            buyer: 'John Smith',
            price: '$89.99',
            date: '05-14-2025',
            image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=200&fit=crop&auto=format'
        }
    ]);

    // Toggle this to see empty state
    const [showEmptyState] = useState(false);

    const displayOrders = showEmptyState ? [] : orders;


    // Order Card Component
    const OrderCard = ({ order }) => (
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col sm:flex-row">
                {/* Product Image */}
                <div className="w-full sm:w-48 h-48 sm:h-32 bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                    <img
                        src={order.image}
                        alt={order.product}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center" style={{ display: 'none' }}>
                        <Package className="w-8 h-8 text-gray-400" />
                    </div>
                </div>

                {/* Order Details */}
                <div className="flex-1 p-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">
                                {order.product}
                            </h3>
                            <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                                <p>Order: {order.id}</p>
                                <p>Buyer: {order.buyer}</p>
                            </div>
                        </div>

                        <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between sm:justify-start gap-2">
                            <div className="text-right">
                                <p className="font-bold text-xl text-gray-900 dark:text-white">
                                    {order.price}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {order.date}
                                </p>
                            </div>
                            <button className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors whitespace-nowrap">
                                View details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Orders
                    </h1>
                </div>

                {/* Orders Grid or Empty State */}
                {displayOrders.length > 0 ? (
                    <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
                        {displayOrders.map((order, index) => (
                            <OrderCard key={index} order={order} />
                        ))}
                    </div>
                ) : (
                    <div> 
                        <EmptyState title={"Orders"} text={"Hi Sarah you currently don't have any orders, cause you've not ordered any product yet."} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;