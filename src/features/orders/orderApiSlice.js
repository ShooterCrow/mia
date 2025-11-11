import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';

// ================== ENTITY ADAPTER ================== //
const ordersAdapter = createEntityAdapter({
  selectId: (order) => order._id,
  sortComparer: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
});

const initialState = ordersAdapter.getInitialState({
  pagination: {
    current: 1,
    pages: 0,
    total: 0,
    hasNext: false,
    hasPrev: false,
  },
  stats: null,
});

// ================== API SLICE ================== //
export const orderApiSlice = createApi({
   endpoints: (builder) => ({
    /** =========================
     *  Customer Endpoints
     *  ========================= */
    
    // Create new order
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: '/',
        method: 'POST',
        body: orderData,
      }),
      invalidatesTags: [
        { type: 'Order', id: 'LIST' },
        { type: 'Order', id: 'MY_ORDERS' },
        { type: 'Order', id: 'SELLER_ORDERS' },
        { type: 'Order', id: 'STATS' },
      ],
    }),

    // Get user's orders
    getMyOrders: builder.query({
      query: (params = {}) => {
        const {
          page = 1,
          limit = 10,
          status
        } = params;

        const queryParams = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
        });

        if (status) queryParams.append('status', status);

        return `/my-orders?${queryParams.toString()}`;
      },
      transformResponse: (responseData) => {
        let orders = [];
        let pagination = initialState.pagination;

        if (responseData?.success && Array.isArray(responseData.data)) {
          orders = responseData.data;
          pagination = responseData.pagination || pagination;
        } else {
          console.warn("Unexpected getMyOrders response structure:", responseData);
          return initialState;
        }

        const normalized = ordersAdapter.setAll(initialState, orders);

        return {
          ...normalized,
          pagination,
        };
      },
      providesTags: (result) =>
        result?.ids
          ? [
              ...result.ids.map((id) => ({ type: 'Order', id })),
              { type: 'Order', id: 'MY_ORDERS' },
            ]
          : [{ type: 'Order', id: 'MY_ORDERS' }],
    }),

    // Get order by ID
    getOrderById: builder.query({
      query: (id) => `/${id}`,
      transformResponse: (responseData) => {
        if (responseData?.success && responseData.data) {
          return responseData.data;
        }
        console.warn("Unexpected getOrderById response structure:", responseData);
        return null;
      },
      providesTags: (result, error, id) => [{ type: 'Order', id }],
    }),

    // Cancel order
    cancelOrder: builder.mutation({
      query: ({ id, reason }) => ({
        url: `/${id}/cancel`,
        method: 'POST',
        body: { reason },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Order', id },
        { type: 'Order', id: 'LIST' },
        { type: 'Order', id: 'MY_ORDERS' },
        { type: 'Order', id: 'SELLER_ORDERS' },
        { type: 'Order', id: 'STATS' },
      ],
    }),

    /** =========================
     *  Seller Endpoints
     *  ========================= */
    
    // Get seller's orders
    getSellerOrders: builder.query({
      query: (params = {}) => {
        const {
          page = 1,
          limit = 10,
          status
        } = params;

        const queryParams = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
        });

        if (status) queryParams.append('status', status);

        return `/seller/my-orders?${queryParams.toString()}`;
      },
      transformResponse: (responseData) => {
        let orders = [];
        let pagination = initialState.pagination;

        if (responseData?.success && Array.isArray(responseData.data)) {
          orders = responseData.data;
          pagination = responseData.pagination || pagination;
        } else {
          console.warn("Unexpected getSellerOrders response structure:", responseData);
          return initialState;
        }

        const normalized = ordersAdapter.setAll(initialState, orders);

        return {
          ...normalized,
          pagination,
        };
      },
      providesTags: (result) =>
        result?.ids
          ? [
              ...result.ids.map((id) => ({ type: 'Order', id })),
              { type: 'Order', id: 'SELLER_ORDERS' },
            ]
          : [{ type: 'Order', id: 'SELLER_ORDERS' }],
    }),

    // Update order item status
    updateOrderItemStatus: builder.mutation({
      query: ({ orderId, itemId, status, trackingNumber, carrier, reason }) => ({
        url: `/${orderId}/items/${itemId}/status`,
        method: 'PATCH',
        body: { status, trackingNumber, carrier, reason },
      }),
      invalidatesTags: (result, error, { orderId }) => [
        { type: 'Order', id: orderId },
        { type: 'Order', id: 'LIST' },
        { type: 'Order', id: 'SELLER_ORDERS' },
        { type: 'Order', id: 'MY_ORDERS' },
      ],
    }),

    /** =========================
     *  Admin Endpoints
     *  ========================= */
    
    // Get all orders
    getAllOrders: builder.query({
      query: (params = {}) => {
        const {
          page = 1,
          limit = 10,
          status,
          paymentStatus,
          customer,
          seller,
          startDate,
          endDate,
          search
        } = params;

        const queryParams = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
        });

        if (status) queryParams.append('status', status);
        if (paymentStatus) queryParams.append('paymentStatus', paymentStatus);
        if (customer) queryParams.append('customer', customer);
        if (seller) queryParams.append('seller', seller);
        if (startDate) queryParams.append('startDate', startDate);
        if (endDate) queryParams.append('endDate', endDate);
        if (search) queryParams.append('search', search);

        return `?${queryParams.toString()}`;
      },
      transformResponse: (responseData) => {
        let orders = [];
        let pagination = initialState.pagination;

        if (responseData?.success && Array.isArray(responseData.data)) {
          orders = responseData.data;
          pagination = responseData.pagination || pagination;
        } else {
          console.warn("Unexpected getAllOrders response structure:", responseData);
          return initialState;
        }

        const normalized = ordersAdapter.setAll(initialState, orders);

        return {
          ...normalized,
          pagination,
        };
      },
      providesTags: (result) =>
        result?.ids
          ? [
              ...result.ids.map((id) => ({ type: 'Order', id })),
              { type: 'Order', id: 'LIST' },
            ]
          : [{ type: 'Order', id: 'LIST' }],
    }),

    // Update order status
    updateOrderStatus: builder.mutation({
      query: ({ id, status, notes }) => ({
        url: `/${id}/status`,
        method: 'PATCH',
        body: { status, notes },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Order', id },
        { type: 'Order', id: 'LIST' },
        { type: 'Order', id: 'MY_ORDERS' },
        { type: 'Order', id: 'SELLER_ORDERS' },
        { type: 'Order', id: 'STATS' },
      ],
    }),

    // Update payment status
    updatePaymentStatus: builder.mutation({
      query: ({ id, paymentStatus, transactionId, paidAt }) => ({
        url: `/${id}/payment-status`,
        method: 'PATCH',
        body: { paymentStatus, transactionId, paidAt },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Order', id },
        { type: 'Order', id: 'LIST' },
        { type: 'Order', id: 'MY_ORDERS' },
        { type: 'Order', id: 'SELLER_ORDERS' },
        { type: 'Order', id: 'STATS' },
      ],
    }),

    // Process refund
    processRefund: builder.mutation({
      query: ({ id, amount, reason, transactionId }) => ({
        url: `/${id}/refund`,
        method: 'POST',
        body: { amount, reason, transactionId },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Order', id },
        { type: 'Order', id: 'LIST' },
        { type: 'Order', id: 'MY_ORDERS' },
        { type: 'Order', id: 'SELLER_ORDERS' },
        { type: 'Order', id: 'STATS' },
      ],
    }),

    // Get order statistics
    getOrderStats: builder.query({
      query: (params = {}) => {
        const { period = "month", sellerId } = params;
        const queryParams = new URLSearchParams({ period });
        if (sellerId) queryParams.append('sellerId', sellerId);
        
        return `/stats/overview?${queryParams.toString()}`;
      },
      transformResponse: (responseData) => {
        if (responseData?.success && responseData.data) {
          return responseData.data;
        }
        console.warn("Unexpected getOrderStats response structure:", responseData);
        return null;
      },
      providesTags: [{ type: 'Order', id: 'STATS' }],
    }),
  }),
});

// ================== HOOKS ================== //
export const {
  // Customer hooks
  useCreateOrderMutation,
  useGetMyOrdersQuery,
  useGetOrderByIdQuery,
  useCancelOrderMutation,
  
  // Seller hooks
  useGetSellerOrdersQuery,
  useUpdateOrderItemStatusMutation,
  
  // Admin hooks
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
  useUpdatePaymentStatusMutation,
  useProcessRefundMutation,
  useGetOrderStatsQuery,
} = orderApiSlice;

// ================== SELECTORS ================== //

// Query result selectors
const selectAllOrdersResult = orderApiSlice.endpoints.getAllOrders.select();
const selectMyOrdersResult = orderApiSlice.endpoints.getMyOrders.select();
const selectSellerOrdersResult = orderApiSlice.endpoints.getSellerOrders.select();

// Extract normalized data with fallbacks
const selectOrdersData = createSelector(
  [selectAllOrdersResult],
  (result) => result.data ?? initialState
);

const selectMyOrdersData = createSelector(
  [selectMyOrdersResult],
  (result) => result.data ?? initialState
);

const selectSellerOrdersData = createSelector(
  [selectSellerOrdersResult],
  (result) => result.data ?? initialState
);

// Entity selectors for normalized orders
export const {
  selectAll: selectAllOrders,
  selectById: selectOrderById,
  selectIds: selectOrderIds,
  selectEntities: selectOrderEntities,
  selectTotal: selectTotalOrders,
} = ordersAdapter.getSelectors((state) => selectOrdersData(state));

// My orders selectors
export const {
  selectAll: selectAllMyOrders,
  selectById: selectMyOrderById,
  selectIds: selectMyOrderIds,
  selectEntities: selectMyOrderEntities,
  selectTotal: selectTotalMyOrders,
} = ordersAdapter.getSelectors((state) => selectMyOrdersData(state));

// Seller orders selectors
export const {
  selectAll: selectAllSellerOrders,
  selectById: selectSellerOrderById,
  selectIds: selectSellerOrderIds,
  selectEntities: selectSellerOrderEntities,
  selectTotal: selectTotalSellerOrders,
} = ordersAdapter.getSelectors((state) => selectSellerOrdersData(state));

// Pagination selectors
export const selectOrdersPagination = createSelector(
  [selectOrdersData],
  (data) => data.pagination
);

export const selectMyOrdersPagination = createSelector(
  [selectMyOrdersData],
  (data) => data.pagination
);

export const selectSellerOrdersPagination = createSelector(
  [selectSellerOrdersData],
  (data) => data.pagination
);

// Status-based selectors
export const selectOrdersByStatus = createSelector(
  [selectAllOrders, (state, status) => status],
  (orders, status) => orders.filter(order => order.status === status)
);

export const selectMyOrdersByStatus = createSelector(
  [selectAllMyOrders, (state, status) => status],
  (orders, status) => orders.filter(order => order.status === status)
);

export const selectSellerOrdersByStatus = createSelector(
  [selectAllSellerOrders, (state, status) => status],
  (orders, status) => orders.filter(order => order.status === status)
);

// Order items selectors
export const selectOrderItems = createSelector(
  [selectOrderById, (state, orderId) => orderId],
  (order, orderId) => order?.items || []
);

export const selectOrderItemById = createSelector(
  [selectOrderItems, (state, orderId, itemId) => itemId],
  (items, itemId) => items.find(item => item._id === itemId)
);

// Seller-specific item selectors
export const selectSellerItemsFromOrder = createSelector(
  [selectOrderById, (state, orderId, sellerId) => sellerId],
  (order, sellerId) => order?.items.filter(item => item.seller?._id === sellerId) || []
);

// Stats selectors
export const selectOrderStats = createSelector(
  [orderApiSlice.endpoints.getOrderStats.select()],
  (result) => result.data ?? null
);

export const selectOrderOverview = createSelector(
  [selectOrderStats],
  (stats) => stats?.overview || null
);

export const selectOrderStatusBreakdown = createSelector(
  [selectOrderStats],
  (stats) => stats?.byStatus || []
);

// Financial selectors
export const selectTotalRevenue = createSelector(
  [selectAllOrders],
  (orders) => orders.reduce((total, order) => total + (order.totalAmount || 0), 0)
);

export const selectAverageOrderValue = createSelector(
  [selectAllOrders, selectTotalOrders],
  (orders, total) => total > 0 ? orders.reduce((sum, order) => sum + (order.totalAmount || 0), 0) / total : 0
);

// Date-based selectors
export const selectOrdersByDateRange = createSelector(
  [selectAllOrders, (state, startDate, endDate) => ({ startDate, endDate })],
  (orders, { startDate, endDate }) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return orders.filter(order => {
      const orderDate = new Date(order.createdAt);
      return orderDate >= start && orderDate <= end;
    });
  }
);

// Customer-specific selectors
export const selectOrdersByCustomer = createSelector(
  [selectAllOrders, (state, customerId) => customerId],
  (orders, customerId) => orders.filter(order => order.customer?._id === customerId)
);

// Seller-specific selectors
export const selectOrdersContainingSellerItems = createSelector(
  [selectAllOrders, (state, sellerId) => sellerId],
  (orders, sellerId) => orders.filter(order => 
    order.items.some(item => item.seller?._id === sellerId)
  )
);

// Status counts selectors
export const selectOrderStatusCounts = createSelector(
  [selectAllOrders],
  (orders) => {
    const counts = {
      pending: 0,
      confirmed: 0,
      processing: 0,
      shipped: 0,
      delivered: 0,
      cancelled: 0,
      refunded: 0
    };

    orders.forEach(order => {
      if (order.status in counts) {
        counts[order.status]++;
      }
    });

    return counts;
  }
);

// Recent orders selector
export const selectRecentOrders = createSelector(
  [selectAllOrders, (state, count = 5) => count],
  (orders, count) => orders.slice(0, count)
);