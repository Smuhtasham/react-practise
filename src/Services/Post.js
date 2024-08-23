import { createApi, fet, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://randomuser.me/api/?page=3&results=50&seed=abc",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: ``,
        method: "GET",
      }),
      
    }),
  }),
});

export const { useGetAllPostQuery } = postApi;
