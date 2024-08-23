import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://randomuser.me/api/",
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
