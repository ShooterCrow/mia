import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';

// ================== ENTITY ADAPTER ================== //
const categoriesAdapter = createEntityAdapter({
  selectId: (category) => category._id,
  sortComparer: (a, b) => a.displayOrder - b.displayOrder,
});

const initialState = categoriesAdapter.getInitialState({
  pagination: {
    current: 1,
    pages: 0,
    total: 0,
    hasNext: false,
    hasPrev: false,
  },
});

// ================== API SLICE ================== //
export const categoryApiSlice = createApi({
  reducerPath: 'categoryApi',
  tagTypes: ['Category'],
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/categories',
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.auth?.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    /** =========================
     *  Public Endpoints
     *  ========================= */
    
    // Get all categories with pagination and filters
    getAllCategories: builder.query({
      query: (params = {}) => {
        const {
          page = 1,
          limit = 10,
          sortBy = 'displayOrder',
          sortOrder = 'asc',
          search,
          parent,
          featured,
          activeOnly = true
        } = params;

        const queryParams = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
          sortBy,
          sortOrder,
          activeOnly: activeOnly.toString()
        });

        if (search) queryParams.append('search', search);
        if (parent) queryParams.append('parent', parent);
        if (featured !== undefined) queryParams.append('featured', featured.toString());

        return `?${queryParams.toString()}`;
      },
      transformResponse: (responseData) => {
        // Handle response structure from controller: { success, data, pagination }
        let categories = [];
        let pagination = initialState.pagination;

        if (responseData?.success && Array.isArray(responseData.data)) {
          categories = responseData.data;
          pagination = responseData.pagination || pagination;
        } else {
          console.warn("Unexpected getAllCategories response structure:", responseData);
          return initialState;
        }

        const normalized = categoriesAdapter.setAll(initialState, categories);

        return {
          ...normalized,
          pagination,
        };
      },
      providesTags: (result) =>
        result?.ids
          ? [
              ...result.ids.map((id) => ({ type: 'Category', id })),
              { type: 'Category', id: 'LIST' },
            ]
          : [{ type: 'Category', id: 'LIST' }],
    }),

    // Get active categories (for frontend)
    getActiveCategories: builder.query({
      query: () => '/active',
      transformResponse: (responseData) => {
        let categories = [];

        if (responseData?.success && Array.isArray(responseData.data)) {
          categories = responseData.data;
        } else {
          console.warn("Unexpected getActiveCategories response structure:", responseData);
          return initialState;
        }

        return categoriesAdapter.setAll(initialState, categories);
      },
      providesTags: (result) =>
        result?.ids
          ? [
              ...result.ids.map((id) => ({ type: 'Category', id })),
              { type: 'Category', id: 'ACTIVE' },
            ]
          : [{ type: 'Category', id: 'ACTIVE' }],
    }),

    // Get featured categories
    getFeaturedCategories: builder.query({
      query: () => '/featured',
      transformResponse: (responseData) => {
        let categories = [];

        if (responseData?.success && Array.isArray(responseData.data)) {
          categories = responseData.data;
        } else {
          console.warn("Unexpected getFeaturedCategories response structure:", responseData);
          return initialState;
        }

        return categoriesAdapter.setAll(initialState, categories);
      },
      providesTags: (result) =>
        result?.ids
          ? [
              ...result.ids.map((id) => ({ type: 'Category', id })),
              { type: 'Category', id: 'FEATURED' },
            ]
          : [{ type: 'Category', id: 'FEATURED' }],
    }),

    // Get category by ID
    getCategoryById: builder.query({
      query: (id) => `/${id}`,
      transformResponse: (responseData) => {
        // Handle single category response: { success, data }
        if (responseData?.success && responseData.data) {
          return responseData.data;
        }
        console.warn("Unexpected getCategoryById response structure:", responseData);
        return null;
      },
      providesTags: (result, error, id) => [{ type: 'Category', id }],
    }),

    // Get category by slug
    getCategoryBySlug: builder.query({
      query: (slug) => `/slug/${slug}`,
      transformResponse: (responseData) => {
        // Handle single category response with subcategories and hierarchy
        if (responseData?.success && responseData.data) {
          return responseData.data;
        }
        console.warn("Unexpected getCategoryBySlug response structure:", responseData);
        return null;
      },
      providesTags: (result, error, slug) => [{ type: 'Category', id: slug }],
    }),

    // Get category hierarchy
    getCategoryHierarchy: builder.query({
      query: () => '/hierarchy/tree',
      transformResponse: (responseData) => {
        let hierarchy = [];

        if (responseData?.success && Array.isArray(responseData.data)) {
          hierarchy = responseData.data;
        } else {
          console.warn("Unexpected getCategoryHierarchy response structure:", responseData);
          return [];
        }

        return hierarchy;
      },
      providesTags: [{ type: 'Category', id: 'HIERARCHY' }],
    }),

    /** =========================
     *  Admin Endpoints
     *  ========================= */
    
    // Create new category
    createCategory: builder.mutation({
      query: (categoryData) => ({
        url: '/',
        method: 'POST',
        body: categoryData,
      }),
      invalidatesTags: [
        { type: 'Category', id: 'LIST' },
        { type: 'Category', id: 'ACTIVE' },
        { type: 'Category', id: 'FEATURED' },
        { type: 'Category', id: 'HIERARCHY' },
      ],
    }),

    // Update category
    updateCategory: builder.mutation({
      query: ({ id, ...categoryData }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: categoryData,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Category', id },
        { type: 'Category', id: 'LIST' },
        { type: 'Category', id: 'ACTIVE' },
        { type: 'Category', id: 'FEATURED' },
        { type: 'Category', id: 'HIERARCHY' },
      ],
    }),

    // Delete category
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Category', id },
        { type: 'Category', id: 'LIST' },
        { type: 'Category', id: 'ACTIVE' },
        { type: 'Category', id: 'FEATURED' },
        { type: 'Category', id: 'HIERARCHY' },
      ],
    }),

    // Bulk update display order
    bulkUpdateDisplayOrder: builder.mutation({
      query: (categories) => ({
        url: '/bulk/display-order',
        method: 'PUT',
        body: { categories },
      }),
      invalidatesTags: [
        { type: 'Category', id: 'LIST' },
        { type: 'Category', id: 'ACTIVE' },
        { type: 'Category', id: 'FEATURED' },
        { type: 'Category', id: 'HIERARCHY' },
      ],
    }),

    // Toggle category status
    toggleCategoryStatus: builder.mutation({
      query: (id) => ({
        url: `/${id}/toggle-status`,
        method: 'PATCH',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Category', id },
        { type: 'Category', id: 'LIST' },
        { type: 'Category', id: 'ACTIVE' },
        { type: 'Category', id: 'FEATURED' },
        { type: 'Category', id: 'HIERARCHY' },
      ],
    }),
  }),
});

// ================== HOOKS ================== //
export const {
  useGetAllCategoriesQuery,
  useGetActiveCategoriesQuery,
  useGetFeaturedCategoriesQuery,
  useGetCategoryByIdQuery,
  useGetCategoryBySlugQuery,
  useGetCategoryHierarchyQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useBulkUpdateDisplayOrderMutation,
  useToggleCategoryStatusMutation,
} = categoryApiSlice;

// ================== SELECTORS ================== //

// Query result selectors
const selectAllCategoriesResult = categoryApiSlice.endpoints.getAllCategories.select();
const selectActiveCategoriesResult = categoryApiSlice.endpoints.getActiveCategories.select();
const selectFeaturedCategoriesResult = categoryApiSlice.endpoints.getFeaturedCategories.select();

// Extract normalized data with fallbacks
const selectCategoriesData = createSelector(
  [selectAllCategoriesResult],
  (result) => result.data ?? initialState
);

const selectActiveCategoriesData = createSelector(
  [selectActiveCategoriesResult],
  (result) => result.data ?? initialState
);

const selectFeaturedCategoriesData = createSelector(
  [selectFeaturedCategoriesResult],
  (result) => result.data ?? initialState
);

// Entity selectors for normalized categories
export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
  selectEntities: selectCategoryEntities,
  selectTotal: selectTotalCategories,
} = categoriesAdapter.getSelectors((state) => selectCategoriesData(state));

// Pagination selectors
export const selectCategoriesPagination = createSelector(
  [selectCategoriesData],
  (data) => data.pagination
);

export const selectHasNextPage = createSelector(
  [selectCategoriesPagination],
  (pagination) => pagination?.hasNext ?? false
);

export const selectHasPrevPage = createSelector(
  [selectCategoriesPagination],
  (pagination) => pagination?.hasPrev ?? false
);

// Active categories selectors
export const {
  selectAll: selectAllActiveCategories,
  selectById: selectActiveCategoryById,
  selectIds: selectActiveCategoryIds,
  selectEntities: selectActiveCategoryEntities,
  selectTotal: selectTotalActiveCategories,
} = categoriesAdapter.getSelectors((state) => selectActiveCategoriesData(state));

// Featured categories selectors
export const {
  selectAll: selectAllFeaturedCategories,
  selectById: selectFeaturedCategoryById,
  selectIds: selectFeaturedCategoryIds,
  selectEntities: selectFeaturedCategoryEntities,
  selectTotal: selectTotalFeaturedCategories,
} = categoriesAdapter.getSelectors((state) => selectFeaturedCategoriesData(state));

// Specialized selectors
export const selectRootCategories = createSelector(
  [selectAllCategories],
  (categories) => categories.filter(category => !category.parentCategory)
);

export const selectSubcategories = createSelector(
  [selectAllCategories, (state, parentId) => parentId],
  (categories, parentId) => categories.filter(category => category.parentCategory === parentId)
);

export const selectCategoriesByParent = createSelector(
  [selectCategoryEntities, (state, parentId) => parentId],
  (entities, parentId) => Object.values(entities).filter(category => 
    category?.parentCategory === parentId
  )
);

export const selectCategoryTree = createSelector(
  [selectAllCategories],
  (categories) => {
    const buildTree = (parentId = null) => {
      return categories
        .filter(category => category.parentCategory === parentId)
        .map(category => ({
          ...category,
          children: buildTree(category._id)
        }));
    };
    return buildTree();
  }
);

// Memoized selectors for specific use cases
export const selectCategoryOptions = createSelector(
  [selectAllActiveCategories],
  (categories) => categories.map(category => ({
    value: category._id,
    label: category.title,
    slug: category.slug,
    parent: category.parentCategory
  }))
);

export const selectCategoryLookup = createSelector(
  [selectCategoryEntities],
  (entities) => Object.values(entities).reduce((lookup, category) => {
    if (category) {
      lookup[category._id] = category.title;
      lookup[category.slug] = category.title;
    }
    return lookup;
  }, {})
);