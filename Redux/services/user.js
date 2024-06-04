import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = localStorage.getItem('token');

const baseUrl = "http://localhost:5000/";

export const allUsers = createApi({
  reducerPath: 'allUsers',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl,credentials: 'include', }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: `/user/`,
        method: 'GET',
        headers: {
          Authorization: `MASOUD__${token}`,
        },
      }),
      providesTags: ['Users']
    }),
    createUser: builder.mutation({
      query: requestData => ({
        url: `/user/`,
        method: 'POST',
        headers: {
          Authorization: `MASOUD__${token}`,
          
        },
        body: requestData,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation({
        query: requestData => ({
          url: `/user/${requestData}`,
          method: 'DELETE',
          headers: {
            Authorization: `MASOUD__${token}`,
            
          },
        }),
        invalidatesTags: ['Users'],
      })
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
} = allUsers;
