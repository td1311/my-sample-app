import { axiosBaseQuery } from './axiosBaseQuery';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery({ baseUrl: 'https://reqres.in/' }),
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/' }),
  endpoints: () => ({}),
})