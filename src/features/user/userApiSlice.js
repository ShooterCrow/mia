import { apiSlice } from '../../app/api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: (params) => ({
                url: '/users/admin/all',
                method: 'GET',
                params,
            }),
            providesTags: ['Users'],
        }),
        adminGetUserById: builder.query({
            query: (id) => `/users/admin/${id}`,
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
            query: ({ patch }) => ({
                url: `/users/profile`,
                method: 'PATCH',
                body: patch,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Users', id }],
        }),
        adminUpdateUser: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `/users/admin/${id}`,
                method: 'PATCH',
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
    useAdminGetUserByIdQuery,
    useGetUserProfileQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useAdminUpdateUserMutation,
    useDeleteUserMutation,
} = userApiSlice;