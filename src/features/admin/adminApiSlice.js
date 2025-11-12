import { apiSlice } from "../../app/api/apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get complete admin dashboard data
    getAdminDashboard: builder.query({
      query: () => ({
        url: "/admin",
        method: "GET",
      }),
      providesTags: ["AdminDashboard"],
      keepUnusedDataFor: 300, // Cache for 5 minutes
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          console.error("Failed to fetch admin dashboard:", err);
        }
      },
    }),

    // Get filtered dashboard data with date range
    getFilteredDashboard: builder.query({
      query: ({ startDate, endDate, period = "month" }) => ({
        url: "/admin/filtered",
        method: "GET",
        params: { startDate, endDate, period },
      }),
      providesTags: ["AdminDashboard"],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          console.error("Failed to fetch filtered dashboard:", err);
        }
      },
    }),
  }),
});

export const {
  useGetAdminDashboardQuery,
  useLazyGetAdminDashboardQuery,
  useGetFilteredDashboardQuery,
  useLazyGetFilteredDashboardQuery,
} = adminApiSlice;