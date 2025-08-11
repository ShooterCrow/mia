// apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  setCredentials,
  clearCredentials,
} from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Handle token expiration (401/403)
  if (result?.error?.status === 401 || result?.error?.status === 403) {
    // Since your PHP backend doesn't have refresh tokens, just clear credentials
    // and redirect to login
    api.dispatch(clearCredentials());
    window.location.href = "/login";
    return result;
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    "Users",
    "Products",
    "Categories",
    "Orders",
    "Reviews",
    "Settings",
    "Notifications",
    "Messages",
    "Carts",
    "Wishlist",
    "Coupons",
    "Discounts",
    "Shipping",
    "Payments",
    "Analytics",
    "Reports",
  ],
  endpoints: (builder) => ({}),
});
