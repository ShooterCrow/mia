import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, clearCredentials } from '../../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 403) {
        // console.log('sending refresh token');
        // Try to get a new token
        const refreshResult = await baseQuery('/auth/refresh-token', api, extraOptions);

        if (refreshResult?.data) {
            // Store the new token
            api.dispatch(setCredentials({ ...refreshResult.data }));
            // Retry the original query with new token
            result = await baseQuery(args, api, extraOptions);
        } else {
            // If refresh fails, handle logout here
            if (refreshResult?.error?.status === 403) {
                refreshResult.error.data.message = 'Your login has expired.';
            }
            api.dispatch(clearCredentials());
            // Redirect to login page using window.location
            window.location.href = '/auth';
            return refreshResult;
        }
    }
    return result;
};

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Users', 'Products', 'Categories', 'Orders', 'Reviews', 'Settings', 'Notifications', 'Messages', 'Carts', 'Wishlist', 'Blogs', 'Coupons', 'Discounts', 'Shipping', 'Payments', 'Analytics', 'Reports'],
    endpoints: builder => ({})
});

