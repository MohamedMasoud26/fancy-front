import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("token");

const baseUrl = "http://localhost:5000/";

export const allRecents = createApi({
  reducerPath: "allRecents",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, credentials: "include" }),
  tagTypes: ["Recents"],
  endpoints: (builder) => ({
    getRecents: builder.query({
      query: () => ({
        url: `/recent/`,
        method: "GET",
      }),
      providesTags: ["Recents"],
    }),
    createRecent: builder.mutation({
      query: (requestData) => ({
        url: `/recent/`,
        method: "POST",

        body: requestData,
      }),
      invalidatesTags: ["Recents"],
    }),
    deleteRecent: builder.mutation({
      query: (requestData) => ({
        url: `/recent/${requestData}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Recents"],
    }),
  }),
});

export const {
  useGetRecentsQuery,
  useCreateRecentMutation,
  useDeleteRecentMutation,
} = allRecents;
