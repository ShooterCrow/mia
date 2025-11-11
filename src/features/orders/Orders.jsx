import React, { useState, useEffect } from 'react';
import { ShoppingBag, Package, Filter } from 'lucide-react';
import { useSelector } from 'react-redux';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import EmptyState from '../../components/EmptyState';
import {
    useGetSellerOrdersQuery,
    selectAllSellerOrders,
    selectSellerOrdersPagination
} from './orderApiSlice';

const Orders = () => {
    const [page, setPage] = useState(1);
    const [statusFilter, setStatusFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch orders using RTK Query
    const {
        data: ordersData,
        isLoading,
        isError,
        error,
        refetch
    } = useGetSellerOrdersQuery({
        page,
        limit: 10,
        status: statusFilter || undefined
    });

    console.log(ordersData)

    // Get normalized data from Redux store
    const orders = useSelector(selectAllSellerOrders);
    const pagination = useSelector(selectSellerOrdersPagination);

    // Filter orders by search term locally (or you can add search to the API call)
    const filteredOrders = orders.filter(order =>
        searchTerm === '' ||
        order.orderNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerInfo?.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerInfo?.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.items?.some(item =>
            item.productName?.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Handle page changes
    const handleNextPage = () => {
        if (pagination?.hasNext) {
            setPage(prev => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (pagination?.hasPrev) {
            setPage(prev => prev - 1);
        }
    };

    // Order Card Component
    const OrderCard = ({ order }) => {
        // Get the first item for display (you might want to handle multiple items differently)
        const firstItem = order.items?.[0];
        const totalItems = order.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

        const formatDate = (dateString) => {
            return new Date(dateString).toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric'
            });
        };

        const getStatusColor = (status) => {
            const statusColors = {
                pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
                confirmed: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
                processing: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
                shipped: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
                delivered: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
                cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
                refunded: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
            };
            return statusColors[status] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
        };

        return (
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col sm:flex-row">
                    {/* Product Image */}
                    <div className="w-full sm:w-48 h-48 sm:h-32 bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                        {firstItem?.productImage ? (
                            <img
                                src={firstItem.productImage}
                                alt={firstItem.productName}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                        ) : null}
                        <div className={`w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center ${firstItem?.productImage ? 'hidden' : 'flex'}`}>
                            <Package className="w-8 h-8 text-gray-400" />
                        </div>
                    </div>

                    {/* Order Details */}
                    <div className="flex-1 p-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                                        {firstItem?.productName || 'Order Items'}
                                    </h3>
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                                        {order.status?.charAt(0).toUpperCase() + order.status?.slice(1)}
                                    </span>
                                </div>

                                <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                                    <p className="font-medium text-gray-900 dark:text-white">
                                        Order: {order.orderNumber}
                                    </p>
                                    <p>
                                        Buyer: {order.customerInfo?.firstName} {order.customerInfo?.lastName}
                                    </p>
                                    {totalItems > 1 && (
                                        <p className="text-xs text-gray-400">
                                            +{totalItems - 1} more item{totalItems - 1 > 1 ? 's' : ''}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between sm:justify-start gap-2">
                                <div className="text-right">
                                    <p className="font-bold text-xl text-gray-900 dark:text-white">
                                        ${order.totalAmount?.toFixed(2)}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {formatDate(order.createdAt)}
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
    };

    // Loading state
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                            <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Orders
                        </h1>
                    </div>
                    <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 animate-pulse">
                                <div className="flex space-x-4">
                                    <div className="w-32 h-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    <div className="flex-1 space-y-3">
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (isError) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                            <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Orders
                        </h1>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
                        <p className="text-red-800 dark:text-red-400 mb-4">
                            Error loading orders: {error?.data?.message || 'Something went wrong'}
                        </p>
                        <PrimaryButton onClick={refetch}>
                            Try Again
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                            <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Orders
                        </h1>
                        {pagination && (
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                ({pagination.total} total orders)
                            </span>
                        )}
                    </div>

                    {/* Filters and Search */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search orders..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>

                        <select
                            value={statusFilter}
                            onChange={(e) => {
                                setStatusFilter(e.target.value);
                                setPage(1); // Reset to first page when filter changes
                            }}
                            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>
                </div>

                {/* Orders Grid or Empty State */}
                {filteredOrders.length > 0 ? (
                    <>
                        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
                            {filteredOrders.map((order) => (
                                <OrderCard key={order._id} order={order} />
                            ))}
                        </div>

                        {/* Pagination */}
                        {pagination && pagination.pages > 1 && (
                            <div className="flex justify-center items-center gap-4 mt-8">
                                <button
                                    onClick={handlePrevPage}
                                    disabled={!pagination.hasPrev}
                                    className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Previous
                                </button>

                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Page {pagination.current} of {pagination.pages}
                                </span>

                                <button
                                    onClick={handleNextPage}
                                    disabled={!pagination.hasNext}
                                    className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <EmptyState
                        title="Orders"
                        text={searchTerm || statusFilter ?
                            "No orders match your current filters. Try adjusting your search criteria." :
                            "Hi there! You currently don't have any orders. Orders will appear here once customers purchase your products."
                        }
                    />
                )}
            </div>
        </div>
    );
};

export default Orders;