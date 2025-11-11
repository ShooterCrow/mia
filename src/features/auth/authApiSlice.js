import { apiSlice } from "../../app/api/apiSlice";
import { setCredentials, clearCredentials } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: {
          email: credentials.email,
          password: credentials.password,
        },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (err) {
          console.error("Login failed:", err);
        }
      },
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: {
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          userName: userInfo.userName,
          email: userInfo.email,
          password: userInfo.password,
          roles: "buyer",
        },
      }),
    }),
    verify: builder.mutation({
      query: (token) => ({
        url: `/auth/verify-email/${token}`,
        method: "POST",
        body: { token },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // Update user verification status if needed
          dispatch(setCredentials(data));
        } catch (err) {
          console.error("Verification failed:", err);
        }
      },
    }),
    // Note: Based on the documentation, there's no explicit logout endpoint
    // You might need to handle logout client-side only
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(clearCredentials());
        } catch (err) {
          // If logout endpoint doesn't exist, just clear credentials
          console.error("Logout failed:", err);
          dispatch(clearCredentials());
        }
      },
    }),
    // Note: No refresh token endpoint mentioned in documentation
    // You might need to implement this based on your auth strategy
    refresh: builder.mutation({
      query: () => ({
        url: "/auth/refresh-token",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (err) {
          console.error("Token refresh failed:", err);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyMutation,
  useLogoutMutation,
  useRefreshMutation,
} = authApiSlice;
