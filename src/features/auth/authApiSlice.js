import { apiSlice } from '../../app/api/apiSlice';
import { setCredentials, clearCredentials } from './authSlice';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/login',
                method: 'POST',
                body: credentials
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials(data));
                } catch (err) {
                    console.error('Login failed:', err);
                }
            }
        }),
        register: builder.mutation({
            query: userInfo => ({
                url: '/register',
                method: 'POST',
                body: {
                    full_name: userInfo.fullName || userInfo.full_name,
                    email: userInfo.email,
                    business_name: userInfo.businessName || userInfo.business_name,
                    password: userInfo.password
                }
            })
        }),
        verify: builder.mutation({
            query: token => ({
                url: '/verify',
                method: 'POST',
                body: { token }
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    // Update user verification status if needed
                    dispatch(setCredentials(data));
                } catch (err) {
                    console.error('Verification failed:', err);
                }
            }
        }),
        // Note: Based on the documentation, there's no explicit logout endpoint
        // You might need to handle logout client-side only
        logout: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST'
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(clearCredentials());
                } catch (err) {
                    // If logout endpoint doesn't exist, just clear credentials
                    console.error('Logout failed:', err);
                    dispatch(clearCredentials());
                }
            }
        }),
        // Note: No refresh token endpoint mentioned in documentation
        // You might need to implement this based on your auth strategy
        refresh: builder.mutation({
            query: () => ({
                url: '/auth/refresh-token',
                method: 'POST'
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials(data));
                } catch (err) {
                    console.error('Token refresh failed:', err);
                }
            }
        })
    })
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useVerifyMutation,
    useLogoutMutation,
    useRefreshMutation
} = authApiSlice;