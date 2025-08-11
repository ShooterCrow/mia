import { apiSlice } from '../../app/api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: (params) => ({
                url: '/users',
                method: 'GET',
                params,
            }),
            providesTags: ['Users'],
        }),
        getUserById: builder.query({
            query: (id) => `/users/${id}`,
            providesTags: (result, error, id) => [{ type: 'Users', id }],
        }),
        // Add the missing getUserProfile endpoint
        getUserProfile: builder.query({
            query: () => '/users/profile', // or '/auth/profile' depending on your API
            providesTags: ['UserProfile'],
        }),
        createUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['Users'],
        }),
        updateUser: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `/users/${id}`,
                method: 'PUT',
                body: patch,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Users', id }],
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Users', id }],
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useGetUserProfileQuery, // Add this export
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = userApiSlice;